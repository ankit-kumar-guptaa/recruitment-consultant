#!/usr/bin/env node
/**
 * Check the database connection and that the enquiries table is usable.
 *
 *   node scripts/db-test.mjs            # connect, verify the table, show counts
 *   node scripts/db-test.mjs --insert   # also write and delete a test row
 *
 * Reads DB_HOST / DB_PORT / DB_NAME / DB_USER / DB_PASS from .env.local.
 */
import { readFileSync } from "node:fs";
import mysql from "mysql2/promise";

// Plain node does not read .env.local, so load it here.
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  console.log("(no .env.local found — using the environment as-is)");
}

const cfg = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectTimeout: 10_000,
};

for (const k of ["host", "database", "user", "password"]) {
  if (!cfg[k]) {
    console.error(`Missing DB_${k.toUpperCase()} — check .env.local`);
    process.exit(1);
  }
}

console.log(`Connecting to ${cfg.user}@${cfg.host}:${cfg.port}/${cfg.database} ...`);

let conn;
try {
  conn = await mysql.createConnection(cfg);
} catch (e) {
  console.error(`\nFAILED: ${e.code ?? e.message}`);
  if (e.code === "ETIMEDOUT" || e.code === "ECONNREFUSED") {
    console.error(
      "\nThe host did not accept the connection. On Hostinger this is almost\n" +
        "always Remote MySQL: hPanel -> Databases -> Remote MySQL -> add the\n" +
        "connecting IP, or tick 'Any host' (%) for the rc_db database.",
    );
  }
  if (e.code === "ER_ACCESS_DENIED_ERROR") {
    console.error("\nHost reachable, but the username or password was rejected.");
  }
  process.exit(1);
}

console.log("Connected.\n");

const [tables] = await conn.query("SHOW TABLES LIKE 'enquiries'");
if (tables.length === 0) {
  console.error("Table `enquiries` does not exist. Run db/001-enquiries.sql first.");
  await conn.end();
  process.exit(1);
}
console.log("Table `enquiries` exists.");

const [[counts]] = await conn.query(
  `SELECT COUNT(*) AS total,
          SUM(intent = 'employer')  AS employers,
          SUM(intent = 'jobseeker') AS jobseekers,
          SUM(mail_status <> 'sent') AS mail_not_sent
   FROM enquiries`,
);
console.log(
  `Rows: ${counts.total} total — ${counts.employers ?? 0} employer, ` +
    `${counts.jobseekers ?? 0} job seeker, ${counts.mail_not_sent ?? 0} with mail not sent.`,
);

if (process.argv.includes("--insert")) {
  const [res] = await conn.execute(
    `INSERT INTO enquiries (intent, name, email, phone, message, source_page, mail_status)
     VALUES ('employer', 'DB test', 'dbtest@example.com', '0000000000',
             'Inserted by scripts/db-test.mjs', '/db-test', 'sent')`,
  );
  console.log(`\nInserted test row id ${res.insertId} — deleting it again...`);
  await conn.execute("DELETE FROM enquiries WHERE id = ?", [res.insertId]);
  console.log("Deleted. Writes work.");
}

await conn.end();
console.log("\nOK.");
