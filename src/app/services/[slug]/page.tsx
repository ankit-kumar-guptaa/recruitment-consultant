import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Coverage } from "@/components/home/Coverage";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceDetails, serviceBySlug } from "@/lib/services-content";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => serviceBySlug.get(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        variant="cobalt"
        eyebrow="Our Services"
        title={service.h1}
        description={service.intro[0]}
        crumbs={[
          { label: "Our Services", href: "/services" },
          { label: service.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton variant="light">Share a Requirement</EnquiryButton>
          <a
            href="#commercials"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
          >
            See commercials
            <Icon name="chevron" size={18} />
          </a>
        </div>
      </PageHero>

      {/* ---------- Overview + best for ---------- */}
      <section
        aria-labelledby="overview-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="overview-heading"
                align="left"
                eyebrow="Overview"
                title={`What ${service.name.toLowerCase()} means at Recruitment Consultant`}
              />
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              {service.intro.map((paragraph, index) => (
                <Reveal as="p" key={paragraph.slice(0, 24)} delay={index * 80}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-8">
              <EnquiryButton>Talk to a Consultant</EnquiryButton>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="rounded-3xl border border-slate-100 bg-navy-50/70 p-7 shadow-card sm:p-8">
              <h2 className="font-display text-lg font-bold text-ink">
                Best suited for
              </h2>
              <ul className="mt-5 space-y-3">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section
        aria-labelledby="includes-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="includes-heading"
              eyebrow="What's Included"
              title={`Everything covered under ${service.name.toLowerCase()}`}
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 3) * 100}
                className="rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name="check" size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section
        aria-labelledby="process-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="process-heading"
              eyebrow="How It Runs"
              title={`Our ${service.name.toLowerCase()} process`}
            />
          </Reveal>

          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-navy-200 lg:block"
            />
            {service.steps.map((item, index) => (
              <Reveal as="li" key={item.step} delay={index * 120} className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy-800 font-display text-base font-bold text-white ring-8 ring-white">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Roles + commercials ---------- */}
      <section
        id="commercials"
        aria-labelledby="roles-heading"
        className="scroll-mt-24 bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="roles-heading"
                align="left"
                eyebrow="Typical Mandates"
                title="Roles we fill under this service"
              />
            </Reveal>

            <ul className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {service.examples.map((example, index) => (
                <Reveal
                  as="li"
                  key={example.label}
                  delay={index * 70}
                  className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-48 shrink-0 font-display text-sm font-bold text-ink">
                    {example.label}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">
                    {example.roles}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal direction="right">
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-7 text-white shadow-float sm:p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-200">
                Commercials
              </p>
              <h2 className="mt-2 font-display text-xl font-bold">
                How this service is billed
              </h2>

              <dl className="mt-6 space-y-4">
                {service.commercials.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy-200">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7">
                <EnquiryButton variant="light" className="w-full">
                  Get a Quote
                </EnquiryButton>
              </div>
              <p className="mt-4 text-center text-xs text-navy-200">
                Or email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-white underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section aria-labelledby="service-faq-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="service-faq-heading"
              eyebrow="FAQs"
              title={`${service.name} — common questions`}
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card"
          >
            {service.faqs.map((faq) => (
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
          </Reveal>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section
        aria-labelledby="related-heading"
        className="bg-navy-50/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="related-heading"
              eyebrow="Related Services"
              title="Often used alongside this"
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 100}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.metaDescription.split(".")[0]}.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Read more
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
        </div>
      </section>

      <Coverage />
      <CtaBand />

      <ServiceJsonLd
        name={service.h1}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        faqs={service.faqs}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Our Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
