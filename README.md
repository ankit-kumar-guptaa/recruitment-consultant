# Recruitment Consultant — recruitmentconsultant.co.in

Marketing site for a pan-India recruitment consultancy, built with **Next.js 15 (App Router)**,
**React 19**, **TypeScript** and **Tailwind CSS v4**.

## What is built so far

- **Brand** — the supplied logo lockup in `public/brand/` (`logo.webp` for light
  backgrounds, `logo-white.webp` for the dark footer) plus the circular icon, wired up
  as the favicon (`src/app/icon.png`) and Apple touch icon (`src/app/apple-icon.png`).
- **Header** — sticky, responsive, active-link state, expandable search, mobile drawer,
  scroll-progress bar and a `Hire Talent` CTA that opens the enquiry popup.
- **Hero** — headline, sub-copy, dual CTAs, four trust highlights and a clean portrait
  (nothing overlaps the photo). A glass stat strip with animated counters floats on the
  boundary between the hero and the logo strip.
- **Home sections** — logo strip, who-we-are, services, industries, why-us (with a live
  shortlist mock-up), 4-step process, pan-India coverage, employer vs. job-seeker split,
  testimonials, insights/blog, FAQ accordion and a closing CTA band.
- **Footer** — brand blurb, social links, quick links, services, contact details,
  WhatsApp CTA, industry keyword row and legal bar.
- **Enquiry form** — one shared form (`components/ui/EnquiryForm.tsx`) with a
  **Looking for candidates / Looking for a job** switch that changes the fields.
  Rendered in the popup modal (focus trap, `Esc`, scroll lock, sticky submit bar so it
  fits a 1366×768 laptop) and on the contact page, so both collect and validate the same
  thing. Job seekers can attach a CV (PDF/DOC/DOCX/RTF/ODT, up to 5 MB). Posts as
  `multipart/form-data` to `/api/enquiry`, with a honeypot field for bots.
- **Page banners** — every inner page header sits on generated artwork in
  `public/images/banners/` (four variants: navy, cobalt, teal, gold — about 20 KB each).
  Regenerate or restyle them with `scripts/banners.mjs` in the scratchpad notes; the
  variant is chosen per page via the `variant` prop on `PageHero`.
- **Pages** — 37 indexable routes, each with its own metadata, canonical URL and
  breadcrumb schema:
  - Core: `/`, `/about`, `/services`, `/industries`, `/locations`, `/employers`,
    `/job-seekers`, `/contact`, `/blog`, plus `/search` (noindex).
  - Six service pages at `/services/<slug>`, from `src/lib/services-content.ts`.
  - Seventeen city pages at `/recruitment-agency-in-<city>`, from
    `src/lib/cities-content.ts`.
  - Three articles at `/blog/<slug>`, from `src/lib/blog-content.ts`.
  - `/privacy-policy` and `/terms`.
- **Floating contact rail** — fixed bottom-left WhatsApp, call and enquiry buttons that
  fade in after the first scroll.

## Motion

No animation library — everything is `IntersectionObserver` and CSS:

- `components/motion/Reveal.tsx` — staggered fade/slide/scale entrances. Content renders
  visible by default and is only hidden once JS confirms support, so nothing can get
  stuck behind a broken animation. Anything already on screen shows immediately.
- `components/motion/CountUp.tsx` — stat counters that run once in view.
- `components/motion/ScrollProgress.tsx` — reading-progress bar under the header.
- `components/motion/RouteProgress.tsx` — navigation progress bar pinned to the top of
  the viewport. Next.js client-side navigation gives no feedback of its own, so a slow
  RSC fetch just looks like a frozen page. The bar starts on any internal link click and
  finishes when the route actually changes.
  *Gotcha worth remembering:* `useSearchParams()` returns a fresh object on every render,
  so it must not be used as an effect dependency here — the bar compares the serialised
  URL instead.
- `components/motion/PageTransition.tsx` — fades each route in on mount, keyed by
  pathname.
- `app/loading.tsx` — skeleton shown if a route segment actually suspends. Prefetched
  static pages never reach it, so it does not flash on normal navigation.

Every animation is disabled under `prefers-reduced-motion: reduce`.

## Photography

Every photograph is declared as a **slot** in `src/lib/photos.ts`: the file lives at the
declared path, and replacing it swaps the photo on the next build with no code change.
If a file is missing the page renders its illustrated fallback instead, so a layout can
never break over a photo.

