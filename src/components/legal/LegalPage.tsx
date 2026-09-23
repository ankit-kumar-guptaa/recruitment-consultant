import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalPage({
  title,
  description,
  updated,
  crumbLabel,
  path,
  sections,
  children,
}: {
  title: string;
  description: string;
  updated: string;
  crumbLabel: string;
  path: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        crumbs={[{ label: crumbLabel }]}
      >
        <p className="text-sm text-navy-200">Last updated: {updated}</p>
      </PageHero>

      <article className="py-14 sm:py-16 lg:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {index + 1}. {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-[1.02rem] leading-[1.75] text-ink-soft"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-500" />
                        <span className="text-[1.02rem] leading-[1.7] text-ink-soft">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {children}
        </div>
      </article>

      <BreadcrumbJsonLd items={[{ name: crumbLabel, path }]} />
    </>
  );
}
