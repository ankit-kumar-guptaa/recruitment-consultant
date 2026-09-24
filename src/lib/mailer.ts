import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { siteConfig } from "./site";

export type Enquiry = {
  intent: "employer" | "jobseeker";
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  role: string;
  experience: string;
  message: string;
  receivedAt: string;
  sourcePage: string;
};

export type CvAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

/**
 * All mail settings come from the environment — nothing is hard-coded, so
 * credentials never end up in the repository. See .env.example.
 */
function readConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const to = process.env.MAIL_TO ?? siteConfig.email;
  const from = process.env.MAIL_FROM ?? user;

  if (!host || !user || !pass || !from) return null;

  return {
    host,
    port,
    // Port 465 is implicit TLS; 587 upgrades with STARTTLS.
    secure: port === 465,
    user,
    pass,
    to,
    from,
  };
}

let cached: Transporter | null = null;

function getTransport(config: NonNullable<ReturnType<typeof readConfig>>) {
  if (!cached) {
    cached = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.pass },
      // Hostinger can be slow to answer on a cold connection.
      connectionTimeout: 15_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return cached;
}

export function isMailConfigured() {
  return readConfig() !== null;
}

const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 14px;background:#f1f5f9;font:600 13px/1.4 Arial,sans-serif;color:#0b1220;white-space:nowrap;vertical-align:top">${esc(label)}</td>
    <td style="padding:8px 14px;font:400 14px/1.6 Arial,sans-serif;color:#334155">${esc(value).replace(/\n/g, "<br>")}</td>
  </tr>`;
}

function adminHtml(enquiry: Enquiry, hasCv: boolean) {
  const isEmployer = enquiry.intent === "employer";
  const heading = isEmployer
    ? "New hiring enquiry (employer)"
    : "New candidate profile (job seeker)";
  const accent = isEmployer ? "#0b3d91" : "#047857";

  return `<!doctype html><html><body style="margin:0;background:#f1f5f9;padding:24px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
    <tr><td style="background:${accent};padding:20px 24px">
      <div style="font:700 19px/1.3 Arial,sans-serif;color:#ffffff">${heading}</div>
      <div style="font:400 13px/1.5 Arial,sans-serif;color:#dbe7fe;margin-top:4px">${esc(siteConfig.domain)} · ${esc(enquiry.receivedAt)}</div>
    </td></tr>
    <tr><td style="padding:20px 24px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px">
        ${row("Name", enquiry.name)}
        ${row("Email", enquiry.email)}
        ${row("Phone", enquiry.phone)}
        ${row(isEmployer ? "Company" : "Current employer", enquiry.company)}
        ${row("Industry", enquiry.industry)}
        ${row(isEmployer ? "Positions to fill" : "Experience", isEmployer ? enquiry.role : enquiry.experience)}
        ${row("Message", enquiry.message)}
        ${row("CV attached", hasCv ? "Yes — see attachment" : "No")}
        ${row("Submitted from", enquiry.sourcePage)}
      </table>
      <p style="margin:18px 0 0;font:400 13px/1.6 Arial,sans-serif;color:#64748b">
        Reply directly to this email to reach ${esc(enquiry.name)}.
      </p>
    </td></tr>
  </table></body></html>`;
}

function adminText(enquiry: Enquiry, hasCv: boolean) {
  const isEmployer = enquiry.intent === "employer";
  return [
    isEmployer ? "NEW HIRING ENQUIRY (EMPLOYER)" : "NEW CANDIDATE PROFILE (JOB SEEKER)",
    `Received: ${enquiry.receivedAt}`,
    "",
    `Name:     ${enquiry.name}`,
    `Email:    ${enquiry.email}`,
    `Phone:    ${enquiry.phone}`,
    `${isEmployer ? "Company:  " : "Employer: "}${enquiry.company || "-"}`,
    `Industry: ${enquiry.industry || "-"}`,
    `${isEmployer ? "Roles:    " : "Exp:      "}${(isEmployer ? enquiry.role : enquiry.experience) || "-"}`,
    `CV:       ${hasCv ? "attached" : "not attached"}`,
    `Page:     ${enquiry.sourcePage}`,
    "",
    "Message:",
    enquiry.message || "-",
  ].join("\n");
}

function ackHtml(enquiry: Enquiry) {
  const isEmployer = enquiry.intent === "employer";
  return `<!doctype html><html><body style="margin:0;background:#f1f5f9;padding:24px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
    <tr><td style="background:#0b3d91;padding:22px 24px">
      <div style="font:700 19px/1.3 Arial,sans-serif;color:#ffffff">${esc(siteConfig.name)}</div>
      <div style="font:400 12px/1.5 Arial,sans-serif;color:#bfd4fd;letter-spacing:1px;margin-top:2px">${esc(siteConfig.tagline.toUpperCase())}</div>
    </td></tr>
    <tr><td style="padding:24px">
      <p style="margin:0 0 14px;font:400 15px/1.7 Arial,sans-serif;color:#0b1220">Hi ${esc(enquiry.name.split(" ")[0] || enquiry.name)},</p>
      <p style="margin:0 0 14px;font:400 15px/1.7 Arial,sans-serif;color:#334155">
        ${
          isEmployer
            ? "Thanks for getting in touch. We have received your hiring requirement and a consultant will contact you within one working day with next steps and a realistic timeline."
            : "Thanks for sharing your profile. Our team will review it and get in touch when we have an opening that genuinely matches what you are looking for."
        }
      </p>
      ${
        isEmployer
          ? `<p style="margin:0 0 14px;font:400 15px/1.7 Arial,sans-serif;color:#334155">There is no upfront fee — on permanent roles you are invoiced only after your chosen candidate joins, and every placement carries a 90-day replacement guarantee.</p>`
          : `<p style="margin:0 0 14px;font:400 15px/1.7 Arial,sans-serif;color:#334155"><strong>Our services are always free for candidates.</strong> We are paid by the hiring company, so nobody should ever ask you for money in our name.</p>`
      }
      <p style="margin:0;font:400 15px/1.7 Arial,sans-serif;color:#334155">
        Need anything sooner? Just reply to this email.
      </p>
      <p style="margin:22px 0 0;font:400 13px/1.6 Arial,sans-serif;color:#64748b">
        — Team ${esc(siteConfig.name)}<br>${esc(siteConfig.url.replace(/^https?:\/\//, ""))}
      </p>
    </td></tr>
  </table></body></html>`;
}

export type SendResult =
  | { sent: true }
  | { sent: false; reason: "not-configured" | "send-failed"; error?: string };

/**
 * Sends the lead to the admin inbox and an acknowledgement to the sender.
 * The admin mail is what matters — if the acknowledgement fails we still
 * report success, because the lead has already been delivered.
 */
export async function sendEnquiry(
  enquiry: Enquiry,
  cv?: CvAttachment,
): Promise<SendResult> {
  const config = readConfig();
  if (!config) return { sent: false, reason: "not-configured" };

  const transport = getTransport(config);
  const isEmployer = enquiry.intent === "employer";
  const subject = isEmployer
    ? `New hiring enquiry — ${enquiry.company || enquiry.name}${enquiry.role ? ` (${enquiry.role})` : ""}`
    : `New candidate — ${enquiry.name}${enquiry.experience ? ` (${enquiry.experience})` : ""}`;

  try {
    await transport.sendMail({
      from: `"${siteConfig.name} Website" <${config.from}>`,
      to: config.to,
      replyTo: `"${enquiry.name}" <${enquiry.email}>`,
      subject,
      text: adminText(enquiry, Boolean(cv)),
      html: adminHtml(enquiry, Boolean(cv)),
      attachments: cv
        ? [{ filename: cv.filename, content: cv.content, contentType: cv.contentType }]
        : undefined,
    });
  } catch (error) {
    return {
      sent: false,
      reason: "send-failed",
      error: error instanceof Error ? error.message : String(error),
    };
  }

  // Best effort — a failed acknowledgement must not fail the submission.
  try {
    await transport.sendMail({
      from: `"${siteConfig.name}" <${config.from}>`,
      to: enquiry.email,
      subject: isEmployer
        ? `We have your requirement — ${siteConfig.name}`
        : `We have your profile — ${siteConfig.name}`,
      html: ackHtml(enquiry),
      text: `Hi ${enquiry.name},\n\n${
        isEmployer
          ? "Thanks for getting in touch. We have received your hiring requirement and a consultant will contact you within one working day."
          : "Thanks for sharing your profile. Our team will review it and get in touch when we have a matching opening. Our services are always free for candidates."
      }\n\n— Team ${siteConfig.name}\n${siteConfig.url}`,
    });
  } catch (error) {
    console.warn("[enquiry] acknowledgement email failed:", error);
  }

  return { sent: true };
}