| File in `public/images/photos/` | Size | Appears on |
| --- | --- | --- |
| `about-team.webp` | 1182×1330 portrait | About page, story section |
| `employers-meeting.webp` | 1484×1060 landscape | Employers page |
| `job-seeker-interview.webp` | 1484×1060 landscape | Job seekers page |
| `office-reception.webp` | 1484×1060 landscape | Contact page |

The homepage hero portrait (`/images/hero-consultant.webp`) is a slot too.

To add a new one, add an entry to `photoSlots` and render `<Photo slot="…" />` with an
illustrated `fallback`.

To add a new slot, add an entry to `photoSlots` and render `<Photo slot="…" />` with an
illustrated `fallback`.

## Artwork

Photographs are the client's own files (see **Photography** above). Everything else — page
banners, insight card covers, the coverage map, dot grids and decorative rings — is
generated: inline SVG in `components/ui/Artwork.tsx` plus the banner images from
`scripts/generate-banners.mjs`. Crisp at any resolution and a few KB each.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for your environment.

## Email (enquiries and CVs)

Submissions go to `/api/enquiry`, which validates the fields, accepts an optional CV
attachment and sends two emails through SMTP:

1. **To the admin inbox** (`MAIL_TO`) — every field in a formatted table, `Reply-To` set
   to the sender so hitting reply reaches them directly, with the CV attached and
   renamed `<Candidate-Name>-CV.pdf`.
2. **To the person who submitted** — a short acknowledgement. This is best effort; if it
   fails the submission still counts as successful, because the lead is already
   delivered.

### Setup

```bash
cp .env.example .env.local     # then fill in the real values
npm run mail:test              # verifies the connection and sends one test email
```

`.env.local` is git-ignored and **no credentials are stored in the repository** — the
mailer reads everything from the environment. On Vercel, Hostinger or any other host,
add the same variables in that platform's environment settings.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` / `SMTP_PORT` | Mail server. Port 465 uses implicit TLS, 587 uses STARTTLS. |
| `SMTP_USER` / `SMTP_PASS` | Mailbox credentials. |
| `MAIL_FROM` | Envelope sender — normally the same as `SMTP_USER`. |
| `MAIL_TO` | Where enquiries and CVs are delivered. |

If SMTP is not configured the form still accepts submissions and logs them to the server
console rather than failing — but nothing is emailed, so set the variables before launch.
Every lead is logged before delivery is attempted, so a mail outage can never lose one
silently.

**Run `npm run mail:test` from the server that will host the site.** Outbound SMTP is
frequently blocked on laptops, office networks and CI runners, so a failure there does
not necessarily mean the credentials are wrong.

## SEO & keyword strategy

The homepage is written for **employers** — the side that pays. Job-seeker traffic
arrives anyway through job-title searches, so it gets one nav item, one hero link and
one homepage card rather than half the page.

**Head terms** (H1, `<title>`, opening copy)
`recruitment agency in India` · `recruitment consultancy in India` ·
`staffing company in India` · `manpower consultancy` · `placement agency for companies`

**Service terms** (service card names, H2s, `/services/*` URLs)
`permanent staffing services` · `contract staffing companies in India` ·
`temporary staffing agency India` · `executive search firm India` · `RPO services India` ·
`recruitment process outsourcing India` · `bulk hiring agency` ·
`campus recruitment agency India` · `third party payroll services India`

**Commercial long-tail** (fees section + FAQ — highest buying intent)
`recruitment agency charges in India` · `hire employees in India` ·
`recruitment agency for startups India` · `IT recruitment agency India`

**Local intent** — the coverage section names 16 cities and the schema lists each as an
`areaServed` City, which is the base for later `/recruitment-agency-in-<city>` pages.

The list lives in `targetKeywords` in `src/lib/site.ts` so inner pages can be built
against the same map.

### What is implemented

- One `h1` carrying the head term, then a keyword-led `h2` per section and an `h3` per
  service, industry, process step, fee model, article and FAQ question.
- Two conversion sections aimed at commercial searches: **engagement models & fees**
  (answers "what does a recruitment agency charge in India") and an **in-house vs.
  agency comparison table**.
- FAQ answers are written long enough to stand alone as answer-engine snippets.
- Structured data: `EmploymentAgency` + `ProfessionalService` (with `areaServed` cities,
  `contactPoint`, `foundingDate` and an `OfferCatalog`), `WebSite` with `SearchAction`,
  an `ItemList` of `Service` entities, per-page `Service`, `Article` and `FAQPage`
  blocks, and `BreadcrumbList` on every inner page.
