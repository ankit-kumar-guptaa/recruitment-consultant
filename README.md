# Recruitment Consultant — recruitmentconsultant.co.in

Marketing site for a pan-India recruitment consultancy, built with **Next.js 15 (App Router)**,
**React 19**, **TypeScript** and **Tailwind CSS v4**.

## What is built so far

- **Header** — sticky, responsive, active-link state, expandable search, mobile drawer,
  and a `Hire Talent` CTA that opens the enquiry popup.
- **Hero** — headline, sub-copy, dual CTAs, four trust highlights, portrait with floating
  stat cards and handwritten accents.
- **Home sections** — trust/logo strip, services, industries, stats band, why-us,
  4-step process, employer vs. job-seeker split, testimonials, FAQ (accordion) and a closing CTA band.
- **Footer** — brand blurb, social links, quick links, services, contact details,
  WhatsApp CTA, industry keyword row and legal bar.
- **Popup enquiry form** — accessible modal (focus trap, `Esc` to close, scroll lock,
  honeypot field) with separate *hiring* and *job hunting* modes. Posts to `/api/enquiry`.

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
- Fonts are self-hosted through `next/font` (no render-blocking external requests),
  the hero image is `priority` + WebP, and icons are inline SVG rather than an icon library.

## Before going live

1. **Leads go nowhere yet.** `src/app/api/enquiry/route.ts` validates and logs the
   submission — wire it to email (Resend/SendGrid), a CRM webhook or a database.
2. **Replace the placeholder contact details** in `src/lib/site.ts`
   (phone, email, address, social profiles).
3. **Replace the client logos** in `clientLogos` (`src/lib/site.ts`). They are currently
   rendered as plain text wordmarks and should only name companies you actually work
   with and have permission to list.
4. **Testimonials and stats** in `src/lib/site.ts` are sample copy — swap in real ones.
5. **Inner pages** (`/about`, `/services`, `/industries`, `/job-seekers`, `/employers`,
   `/blog`, `/contact`, `/search`) are linked from the nav but not built yet; they
   currently render the 404 page.

## Structure

```
src/
  app/            layout, home page, api/enquiry, sitemap, robots, opengraph-image, icon
  components/
    layout/       Header, Footer
    home/         Hero, TrustBar, Services, Industries, Stats, WhyUs,
                  Process, AudienceSplit, Testimonials, Faq, CtaBand
    ui/           EnquiryModal (+ provider), EnquiryButton, Icon, Logo, SectionHeading
    seo/          JSON-LD components
  lib/site.ts     all site content, nav and contact config
```
