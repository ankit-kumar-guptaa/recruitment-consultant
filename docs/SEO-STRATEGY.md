# SEO strategy — recruitmentconsultant.co.in

Written 10 October 2026, against the `seo-plan` agency/consultancy template.

**What this document is for:** answering two questions honestly — *when will we
rank*, and *what still has to happen*. The week-by-week task list lives in
`docs/SEO-PENDING.md`. The competitor read lives in
`docs/COMPETITOR-ANALYSIS.md`.

---

## 1. The strategic position, stated plainly

| | Us | Randstad India / ManpowerGroup / ABC Consultants |
| --- | --- | --- |
| Business age | Since 2010 | 1960s–1990s, global parents |
| Domain history | Effectively new as an SEO asset | 15–25 years of indexed history |
| Referring domains | Starting near zero | Thousands, including press and .edu/.gov |
| Content | 66 pages, all written in the last month | Thousands of pages, plus job boards |
| Brand searches | Negligible | Tens of thousands a month |

A new domain does not out-rank a 20-year-old global staffing brand on
"recruitment agency in India" in a year. Anyone promising that is selling
something. What a new domain *can* do, and what this site is built to do, is win
the hundreds of **specific employer-intent searches those big sites answer
badly** — because a global brand writes one generic "staffing services" page,
while we have a page on hiring IATF-experienced quality engineers and another on
warehouse managers in a particular belt.

That is the whole strategy: **do not fight for the head terms yet. Take the
long tail, convert it, and let the links and brand searches that come from real
clients earn the head terms in year two.**

---

## 2. Keyword tiers and realistic ranking timeline

Timelines assume the pending P0 and P1 work in `SEO-PENDING.md` actually gets
done, and count from the day Search Console indexing starts — not from today.

### Tier 0 — Brand terms
*"Elite Corporate recruitment", "recruitmentconsultant.co.in", "Recruitment Consultant Okhla"*

- **Page 1: 2–4 weeks.** No competition. This is a non-achievement, but it
  confirms indexing is working.
- Needs: nothing beyond submitting the sitemap.

### Tier 1 — Long-tail employer intent · **this is where the first leads come from**
*"hire IATF quality engineer", "telecom recruitment agency Lucknow", "contract staffing agency Chakan", "hire warehouse manager Bhiwandi", "BPO hiring agency Indore", "pharma QA recruitment Hyderabad"*

- Search volume: 10–150/month each — but there are **several hundred of them**,
  and the intent is maximal: somebody typing this has an open requisition.
- **Page 1: 3–6 months.** Some inside 8 weeks where nobody has written anything
  specific.
- Needs: the 28 sector and role pages already shipped, plus internal links
  (done), plus batch 3 service×city pages, plus 5–10 referring domains so the
  domain is not a complete unknown.
- **Expected first organic enquiry: month 2–4.** Not week 2.

### Tier 2 — Sector and role, national
*"pharma recruitment agency India", "BPO recruitment agency India", "hire data engineer India", "manufacturing recruitment agency India", "IT recruitment agency India"*

- Volume: 100–900/month. Competition: mid. Mostly other independent agencies,
  not the globals — which is why these are winnable.
- **Page 1: 6–12 months.** Top 3: 9–15 months.
- Needs: 10–30 quality referring domains, 2–3 real case studies per sector, and
  the pages holding their rankings for a quarter without being thinned out.

### Tier 3 — City head terms
*"recruitment agency in Hyderabad", "placement agency in Pune", "manpower consultancy Delhi"*

- Volume: 400–2,500/month.
- **Page 1 organic: 9–18 months. Local pack (the map results): 1–3 months**
  for the cities with a real verified office.
- The local pack matters more than organic here, and it is faster. This is the
  single biggest quick win still untouched — see P0-3 in `SEO-PENDING.md`.
- Needs: a verified Google Business Profile per office with a real address,
  phone and photos; NAP consistency; and genuine reviews collected over time.

### Tier 4 — National head terms
*"recruitment agency in India", "staffing company in India", "manpower consultancy in India", "placement agency for companies"*

- Volume: 2,000–12,000/month. Competition: the globals, plus Naukri and
  LinkedIn occupying half the SERP.
- **Honest answer: 18–30 months, and not winnable on content alone.** Page 1
  for these requires a sustained PR and link programme — original salary
  research that journalists cite, data the trade press picks up, partnerships.
- **Do not measure the project against these for the first year.** If leads are
  needed *now*, buy this intent with Google Ads while the long tail matures.
  That is a budget decision for Rajiv sir, not an SEO failure.

### Summary table

| Tier | Example | Volume/mo | Page 1 ETA | Leads? |
| --- | --- | --- | --- | --- |
| 0 Brand | "Elite Corporate recruitment" | <50 | 2–4 weeks | No |
| 1 Long tail | "hire warehouse manager Bhiwandi" | 10–150 | 3–6 months | **Yes — first ones** |
| 2 Sector/role national | "pharma recruitment agency India" | 100–900 | 6–12 months | Yes, good volume |
| 3 City head | "recruitment agency in Hyderabad" | 400–2,500 | 9–18 mo organic / **1–3 mo local pack** | Yes, local pack |
| 4 National head | "recruitment agency in India" | 2,000–12,000 | 18–30 months | Year 2+ |

