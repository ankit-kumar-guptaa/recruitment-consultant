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
  **Looking for candidates / Looking for a job** switch that changes the fields. It is
  rendered inline in the hero card, inside the popup modal (focus trap, `Esc`, scroll
  lock) and on the contact page, so all three always collect and validate the same thing.
  Posts to `/api/enquiry`, with a honeypot field for bots.
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

Scroll animations are built on `IntersectionObserver`, not an animation library:

- `components/motion/Reveal.tsx` — staggered fade/slide/scale entrances. Content renders
  visible by default and is only hidden once JS confirms support, so nothing can get
  stuck behind a broken animation. Anything already on screen shows immediately.
- `components/motion/CountUp.tsx` — stat counters that run once in view.
- `components/motion/ScrollProgress.tsx` — reading-progress bar under the header.

Every animation is disabled under `prefers-reduced-motion: reduce`.

## Artwork

There is no stock photography in the build. The logo and favicon are the supplied brand
files, the hero portrait was cut out of the supplied design mock-up, and every other visual
(insight card covers, coverage map, dot grids, decorative rings) is inline SVG generated in
`components/ui/Artwork.tsx` — crisp at any resolution and a few KB in total.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for your environment.

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
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Semantic landmarks, labelled sections and a skip-to-content link.

### Performance

- Fonts (Outfit for headings, Plus Jakarta Sans for body, Caveat for the handwritten
  accents) are self-hosted through `next/font` — no render-blocking external requests.
- The hero image is `priority` + WebP and icons are inline SVG rather than an icon library.

## Before going live

1. **Leads go nowhere yet.** `src/app/api/enquiry/route.ts` validates and logs the
   submission — wire it to email (Resend/SendGrid), a CRM webhook or a database.
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
9. **Legal pages.** `/privacy-policy` and `/terms` are a solid starting draft, not legal
   advice — have the client's lawyer review both before launch.
10. **Photography.** Every section is built to take a real photo where artwork sits today
   (`next/image` slots with fixed aspect ratios and alt text). Drop files into
   `public/images/` and swap the artwork component for an `Image` — the sizes are noted in
   each component.

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
