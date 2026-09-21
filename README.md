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
- **Popup enquiry form** — accessible modal (focus trap, `Esc` to close, scroll lock,
  honeypot field) with separate *hiring* and *job hunting* modes. Posts to `/api/enquiry`.
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

## SEO

- Metadata API with title template, canonical URLs, Open Graph and Twitter cards.
- Generated OG image at `/opengraph-image`.
- JSON-LD: `EmploymentAgency`, `WebSite` (with `SearchAction`) and `FAQPage`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Semantic landmarks, a single `h1`, labelled sections and a skip-to-content link.
- Fonts (Outfit for headings, Plus Jakarta Sans for body, Caveat for the handwritten
  accents) are self-hosted through `next/font` — no render-blocking external requests.
- The hero image is `priority` + WebP and icons are inline SVG rather than an icon library.

## Before going live

1. **Leads go nowhere yet.** `src/app/api/enquiry/route.ts` validates and logs the
   submission — wire it to email (Resend/SendGrid), a CRM webhook or a database.
2. **Replace the placeholder contact details** in `src/lib/site.ts`
   (phone, email, address, social profiles).
3. **Replace the client logos** in `clientLogos` (`src/lib/site.ts`). They are currently
   rendered as plain text wordmarks and should only name companies you actually work
   with and have permission to list.
4. **Testimonials and stats** in `src/lib/site.ts` are sample copy — swap in real ones.
5. **The insight/blog posts** listed on the homepage are sample entries — `/blog/...`
   routes do not exist yet.
6. **Inner pages** (`/about`, `/services`, `/industries`, `/job-seekers`, `/employers`,
   `/blog`, `/contact`, `/search`) are linked from the nav but not built yet; they
   currently render the 404 page.

## Structure

```
src/
  app/            layout, home page, api/enquiry, sitemap, robots, opengraph-image, icon
  components/
    layout/       Header, Footer
    home/         Hero, TrustBar, About, Services, Industries, WhyUs, Process,
                  Coverage, AudienceSplit, Testimonials, Insights, Faq, CtaBand
    motion/       Reveal, CountUp, ScrollProgress
    ui/           EnquiryModal (+ provider), EnquiryButton, FloatingContact,
                  Icon, Logo, Artwork, SectionHeading
    seo/          JSON-LD components
public/
  brand/          logo.webp, logo-white.webp, icon-192.png, icon-512.png
  images/         hero-consultant.webp
  lib/site.ts     all site content, nav and contact config
```
