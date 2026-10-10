# Pending work, prioritised

Updated 10 October 2026. Companion to `docs/SEO-STRATEGY.md`.

**Owner column:** *Client* = only Rajiv sir / Ankit can do it (needs real
business information, account access, or a decision). *Dev* = I can build it.
*Both* = I build it once the real information arrives.

Nothing in P0 is optional. Every item in P0 either blocks measurement or blocks
the fastest available rankings.

---

## P0 — blocking. Do these before anything else

| # | Item | Owner | Why it is P0 |
| --- | --- | --- | --- |
| P0-1 | **Verify the domain in Google Search Console**, submit `/sitemap.xml` (66 URLs ready), request indexing for `/`, `/industries`, `/hire` | Client | Nothing can be measured or diagnosed until this exists. Every timeline in the strategy counts from this date. |
| P0-2 | **Give me the GSC verification string and a GA4 measurement ID** so I wire them into the site | Both | Verification via DNS or the HTML tag; GA4 so we can see which pages produce enquiries, not just clicks. |
| P0-3 | **Create and verify a Google Business Profile for each office** — Okhla (head office), Hyderabad, Pune, Hapur. Real address, the +91 76690 73000 number, category "Employment agency", office photos, hours | Client | **Fastest wins available: local pack in 1–3 months.** Currently forfeited entirely. Needs postcard/phone verification, so start now — it takes weeks. |
| P0-4 | **Replace the invented testimonials.** `src/lib/site.ts` currently ships "Priya Sharma, Head of Talent, SaaS Product Company" and "Rahul Mehta, Operations Director, Logistics Firm" — I wrote those as placeholders. They are not real people | Both | A prospect who checks loses trust. Fabricated trust signals are also a Google quality problem. Two real quotes with permission, or remove the section. |
| P0-5 | **Decide the client logo strip.** `clientLogos` lists TATA, Infosys, HCL, Wipro, Amazon, Accenture, Airtel, Reliance. Component is commented out and must stay off until these are real clients who have cleared being named | Client | Naming companies as clients without permission is a legal exposure, not just an SEO one. |
| P0-6 | **Verify the headline numbers** — 5,000+ positions closed, 1,000+ employers served, and the About-page milestone timeline | Client | These are my estimates, not audited figures. If they are wrong they must change before anyone quotes them. |
| P0-7 | **Fix the social profile URLs.** `siteConfig.social` points at linkedin.com/company/recruitmentconsultant etc. — placeholders that probably 404 | Both | They are in the Organization schema as `sameAs`. Dead `sameAs` links weaken the entity rather than strengthening it. Give me the real handles, or I remove them. |
| P0-8 | **Rotate the SMTP password immediately.** It was committed in plaintext to `.env.example` in commits `07cb209` and `246b044`, and **this repository is public** — so the password has been readable on GitHub by anyone. Removed from the current file, but it stays in git history until history is rewritten or the repo is made private | Client | **This is the most urgent item on the page, ahead of every SEO task.** Rotate the Hostinger mailbox password, then decide on history: either make the repo private, or rewrite history with `git filter-repo`. Assume the old password is compromised. |
| P0-9 | **Set the SMTP env vars on the host and run `npm run mail:test`** | Client | The enquiry form is the only conversion path on the site. It has never been tested end to end against the live mail host — the container blocks SMTP ports. If this is broken, every lead is lost silently. |

---

## P1 — do inside the first month. These are the E-E-A-T spine

| # | Item | Owner | Detail |
| --- | --- | --- | --- |
| P1-1 | **3–5 real case studies** at `/work/<slug>` | Both | The template's top content priority and our biggest competitive gap. Each needs: client (name with permission, or "a tier-1 auto component manufacturer in the Chakan belt"), the brief, what was hard, what we did, **numbers** — roles closed, days to shortlist, days to join, retention — and ideally one quote. I build the pages and schema; I need the real stories. One paragraph each from Rajiv sir is enough to start. |
| P1-2 | **Team / leadership page** at `/about/team` with Person + ProfilePage schema | Both | Rajiv sir first: name, role, years in recruitment, sectors, a photo, real LinkedIn URL. Then any consultant who will be client-facing. Named people with verifiable profiles are the single strongest E-E-A-T signal an agency can add, and right now there is not one human being on the site. |
| P1-3 | **Blog author attribution** | Both | Articles are currently authored by the Organization. Move to a named author with a credential line and a link to their team page. |
| P1-4 | **Standalone `/process` and `/faq` pages** | Dev | Both exist only as home-page sections. As pages they can rank for "how does a recruitment agency work", "recruitment agency fees India" style informational queries and feed the money pages. |
| P1-5 | **First 8–15 referring domains** | Client-led | The unglamorous one that decides whether tier 2 ever happens. Realistic starting list: India-focused business directories (JustDial, IndiaMART, Sulekha, Yellow Pages India), the local chamber of commerce, NASSCOM or sector association listings if a membership exists, the UAE office equivalents, and any client site with a "our partners" page. **No paid link schemes** — they are a manual-action risk. |
| P1-6 | **Fix mobile LCP** | Dev | 2.9–3.5s against a 2.5s "good" threshold, and 67–74% of it is render delay from above-the-fold client hydration. Re-measure against the deployed site first (local TTFB alone is 455ms). Then reduce client JS in the header and hero if it is still red. |
| P1-7 | **LocalBusiness schema per office, with geo coordinates** | Both | City pages currently carry a city-scoped Service. Adding a real LocalBusiness per office with lat/long supports the Business Profile work in P0-3. Needs the exact addresses confirmed. |

---

## P2 — months 2–3, once P0/P1 are moving

