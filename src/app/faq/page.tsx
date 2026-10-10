import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd, StandaloneFaqJsonLd } from "@/components/seo/JsonLd";
import { faqs, siteConfig } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Recruitment Agency FAQs — Fees, Timelines & Guarantees in India",
  description:
    "What a recruitment agency charges in India, how fast the first shortlist arrives, what the replacement guarantee covers, how contract staffing payroll works, and whether job seekers pay anything. Straight answers.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Recruitment Agency FAQs — Fees, Timelines & Guarantees",
    description:
      "Straight answers on recruitment agency fees in India, shortlist timelines, replacement guarantees and contract staffing compliance.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        variant="teal"
        eyebrow="FAQs"
        title="Questions employers ask us before signing a mandate"
        description="Fees, timelines, guarantees and compliance — answered properly rather than with 'it depends'. If something here is not covered, email us and we will answer it the same way."
        crumbs={[{ label: "FAQs" }]}
      >
        <EnquiryButton variant="light">Ask Us Directly</EnquiryButton>
      </PageHero>

      <section aria-labelledby="faq-list-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="faq-list-heading"
              eyebrow="Common Questions"
              title="Everything employers ask, in one place"
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card"
          >
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                  <h2 className="font-display text-base font-bold text-ink">
                    {faq.question}
                  </h2>
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
          </Reveal>
        </div>
      </section>

      {/* Service-specific FAQs live on their own pages — point there rather than
          duplicating them here, which would compete with those pages. */}
      <section
        aria-labelledby="more-faq-heading"
        className="bg-navy-50/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="more-faq-heading"
              eyebrow="Service-Specific Questions"
              title="Each service answers its own questions in detail"
              description="Commercials, timelines and what is included differ by engagement model, so those answers sit on the service pages themselves."
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.faqs.length} questions answered, including
                    commercials.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Read the answers
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-10 text-center">
            <p className="text-sm text-ink-soft">
              Still not answered? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              or see{" "}
              <Link
                href="/process"
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                how a mandate runs
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <StandaloneFaqJsonLd faqs={faqs} path="/faq" />
      <BreadcrumbJsonLd items={[{ name: "FAQs", path: "/faq" }]} />
    </>
  );
}
