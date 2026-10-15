import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { contentUpdated } from "@/lib/content-dates";
import { serviceDetails } from "@/lib/services-content";
import { industryPages } from "@/lib/industries-content";
import { rolePages } from "@/lib/roles-content";
import { posts } from "@/lib/blog-content";
import { cityPages } from "@/lib/cities-content";

export const dynamic = "force-static";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

/**
 * Serves /sitemap.xml.
 *
 * Every entry is derived from the same content modules the pages render from,
 * so a new service, city or article appears here automatically. /search is
 * deliberately absent — it is noindex and disallowed in robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;
  const on = (date: string) => new Date(`${date}T00:00:00Z`);

  const core: { path: string; priority: number; freq: Freq; updated: string }[] = [
    { path: "/", priority: 1.0, freq: "weekly", updated: contentUpdated.core },
    { path: "/employers", priority: 0.95, freq: "monthly", updated: contentUpdated.core },
    { path: "/services", priority: 0.9, freq: "monthly", updated: contentUpdated.services },
    { path: "/industries", priority: 0.85, freq: "monthly", updated: contentUpdated.industries },
    { path: "/hire", priority: 0.85, freq: "monthly", updated: contentUpdated.roles },
    { path: "/locations", priority: 0.85, freq: "monthly", updated: contentUpdated.cities },
    { path: "/about", priority: 0.8, freq: "monthly", updated: contentUpdated.core },
    { path: "/process", priority: 0.75, freq: "monthly", updated: contentUpdated.process },
    { path: "/faq", priority: 0.7, freq: "monthly", updated: contentUpdated.faq },
    { path: "/job-seekers", priority: 0.75, freq: "monthly", updated: contentUpdated.core },
    { path: "/contact", priority: 0.75, freq: "monthly", updated: contentUpdated.core },
    { path: "/blog", priority: 0.7, freq: "weekly", updated: contentUpdated.core },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly", updated: contentUpdated.core },
    { path: "/terms", priority: 0.3, freq: "yearly", updated: contentUpdated.core },
  ];

  return [
    ...core.map((entry) => ({
      url: url(entry.path),
      lastModified: on(entry.updated),
      changeFrequency: entry.freq,
      priority: entry.priority,
    })),
    ...serviceDetails.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified: on(contentUpdated.services),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...rolePages.map((role) => ({
      url: url(`/hire/${role.slug}`),
      lastModified: on(contentUpdated.roles),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industryPages.map((industry) => ({
      url: url(`/industries/${industry.slug}`),
      lastModified: on(contentUpdated.industries),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityPages.map((city) => ({
      url: url(`/recruitment-agency-in-${city.slug}`),
      lastModified: on(contentUpdated.cities),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