| # | Item | Owner | Detail |
| --- | --- | --- | --- |
| P2-1 | **Batch 3: 18 service × city pages** | Dev | Already specified in `SEO-PAGE-PLAN.md`. **Gated:** only start if Search Console shows the existing 66 indexing cleanly. A high "discovered — currently not indexed" count means improve the existing pages instead. |
| P2-2 | **India Recruitment Salary Guide 2026** | Both | The highest-leverage single asset on this list. We already have salary bands across 16 roles in `roles-content.ts`. Turned into one proper downloadable guide, it is (a) a lead magnet, (b) the kind of thing trade press and HR blogs cite — which is how tier 4 links actually get earned, and (c) exactly what AI assistants quote. Needs Rajiv sir to sanity-check the bands against real mandates. |
| P2-3 | **Blog to 12–15 posts** | Dev | Employer-intent informational topics that feed the money pages: recruitment agency fees in India, notice period and buyout norms, how to write a JD that gets responses, contract vs permanent, campus hiring timelines, BGV in India. One a week. |
| P2-4 | **Batch 4: comparison + resource pages** | Dev | `/compare/*` and `/resources/*` per the plan. |
| P2-5 | **Collect real Google reviews** | Client | Ask every placed client for one. Drives the local pack hard. Only after P0-3. Never incentivised, never written for them. |
| P2-6 | **Bing Webmaster Tools + IndexNow** | Dev | Cheap. Bing feeds Microsoft Copilot citations, and IndexNow pushes new URLs instantly. |
| P2-7 | **Remove or keep `public/images.zip`** | — | **Decided: keep it public.** Noted here so it is a recorded decision rather than an oversight. |

---

## P3 — months 4–12, the authority phase

| # | Item | Owner |
| --- | --- | --- |
| P3-1 | Original research: an annual hiring-trends or attrition survey of our own client base — the most citable asset an agency can own | Both |
| P3-2 | Sustained digital PR: comment for HR trade press, sector publications, podcasts | Client |
| P3-3 | Case studies to 10–15, covering every sector practice | Both |
| P3-4 | Monitor AI citation for brand and key service terms in ChatGPT, Perplexity and AI Overviews | Dev |
| P3-5 | Revisit tier 4 head terms once referring domains pass ~60 | — |
| P3-6 | Hreflang if the UAE office ever gets its own targeted pages | Dev |

---

## First 12 weeks, week by week

| Week | Client does | I do |
| --- | --- | --- |
| 1 | P0-1 GSC + sitemap; P0-3 start GBP for all four offices; P0-8 rotate SMTP password | Wire GSC verification + GA4 once IDs arrive (P0-2); `/process` and `/faq` pages |
| 2 | P0-9 SMTP env vars + `mail:test`; send real testimonials (P0-4) and social handles (P0-7) | Swap in the real testimonials and handles; LocalBusiness schema (P1-7) |
| 3 | Confirm the headline numbers (P0-6); decide the logo strip (P0-5); first case study written rough | Build `/work` with the first case study; re-measure LCP on the deployed site |
| 4 | Rajiv sir bio + photo + LinkedIn (P1-2); chase GBP verification postcards | `/about/team` with Person + ProfilePage schema; blog author attribution |
| 5–6 | Submit to the P1-5 directories; collect two more case studies | Case studies 2–3; first two new blog posts |
| 7–8 | Ask first placed clients for Google reviews | Blog posts 3–4; Bing Webmaster + IndexNow |
| **8** | **Checkpoint** | **Read Search Console: indexed vs discovered-not-indexed. This decides whether batch 3 happens.** |
| 9–10 | Sanity-check salary bands for the guide | Batch 3 service×city pages **if** the checkpoint passed, else improve existing pages |
| 11–12 | — | Salary Guide 2026 build and landing page; blog posts 5–6 |

---

## How to follow progress, every week

Fifteen minutes in Search Console, in this order:

1. **Pages → Indexing.** Indexed count should climb toward 66. "Discovered —
   currently not indexed" sitting high is the one genuinely bad signal: it means
   Google found the pages and judged them not worth indexing. Response is better
   pages and more links, **never more pages.**
2. **Performance → Queries.** Which terms we appear for at all. In month 1–2
   expect brand plus odd long-tail. The first tier 1 term reaching position
   11–20 is the signal the strategy is working — it will climb.
3. **Performance → Pages.** Which of the 66 get impressions. Pages with zero
   impressions after 8 weeks need either internal links or better content.
4. **Core Web Vitals.** Field data, once there is enough traffic. This is the
   only number that judges the LCP work honestly.
5. **GA4, once wired.** Enquiry form submissions by landing page. Clicks without
   enquiries means the page ranks but does not convince — a content problem, not
   an SEO one.

**Do not** check rankings daily with a rank tracker in month one. New pages
bounce between positions 8 and 60 for weeks while Google works out where they
belong. Watching that movement produces bad decisions.

---

## Things I cannot do from here

Stated so nothing looks like an oversight:

- **No live competitor data.** This container's network policy blocks
  randstad.in, abcconsultants.in and the rest, and the Semrush tools return no
  subscription. `COMPETITOR-ANALYSIS.md` is therefore reasoned from the market
  rather than scraped, and says so.
- **No Google API access.** Search Console, PageSpeed Insights and CrUX all need
  the account's own credentials and are blocked outbound. Lighthouse was run
  locally instead (`docs/LIGHTHOUSE-AUDIT.md`).
- **No live site check.** `https://recruitmentconsultant.co.in` is not reachable
  from here either, so I cannot confirm what is currently deployed. Worth
  confirming the live site matches this branch.
- **No SMTP.** Ports blocked; hence P0-9 has to be run on the host.
