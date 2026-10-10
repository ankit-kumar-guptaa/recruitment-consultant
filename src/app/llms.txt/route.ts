import { siteConfig, services, industries, branches } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";
import { industryPages } from "@/lib/industries-content";
import { rolePages } from "@/lib/roles-content";
import { cityPages } from "@/lib/cities-content";
import { posts } from "@/lib/blog-content";

export const dynamic = "force-static";

/**
 * Serves /llms.txt — a plain-text map of the site for AI assistants.
 *
 * Google Search ignores this file; it is read by some AI crawlers and agent
 * tooling. It is generated from the same content modules the pages render
 * from, so it cannot drift out of date, and it carries nothing that is not
 * already public on the site.
 */
export function GET() {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const line = (title: string, path: string, note: string) =>
    `- [${title}](${url(path)}): ${note}`;

  const body = `# ${siteConfig.name}

> ${siteConfig.shortDescription} Operating since ${siteConfig.foundedYear}, with offices in ${branches
    .map((b) => b.locality)
    .join(", ")}.

We work for employers. Candidates are never charged a fee. Most mandates get a
screened shortlist within 48 working hours, there is no upfront fee on
contingency hiring, and permanent placements carry a 90-day replacement
guarantee.

Contact: ${siteConfig.email}${
    siteConfig.showPhoneNumber ? ` · ${siteConfig.phoneDisplay}` : ""
  }
Head office: ${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}, India

## Services

${serviceDetails
  .map((s) => line(s.name, `/services/${s.slug}`, s.metaDescription))
  .join("\n")}

## Industry practices

${industryPages
  .map((i) => line(`${i.name} recruitment`, `/industries/${i.slug}`, i.metaDescription))
  .join("\n")}

## Hiring briefs by role

Each carries indicative 2026 India salary bands by experience, realistic
time-to-hire, the screening checklist and a JD outline.

${rolePages
  .map((r) => line(`Hire ${r.title}`, `/hire/${r.slug}`, r.metaDescription))
  .join("\n")}

## Locations

${cityPages
  .map((c) =>
    line(
      `Recruitment agency in ${c.name}`,
      `/recruitment-agency-in-${c.slug}`,
      `Hiring across ${c.hubs.slice(0, 3).join(", ")} and the wider ${c.state} market.`,
    ),
  )
  .join("\n")}

## Key pages

${line("For employers", "/employers", "How to engage us, commercials and timelines.")}
${line("Our process", "/process", "How a mandate runs from brief to joining, with the timeline at each stage.")}
${line("FAQs", "/faq", "Fees, shortlist timelines, replacement guarantee and contract staffing compliance.")}
${line("About", "/about", `The firm, since ${siteConfig.foundedYear}.`)}
${line("Contact", "/contact", "All offices, with addresses and hours.")}

## Articles

${posts.map((p) => line(p.title, `/blog/${p.slug}`, p.metaDescription)).join("\n")}

## Sectors covered

${industries.map((i) => `${i.name} (${i.roles})`).join("\n")}

## Engagement models

${services.map((s) => `${s.title}: ${s.description}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
