# Running the project's scripts

Written for "where do I actually type this". All of these run **on your own
computer**, in a terminal, inside the project folder — not in Vercel, not in
Search Console, not in the browser.

## One-time setup

1. **Install Node.js** (version 18 or newer) from https://nodejs.org — the LTS
   download. Check it worked:
   ```bash
   node --version
   ```
2. **Get the project folder.** If you do not already have it:
   ```bash
   git clone https://github.com/ankit-kumar-guptaa/recruitment-consultant.git
   cd recruitment-consultant
   git checkout claude/jolly-carson-ylw4ei
   ```
   If you already have it, just open it and pull the latest:
   ```bash
   cd path/to/recruitment-consultant
   git pull
   ```
3. `npm install` is **not** needed for the two scripts below — they use only
   what Node ships with. It is needed for `npm run dev` and `npm run build`.

Every command below is typed from inside the `recruitment-consultant` folder.

---

## `npm run indexnow` — push URLs to Bing, Yandex and Naver

```bash
npm run indexnow
```

Expected output:

```
IndexNow: 202 Accepted for 68 URLs
```

`200` or `202` both mean accepted — `202` means the key is still being
validated, which is normal the first few times.

**What it does:** reads the live `sitemap.xml`, and tells IndexNow that those
URLs are new or changed. Bing, Yandex, Naver and Seznam use it. **Google does
not participate in IndexNow**, so this does nothing for Google rankings — it is
worth running because Bing's index is what feeds Microsoft Copilot's citations.

**Submit only some pages:**

```bash
npm run indexnow -- /hire/accountant /faq
```

**When to run it:** after a deploy that added or meaningfully changed pages.
Not daily, and not on a schedule — repeated submission of unchanged URLs is
ignored at best.

**Requirements:** the site must be live, and the key file
`public/38edbd02d2ff095368ffe356a44aa040.txt` must be deployed with it —
IndexNow fetches that file to prove the submission is really from this site.

### Without a terminal at all

IndexNow also accepts a plain URL you can paste into a browser address bar, one
page at a time:

```
https://api.indexnow.org/indexnow?url=https://recruitmentconsultant.co.in/hire&key=38edbd02d2ff095368ffe356a44aa040
```

Swap the `url=` part for whichever page you want submitted. A blank page or
`200 OK` means accepted. Fine for one or two pages; use the script for all 68.

---

## `npm run check:canonical` — catch the domain mismatch that broke indexing

```bash
npm run check:canonical
```

Expected once the domain is configured correctly:

```
OK — https://recruitmentconsultant.co.in serves directly, and its canonical and sitemap agree.
```

If something is wrong it prints exactly what, for example:

```
Canonical origin mismatch (2):

  - https://www.recruitmentconsultant.co.in/ declares its canonical as
    https://recruitmentconsultant.co.in, a different origin. Google treats that
    as a contradiction and may stop indexing the site.
```

**When to run it:** after any change to the domain, DNS or the
`NEXT_PUBLIC_SITE_URL` environment variable — and right now, to confirm the
Vercel primary-domain fix in `docs/INDEXING-DIAGNOSIS.md` worked.

---

## `npm run db:test` / `npm run db:init` — the enquiry database

```bash
npm run db:init    # creates the enquiries table if it is missing
npm run db:test    # connects and reports; add -- --insert to prove writes work
```

Both need the `DB_*` values in `.env.local`, and Remote MySQL open on
Hostinger. See `docs/DATABASE-SETUP.md`.

**No terminal?** Everything these do can be done in the browser instead:
create the table by pasting `db/001-enquiries.sql` into phpMyAdmin's SQL tab,
and check the connection by opening
`https://recruitmentconsultant.co.in/api/health`.

---

## The ones you already know

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the site locally at http://localhost:3000 |
| `npm run build` | Production build — the same one Vercel runs |
| `npm run mail:test` | Sends a test enquiry through the configured SMTP account |

---

## If a command fails

| Message | Meaning |
| --- | --- |
| `command not found: npm` | Node.js is not installed — step 1 above |
| `Missing script: "indexnow"` | You are in the wrong folder, or on an older branch. `git pull` and check you are in `recruitment-consultant` |
| `No IndexNow key file found in public/` | Same — the branch is out of date |
| `sitemap.xml returned 404` | The site is not deployed, or `NEXT_PUBLIC_SITE_URL` points at the wrong host |
| `fetch failed` / `ENOTFOUND` | No internet, or the domain is not resolving |