- City pages target local intent (`recruitment agency in <city>`) with their own
  `Service` scoped to that city, the business districts covered, local market notes and
  city-specific FAQs.
- Metadata API with title template, canonical URLs, Open Graph and Twitter cards.
- Generated OG image at `/opengraph-image`.
- `app/sitemap.ts` generates `/sitemap.xml` from the same content modules the pages
  render from, so a new service, city or article appears automatically — 37 URLs today.
  `/search` is deliberately excluded.
- `app/robots.ts` generates `/robots.txt`: everything public is crawlable, `/api/` and
  `/search` are disallowed, Googlebot/Bingbot are spelled out explicitly, and a few
  aggressive backlink scrapers are blocked. `/_next/` is never blocked — Googlebot needs
  the JS and CSS to render the page.
- Semantic landmarks, labelled sections and a skip-to-content link.

### Performance

- Fonts (Outfit for headings, Plus Jakarta Sans for body, Caveat for the handwritten
  accents) are self-hosted through `next/font` — no render-blocking external requests.
- The hero image is `priority` + WebP and icons are inline SVG rather than an icon library.

## Before going live

1. **Set the SMTP variables** on the host (see **Email** above) and run
   `npm run mail:test` to confirm delivery before launch. Rotate the mailbox password if
   it has ever been shared over chat or email.
2. **Replace the placeholder contact details** in `src/lib/site.ts`
   (phone, email, address, social profiles).
   The phone number is **never rendered as text** anywhere — the client asked for
   email-first contact, so call and WhatsApp buttons carry a label instead of digits and
   `telephone` is left out of the structured data. Set `showPhoneNumber: true` in
   `siteConfig` to publish it again.
3. **Replace the client logos** in `clientLogos` (`src/lib/site.ts`). They are currently
   rendered as plain text wordmarks and should only name companies you actually work
   with and have permission to list.
4. **Testimonials and stats** in `src/lib/site.ts` are sample copy — swap in real ones.
5. **Check every promise before launch.** The homepage now commits in writing to a
   48-hour first shortlist, a 90-day replacement guarantee, no upfront fee on contingency
   hiring, and payroll/PF/ESIC handling for contract staff. These are the main reasons an
   employer will call, and they are also contractual claims — confirm the business can
   honour each one, and edit `heroHighlights`, `whyUs`, `hiringModels` and `faqs` in
   `src/lib/site.ts` if any of them should read differently.
6. **The insight/blog posts** listed on the homepage are sample entries — `/blog/...`
   routes do not exist yet.
7. **Company history.** `milestones` in `src/lib/site.ts` tells the story from 2010 to
   today on the About page. The years and events are a plausible reconstruction — replace
   them with what actually happened.
8. **City page content.** The business districts and sector notes in
   `src/lib/cities-content.ts` are written from general market knowledge. Have someone
   who works each market read their city page before launch — local detail is exactly
   what makes these pages rank, and exactly what is embarrassing when it is wrong.
9. **Check the reception photo.** `office-reception.webp` has *Elite Corporate
   Solutions* signage on the wall, not *Recruitment Consultant*. Fine if that is the same
   business or the parent brand — confusing to a visitor if it is not.
10. **Legal pages.** `/privacy-policy` and `/terms` are a solid starting draft, not legal
   advice — have the client's lawyer review both before launch.


## Structure

```
src/
  app/            layout, home page, api/enquiry, sitemap, robots, opengraph-image, icon
  components/
    layout/       Header, Footer, PageHero
    blog/         ArticleBody, TableOfContents
    home/         Hero, TrustBar, About, Services, Industries, WhyUs, Process,
                  HiringModels, Comparison, Coverage, AudienceSplit, Testimonials,
                  Insights, Faq, CtaBand
    motion/       Reveal, CountUp, ScrollProgress
    legal/        LegalPage
    seo/          JSON-LD components
    ui/           EnquiryForm (+ IntentTabs), EnquiryModal (+ provider),
                  EnquiryButton, ContactForm, FloatingContact, Icon, Logo,
                  Artwork, SectionHeading
public/
  brand/          logo.webp, logo-white.webp, icon-192.png, icon-512.png
  images/         hero-consultant.webp
  lib/
    site.ts             shared content, nav, contact config, keyword map
    services-content.ts the six service pages
    blog-content.ts     article bodies as typed blocks
    cities-content.ts   the seventeen city pages
```
