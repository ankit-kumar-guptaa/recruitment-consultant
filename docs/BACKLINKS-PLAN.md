# Backlinks — what I can and cannot do, and the safe plan

Updated 10 October 2026. Produced with the `seo-backlinks` skill.

## Backlink Health Score: INSUFFICIENT DATA (0 of 7 factors scored)

Required by the skill's data-sufficiency gate. Every data source came back
unavailable, so **no numeric score is given** — a low score here would mean
"we have no data", not "the profile is bad", and presenting one would be
misleading.

| Factor | Status | Source |
| --- | --- | --- |
| Referring domain count | Not Assessed | none |
| Domain quality distribution | Not Assessed | none |
| Anchor text naturalness | Not Assessed | none |
| Toxic link ratio | Not Assessed | none |
| Link velocity trend | Not Assessed | none |
| Follow/nofollow ratio | Not Assessed | none |
| Geographic relevance | Not Assessed | none |

Source check run on 10 Oct 2026 (`backlinks_auth.py --check`): tier 0. Moz, Bing
Webmaster and Keywords Everywhere have no API key configured; DataForSEO, Ahrefs
and Semrush are not available to this session. Common Crawl reports as available
but actually fails — `Could not find any Common Crawl web graph release` —
because this container's network policy blocks the download.

**To make this document scoreable, both free and five minutes each:**
1. **Bing Webmaster Tools** — verify the site, get a free API key. Gives real
   inbound link data for our own domain.
2. **Moz API** — free tier, 2,500 rows a month. Gives Domain Authority, spam
   score and anchor distribution, including for competitors.

Then set `BING_WEBMASTER_API_KEY` and `MOZ_API_KEY` as environment variables in
this environment's settings and re-run this analysis — it will produce real
numbers instead of "Not Assessed".

---

## Can I build backlinks? Straight answer

**No — not in the sense of going out and creating links.** Two reasons, and
only one of them is technical.

1. **Technical:** this container cannot reach any site other than GitHub. I
   cannot submit a listing, fill a directory form or email anyone.
2. **More important:** the kinds of links one *can* create at will — paid
   placements, PBNs, mass directory blasts, comment and forum spam, link
   exchanges at scale, "1,000 backlinks for ₹5,000" gigs — are exactly what
   Google's link spam policy targets. For a brand-new domain with no trust,
   that is the fastest route to a manual action. A penalty on a three-week-old
   domain is close to unrecoverable; starting again on a new domain is often
   cheaper than cleaning it. **Please do not buy backlink packages for this
   site.** If anyone offers them, the answer is no.

**What I can do, and have done below:** prepare everything so that the links
you *can* legitimately get take minutes each instead of hours, and build the
assets that attract links without asking.

| I can do | You (or Rajiv sir) must do |
| --- | --- |
| Write the exact listing copy and keep the NAP identical everywhere | Submit the listings, confirm the OTP/email |
| Build the asset that earns links (salary guide, original research) | Approve the numbers in it |
| Add the schema and discovery files that make the entity resolvable | — |
| Maintain the tracker so nothing is submitted twice | Paste in the live URL once a listing goes live |
| Verify, later, which links actually exist (`verify_backlinks.py`) | — |

---

## The acquisition plan, in the order it should happen

### Phase 1 — Citations and listings (weeks 1–4, target 10–20 live)

Low authority individually. They matter because they establish that the
business exists at a consistent name, address and phone, which is also what
feeds the Google Business Profile work. **The NAP must be byte-identical
everywhere** — `docs/CITATIONS-NAP.md` has the exact text to paste.

