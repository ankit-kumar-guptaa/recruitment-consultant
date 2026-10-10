# Lighthouse audit — 10 October 2026

Run locally with Lighthouse 12.8.2 against `next start` (production build) using
the container's Chromium. Mobile runs use Lighthouse's default throttling
(4x CPU slowdown, simulated slow 4G); the desktop run uses `--preset=desktop`.

> These are local numbers on a shared container. PageSpeed Insights against the
> deployed site will differ — usually better, because the real deployment serves
> from a CDN. The Google PSI API is not reachable from this container, so it has
> to be run from the browser once the site is live:
> `https://pagespeed.web.dev/analysis?url=https://recruitmentconsultant.co.in`

## Scores

| Page | Strategy | Perf | A11y | Best practices | SEO |
| --- | --- | --- | --- | --- | --- |
| `/industries/it-software-recruitment` | desktop | 98 | 100 | 100 | 100 |
| `/` | mobile | 90 | 100 | 100 | 100 |
| `/industries/it-software-recruitment` | mobile | 94 | 100 | 100 | 100 |
| `/recruitment-agency-in-pune` | mobile | 88 | 100 | 100 | 100 |

## Core Web Vitals (mobile, throttled)

| Page | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- |
| `/` | 1.1 s | 3.5 s | 110 ms | 0 |
| `/industries/it-software-recruitment` | 0.9 s | 2.9 s | 120 ms | 0 |
| `/recruitment-agency-in-pune` | 0.9 s | 3.2 s | 270 ms | 0.004 |

CLS is effectively zero everywhere, which is the metric most often broken by
scroll animations — the `Reveal` component renders visible and only arms itself
after JS confirms IntersectionObserver support, so nothing reflows.

## Accessibility defects found and fixed

All three were real, and two of them predate this batch:

1. **Contrast on the industry pages.** The small-caps labels in the "Hiring
   Reality Check" card used `text-navy-600` on `bg-navy-50/70` — 4.08:1, below
   the 4.5:1 AA floor for small text. Changed to `text-navy-700` (6.62:1).
2. **Contrast on the footer WhatsApp button.** White on `emerald-600` is
   3.77:1. Changed to `emerald-700` (5.48:1).
3. **Invalid definition list in the stats band.** The `<dl>` wrapped each stat
   in a `<div>` and then a `<span>` before reaching `<dt>`/`<dd>`, which breaks
   the dt/dd grouping the spec requires (axe `definition-list` and `dlitem`).
   The icon moved inside the `<dd>` so each wrapper now holds exactly one
   `<dt>` followed by one `<dd>`.

After these, accessibility is 100 on every page tested.

## Open performance item

LCP on mobile is 2.9–3.5 s against a 2.5 s "good" threshold. The breakdown
puts 67–74% of it in **render delay**, not in loading:

| Phase | `/industries/it-software-recruitment` |
| --- | --- |
| TTFB | 455 ms (16%) |
| Load delay | 191 ms (7%) |
| Load time | 317 ms (11%) |
| Render delay | 1919 ms (67%) |

The LCP element is the header logo, which already carries `priority` and loads
in ~0.3 s — so the image is not the problem. Render delay that large on a 4x
throttled CPU points at the client components that hydrate above the fold
(header with its search field, the page-transition wrapper, the route progress
bar, the hero lead form, the floating contact rail). Reducing above-the-fold
client JS is the lever, and it is a separate piece of work from the SEO page
build-out. Worth re-measuring against the deployed site first: TTFB alone is
455 ms locally and will be much lower from a CDN.

## How to re-run

```bash
npm run build && npx next start -p 3100 &
export CHROME_PATH=$(ls -d /opt/pw-browsers/chromium*/chrome-linux/chrome | head -1)
npx lighthouse http://localhost:3100/ --output=json --output-path=./lh.json \
  --chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage"
```
