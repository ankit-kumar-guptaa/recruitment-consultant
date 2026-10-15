# Indexing diagnosis — 15 October 2026

Search Console report of 12 Oct 2026, with what has been fixed in code and what
only you can check.

| Reason | Pages | Source | Verdict |
| --- | --- | --- | --- |
| Discovered – currently not indexed | 56 | Google systems | **Root cause found** — every sitemap URL redirects. See §3. Two secondary causes also fixed in code, §1 |
| Redirect error | 9 | Website | **Root cause found: apex/www mismatch.** One setting in Vercel — see §3 |
| Crawled – currently not indexed | 5 | Google systems | Normal for a new domain — see §2 |
| Page with redirect | 1 | Website | Same cause as the redirect errors — see §3 |
| Blocked due to other 4xx issue | 1 | Website | Needs one URL Inspection — see §3 |

> **One sentence version:** the site serves on `www.recruitmentconsultant.co.in`
> but tells Google its canonical address is `recruitmentconsultant.co.in`, which
> only redirects to www. Every sitemap URL therefore redirects, and every page
> claims a canonical that redirects back to it. Fix is one setting in Vercel — §3.

---

## 1. "Discovered – currently not indexed" (56 pages) — the main one

Every example URL shows **Last crawled: N/A**. That is the important detail:
Google has *found* these URLs in the sitemap but has **never fetched a single
one**. So this is not a content-quality judgement — Google has not read the
content. It is a crawl-priority decision.

Two causes, and we were responsible for one of them.

### Cause A — internal linking was too weak (fixed)

Measured on the actual rendered pages before this change: **all 17 `/hire` URLs
were reachable only from the site-wide footer.** No page's main content linked
to them. Footer links that appear identically on every page are the weakest
internal signal there is, and on a domain with no external links they are close
to no signal at all. Every single `/hire` URL is in your "Discovered" list,
which fits exactly.

Fixed:

- **New "Hire By Role" section on the home page**, linking all 16 role briefs
  and the `/hire` hub from the strongest page on the site.
- The home process section now links to `/process`, and the home FAQ section
  to `/faq`. Both pages previously had no inbound link except from each other.

Measured after the change, counting only links inside `<main>` and ignoring
header and footer entirely:

| | Before | After |
| --- | --- | --- |
| Pages reachable from main content | 4 | **62 of 68** |
| Maximum crawl depth | — | **3 clicks** |
| Pages with no main-content link | 64 | 6 |

The remaining six are `/employers`, `/about`, `/job-seekers`, `/contact`,
`/privacy-policy` and `/terms`. The first four are in the header navigation on
every page, which is a strong link type; the two legal pages do not need crawl
priority.

### Cause B — the sitemap was lying about dates (fixed)

Every URL carried `lastmod` set to **the build timestamp**, so all 68 URLs
claimed to have changed on every deploy. Google's sitemap documentation says it
ignores `lastmod` when it finds the value inaccurate — and once ignored, the
signal is gone for the pages where it would genuinely have helped.

Fixed: `src/lib/content-dates.ts` now holds the real date each content set was
last meaningfully changed, and the sitemap uses those. The sitemap now carries
six distinct, truthful dates instead of one timestamp.

### Cause C — the part that is simply time

A three-week-old domain with no backlinks gets very little crawl budget. Even
with perfect internal linking, Google crawls new low-authority sites slowly and
indexes a subset first. **56 of 68 uncrawled after a few days is not abnormal.**

What actually accelerates it, in order of effect:

1. The first few real backlinks — `docs/BACKLINKS-PLAN.md`
2. Verified Google Business Profiles — the business becoming a known entity
3. Time, with the site staying stable and fast

What does **not** work: requesting indexing repeatedly. The daily quota is
small, and re-submitting a URL already in the queue does not move it up. Use
the quota on the hubs — `/`, `/industries`, `/hire`, `/services` — and let the
internal links carry Google to the rest.

---

## 2. "Crawled – currently not indexed" (5 pages)

Google fetched these and chose not to index them yet. On a new domain this is
routine and usually resolves on its own as the site gains authority. It only
becomes a content problem if the number grows while the rest of the site starts
indexing.

Worth knowing which 5 they are — if they are the thin ones (`/privacy-policy`,
`/terms`, `/search`) there is nothing to do. `/search` is `noindex` and
disallowed in robots.txt by design, so it should not be in your reports at all.

---

## 3. ROOT CAUSE FOUND — the apex/www mismatch

**This is the one that matters. It explains all three redirect rows and most of
the 56.**

Traced against the live site on 15 Oct:

```
https://recruitmentconsultant.co.in/        308  ->  https://www.recruitmentconsultant.co.in/
https://www.recruitmentconsultant.co.in/    200
http://recruitmentconsultant.co.in/         308  ->  https (apex)  308  ->  www
```