| Target | Notes |
| --- | --- |
| Google Business Profile ×4 offices | Not a backlink, but the highest-value listing of all. Do first. |
| JustDial | The dominant India directory for service businesses, and a real lead source |
| IndiaMART | Ditto; recruitment is a well-populated category |
| Sulekha | Good for service enquiries in NCR, Pune, Hyderabad |
| Bing Places | Free, and feeds Microsoft Copilot answers |
| Apple Business Connect | Free, feeds Apple Maps |
| LinkedIn Company Page | Essential for a recruitment firm, and a strong entity signal |
| Facebook Business Page | Entity consistency, low effort |
| Yellow Pages India, TradeIndia, ExportersIndia | Cheap citations |
| Local chamber of commerce (Delhi / Okhla industrial association) | Genuinely authoritative and locally relevant |
| UAE: Yellow Pages UAE, Dubai Chamber if the office qualifies | Only if the UAE office is a real registered entity |

**Rules:** same NAP every time, no keyword stuffing in the business name
("Recruitment Consultant", not "Recruitment Consultant — Best Placement Agency
India"), real photos, and the same phone number everywhere.

### Phase 2 — Relationship links (weeks 4–12, target 5–15)

These are worth ten of the Phase 1 links each, and they are already within
reach — they come from the business, not from SEO.

- **Client sites.** Many companies list their recruitment partners or vendors.
  Ask the clients you have actually placed for.
- **Industry associations.** Any membership — NASSCOM, ISF (Indian Staffing
  Federation), a sector body, a local trade association — almost always comes
  with a member directory listing. If there is no membership, the Indian
  Staffing Federation is the obvious one to consider for a staffing firm.
- **Partner and vendor sites.** Payroll providers, background-verification
  vendors, HR software the firm uses — mutual mentions are normal and genuine.
- **Local news and trade press.** A new office opening, a hiring-trends comment,
  a quote on the job market. Indian HR trade publications take contributed
  comment readily.
- **Education partnerships.** If campus hiring happens, placement cells list
  recruiting partners — and those are `.edu.in` domains, which carry real weight.

### Phase 3 — Earned links (month 3 onwards)

This is where tier 2 and tier 4 keywords actually become reachable, and it rests
on one thing: publishing something worth citing.

1. **India Recruitment Salary Guide 2026.** We already hold salary bands for 16
   roles across experience levels in `src/lib/roles-content.ts`. Assembled into
   one guide, with the methodology stated ("drawn from N mandates we ran in
   2025–26"), it becomes the single most linkable asset the firm can own.
   Journalists, HR bloggers and AI assistants all cite salary data. Randstad and
   ManpowerGroup publish one annually for exactly this reason.
2. **Original survey.** Even 50 client responses on attrition, notice periods or
   hiring intent produces data nobody else has. Small, cheap, and genuinely
   citable.
3. **Sector hiring-trend commentary**, tied to real mandates.

**Realistic velocity: 3–8 new referring domains a month, done properly.** Not
500 in a week. A new domain gaining hundreds of links suddenly is itself a spam
signal.

---

## What to avoid — the toxic patterns that apply to us

From the skill's quality reference, filtered to what a new Indian agency site
actually gets offered:

| Pattern | Why it is dangerous here |
| --- | --- |
| Bought link packages ("500 backlinks ₹3,000") | Link spam policy violation. Manual action risk is highest on new domains. |
| PBNs / "guest post networks" | Same, and the footprints are well known to Google |
| Mass directory submission (50+ at once) | Explicitly flagged as a toxic pattern. Our list above is ~15, deliberately. |
| Exact-match anchor text everywhere | Keep "recruitment agency in India" anchors under ~10% of the profile. Branded and naked-URL anchors should dominate at 30–50%. |
| Reciprocal link schemes | Fine between two genuine partners, toxic as a programme |
| Comment and forum signature links | No value, clear spam signal |
| Links from unrelated niches | A recruitment firm linked from casino and crypto sites is the classic negative-SEO shape |

If a backlink vendor contacts the business — they will — the test is simple:
would this link exist if Google did not? If no, do not buy it.

---

## Tracking

`docs/CITATIONS-NAP.md` carries the submission tracker. Fill in the live URL and
date as each listing goes live. Once there are 10+ entries, I can run the
verification crawler against the list to confirm which links actually still
exist — that part needs no API key.
