import "server-only";
import mysql from "mysql2/promise";

/**
 * MySQL access for enquiry storage.
 *
 * The database is optional by design: if it is not configured, or it is down,
 * the enquiry route still accepts the lead and still emails it. Losing a lead
 * because a database was unreachable would be a worse failure than not having
 * the database at all.
 */

const DB_HOST = process.env.DB_HOST ?? "";
const DB_PORT = Number(process.env.DB_PORT ?? 3306);
const DB_NAME = process.env.DB_NAME ?? "";
const DB_USER = process.env.DB_USER ?? "";
const DB_PASS = process.env.DB_PASS ?? "";

export const isDatabaseConfigured = Boolean(
  DB_HOST && DB_NAME && DB_USER && DB_PASS,
);

/**
 * One pool per warm serverless instance.
 *
 * Next.js reloads modules in development, so the pool is parked on globalThis
 * to stop every hot reload opening another one and exhausting the host's
 * connection limit. `connectionLimit` is deliberately small: shared hosting
 * allows few concurrent connections, and many lambdas each holding a large
 * pool is the usual way that limit gets hit.
 */
const globalForDb = globalThis as unknown as { enquiryPool?: mysql.Pool };

function getPool(): mysql.Pool {
  if (!globalForDb.enquiryPool) {
    globalForDb.enquiryPool = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASS,
      waitForConnections: true,
      connectionLimit: 3,
      maxIdle: 1,
      idleTimeout: 30_000,
      // Without this the request hangs on the OS TCP timeout when the host is
      // unreachable — which, on Hostinger, is what happens until Remote MySQL
      // is enabled for the connecting IP.
      connectTimeout: 5_000,
      charset: "utf8mb4_unicode_ci",
      timezone: "Z",
    });
  }
  return globalForDb.enquiryPool;
}

export type EnquiryRecord = {
  intent: "employer" | "jobseeker";
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  role: string;
  experience: string;
  message: string;
  cvFilename: string | null;
  cvSizeBytes: number | null;
  sourcePage: string | null;
  userAgent: string | null;
};

/**
 * Inserts an enquiry and returns its id, or null if the database is not
 * configured or the insert failed. Never throws: the caller must be able to
 * carry on and send the email regardless.
 */
const DB_BUDGET_MS = 6_000;

/** Resolves to null if the work has not finished within the budget. */
function withBudget<T>(work: Promise<T>, label: string): Promise<T | null> {
  return Promise.race([
    work,
    new Promise<null>((resolve) =>
      setTimeout(() => {
        console.error(`[db] ${label} exceeded ${DB_BUDGET_MS}ms — giving up.`);
        resolve(null);
      }, DB_BUDGET_MS),
    ),
  ]);
}

export async function saveEnquiry(
  record: EnquiryRecord,
): Promise<number | null> {
  if (!isDatabaseConfigured) return null;

  try {
    const query = getPool().execute<mysql.ResultSetHeader>(
      `INSERT INTO enquiries
         (intent, name, email, phone, company, industry, \`role\`,
          experience, message, cv_filename, cv_size_bytes, source_page,
          user_agent, mail_status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        record.intent,
        record.name,
        record.email,
        record.phone,
        record.company || null,
        record.industry || null,
        record.role || null,
        record.experience || null,
        record.message || null,
        record.cvFilename,
        record.cvSizeBytes,
        record.sourcePage,
        record.userAgent,
      ],
    );
    const settled = await withBudget(query, "enquiry insert");
    return settled ? settled[0].insertId : null;
  } catch (error) {
    // Logged, not thrown — see the note at the top of this file.
    console.error("[db] enquiry insert failed:", error);
    return null;
  }
}

/** Records whether the notification email actually went out. */
export async function markEnquiryMailStatus(
  id: number | null,
  status: "sent" | "failed",
): Promise<void> {
  if (!id || !isDatabaseConfigured) return;

  try {
    await withBudget(
      getPool().execute("UPDATE enquiries SET mail_status = ? WHERE id = ?", [
        status,
        id,
      ]),
      "mail status update",
    );
  } catch (error) {
    console.error("[db] mail status update failed:", error);
  }
}
