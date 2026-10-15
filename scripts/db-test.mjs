#!/usr/bin/env node
/**
 * Check — and optionally set up — the enquiry database.
 *
 *   node scripts/db-test.mjs            connect, verify the table, show counts
 *   node scripts/db-test.mjs --init     also create the table if it is missing
 *   node scripts/db-test.mjs --insert   also write and delete a test row
 *
 * Reads DB_HOST / DB_PORT / DB_NAME / DB_USER / DB_PASS from .env.local.
 */
import { readFileSync } from "node:fs";
import mysql from "mysql2/promise";

try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  console.log("(no .env.local found — using the environment as-is)\n");
}

const cfg = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectTimeout: 10_000,
  multipleStatements: false,
};

for (const k of ["host", "database", "user", "password"]) {
  if (!cfg[k]) {
    console.error(`Missing DB_${k.toUpperCase()} — check .env.local`);
    process.exit(1);
  }
}

/**
 * On Hostinger every database and user carries an account prefix like
 * u141142577_. Leaving it off is the most common setup mistake, and the error
 * MySQL returns ("Unknown database") does not mention it, so say so here.
 */
const HOSTINGER_PREFIX = /^u\d+_/;
function prefixHint(value, label) {
  if (cfg.host?.includes("hstgr") && !HOSTINGER_PREFIX.test(value)) {
    return (
      `\nThe ${label} "${value}" has no Hostinger account prefix. In hPanel the\n` +
      `real name looks like u141142577_${value}. Check hPanel -> Databases ->\n` +
      `Management, which lists the full names, and use those exactly.`
    );
  }
  return "";
}

console.log(`Connecting to ${cfg.user}@${cfg.host}:${cfg.port}/${cfg.database} ...`);

let conn;
try {
  conn = await mysql.createConnection(cfg);
} catch (e) {
  console.error(`\nFAILED: ${e.code ?? e.message}`);
  switch (e.code) {
    case "ER_BAD_DB_ERROR":
      console.error(
        `\nThe server is reachable and the login worked, but there is no database\n` +
          `named "${cfg.database}".${prefixHint(cfg.database, "database name")}`,
      );
      break;
    case "ER_ACCESS_DENIED_ERROR":
      console.error(
        `\nThe server is reachable but rejected the username or password.` +
          prefixHint(cfg.user, "username") +
          `\nIf the name is right, reset the password in hPanel -> Databases and\n` +
          `update DB_PASS here and in Vercel.`,
      );
      break;
    case "ETIMEDOUT":
    case "ECONNREFUSED":
      console.error(
        "\nThe host did not accept the connection at all. On Hostinger this is\n" +
          "almost always Remote MySQL: hPanel -> Databases -> Remote MySQL ->\n" +
          "tick 'Any host' for this database. Until that is done, nothing\n" +
          "outside Hostinger's own servers can connect.",
      );
      break;
    case "ENOTFOUND":
      console.error(`\nThe hostname "${cfg.host}" did not resolve. Check DB_HOST.`);
      break;
  }
  process.exit(1);
}

console.log("Connected.\n");

const [tables] = await conn.query("SHOW TABLES LIKE 'enquiries'");

if (tables.length === 0) {
  if (!process.argv.includes("--init")) {
    console.error(
      "Table `enquiries` does not exist.\n\n" +
        "Create it either way:\n" +
        "  - run this again as:  npm run db:test -- --init\n" +
        "  - or paste db/001-enquiries.sql into phpMyAdmin's SQL tab",
    );
    await conn.end();
    process.exit(1);
  }

  console.log("Table `enquiries` is missing — creating it from db/001-enquiries.sql ...");
  const sql = readFileSync("db/001-enquiries.sql", "utf8");
  // One statement in the file, but strip comments so a stray ; in a comment
  // cannot split it.
  const statement = sql
    .split("\n")
    .filter((l) => !l.trim().startsWith("--"))
    .join("\n")
    .trim()
    .replace(/;\s*$/, "");
  await conn.query(statement);
  console.log("Created.\n");
} else {
  console.log("Table `enquiries` exists.");
}

const [[counts]] = await conn.query(
  `SELECT COUNT(*) AS total,
          SUM(intent = 'employer')   AS employers,
          SUM(intent = 'jobseeker')  AS jobseekers,
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
  console.log(`\nInserted test row id ${res.insertId} — deleting it again ...`);
  await conn.execute("DELETE FROM enquiries WHERE id = ?", [res.insertId]);
  console.log("Deleted. Writes work.");
}

await conn.end();
console.log("\nOK.");
