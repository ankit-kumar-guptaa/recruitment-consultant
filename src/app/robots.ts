import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Serves /robots.txt.
 *
 * Everything public is crawlable. Only the API routes and the internal search
 * results are excluded: search pages produce near-duplicate thin content and
 * waste crawl budget, which is why /search is also `noindex` in its metadata.
 */
export default function robots(): MetadataRoute.Robots {
  // Never block /_next/ — Googlebot needs the JS and CSS to render the page.
  const disallow = ["/api/", "/search"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      // Spelled out so the important crawlers are never caught by a future
      // change to the wildcard rule.
      {
        userAgent: ["Googlebot", "Googlebot-Image", "Bingbot"],
        allow: "/",
        disallow: ["/api/", "/search"],
      },
      // Aggressive backlink scrapers — they cost bandwidth and return nothing.
      // Remove any of these if the agency starts using that tool on this site.
      {
        userAgent: ["MJ12bot", "DotBot", "PetalBot", "SeznamBot"],
        disallow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
