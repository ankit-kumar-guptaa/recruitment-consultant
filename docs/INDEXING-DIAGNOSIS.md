# Indexing diagnosis — 15 October 2026

Search Console report of 12 Oct 2026, with what has been fixed in code and what
only you can check.

| Reason | Pages | Source | Verdict |
| --- | --- | --- | --- |
| Discovered – currently not indexed | 56 | Google systems | **Mostly normal, partly our fault.** Fixed in code — see §1 |
| Redirect error | 9 | Website | **A real fault, and it is in hosting, not the app** — see §3 |
| Crawled – currently not indexed | 5 | Google systems | Normal for a new domain — see §2 |
| Page with redirect | 1 | Website | Expected — see §3 |
| Blocked due to other 4xx issue | 1 | Website | Needs one URL Inspection — see §3 |

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

## 3. The redirect and 4xx errors — these need you, in Vercel or DNS

**There are no redirects in the application.** `next.config.ts` has no
`redirects()`, there is no middleware, and nothing in the code issues a 3xx.
Verified in this codebase. So all 9 redirect errors are produced by hosting or
DNS, above the app.

The usual culprits, in order of likelihood:

1. **www ↔ non-www loop.** Your Search Console property is a *Domain* property,
   which covers `recruitmentconsultant.co.in`, `www.recruitmentconsultant.co.in`,
   and both over http. If Vercel is set to redirect www → apex while DNS (or a
   Cloudflare rule) sends apex → www, Google follows the loop and reports
   "Redirect error".
2. **A proxy in front of Vercel.** Cloudflare's "Always Use HTTPS" plus a Vercel
   redirect produces the same loop.
3. **Leftovers from the static-export build.** This project previously built
   with `output: "export"` (removed in commit `c91e0b4`), which serves
   `/path/index.html`. Any trailing-slash URL Google learned then now 308s to
   the non-slash version under `trailingSlash: false` — that is almost certainly
   your single "Page with redirect", and it is harmless.

### How to find the real answer in five minutes

1. In Search Console, open **Page indexing → Redirect error** and copy one URL.
2. Paste it into **URL Inspection** at the top, then click **Test live URL**.
   It shows the redirect chain Google actually follows. A chain that returns to
   where it started is the loop.
3. Separately, in a terminal:

   ```bash
   curl -sSIL https://recruitmentconsultant.co.in/        | grep -iE "^(HTTP|location)"
   curl -sSIL https://www.recruitmentconsultant.co.in/    | grep -iE "^(HTTP|location)"
   curl -sSIL http://recruitmentconsultant.co.in/         | grep -iE "^(HTTP|location)"
   ```

   **What correct looks like:** `http://` → one 301 to `https://`.
   `www` → one 301 to the apex (or the other way round — pick one, consistently).
   The apex over https → **200, no Location header.**

   **What broken looks like:** more than one redirect hop, or a `Location` that
   eventually points back to a URL already in the chain.

4. For the single **"Blocked due to other 4xx issue"**, run URL Inspection on
   it. If it is `/api/enquiry`, ignore it — that route only accepts POST and is
   disallowed in robots.txt; it should never have been crawled and indexing it
   would be wrong anyway.

**Send me the redirect chain output and I will tell you exactly what to change.**

### Also fixed here, pre-emptively

`vercel.json` now sends `X-Robots-Tag: noindex, nofollow` for any request
arriving on a `*.vercel.app` host. The preview and production `.vercel.app`
URLs were otherwise indexable duplicates of the real site competing with it.
The rule matches on the Host header, so it cannot affect
`recruitmentconsultant.co.in`.

---

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
| 1 | Deploy this branch | You |
| 2 | Re-submit `/sitemap.xml` in Search Console so the corrected `lastmod` dates are picked up | You |
| 3 | Run the three `curl -sSIL` commands in §3 and send me the output | You |
| 4 | Request indexing for `/` and `/hire` only — the internal links now carry the rest | You |
| 5 | Start the Google Business Profiles and the first citations (`docs/CITATIONS-NAP.md`) | You |
| 6 | `npm run indexnow` after the deploy — gets the pages into Bing immediately, which Google does not participate in but Copilot citations depend on | Either |
| 7 | Wait two weeks before judging. Then compare indexed vs discovered | — |

One honest expectation: after this fix the curve should start moving within one
to three weeks, not days. Internal linking and sitemap accuracy remove the
obstacles — but crawl budget on a new domain is earned with links and time, and
there is no setting that skips that.