---

## 3. Architecture: what we have vs what the agency template expects

| Template expects | Status |
| --- | --- |
| `/services` + service detail | ✅ 6 pages |
| `/industries` + industry detail | ✅ 12 pages |
| `/about` | ✅ |
| `/contact` | ✅ multi-branch |
| `/insights` or `/blog` | ⚠️ exists, only 3 posts |
| **`/work` or `/case-studies`** | ❌ **missing — High Priority in the template** |
| **`/about/team` with Person schema** | ❌ **missing — High Priority** |
| `/process` as a standalone page | ❌ missing (it exists as a home section) |
| `/faq` as a standalone page | ❌ missing (exists as a home section) |
| Role pages (`/hire/<role>`) | ✅ 17 pages — not in the template, our addition, and the highest-intent set on the site |
| City pages | ✅ 17 pages |

The two red entries are not cosmetic. For an agency, **case studies and named
people are the E-E-A-T spine.** Google's quality guidance for
"your-money-or-your-life"-adjacent commercial services leans heavily on
demonstrable experience and identifiable expertise. Right now the site asserts
expertise without evidence: no named consultant, no verifiable placement story,
no client anybody can check.

That is also the honest answer to *"leads kyun nahi aa rahi"*. A hiring manager
comparing us with ABC Consultants finds, on their side, named partners with
LinkedIn profiles and case studies with numbers; on ours, a well-written site
with no human being on it.

---

## 4. Structured data plan

| Page type | Now | Should add |
| --- | --- | --- |
| Home | EmploymentAgency + ProfessionalService, WebSite+SearchAction, ItemList, FAQPage | — |
| Service | Service + FAQPage + BreadcrumbList | — |
| Industry | Service + FAQPage + BreadcrumbList | — |
| Role | Service + FAQPage + BreadcrumbList | — |
| City | Service(City) + FAQPage + BreadcrumbList | **LocalBusiness per office with geo coordinates** |
| Blog | Article + FAQPage | **`author` as a Person, not the Organization** |
| Team | — | **Person + ProfilePage + `sameAs` to real LinkedIn** |
| Case study | — | **Article + the client Organization** |

`Review` and `AggregateRating` are deliberately **not** on the list until there
are real, attributable reviews. Marking up invented testimonials is a structured
data policy violation and risks a manual action — a much bigger loss than the
stars are worth.

---

## 5. GEO / AI search (AI Overviews, ChatGPT, Perplexity)

This matters more than usual for us: an employer asking ChatGPT "which
recruitment agency should I use for pharma QA hiring in Hyderabad" is the exact
buyer we want, and the answer is assembled from citable, specific passages —
which is what our sector and role pages already are.

Already in place: crawlable static HTML, clean heading structure, FAQ blocks with
direct answers, specific numbers (salary bands, notice periods, attrition) that
are quotable.

Still to do: named-expert attribution, original research worth citing (a salary
guide built from our own mandates is the obvious one), and consistent entity
information across directories so the brand resolves to one real company. All
are listed in `SEO-PENDING.md`.

---

## 6. KPI targets

Baseline is zero on everything — the domain is new as an SEO asset. These are
targets to judge the project against, measured in Search Console.

| Metric | Baseline | 3 months | 6 months | 12 months |
| --- | --- | --- | --- | --- |
| Pages indexed | 0 | 55–66 | 80–100 | 100–120 |
| Impressions/month | 0 | 2,000–6,000 | 15,000–40,000 | 60,000–150,000 |
| Organic clicks/month | 0 | 60–250 | 400–1,200 | 2,000–5,000 |
| Keywords in top 10 | 0 | 15–40 (tier 0–1) | 80–200 | 300–600 |
| Keywords in top 3 | 0 | 2–10 | 20–60 | 100–250 |
| Referring domains | ~0 | 8–15 | 25–45 | 60–120 |
| Organic enquiries/month | 0 | 2–8 | 10–30 | 40–100 |
| Local pack top 3 (office cities) | 0 | 2–3 cities | 4–5 cities | all offices |
| Core Web Vitals (mobile, field) | unmeasured | all "good" | all "good" | all "good" |

Ranges, not single numbers, because the spread depends on two things outside
the content: whether the Google Business Profiles get verified, and whether
anybody does link acquisition. With neither, the low end of every row is
optimistic.

---

## 7. What would make this fail

1. **Nobody verifies Search Console.** Then there is no measurement, and every
   decision for the next year is guesswork.
2. **No Google Business Profile.** Forfeits the fastest available wins (tier 3
   local pack, 1–3 months) for free.
3. **Zero link acquisition.** Content alone caps the site at tier 1. Tier 2 and
   above do not happen.
4. **The invented testimonials and client logos stay.** A prospect who checks
   loses trust instantly, and Google treats fabricated trust signals as a
   quality problem.
5. **Publishing more pages instead of improving the existing 66.** If Search
   Console shows "discovered — currently not indexed", the answer is better
   pages and more links, never more pages. Batch 3 and 4 wait for that signal.
6. **Judging month 2 by tier 4 keywords.** The strategy is sound and the
   timeline is what it is; abandoning it in month 3 because
   "recruitment agency in India" has not moved wastes the year.
