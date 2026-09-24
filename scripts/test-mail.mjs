/**
 * Verifies the SMTP settings in .env.local and sends one test email.
 *
 *   npm run mail:test
 *
 * Run it from the machine or server that will host the site — SMTP ports are
 * often blocked on laptops, office networks and CI runners.
 */
import { readFileSync } from "node:fs";
import nodemailer from "nodemailer";

function loadEnvLocal() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    console.log("No .env.local found — falling back to the shell environment.\n");
  }
}

loadEnvLocal();

const { SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);

const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_TO"].filter(
  (key) => !process.env[key],
);
if (missing.length) {
  console.error(`Missing: ${missing.join(", ")}\nCopy .env.example to .env.local and fill it in.`);
  process.exit(1);
}

console.log(`Host : ${SMTP_HOST}:${SMTP_PORT} (secure: ${SMTP_PORT === 465})`);
console.log(`User : ${SMTP_USER}`);
console.log(`From : ${MAIL_FROM ?? SMTP_USER}`);
console.log(`To   : ${MAIL_TO}\n`);

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 15_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
});

try {
  await transport.verify();
  console.log("✓ Connected and authenticated");
} catch (error) {
  console.error("✗ Could not connect or authenticate:", error.message);
  console.error(
    "\nUsual causes: wrong password, port 465 vs 587 mismatch, or outbound SMTP blocked on this network.",
  );
  process.exit(1);
}

try {
  const info = await transport.sendMail({
    from: `"Recruitment Consultant Website" <${MAIL_FROM ?? SMTP_USER}>`,
    to: MAIL_TO,
    subject: "SMTP test — Recruitment Consultant website",
    text: "If you are reading this, enquiry and CV delivery will work.",
    html: `<p style="font:400 15px/1.6 Arial,sans-serif">If you are reading this, enquiry and CV delivery will work.</p>`,
  });
  console.log(`✓ Test email sent (id: ${info.messageId})`);
  console.log(`  Check the inbox — and the spam folder — for ${MAIL_TO}`);
} catch (error) {
  console.error("✗ Send failed:", error.message);
  process.exit(1);
}
