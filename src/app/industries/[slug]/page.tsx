import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { industryPages, industryBySlug } from "@/lib/industries-content";
import { serviceDetails } from "@/lib/services-content";
import { rolePages } from "@/lib/roles-content";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Only the 12 sector practices are served; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug.get(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const industry = industryBySlug.get(slug);
  if (!industry) notFound();

  // Role briefs that name this sector as one of their main hiring grounds.
  const sectorRoles = rolePages.filter((role) =>
    role.industries.includes(industry.slug),
  );

  const related = industry.related
    .map((s) => industryBySlug.get(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow={`${industry.name} Practice`}
        title={industry.h1}
        description={industry.intro[0]}
        crumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton variant="light">
            Hire In {industry.name}
          </EnquiryButton>
          <a
            href="#roles"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
          >
            See roles we fill
            <Icon name="chevron" size={18} />
          </a>
        </div>
      </PageHero>

      {/* ---------- Sector context ---------- */}
      <section
        aria-labelledby="sector-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="sector-heading"
                align="left"
                eyebrow="How We Work This Sector"
                title={`What ${industry.label} hiring actually demands`}
              />
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              {industry.intro.slice(1).map((paragraph, index) => (
                <Reveal as="p" key={paragraph.slice(0, 24)} delay={index * 80}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-8">
              <EnquiryButton>Share a {industry.name} Requirement</EnquiryButton>
            </Reveal>
          </div>

          {/* Notice periods, attrition and timelines — the numbers hiring
              managers ask for first and most agencies never publish. */}
          <Reveal direction="right">
            <div className="rounded-3xl border border-slate-100 bg-navy-50/70 p-7 shadow-card sm:p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-700">
                Hiring Reality Check
              </p>
              <h2 className="mt-2 font-display text-lg font-bold text-ink">
                What to expect in {industry.name}
              </h2>
              <dl className="mt-6 space-y-4">
                {industry.hiringNotes.map((note) => (
                  <div
                    key={note.label}
                    className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy-700">
                      {note.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {note.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Roles by function ---------- */}
      <section
        id="roles"
        aria-labelledby="roles-heading"
        className="scroll-mt-24 bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="roles-heading"
              eyebrow="Roles We Fill"
              title={`${industry.name} mandates, grouped by the function that owns the headcount`}
              description="Permanent, contract, executive search and bulk hiring are all available within this practice."
            />
          </Reveal>

          <ul className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {industry.rolesByFunction.map((group, index) => (
              <Reveal
                as="li"
                key={group.label}
                delay={(index % 4) * 70}
                className="flex flex-col gap-1.5 p-5 sm:flex-row sm:items-baseline sm:gap-6 sm:p-6"
              >
                <h3 className="w-56 shrink-0 font-display text-sm font-bold text-ink">
                  {group.label}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {group.roles}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Skills and certifications ---------- */}
      <section
        aria-labelledby="skills-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="skills-heading"
              eyebrow="How We Screen"
              title={`What we verify before a ${industry.label} profile reaches you`}
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {industry.skills.map((group, index) => (
              <Reveal
                as="li"
                key={group.group}
                delay={index * 100}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name="check" size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {group.group}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {group.items}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- What makes it hard ---------- */}
      <section
        aria-labelledby="challenges-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="challenges-heading"
              eyebrow="The Hard Parts"
              title={`Why ${industry.label} roles stay open — and how we close them`}
              description="We would rather tell you where a mandate is genuinely difficult than run a search that quietly stalls."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {industry.challenges.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 2) * 100}
                className="rounded-2xl border border-white bg-white p-7 shadow-card"
              >
                <h3 className="font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Where the talent sits ---------- */}
      <section
        aria-labelledby="hubs-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="hubs-heading"
              eyebrow="Talent Geography"
              title={`Where ${industry.name} talent actually concentrates`}
              description="We recruit pan-India, but we tell you up front which market a role is realistically filled from."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.talentHubs.map((hub, index) => (
              <Reveal
                as="li"
                key={hub.city}
                delay={(index % 3) * 90}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name="pin" size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {hub.city}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {hub.note}
                </p>
                {hub.slug ? (
                  <Link
                    href={`/recruitment-agency-in-${hub.slug}`}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600"
                  >
                    Hiring in this market
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Role briefs for this sector ---------- */}
      {sectorRoles.length > 0 ? (
        <section
          aria-labelledby="sector-roles-heading"
          className="bg-navy-50/60 py-16 sm:py-20"
        >
          <div className="container-page">
            <Reveal>
              <SectionHeading
                id="sector-roles-heading"
                eyebrow="Role Briefs"
                title={`Hiring briefs for ${industry.name} roles`}
                description="Indicative salary bands, realistic timelines and the checklist we screen on, role by role."
              />
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sectorRoles.map((role, index) => (
                <Reveal as="li" key={role.slug} delay={(index % 3) * 80}>
                  <Link
                    href={`/hire/${role.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                  >
                    <h3 className="font-display text-base font-bold text-ink">
                      Hire {role.title}s
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {role.salaryBands[1].experience}:{" "}
                      {role.salaryBands[1].band}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                      Salary bands &amp; checklist
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
      ) : null}

      {/* ---------- Services available in this practice ---------- */}
      <section
        aria-labelledby="industry-services-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="industry-services-heading"
              eyebrow="Engagement Models"
              title={`How you can engage us for ${industry.label}`}
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={service.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.metaDescription.split(".")[0]}.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    How it works
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
        aria-labelledby="industry-faq-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="industry-faq-heading"
              eyebrow="FAQs"
              title={`${industry.name} recruitment — questions employers ask us`}
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card"
          >
            {industry.faqs.map((faq) => (
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

          <Reveal delay={200} className="mt-8 text-center">
            <p className="text-sm text-ink-soft">
              Something not covered here? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              with the role and we will come back with a realistic timeline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Related practices ---------- */}
      <section
        aria-labelledby="related-industries-heading"
        className="bg-navy-50/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="related-industries-heading"
              eyebrow="Other Practices"
              title="Sectors we are often briefed on alongside this one"
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 100}>
                <Link
                  href={`/industries/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.rolesByFunction[0].roles}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Visit the practice
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

          <Reveal delay={200} className="mt-8 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 underline underline-offset-4"
            >
              See all 12 sector practices
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <ServiceJsonLd
        name={`${industry.name} Recruitment Services in India`}
        description={industry.metaDescription}
        path={`/industries/${industry.slug}`}
        faqs={industry.faqs}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />
    </>
  );
}
