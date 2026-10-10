#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam — not Google).
 *
 * Google does not participate in IndexNow, so this does not replace Search
 * Console. It does get new and changed pages into Bing quickly, which matters
 * because Bing's index is what feeds Microsoft Copilot's citations.
 *
 *   node scripts/indexnow.mjs                 # submit every URL in the sitemap
 *   node scripts/indexnow.mjs /hire/accountant /faq   # submit specific paths
 *
 * The key file must be reachable at https://<host>/<key>.txt before the API
 * will accept a submission — it is committed in public/ for that reason.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://recruitmentconsultant.co.in";
const host = new URL(SITE).host;

// The key is whatever <key>.txt sits in public/ — no second place to update.
const keyFile = readdirSync(join(process.cwd(), "public")).find((f) =>
  /^[0-9a-f]{32}\.txt$/.test(f),
);
if (!keyFile) {
  console.error(
    "No IndexNow key file found in public/. Expected a file named <32 hex chars>.txt",
  );
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`))
  : await urlsFromSitemap();

if (urlList.length === 0) {
  console.error("Nothing to submit.");
  process.exit(1);
}

// IndexNow accepts at most 10,000 URLs per request; we are nowhere near that.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${SITE}/${keyFile}`,
    urlList,
  }),
});

// 200 and 202 both mean accepted; 202 means the key is still being validated.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
