import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { CtaBand } from "@/components/home/CtaBand";
import {
  BreadcrumbJsonLd,
  LocalServiceJsonLd,
} from "@/components/seo/JsonLd";
import { cityPages, cityBySlug } from "@/lib/cities-content";
import { serviceDetails } from "@/lib/services-content";
import { heroStats, siteConfig, yearsInBusiness } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/**
 * City landing pages live at the root so the URL reads
 * /recruitment-agency-in-<city>. Next.js does not support a partial dynamic
 * segment ("recruitment-agency-in-[city]"), so this is a root dynamic route
 * with dynamicParams disabled — only the slugs listed below are ever served,
 * and anything else falls through to the 404 page.
 */
export const dynamicParams = false;

const CITY_PREFIX = "recruitment-agency-in-";

export function generateStaticParams() {
  return cityPages.map((city) => ({ slug: `${CITY_PREFIX}${city.slug}` }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const city = cityBySlug.get(slug.replace(CITY_PREFIX, ""));
  if (!city) return {};

  const title = `Recruitment Agency in ${city.name} | Staffing & Hiring Services`;
  const description = `Recruitment and staffing agency in ${city.name}. Permanent staffing, contract hiring, executive search, RPO and bulk hiring across ${city.hubs.slice(0, 3).join(", ")} and the wider ${city.state} market. Shortlists in 48 hours, no upfront fee.`;

  return {
    title,
    description,
    alternates: { canonical: `/recruitment-agency-in-${city.slug}` },
    openGraph: {
      title,
      description,
      url: `/recruitment-agency-in-${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = cityBySlug.get(slug.replace(CITY_PREFIX, ""));
  if (!city) notFound();

  const nearby = city.nearby
    .map((s) => cityBySlug.get(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const cityFaqs = [
    {
      question: `Do you recruit across all of ${city.name}?`,
      answer: `Yes. We source across ${city.hubs.join(", ")} and the wider ${city.state} market, for permanent, contract, executive search and bulk hiring mandates. Where a role needs candidates from outside the city, we run the search nationally and factor relocation into the brief.`,
    },
    {
      question: `How quickly can you share a shortlist in ${city.name}?`,
      answer: `For most mid-level roles in ${city.name} we share a screened shortlist within 48 working hours of the requirement being signed off. Niche technical and leadership mandates typically take five to seven working days because of the market mapping involved.`,
    },
    {
      question: `What does a recruitment agency in ${city.name} charge?`,
      answer:
        "Permanent hiring is charged as a percentage of the candidate's annual CTC and invoiced only after they join — there is no upfront fee. Contract staffing carries a monthly markup on CTC that includes payroll and statutory compliance, and RPO is a fixed monthly retainer. The exact commercials are agreed in writing before the search starts.",
    },
    {
      question: `Do you have an office in ${city.name}?`,
      answer: `Our registered office is in ${siteConfig.address.locality}, and our consultants cover ${city.name} directly — including on-site drives, walk-in events and client meetings. Most mandates are run remotely with on-ground support where the role needs it.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Hiring in ${city.state}`}
        title={`Recruitment Agency in ${city.name}`}
        description={city.intro}
        crumbs={[
          { label: "Locations", href: "/locations" },
          { label: city.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton variant="light">
            Hire in {city.name}
          </EnquiryButton>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
          >
            <Icon name="mail" size={18} />
            {siteConfig.email}
          </a>
        </div>
      </PageHero>

      {/* ---------- Stats ---------- */}
      <section aria-label="Our numbers" className="border-b border-slate-100 bg-white py-8">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-1 block text-xs text-ink-soft sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Market notes + hubs ---------- */}
      <section
        aria-labelledby="market-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="market-heading"
                align="left"
                eyebrow={`${city.name} Talent Market`}
                title={`What hiring in ${city.name} actually looks like`}
              />
            </Reveal>
            <ul className="mt-8 space-y-5">
              {city.market.map((note, index) => (
                <Reveal as="li" key={note.slice(0, 20)} delay={index * 90} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon name="target" size={18} />
                  </span>
                  <p className="text-[1.02rem] leading-[1.7] text-ink-soft">
                    {note}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={320} className="mt-8">
              <EnquiryButton>Share a {city.name} Requirement</EnquiryButton>
            </Reveal>
          </div>

          <Reveal direction="right" className="space-y-6">
            <div className="rounded-3xl border border-slate-100 bg-navy-50/70 p-7 shadow-card">
              <h2 className="font-display text-lg font-bold text-ink">
                Areas we cover in {city.name}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {city.hubs.map((hub) => (
                  <li
                    key={hub}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-navy-800 shadow-sm"
                  >
                    <Icon name="pin" size={13} className="text-gold" />
                    {hub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
              <h2 className="font-display text-lg font-bold text-ink">
                Sectors we hire for here
              </h2>
              <ul className="mt-5 space-y-2.5">
                {city.sectors.map((sector) => (
                  <li key={sector} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-sm text-ink-soft">{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Roles ---------- */}
      <section
        aria-labelledby="city-roles-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="city-roles-heading"
              eyebrow="Typical Mandates"
              title={`Roles we fill in ${city.name}`}
            />
          </Reveal>

          <ul className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {city.roles.map((role, index) => (
              <Reveal
                as="li"
                key={role.label}
                delay={index * 70}
                className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <h3 className="w-56 shrink-0 font-display text-sm font-bold text-ink">
                  {role.label}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{role.roles}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Services in this city ---------- */}
      <section
        aria-labelledby="city-services-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="city-services-heading"
              eyebrow="Services"
              title={`Every service available in ${city.name}`}
              description={`${yearsInBusiness} years of recruitment experience, delivered locally — permanent, contract, leadership, RPO, bulk hiring and payroll.`}
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={service.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {service.name} in {city.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.intro[0].split(".")[0]}.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Learn more
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

      {/* ---------- FAQ ---------- */}
      <section
        aria-labelledby="city-faq-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="city-faq-heading"
              eyebrow="FAQs"
              title={`Recruitment in ${city.name} — common questions`}
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-white bg-white shadow-card"
          >
            {cityFaqs.map((faq) => (
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

      {/* ---------- Nearby ---------- */}
      <section aria-labelledby="nearby-heading" className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="nearby-heading"
              eyebrow="Other Locations"
              title="We also recruit in"
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 80}>
                <Link
                  href={`/recruitment-agency-in-${item.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name="pin" size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-bold text-ink">
                      {item.name}
                    </span>
                    <span className="block truncate text-xs text-ink-soft">
                      {item.state}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800"
            >
              See all locations
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <LocalServiceJsonLd city={city.name} slug={city.slug} faqs={cityFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Locations", path: "/locations" },
          { name: city.name, path: `/recruitment-agency-in-${city.slug}` },
        ]}
      />
    </>
  );
}
