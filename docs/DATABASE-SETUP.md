# Database setup — saving every enquiry

Every form submission is now written to MySQL **as well as** emailed. Three
steps, in this order.

---

## Step 1 — create the table

hPanel → **Databases → phpMyAdmin** → open `rc_db` → **SQL** tab → paste the
whole of `db/001-enquiries.sql` → **Go**.

It creates one table, `enquiries`. It is safe to re-run — it only creates the
table if it is not already there.

---

## Step 2 — enable Remote MySQL ⚠️ this is the one people miss

The site runs on Vercel, which is a different machine from the Hostinger
database. **By default Hostinger refuses every connection from outside its own
servers**, so without this step the site will simply never reach the database —
it will keep emailing leads and silently log a timeout.

hPanel → **Databases → Remote MySQL**:

- Database: `rc_db`
- Host / IP: **tick "Any host"**, which stores `%`

Vercel does not publish fixed outbound IP addresses on the normal plans, so an
IP allowlist is not an option — it would break the moment Vercel moved the
function.

**What "Any host" actually means:** anyone who has the username and password
can connect from anywhere. The password is therefore the only thing protecting
the data. So:

- Use a long random password, not a memorable one.
- **The password shared in chat should be changed** — chat transcripts are
  stored, and once this is open to any host, that password is the whole lock.
  hPanel → Databases → the user → Change password, then update the environment
  variables in step 3.
- The `rc_db` user only needs access to `rc_db`. Do not give it rights over
  other databases.

---

## Step 3 — set the environment variables

**Vercel** → the project → **Settings → Environment Variables**. Add five, for
Production (and Preview if you want the preview deployments writing too —
usually you do not):

| Name | Value |
| --- | --- |
| `DB_HOST` | `srv1086.hstgr.io` |
| `DB_PORT` | `3306` |
| `DB_NAME` | `rc_db` |
| `DB_USER` | `rc_db` |
| `DB_PASS` | *(the password, after you have changed it)* |

Then **redeploy** — environment variables are read at deploy time, so an
existing deployment will not pick them up.

For local development the same five go in `.env.local`. They are already there
on this machine, and `.env.local` is gitignored so they are never committed.

---

## Step 4 — check it works

```bash
npm run db:test
```

Expected:

```
Connecting to rc_db@srv1086.hstgr.io:3306/rc_db ...
Connected.

Table `enquiries` exists.
Rows: 0 total — 0 employer, 0 job seeker, 0 with mail not sent.

OK.
```

To prove writes work as well as reads (it inserts a row and deletes it again):

```bash
npm run db:test -- --insert
```

If it fails, the script says what to do:

| Error | Cause |
| --- | --- |
| `ETIMEDOUT` / `ECONNREFUSED` | Step 2 not done — Remote MySQL is not open to this machine |
| `ER_ACCESS_DENIED_ERROR` | Wrong username or password |
| `Table enquiries does not exist` | Step 1 not done |

Then submit the form on the live site once and run `npm run db:test` again —
the row count should go up.

---

## How it behaves

The database is **optional on purpose**. The order inside `/api/enquiry` is:

1. Validate the submission.
2. **Write the row** (status `pending`).
3. Send the email.
4. Update the row to `sent` or `failed`.

The consequences of that order:

- **Database down → the lead is still emailed.** The insert is capped at six
  seconds and failure is logged, not thrown.
- **Email down → the lead is still in the database**, marked `failed`. Nothing
  is lost; `db/queries.sql` has the query that lists those so they can be
  chased by hand.
- **Neither configured → the form still works** and the lead is written to the
  server log. This is the state the site has been in until now.

A lead is never rejected because a backend service was unavailable.

---

## What is stored

| Column | Notes |
| --- | --- |
| `intent` | `employer` or `jobseeker` — which side of the form switch |
| `name`, `email`, `phone` | Always present; the form rejects a submission without them |
| `company` | Employer: their company. Job seeker: last employer |
| `industry`, `role`, `experience`, `message` | As submitted; `role` is employer-only, `experience` job-seeker-only |
| `cv_filename`, `cv_size_bytes` | **The CV file itself is not stored** — it is emailed as an attachment. A shared-hosting database is the wrong place for binaries, and storing CVs brings data-protection duties nobody here is set up for. These two columns let you match a row to its email |
| `source_page` | **The page the visitor was on when they submitted.** This is the number worth watching — it tells you which of the 68 pages actually produce leads |
| `user_agent` | Truncated to 255 characters, for spotting bot submissions |
| `mail_status` | `pending`, `sent` or `failed` |

The visitor's IP address is deliberately **not** stored. It adds a data
protection obligation and answers nothing `source_page` and `user_agent` do not.

---

## Reading the data

`db/queries.sql` has ready-made queries for phpMyAdmin's SQL tab — recent
leads, today's leads, employer-only, failed emails, leads per day, and the
lead-by-page breakdown.

The one to run first, once leads start arriving:

```sql
SELECT COALESCE(source_page, '(not recorded)') AS page,
       COUNT(*)                                AS leads,
       SUM(intent = 'employer')                AS employer_leads
FROM enquiries
GROUP BY page
ORDER BY leads DESC;
```

That is the answer to "is the SEO work paying off", by page, from real data
rather than from rankings.
