"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import type { SearchResult } from "@/app/search/page";

export function SearchPageClient({ index }: { index: SearchResult[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // On mount, read ?q= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get("q") ?? "").trim().slice(0, 100);
    setQuery(q);
    filterResults(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function filterResults(q: string) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      setResults([]);
      return;
    }
    const scored = index
      .map((entry) => {
        const haystack =
          `${entry.title} ${entry.excerpt} ${entry.kind}`.toLowerCase();
        const score = terms.reduce(
          (total, term) => total + (haystack.includes(term) ? 1 : 0),
          0,
        );
        return { entry, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.entry);
    setResults(scored);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = ((fd.get("q") as string) ?? "").trim().slice(0, 100);
    setQuery(q);
    filterResults(q);
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set("q", q);
    window.history.pushState({}, "", url.toString());
  }

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Search"
        title={query ? `Results for "${query}"` : "Search this site"}
        description={
          query
            ? `${results.length} ${results.length === 1 ? "match" : "matches"} across services, industries, articles and FAQs.`
            : "Look for a service, an industry, an article or a question about how we work."
        }
        crumbs={[{ label: "Search" }]}
      >
        <form onSubmit={handleSubmit} role="search" className="flex w-full max-w-xl gap-2">
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
                  ? "Try a service name like 'contract staffing', an industry like 'manufacturing', or just tell us the role you need to fill."
                  : "Or skip the search and send us the role directly \u2014 a consultant will come back within one working day."}
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
