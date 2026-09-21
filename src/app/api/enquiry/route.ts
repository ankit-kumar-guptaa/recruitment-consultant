import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = Record<string, unknown>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden fields, humans do not.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    intent: body.intent === "jobseeker" ? "jobseeker" : "employer",
    name: str(body.name, 120),
    email: str(body.email, 160),
    phone: str(body.phone, 30),
    company: str(body.company, 160),
    industry: str(body.industry, 120),
    role: str(body.role, 200),
    message: str(body.message, 2000),
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name || !enquiry.phone || !EMAIL_RE.test(enquiry.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name, phone number and email." },
      { status: 422 },
    );
  }

  // TODO: connect a real destination — transactional email (Resend/SendGrid),
  // a CRM/ATS webhook, or a database insert. Until then the lead is logged so
  // nothing is silently dropped in development.
  console.info("[enquiry]", enquiry);

  return NextResponse.json({ ok: true });
}
