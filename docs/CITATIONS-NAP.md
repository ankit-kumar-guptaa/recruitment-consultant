# NAP pack & citation tracker

The single most common mistake in local SEO is submitting slightly different
business details to each directory — "A-83 Okhla Phase 2" in one place,
"A 83, Okhla Phase II" in another. Google treats those as possibly different
businesses and the local signal weakens.

**Copy the blocks below exactly. Do not reword, do not add keywords to the
business name, do not abbreviate differently.** Everything here matches
`src/lib/site.ts`, so the website and the listings agree.

---

## Core business details (use everywhere)

```
Business name:   Recruitment Consultant
Category:        Employment agency  (secondary: Recruiter, Staffing agency)
Phone:           +91 76690 73000
Email:           info@recruitmentconsultant.co.in
Website:         https://recruitmentconsultant.co.in
Founded:         2010
Hours:           Monday to Saturday, 9:30 am – 6:30 pm IST
```

### Short description (under 160 characters — for listings with a tight limit)

```
Pan-India recruitment agency for employers since 2010. Permanent staffing,
contract hiring, executive search, RPO and bulk hiring across 12+ industries.
```

### Medium description (about 300 characters)

```
Recruitment Consultant is a pan-India recruitment agency working with employers
since 2010. We handle permanent staffing, contract and temporary staffing,
executive search, RPO, bulk and campus hiring, and payroll and compliance across
12+ industries, with screened shortlists in 48 hours and a replacement guarantee.
```

### Long description (about 700 characters — for JustDial, IndiaMART and similar)

```
Recruitment Consultant is a pan-India recruitment and staffing agency that has
worked with employers since 2010, from offices in Delhi NCR, Hyderabad, Pune,
Hapur and the UAE.

We recruit across IT and software, BFSI, manufacturing, healthcare and pharma,
retail and e-commerce, logistics, telecom, education, real estate, hospitality,
automotive and BPO — with consultants aligned to each sector rather than to a
job board.

Services: permanent staffing, contract and temporary staffing, executive search,
recruitment process outsourcing (RPO), bulk and campus hiring, and third-party
payroll with statutory compliance.

Employers receive screened shortlists within 48 working hours on most mandates,
with no upfront fee and a 90-day replacement guarantee on permanent placements.
```

---

## Addresses — exact text per office

**Head Office — Delhi NCR** *(use this one wherever a single address is asked for)*
```
A-83, Okhla Phase II
New Delhi – 110020
India
Phone: +91 76690 73000
```

**Hyderabad**
```
eSeva Ln, K P H B Phase 3
Kukatpally, Hyderabad
Telangana 500072
India
```

**Pune**
```
2nd Floor, River Side Business Bay
Plot no. 84, Wellesley Road
Near RTO (Sangam Bridge)
Pune, Maharashtra 411001
India
```

**Hapur**
```
Ground Floor Ward 15/136/1
Railway Road, 2
Hapur, Uttar Pradesh
India
```

**UAE — Ajman**
```
BC-889265
26th Floor, Amber Gem Tower
Ajman, UAE
```

> The UAE office has its own number in `site.ts`. Use that one on UAE listings
> and the Indian number on Indian listings — not mixed.

---

## Which page to link to from each listing

Do not point every listing at the home page. Where a directory allows one link,
pick the most relevant page — it spreads the link equity and sends better
traffic.

| Listing type | Link to |
| --- | --- |
| General business directory | `https://recruitmentconsultant.co.in` |
| Hyderabad / Pune local listing | the matching `/recruitment-agency-in-<city>` page |
| HR or staffing industry directory | `/employers` |
| Anything sector-specific | the matching `/industries/<slug>` page |
| Social profile "website" field | home page |

---

## Submission tracker

Fill in the last two columns as each goes live. Once there are 10+ live URLs I
can run the verification crawler over this list to confirm they still exist.

### Phase 1 — citations

| # | Target | Status | Live URL | Date |
| --- | --- | --- | --- | --- |
| 1 | Google Business Profile — Delhi NCR (head office) | | | |
| 2 | Google Business Profile — Hyderabad | | | |
| 3 | Google Business Profile — Pune | | | |
| 4 | Google Business Profile — Hapur | | | |
| 5 | JustDial | | | |
| 6 | IndiaMART | | | |
| 7 | Sulekha | | | |
| 8 | Bing Places | | | |
| 9 | Apple Business Connect | | | |
| 10 | LinkedIn Company Page | | | |
| 11 | Facebook Business Page | | | |
| 12 | Yellow Pages India | | | |
| 13 | TradeIndia | | | |
| 14 | Local chamber / Okhla industrial association | | | |
| 15 | Yellow Pages UAE (if the Ajman office qualifies) | | | |

### Phase 2 — relationship links

| # | Target | Who asks | Status | Live URL |
| --- | --- | --- | --- | --- |
| 16 | Client site "our partners" page | Rajiv sir | | |
| 17 | Indian Staffing Federation or equivalent membership directory | Rajiv sir | | |
| 18 | Payroll / BGV vendor partner page | Rajiv sir | | |
| 19 | College placement cell (campus hiring partner listing) | Rajiv sir | | |
| 20 | HR trade publication — contributed comment | Rajiv sir | | |

---

## Two things to get right before submitting anything

1. **Business name.** "Recruitment Consultant" — nothing more. Adding
   "— Best Recruitment Agency in India" to the name is a Google Business
   Profile guideline violation and risks suspension of the profile.
2. **One phone number.** +91 76690 73000 on every Indian listing. A second
   number appearing anywhere splits the signal.

Once the social profiles in item 10 and 11 are live, send me the real URLs —
`siteConfig.social` currently holds placeholders that are published in the
Organization schema as `sameAs`, and dead `sameAs` links weaken the entity
rather than strengthening it.