So **the site serves on `www.`** — Vercel has www as the primary domain and the
bare domain only redirects to it.

But everything the site *declares* names the bare domain:

| Declared on the live site | Value |
| --- | --- |
| `<link rel="canonical">` on the home page | `https://recruitmentconsultant.co.in` |
| `og:url` | `https://recruitmentconsultant.co.in` |
| JSON-LD `url` / `@id` | `https://recruitmentconsultant.co.in` |
| All 68 sitemap `<loc>` entries | `https://recruitmentconsultant.co.in/...` |
| `Sitemap:` line in robots.txt | `https://recruitmentconsultant.co.in/sitemap.xml` |

Put together, this is what Google sees:

1. It fetches the sitemap at the bare domain — redirected to www — and gets
   **68 bare-domain URLs**.
2. It fetches one of those URLs. It **redirects** to the www version.
3. It reads the www page, which declares **its canonical is the bare-domain
   URL** — the one that just redirected.
4. So the canonical is a redirect, and the redirect target disowns itself.

A canonical pointing at a URL that redirects back is a contradiction Google
cannot resolve, and it withholds indexing while it tries. That is precisely the
shape of this report: **9 "Redirect error", 1 "Page with redirect", and 56 URLs
sitting as "Discovered" with "Last crawled: N/A"** — every sitemap URL leads
to a redirect, so the crawler never gets a clean page to index.

### The fix — one change, in Vercel, not in the code

**Make the bare domain the primary one**, so `www` redirects to it instead of
the other way round:

> Vercel → the project → **Settings → Domains** → set
> `recruitmentconsultant.co.in` as **Primary**. `www` keeps working and
> redirects to it.

Why the bare domain rather than www:

- The code, the sitemap, every canonical tag and all the JSON-LD already name
  it. Nothing else has to change.
- Google already has those 68 bare-domain URLs queued. They become correct the
  moment the apex serves, instead of a new set having to be discovered.
- It matches the brand, the email address and the citation details in
  `docs/CITATIONS-NAP.md`.

**If you would rather keep www as the public face**, that is fine too, but then
the other side must move in the same change: set the environment variable
`NEXT_PUBLIC_SITE_URL=https://www.recruitmentconsultant.co.in` in Vercel →
Settings → Environment Variables, and redeploy. What must never happen again is
the two disagreeing.

⚠️ **Check this first:** `NEXT_PUBLIC_SITE_URL` is already set to the bare
domain in the local `.env.local`, so it is probably set in Vercel too. If it is
set there to the bare domain, the primary-domain change above is all that is
needed and the value is already right.

### Verify it in one command

```bash
npm run check:canonical
```

It fetches the live site and fails loudly if the declared origin is not the one
that serves, if the served page's canonical names a different origin, or if the
sitemap lists URLs on a host that redirects. Run it after any domain change.

Against the live site right now it reports both faults; after the Vercel change
it should print `OK`.

### After the fix

1. Redeploy (or just change the primary domain — no redeploy needed if the env
   var already names the bare domain).
2. Run `npm run check:canonical` and confirm `OK`.
3. In Search Console, **Validate Fix** on the "Redirect error" row.
4. Re-submit `/sitemap.xml`.
5. `npm run indexnow` to push the corrected set to Bing.

### The one remaining unknown

"Blocked due to other 4xx issue" (1 page) — run URL Inspection on it. If it is
`/api/enquiry`, ignore it: that route only accepts POST and is disallowed in
robots.txt, so it should not be crawled and should not be indexed.

## 4. Analytics

Google Analytics is live: `G-25H22Q1RNX` is now the built-in default in
`src/app/layout.tsx`, so it works on any deployment without an environment
variable being set. `NEXT_PUBLIC_GA4_ID` still overrides it — set it to the
literal `off` to disable analytics on a staging deployment.

The tag loads `afterInteractive`, so it stays off the critical rendering path
and does not worsen LCP.

---

## 5. What to do, in order

| # | Action | Who |
| --- | --- | --- |
| 1 | **Vercel → Settings → Domains → make `recruitmentconsultant.co.in` the Primary domain.** This is the fix | You |
| 2 | Deploy this branch (it carries the internal-linking and sitemap-date fixes) | You |
| 3 | `npm run check:canonical` — must print `OK` | Either |
| 4 | Search Console → Page indexing → **Validate Fix** on the "Redirect error" row | You |
| 5 | Re-submit `/sitemap.xml` | You |
| 6 | `npm run indexnow` to push the corrected URLs to Bing | Either |
| 7 | URL Inspection on the one "Blocked due to other 4xx" page | You |
| 8 | Start the Google Business Profiles and first citations (`docs/CITATIONS-NAP.md`) | You |

Honest expectation: once the apex serves directly, Google has to re-crawl and
re-evaluate the 68 URLs it already has queued. Expect movement in **one to
three weeks**, not days — but unlike before, the obstacle is gone rather than
being waited out.
