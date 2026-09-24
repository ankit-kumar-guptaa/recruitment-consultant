import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { industries, faqs, mainNav } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";
import { posts } from "@/lib/blog-content";
import { cityPages } from "@/lib/cities-content";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

type Result = { title: string; href: string; excerpt: string; kind: string };

function buildIndex(): Result[] {
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

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().slice(0, 100);
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  const results = terms.length
    ? buildIndex()
        .map((entry) => {
          const haystack = `${entry.title} ${entry.excerpt} ${entry.kind}`.toLowerCase();
          const score = terms.reduce(
            (total, term) => total + (haystack.includes(term) ? 1 : 0),
            0,
          );
          return { entry, score };
        })
        .filter((row) => row.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((row) => row.entry)
    : [];

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Search"
        title={query ? `Results for “${query}”` : "Search this site"}
        description={
          query
            ? `${results.length} ${results.length === 1 ? "match" : "matches"} across services, industries, articles and FAQs.`
            : "Look for a service, an industry, an article or a question about how we work."
        }
        crumbs={[{ label: "Search" }]}
      >
        <form action="/search" role="search" className="flex w-full max-w-xl gap-2">
          <label htmlFor="site-search-q" className="sr-only">
            Search services, industries and articles
          </label>
          <input
            id="site-search-q"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="e.g. contract staffing, BFSI, agency fees"
            className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-navy-300 focus:border-white/60"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-800 transition hover:bg-navy-50"
          >
            Search
          </button>
        </form>
      </PageHero>

      <section aria-label="Search results" className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          {results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((result) => (
                <li
                  key={`${result.kind}-${result.title}`}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float"
                >
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-navy-600">
                    {result.kind}
                  </p>
                  <h2 className="mt-1.5 font-display text-lg font-bold text-ink">
                    <Link href={result.href} className="hover:text-navy-700">
                      {result.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {result.excerpt}
                  </p>
                  <Link
                    href={result.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600"
                  >
                    Open
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-card">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-50 text-navy-700">
                <Icon name="search" size={26} />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold text-ink">
                {query ? "Nothing matched that search" : "Start typing to search"}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                {query
                  ? "Try a service name like “contract staffing”, an industry like “manufacturing”, or just tell us the role you need to fill."
                  : "Or skip the search and send us the role directly — a consultant will come back within one working day."}
              </p>
              <div className="mt-7">
                <EnquiryButton>Tell Us What You Need</EnquiryButton>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
