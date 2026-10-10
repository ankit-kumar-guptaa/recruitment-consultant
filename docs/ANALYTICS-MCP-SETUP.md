# Google Analytics MCP — setup

Server: [`googleanalytics/google-analytics-mcp`](https://github.com/googleanalytics/google-analytics-mcp),
published on PyPI as `analytics-mcp` (v0.7.0, Apache-2.0, maintained by Google).

It gives me read-only access to GA4 so I can answer questions like *"which
landing pages produced enquiries last month"* directly, instead of asking you to
screenshot a report.

## Please do not paste credentials into the chat

The credential this server needs is a JSON file that grants access to the
analytics account. **Do not paste it into a message** — chat transcripts are
stored, and that is how credentials leak. Two safe routes:

- **For your own machine (recommended):** the file stays on your laptop and
  never leaves it. Steps below.
- **For this cloud session:** add the values in the environment's settings —
  the cloud environment menu in the session's title bar, then *Edit*, under
  *Network secrets* (or as environment variables if that section is not
  offered). I will read `GOOGLE_APPLICATION_CREDENTIALS` and
  `GOOGLE_PROJECT_ID`. A new session picks them up.

Read-only is enough. The scope below (`analytics.readonly`) cannot change
anything in the account.

## 1. Enable the APIs

In your Google Cloud project, enable both:

- Google Analytics Admin API — `analyticsadmin.googleapis.com`
- Google Analytics Data API — `analyticsdata.googleapis.com`

Note the **project ID** (not the project name) — that becomes `GOOGLE_PROJECT_ID`.

## 2. Create credentials

Create an OAuth **desktop** client in that project and download its JSON, then:

```bash
gcloud auth application-default login \
  --scopes https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform \
  --client-id-file=YOUR_CLIENT_JSON_FILE
```

The command prints `Credentials saved to file: [PATH]`. That path is
`GOOGLE_APPLICATION_CREDENTIALS`.

Sign in as a Google account that already has access to the GA4 property —
read access on the property is sufficient.

## 3. Install and register the server

`pipx` must be installed first (`pipx` ships Python CLI tools in isolated
environments; see https://pipx.pypa.io/stable/#install-pipx).

Registered per user:

```bash
claude mcp add analytics-mcp \
  --scope user \
  -e "GOOGLE_APPLICATION_CREDENTIALS=/path/from/step/2.json" \
  -e "GOOGLE_PROJECT_ID=your-project-id" \
  -- pipx run analytics-mcp
```

Or use the `.mcp.json` committed at the repo root, which is already configured
and reads both values from the environment — then only the two variables need
setting, and anyone who opens this project gets the server.

Check it loaded with `/mcp`.

## What it can do once connected

| Tool | Use |
| --- | --- |
| `get_account_summaries` | Find the property ID |
| `get_property_details` | Property configuration |
| `run_report` | Any GA4 report — sessions, landing pages, conversions by source |
| `run_realtime_report` | Live traffic |
| `run_funnel_report` | Drop-off through a funnel |
| `get_custom_dimensions_and_metrics` | What custom data the property collects |

## Worth knowing before you spend time on this

**GA4 has almost no data yet.** The site was indexed days ago and Search
Console shows zero clicks. For the next few weeks **Search Console is the
useful source, not GA4** — it shows impressions and queries before there is
any traffic to analyse.

So this is worth setting up when there is something to look at — roughly
**week 4 to 6**, once the first long-tail terms start getting impressions. It
is in `docs/SEO-PENDING.md` as a P2 item for that reason, not because it is
hard.

Also: nothing reaches GA4 at all until `NEXT_PUBLIC_GA4_ID` is set on the
deployment (see `.env.example`). Until then the analytics script is not loaded
and no data is collected.

## The question I would ask it first

Once there is traffic: *"which landing pages brought organic users who
submitted the enquiry form, over the last 28 days"* — that single answer tells
us which of the 68 pages are earning their place, and it is the number the
whole SEO plan should be steered by.
