import type { Metadata } from "next";
import { industries, faqs, mainNav } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";
import { posts } from "@/lib/blog-content";
import { cityPages } from "@/lib/cities-content";
import { SearchPageClient } from "@/components/search/SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

export type SearchResult = {
  title: string;
  href: string;
  excerpt: string;
  kind: string;
};

function buildIndex(): SearchResult[] {
  return [
    ...mainNav
      .filter((item) => item.href !== "/")
      .map((item) => ({
        title: item.label,
        href: item.href,
        excerpt: `Go to the ${item.label} page.`,
        kind: "Page",
      })),
    ...serviceDetails.map((service) => ({
      title: service.name,
      href: `/services/${service.slug}`,
      excerpt: service.metaDescription,
      kind: "Service",
    })),
    ...cityPages.map((city) => ({
      title: `Recruitment Agency in ${city.name}`,
      href: `/recruitment-agency-in-${city.slug}`,
      excerpt: `${city.state}. Sectors: ${city.sectors.join(", ")}. Areas: ${city.hubs.join(", ")}.`,
      kind: "Location",
    })),
    ...industries.map((industry) => ({
      title: `${industry.name} Recruitment`,
      href: "/industries",
      excerpt: `Roles we fill: ${industry.roles}.`,
      kind: "Industry",
    })),
    ...posts.map((post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      excerpt: post.excerpt,
      kind: "Article",
    })),
    ...faqs.map((faq) => ({
      title: faq.question,
      href: "/services",
      excerpt: faq.answer,
      kind: "FAQ",
    })),
  ];
}

export default function SearchPage() {
  return <SearchPageClient index={buildIndex()} />;
}
