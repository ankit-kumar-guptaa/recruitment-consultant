import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogArt } from "@/components/ui/Artwork";
import { Reveal } from "@/components/motion/Reveal";
import { posts } from "@/lib/blog-content";

export function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="insights-heading"
            align="left"
            eyebrow="Hiring Insights"
            title="Recruitment insights for employers in India"
          />
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-600 transition hover:gap-2.5 hover:text-navy-800"
          >
            Read the blog
            <Icon name="arrow" size={16} />
          </Link>
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
