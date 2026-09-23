import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { BlogArt } from "@/components/ui/Artwork";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { ArticleBody, TableOfContents } from "@/components/blog/ArticleBody";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { posts, postBySlug } from "@/lib/blog-content";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug.get(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug.get(slug);
  if (!post) notFound();

  const related = post.related
    .map((s) => postBySlug.get(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      >
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-navy-200">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" size={15} />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="file" size={15} />
            Updated {dateFormat.format(new Date(post.updated))}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="users" size={15} />
            {siteConfig.name}
          </span>
        </p>
      </PageHero>

      <article className="py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl">
              <BlogArt variant={post.art} className="aspect-[16/7] w-full" />
            </div>

            <p className="mt-8 border-l-4 border-navy-200 pl-5 text-lg font-medium leading-relaxed text-ink">
              {post.excerpt}
            </p>

            <div className="mt-8">
              <ArticleBody blocks={post.blocks} />
            </div>

            {/* Article FAQ */}
            <section aria-labelledby="post-faq-heading" className="mt-14">
              <h2
                id="post-faq-heading"
                className="font-display text-2xl font-extrabold text-ink"
              >
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                      <h3 className="font-display text-base font-bold text-ink">
                        {faq.question}
                      </h3>
                      <Icon
                        name="chevron"
                        size={20}
                        className="shrink-0 text-navy-600 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {related.length > 0 ? (
              <section aria-labelledby="related-posts-heading" className="mt-14">
                <h2
                  id="related-posts-heading"
                  className="font-display text-2xl font-extrabold text-ink"
                >
                  Keep reading
                </h2>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                      >
                        <BlogArt variant={item.art} className="aspect-[16/7] w-full" />
                        <span className="flex flex-1 flex-col p-5">
                          <span className="text-[0.68rem] font-bold uppercase tracking-wider text-navy-600">
                            {item.category}
                          </span>
                          <span className="mt-1.5 font-display text-base font-bold leading-snug text-ink">
                            {item.title}
                          </span>
                          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                            Read article
                            <Icon
                              name="arrow"
                              size={15}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          {/* ---------- Sidebar ---------- */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            <TableOfContents blocks={post.blocks} />

            <Reveal className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white shadow-float">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-200">
                Hiring right now?
              </p>
              <h2 className="mt-2 font-display text-lg font-bold">
                Get a screened shortlist in 48 hours
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                No upfront fee. Invoiced only when your candidate joins.
              </p>
              <div className="mt-5">
                <EnquiryButton variant="light" className="w-full">
                  Share a Requirement
                </EnquiryButton>
              </div>
            </Reveal>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="font-display text-base font-bold text-ink">
                Related services
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Permanent Staffing", "/services/permanent-staffing"],
                  ["Contract & Temporary Staffing", "/services/contract-staffing"],
                  ["RPO Services", "/services/rpo"],
                  ["Executive Search", "/services/executive-search"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-ink-soft transition hover:text-navy-700"
                    >
                      <Icon name="arrow" size={14} className="text-navy-400" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <CtaBand />

      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
    </>
  );
}
