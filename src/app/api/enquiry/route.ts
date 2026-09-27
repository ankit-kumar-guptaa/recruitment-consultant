import "server-only";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// -- Config from environment
const SMTP_HOST = process.env.SMTP_HOST ?? "";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? "";
const SMTP_PASS = process.env.SMTP_PASS ?? "";
const MAIL_FROM = process.env.MAIL_FROM ?? SMTP_USER;
const MAIL_TO   = process.env.MAIL_TO   ?? "";

const CV_MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/rtf",
  "text/rtf",
  "application/vnd.oasis.opendocument.text",
]);

function str(fd: FormData, key: string, max = 2000) {
  return String(fd.get(key) ?? "").trim().slice(0, max);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data." }, { status: 400 });
  }

  // Honeypot
  if (str(fd, "website")) {
    return NextResponse.json({ ok: true });
  }

  const intent   = str(fd, "intent") === "jobseeker" ? "jobseeker" : "employer";
  const name     = str(fd, "name",     120);
  const email    = str(fd, "email",    160);
  const phone    = str(fd, "phone",    30);
  const company  = str(fd, "company",  200);
  const industry = str(fd, "industry", 100);
  const role     = str(fd, "role",     300);
  const experience = str(fd, "experience", 50);
  const message  = str(fd, "message",  2000);

  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "Name, email and phone are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  const attachments: nodemailer.SendMailOptions["attachments"] = [];
  if (intent === "jobseeker") {
    const cvFile = fd.get("cv");
    if (cvFile && cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > CV_MAX_BYTES) {
        return NextResponse.json({ ok: false, error: "CV must be under 5 MB." }, { status: 422 });
      }
      if (!ALLOWED_CV_TYPES.has(cvFile.type)) {
        return NextResponse.json({ ok: false, error: "CV must be a PDF, DOC, DOCX, RTF or ODT file." }, { status: 422 });
      }
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({ filename: cvFile.name, content: buffer, contentType: cvFile.type });
    }
  }

  const label   = intent === "employer" ? "Employer Enquiry" : "Job Seeker Profile";
  const subject = `[RecruitmentConsultant] ${label} - ${name}`;

  const rows =
    intent === "employer"
      ? [
          ["Intent",   "Employer (looking for candidates)"],
          ["Name",     name],
          ["Email",    email],
          ["Phone",    phone],
          ["Company",  company],
          ["Industry", industry],
          ["Roles",    role],
          ["Message",  message],
        ]
      : [
          ["Intent",              "Job Seeker (looking for a job)"],
          ["Name",                name],
          ["Email",               email],
          ["Phone",               phone],
          ["Last employer",       company],
          ["Industry",            industry],
          ["Experience",          experience],
          ["Role & location",     message],
        ];

  const tableRows = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;white-space:nowrap;color:#374151">${k}</td><td style="padding:6px 12px;color:#111827">${v}</td></tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family:sans-serif;background:#f9fafb;margin:0;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
    <div style="background:#1e3a5f;padding:20px 24px">
      <h1 style="margin:0;font-size:18px;color:#ffffff">New ${label}</h1>
      <p style="margin:4px 0 0;font-size:13px;color:#93c5fd">RecruitmentConsultant.co.in</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${tableRows}</table>
    ${attachments.length ? `<p style="padding:12px 24px;font-size:13px;color:#6b7280">CV attached: ${attachments[0].filename}</p>` : ""}
  </div>
</body>
</html>`;

  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host:   SMTP_HOST,
      port:   SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth:   { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from:        `"RecruitmentConsultant.co.in" <${MAIL_FROM}>`,
      replyTo:     `"${name}" <${email}>`,
      to:          MAIL_TO,
      subject,
      text,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] mail send failed:", err);
    return NextResponse.json(
      { ok: false, error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
