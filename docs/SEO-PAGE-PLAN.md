# SEO page plan — recruitmentconsultant.co.in

**Started at 37 indexable URLs. Target: ~100 over four batches.**

| Batch | Status |
| --- | --- |
| 1 — Industries (12) | ✅ shipped — `/industries/<slug>`, 62.6–65.4% unique body copy |
| 2 — Roles (16 + hub) | ✅ shipped — `/hire/<slug>`, 58.4–63.2% unique body copy |
| 3 — Service × city (18) | not started |
| 4 — Content & comparison (19) | not started |

**Live total: 66 URLs in the sitemap.**

Built against the quality gates in the `seo-programmatic` skill. The headline
rule those gates impose: **≥30–40% of the body copy on any page must be genuinely
unique against every other page in the same set.** Google's Scaled Content Abuse
policy has been enforced hard since 2024, and location pages that only swap a
city name are the textbook example of what gets hit.

---

## What we are deliberately NOT building

A full cross-product would look like a lot of pages and would be the fastest way
to get the whole domain demoted:

| Tempting | Pages | Why we are not doing it |
| --- | --- | --- |
| 6 services × 17 cities | 102 | "Permanent staffing in Indore" vs "…in Kochi" would be the same 600 words with two nouns swapped. Fails the 30% gate outright. |
| 12 industries × 17 cities | 204 | Same problem, worse — we do not have real IT-hiring market data for Hapur. |
| Every role × every city | 1000+ | Hard stop in the policy. Nobody has the content for it. |

Instead every batch below is **curated**: a combination only gets a page when we
can write something true and specific about that combination.

---

## Batch 1 — Industry pages (12) · shipped

`/industries/<slug>` — already linked from the nav, the footer and every city
page, so they inherit internal links on day one.

| URL | Primary keyword |
| --- | --- |
| `/industries/it-software-recruitment` | IT recruitment agency India |
| `/industries/bfsi-recruitment` | BFSI recruitment agency |
| `/industries/manufacturing-recruitment` | manufacturing recruitment agency India |
| `/industries/healthcare-pharma-recruitment` | pharma recruitment agency India |
| `/industries/retail-ecommerce-recruitment` | retail recruitment agency |
| `/industries/logistics-supply-chain-recruitment` | logistics recruitment agency India |
| `/industries/telecom-recruitment` | telecom recruitment agency |
| `/industries/education-edtech-recruitment` | EdTech recruitment agency |
| `/industries/real-estate-infra-recruitment` | real estate recruitment agency |
| `/industries/hospitality-travel-recruitment` | hospitality recruitment agency India |
| `/industries/automotive-recruitment` | automotive recruitment agency India |
| `/industries/bpo-shared-services-recruitment` | BPO recruitment agency India |

Unique per page: the roles actually hired in that sector by function, the skills
and certifications that matter, what makes hiring hard there, where the talent
concentrates geographically, typical notice-period and attrition behaviour, and
four sector-specific FAQs. None of that transfers between sectors — the
uniqueness gate is met by the subject matter, not by padding.

## Batch 2 — Role / designation pages (16) · shipped

`/hire/<role>` — pure hiring intent, the highest-converting keyword class.

Technology: backend developer, frontend developer, full stack developer,
devops engineer, data engineer, QA engineer
Business: sales manager, digital marketing manager, HR manager, accountant,
financial analyst, operations manager
Industrial: production engineer, quality engineer, warehouse manager, CA

Unique per page: what the role actually does, the skill checklist we screen on,
salary bands by experience, realistic time-to-hire, interview structure, the
mistakes that make the role hard to fill, and a downloadable JD outline.

## Batch 3 — Curated service × city (18)

Only the three cities with an office plus the three largest hiring markets, and
only the services that genuinely differ there.

- Delhi NCR, Hyderabad, Pune (offices — we can write about the local office)
- Mumbai, Bengaluru, Chennai (market depth)
- × permanent staffing, contract staffing, bulk hiring

`/<service>-in-<city>` e.g. `/contract-staffing-in-pune`

Each carries the local salary band, the local industrial belt it serves, local
compliance notes (state PT, labour rules) and local client examples. A page only
ships if it clears the 40% uniqueness check against its siblings.

## Batch 4 — Content and comparison (19)

**Comparison (5)** — `/compare/<slug>`: recruitment agency vs job portal,
RPO vs staffing agency, contingency vs retained search, in-house vs outsourced
recruitment, contract vs permanent staffing.

**Resources (6)** — `/resources/<slug>`: India salary guide 2026, job description
templates, hiring checklist, notice period guide, interview question bank,
offer letter format.

**Blog (8 more)** — fills the informational layer that feeds the money pages.

---

## Quality gates applied to every batch

1. **Standalone value test** — would this page be worth publishing if no sibling
   existed? If no, it does not ship.
2. **≥40% unique body copy** measured against every sibling. Shared header,
   footer and nav excluded; template boilerplate counted.
3. **Unique title and meta description shape** per page — not one template with
   a variable in it.
4. **Self-referencing canonical** on every page.
5. **Ship one batch at a time**, then wait 2–4 weeks and watch Search Console
   indexing before starting the next. Never push all 95 at once.
6. **Hub and spoke** — every page links up to its hub and sideways to 3–5
   siblings, with varied anchor text.

## Running total

| Batch | Pages | Cumulative | Status |
| --- | --- | --- | --- |
| Starting point | 37 | 37 | — |
| 1 — Industries | 12 | 49 | ✅ shipped |
| 2 — Roles (incl. `/hire` hub) | 17 | 66 | ✅ shipped |
| 3 — Service × city | 18 | 84 | pending |
| 4 — Content | 19 | 103 | pending |

Stopping at ~100 is deliberate. Past that the marginal page stops earning its
crawl budget for a site this age, and the risk side of the ledger grows faster
than the traffic side.


---

## Gate results on what has shipped

Measured on the rendered pages, with shared header, nav and footer boilerplate
counted *against* uniqueness (so the real figures are better than these):

| Set | Pages | Words/page | Lowest uniqueness | Metadata risk |
| --- | --- | --- | --- | --- |
| Batch 1 — industries | 12 | 1,726–1,827 | 62.6% | low, 0/12 templated |
| Batch 2 — roles | 16 | 1,684–1,779 | 58.4% | low, 0/16 templated |

Both sets clear the warn threshold (40%) by a wide margin and the hard stop
(30%) by more than double. Uniqueness is measured as the share of a page's
5-word shingles that appear on no sibling page in the same set.

Lighthouse on the new pages (mobile, throttled, local `next start`):
accessibility 100, best practices 100, SEO 100, performance 92–96. See
docs/LIGHTHOUSE-AUDIT.md.

## Next: submitting these for indexing

1. Verify `https://recruitmentconsultant.co.in` in Google Search Console if it
   is not already.
2. Submit `/sitemap.xml` there. All 66 URLs are in it with correct canonicals.
3. Request indexing manually for the hubs first — `/industries`, `/hire` — then
   let the internal links carry crawl to the 28 new pages. They are each linked
   from at least three places, so this does not need 28 manual submissions.
4. Watch Coverage for two to four weeks before starting batch 3. What to look
   for: pages indexed versus discovered-not-indexed. A high
   discovered-not-indexed count is the signal to improve the existing pages
   rather than publish more.
