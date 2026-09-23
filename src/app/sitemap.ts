import type { MetadataRoute } from "next";
import { siteConfig, services, insights } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${siteConfig.url}${path === "/" ? "" : path}`;

  const core: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/employers", priority: 0.95, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/industries", priority: 0.85, freq: "monthly" },
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
    ...services.map((service) => ({
      url: url(service.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((post) => ({
      url: url(post.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
