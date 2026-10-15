/**
 * Real last-modified dates per content set, used for `<lastmod>` in the sitemap.
 *
 * These are deliberately NOT `new Date()`. A sitemap that stamps today's date
 * on all 68 URLs at every deploy is telling Google that the whole site changed
 * — which is false, and Google's sitemap documentation is explicit that it
 * ignores `lastmod` values it finds to be inaccurate. Once ignored, the signal
 * is gone for the pages where it would genuinely have helped.
 *
 * Update the relevant line when you meaningfully change that content — a typo
 * fix does not count, a rewritten section does.
 */
export const contentUpdated = {
  /** Home, employers, about, locations, job-seekers, legal pages. */
  core: "2026-10-15",
  services: "2026-09-23",
  cities: "2026-09-23",
  industries: "2026-10-10",
  roles: "2026-10-10",
  process: "2026-10-10",
  faq: "2026-10-10",
} as const;
