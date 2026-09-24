import { NextResponse } from "next/server";
import {
  isMailConfigured,
  sendEnquiry,
  type CvAttachment,
  type Enquiry,
} from "@/lib/mailer";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Keep in sync with the limits in components/ui/EnquiryForm.tsx */
const CV_MAX_BYTES = 5 * 1024 * 1024;
const CV_EXTENSIONS = [".pdf", ".doc", ".docx", ".rtf", ".odt"];
const CV_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".rtf": "application/rtf",
  ".odt": "application/vnd.oasis.opendocument.text",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(value: FormDataEntryValue | null, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Strip directory parts and anything that is not safe in a filename. */
function safeFilename(name: string) {
  const base = name.split(/[\\/]/).pop() ?? "cv";
  return base.replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 120) || "cv";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden fields, humans do not.
  if (str(form.get("website"))) {
    return NextResponse.json({ ok: true });
  }

  const enquiry: Enquiry = {
    intent: form.get("intent") === "jobseeker" ? "jobseeker" : "employer",
    name: str(form.get("name"), 120),
    email: str(form.get("email"), 160),
    phone: str(form.get("phone"), 30),
    company: str(form.get("company"), 160),
    industry: str(form.get("industry"), 120),
    role: str(form.get("role"), 200),
    experience: str(form.get("experience"), 60),
    message: str(form.get("message"), 2000),
    receivedAt: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    sourcePage: request.headers.get("referer") ?? siteConfig.url,
  };

  if (!enquiry.name || !enquiry.phone || !EMAIL_RE.test(enquiry.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name, phone number and email." },
      { status: 422 },
    );
  }

  // ---------- CV attachment (job seekers only) ----------
  let cv: CvAttachment | undefined;
  const file = form.get("cv");

  if (enquiry.intent === "jobseeker" && file instanceof File && file.size > 0) {
    const filename = safeFilename(file.name);
    const extension = filename.slice(filename.lastIndexOf(".")).toLowerCase();

    if (!CV_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { ok: false, error: "Please attach a PDF, DOC, DOCX, RTF or ODT file." },
        { status: 415 },
      );
    }
    if (file.size > CV_MAX_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Your CV is larger than 5 MB. Please upload a smaller file." },
        { status: 413 },
      );
    }

    cv = {
      filename: `${enquiry.name.replace(/[^A-Za-z0-9]+/g, "-")}-CV${extension}`,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: CV_TYPES[extension] ?? "application/octet-stream",
    };
  }

  // Always log the lead before attempting delivery, so a mail outage can never
  // lose it silently — the record is in the server logs either way.
  console.info("[enquiry]", { ...enquiry, cv: cv ? cv.filename : null });

  if (!isMailConfigured()) {
    console.warn(
      "[enquiry] SMTP is not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS and MAIL_TO. Lead logged only.",
    );
    return NextResponse.json({ ok: true });
  }

  const result = await sendEnquiry(enquiry, cv);

  if (!result.sent) {
    console.error("[enquiry] delivery failed:", result);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your request just now. Please email us directly at ${siteConfig.email}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
