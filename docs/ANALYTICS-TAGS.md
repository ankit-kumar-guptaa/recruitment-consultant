# Google tags on this site

Two Google products are live, and they are **not** alternatives to each other:

| | ID | What it does |
| --- | --- | --- |
| **GA4** (Analytics) | `G-25H22Q1RNX` | Which pages bring traffic, where visitors come from, which pages produce leads |
| **Google Ads** | `AW-16878629802` | Conversion measurement for the ad account, so campaigns can be optimised against real leads |

Replacing GA4 with the Ads tag would have switched off site analytics
altogether — including the lead-by-page reporting the SEO plan is judged on.
Both are installed instead.

## One tag, not two

Google's own instruction is "don't add more than one Google tag to each page".
That does **not** mean one product — it means one `gtag.js` loader. Both IDs
attach to that single loader:

```js
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-25H22Q1RNX');     // GA4
gtag('config', 'AW-16878629802');   // Google Ads
```

Pasting the Ads snippet as a second block would load the library twice and
double-count pageviews. It is in `src/app/layout.tsx`, rendered once for the
whole site.

Verified in a real browser against a production build: **one** `<script>`
loader in the DOM, **one** network request to googletagmanager.com, and both
IDs in `dataLayer`.

The loader uses `strategy="afterInteractive"`, so it stays off the critical
rendering path and does not push LCP out.

## Conversion tracking

An Ads tag on its own only records that a page was visited. What makes a
campaign optimisable is knowing which visits became leads, so every successful
enquiry now reports itself (`src/lib/analytics.ts`):

```js
gtag('event', 'generate_lead', { lead_type: 'employer', source_page: '/hire/backend-developer' });
```

That fires on both forms — the hero lead bar and the modal/contact form —
and is already working. Verified end to end: submitting the form in a browser
pushes the event with the right intent and page.

**To report the same conversion to Google Ads**, one value is still needed:

1. Google Ads → **Goals → Conversions → New conversion action → Website**.
2. Create the action (an "Submit lead form" / "Contact" category fits).
3. It gives a `send_to` value shaped like `AW-16878629802/AbC-D_efGhIjK`.
4. Put it in Vercel → Settings → Environment Variables as
   `NEXT_PUBLIC_ADS_CONVERSION_LABEL`, then redeploy.

Until that is set, leads are reported to GA4 only and **nothing is sent to
Ads** — no invented value is used.

## Environment variables

| Variable | Default | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GA4_ID` | `G-25H22Q1RNX` | Set to `off` to disable GA4 (e.g. on staging) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-16878629802` | Set to `off` to disable the Ads tag |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | *(none)* | The `send_to` value; without it no Ads conversion is sent |

Both IDs are built in, so nothing needs configuring for them to work on a
deployment — the variables exist only to point a deployment elsewhere or turn
one off.

## Consent mode

Google's setup screen mentions consent mode for visitors in the European
Economic Area. This site targets India only — the content, the offices and the
`en-IN` locale all say so — so consent mode is not set up. If the business ever
markets into the EEA or the UK, it becomes a requirement rather than an option,
and is worth revisiting then.

## Checking it works

- **Google Ads** → the setup screen's **Test installation** button.
- **GA4** → Admin → DebugView, or Reports → Realtime while browsing the site.
- Either → open the site, DevTools **Network** tab, filter `googletagmanager`.
  There should be exactly **one** request.
- The conversion event → DevTools **Console**, run `dataLayer` after submitting
  the form. A `generate_lead` entry should be there.
