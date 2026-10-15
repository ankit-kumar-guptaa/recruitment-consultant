#!/usr/bin/env node
/**
 * Verify the canonical origin the site declares is the origin it actually
 * serves on.
 *
 * A mismatch is silent and expensive: every canonical tag, sitemap URL and
 * JSON-LD id points at a host that only redirects, each real page claims a
 * canonical that redirects back to it, and Google stops indexing the site
 * while it tries to resolve the contradiction. That is exactly what happened
 * here in October 2026, so this check exists to catch it next time.
 *
 *   node scripts/check-canonical.mjs            # checks the configured origin
 *   node scripts/check-canonical.mjs <origin>   # checks a specific one
 */
const declared = (
  process.argv[2] ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.recruitmentconsultant.co.in"
).replace(/\/$/, "");

const problems = [];

// 1. Does the declared origin serve, or does it redirect somewhere else?
const res = await fetch(declared + "/", { redirect: "manual" });
const location = res.headers.get("location");
if (location) {
  const target = new URL(location, declared).origin;
  problems.push(
    `${declared} returns ${res.status} and redirects to ${target}. ` +
      `The canonical origin must be the one that serves a 200 — set ` +
      `siteConfig.url (or NEXT_PUBLIC_SITE_URL) to ${target}, or change the ` +
      `primary domain in Vercel so ${declared} serves directly.`,
  );
} else if (!res.ok) {
  problems.push(`${declared}/ returned ${res.status}, expected 200.`);
}

// 2. Does the served page agree about its own canonical?
const serving = location ? new URL(location, declared).origin : declared;
const html = await (await fetch(serving + "/")).text();
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
if (canonical && new URL(canonical).origin !== serving) {
  problems.push(
    `${serving}/ declares its canonical as ${canonical}, a different origin. ` +
      `Google treats that as a contradiction and may stop indexing the site.`,
  );
}

// 3. Do the sitemap URLs use the serving origin?
const sitemap = await (await fetch(serving + "/sitemap.xml")).text();
const first = sitemap.match(/<loc>([^<]+)<\/loc>/)?.[1];
if (first && new URL(first).origin !== serving) {
  problems.push(
    `The sitemap lists URLs on ${new URL(first).origin} but the site serves ` +
      `on ${serving}. Every sitemap URL redirects, which wastes crawl budget.`,
  );
}

if (problems.length === 0) {
  console.log(`OK — ${serving} serves directly, and its canonical and sitemap agree.`);
  process.exit(0);
}
console.error(`Canonical origin mismatch (${problems.length}):\n`);
for (const p of problems) console.error(`  - ${p}\n`);
process.exit(1);
