import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { BlogArt } from "@/components/ui/Artwork";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Hiring Insights & Recruitment Blog for Employers in India",
  description:
    "Practical hiring notes from a recruitment agency in India: what agencies charge, how to cut time-to-hire, contract staffing vs permanent hiring, and salary benchmarks.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Hiring Insights & Recruitment Blog for Employers in India",
    description:
      "Recruitment fees, time-to-hire, contract vs permanent, salary benchmarks — written for people who actually hire.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Hiring notes for employers in India"
        description="No thought-leadership filler. These are the questions clients ask us on calls, written down so you can read them before the call."
        crumbs={[{ label: "Blog" }]}
      />

      <section aria-labelledby="posts-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <h2 id="posts-heading" className="sr-only">
            Latest articles
          </h2>

          <ul className="grid gap-6 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal as="li" key={post.slug} delay={index * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <BlogArt
                      variant={post.art}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-navy-800">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-ink-soft">
                      {post.readingTime}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                      Read article
                      <Icon
                        name="arrow"
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={240}
            className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-navy-50 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <p className="text-sm text-ink-soft">
              <strong className="font-semibold text-ink">
                Want a topic covered?
              </strong>{" "}
              Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              and we will write it up.
            </p>
            <EnquiryButton className="shrink-0">Talk to a Consultant</EnquiryButton>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <BreadcrumbJsonLd items={[{ name: "Blog", path: "/blog" }]} />
    </>
  );
}
