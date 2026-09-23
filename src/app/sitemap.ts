import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";
import { posts } from "@/lib/blog-content";
import { cityPages } from "@/lib/cities-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;

  const core: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/employers", priority: 0.95, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/industries", priority: 0.85, freq: "monthly" },
    { path: "/locations", priority: 0.85, freq: "monthly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/job-seekers", priority: 0.75, freq: "monthly" },
    { path: "/contact", priority: 0.75, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
  ];

  return [
    ...core.map((entry) => ({
      url: url(entry.path),
      lastModified: now,
      changeFrequency: entry.freq,
      priority: entry.priority,
    })),
    ...serviceDetails.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...cityPages.map((city) => ({
      url: url(`/recruitment-agency-in-${city.slug}`),
      lastModified: now,
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
