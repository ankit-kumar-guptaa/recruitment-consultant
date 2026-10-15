import "server-only";
import { NextResponse } from "next/server";
import { checkDatabase, isDatabaseConfigured } from "@/lib/db";

/**
 * Serves /api/health — a browser-visitable status check.
 *
 * This exists because the people running this site work in dashboards, not in
 * a terminal: without it, "is the database actually connected?" can only be
 * answered by running a script locally. Visiting this URL answers it.
 *
 * It deliberately reports only coarse status. No hostname, no database name,
 * no username, no driver error text — those would tell an attacker which
 * service to aim at and how it is failing. The detail stays in the server
 * logs, which is where it belongs.
 */
export const dynamic = "force-dynamic";
export const maxDuration = 15;

export async function GET() {
  const mailConfigured = Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_TO,
  );

  const database = isDatabaseConfigured
    ? await checkDatabase()
    : ("not_configured" as const);

  // "ok" means a form submission would be stored AND emailed right now.
  const ok = database === "ok" && mailConfigured;

  return NextResponse.json(
    {
      ok,
      database,
      mail: mailConfigured ? "configured" : "not_configured",
      checkedAt: new Date().toISOString(),
    },
    {
      status: ok ? 200 : 503,
      headers: { "cache-control": "no-store" },
    },
  );
}
