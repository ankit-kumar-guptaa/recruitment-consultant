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
import { rolePages, roleBySlug } from "@/lib/roles-content";
import { industryBySlug } from "@/lib/industries-content";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Only the curated role list is served; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return rolePages.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const role = roleBySlug.get(slug);
  if (!role) return {};

  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: { canonical: `/hire/${role.slug}` },
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      url: `/hire/${role.slug}`,
    },
  };
}

export default async function RolePage({ params }: Params) {
  const { slug } = await params;
  const role = roleBySlug.get(slug);
  if (!role) notFound();

  const related = role.related
    .map((s) => roleBySlug.get(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const industries = role.industries
    .map((s) => industryBySlug.get(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <PageHero
        variant="gold"
        eyebrow={`Hire ${role.title}s`}
        title={role.h1}
        description={role.intro[0]}
        crumbs={[
          { label: "Hire By Role", href: "/hire" },
          { label: role.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton variant="light">
            Share This Requirement
          </EnquiryButton>
          <a
            href="#salary"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
          >
            See salary bands
            <Icon name="chevron" size={18} />
          </a>
        </div>
      </PageHero>

      {/* ---------- Context + timelines ---------- */}
      <section
        aria-labelledby="role-context-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="role-context-heading"
                align="left"
                eyebrow="How We Fill It"
                title={`What actually decides a ${role.title.toLowerCase()} hire`}
              />
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              {role.intro.slice(1).map((paragraph, index) => (
                <Reveal as="p" key={paragraph.slice(0, 24)} delay={index * 80}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-8">
              <EnquiryButton>Get a Shortlist</EnquiryButton>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="rounded-3xl border border-slate-100 bg-navy-50/70 p-7 shadow-card sm:p-8">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-700">
                Timelines & Market
              </p>
              <h2 className="mt-2 font-display text-lg font-bold text-ink">
                What to expect on this role
              </h2>
              <dl className="mt-6 space-y-4">
                {role.hiringNotes.map((note) => (
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

      {/* ---------- Salary bands ---------- */}
      <section
        id="salary"
        aria-labelledby="salary-heading"
        className="scroll-mt-24 bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="salary-heading"
              eyebrow="Salary Benchmark"
              title={`${role.title} salary bands in India`}
              description="Indicative metro ranges for 2026 — Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune and Chennai. Tier-2 cities typically run 20–30% lower for the same scope."
            />
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Indicative annual CTC bands for {role.title} roles in Indian
                metros, by years of experience
              </caption>
              <thead className="bg-navy-50/80 text-[0.7rem] uppercase tracking-[0.08em] text-navy-800">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Experience
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Indicative CTC
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    What that buys
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {role.salaryBands.map((band) => (
                  <tr key={band.experience}>
                    <th
                      scope="row"
                      className="px-5 py-4 font-display text-sm font-bold text-ink"
                    >
                      {band.experience}
                    </th>
                    <td className="px-5 py-4 font-semibold text-navy-800">
                      {band.band}
                    </td>
                    <td className="px-5 py-4 leading-relaxed text-ink-soft">
                      {band.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal delay={150} className="mt-5">
            <p className="text-xs leading-relaxed text-ink-soft">
              These are negotiating frames drawn from the mandates we run, not a
              quote. Bands move with sector, funding stage, city and how scarce
              the specific skill is in that market — ask us for a benchmark
              against your exact role and location.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Screening checklist ---------- */}
      <section
        aria-labelledby="screen-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="screen-heading"
              eyebrow="Our Screen"
              title="What we verify before a profile reaches you"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {role.mustHave.map((group, index) => (
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

      {/* ---------- JD outline + interview structure ---------- */}
      <section
        aria-labelledby="jd-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <SectionHeading
                id="jd-heading"
                align="left"
                eyebrow="JD Outline"
                title={`What a ${role.title.toLowerCase()} actually owns`}
                description="Use this as the starting point for your job description — it is the scope we brief candidates on."
              />
            </Reveal>
            <ul className="mt-8 space-y-3">
              {role.responsibilities.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.slice(0, 28)}
                  delay={index * 60}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon name="check" size={12} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Interview Structure"
                title="A process that actually selects"
                description="Four rounds, each testing something different. Rounds that repeat each other cost you candidates without improving the decision."
              />
            </Reveal>
            <ol className="mt-8 space-y-4">
              {role.interview.map((stage, index) => (
                <Reveal
                  as="li"
                  key={stage.stage}
                  delay={index * 90}
                  className="rounded-2xl border border-white bg-white p-6 shadow-card"
                >
                  <h3 className="font-display text-sm font-bold text-navy-800">
                    {stage.stage}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {stage.detail}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Why it stays open ---------- */}
      <section
        aria-labelledby="pitfalls-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="pitfalls-heading"
              eyebrow="Why It Stays Open"
              title={`The mistakes that keep ${role.title.toLowerCase()} roles unfilled`}
              description="We raise these at the briefing rather than after a month of silence."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {role.pitfalls.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 2) * 100}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
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

      {/* ---------- Sectors that hire this role ---------- */}
      <section
        aria-labelledby="role-industries-heading"
        className="bg-navy-50/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="role-industries-heading"
              eyebrow="Sector Context"
              title={`Where we fill ${role.title.toLowerCase()} roles most`}
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal as="li" key={industry.slug} delay={index * 100}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={industry.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {industry.hiringNotes[0].value}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Sector practice
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
        aria-labelledby="role-faq-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="role-faq-heading"
              eyebrow="FAQs"
              title={`Hiring a ${role.title.toLowerCase()} — common questions`}
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card"
          >
            {role.faqs.map((faq) => (
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
              Send the requisition to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>{" "}
              and we will come back with a realistic band and timeline before
              any search starts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Related roles ---------- */}
      <section
        aria-labelledby="related-roles-heading"
        className="bg-navy-50/60 py-16 sm:py-20"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="related-roles-heading"
              eyebrow="Related Roles"
              title="Hired alongside this one"
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 100}>
                <Link
                  href={`/hire/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    Hire {item.title}s
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.salaryBands[1].experience}: {item.salaryBands[1].band}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    See the brief
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
              href="/hire"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 underline underline-offset-4"
            >
              See every role we hire for
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <ServiceJsonLd
        name={`${role.title} Recruitment Services in India`}
        description={role.metaDescription}
        path={`/hire/${role.slug}`}
        faqs={role.faqs}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Hire By Role", path: "/hire" },
          { name: role.title, path: `/hire/${role.slug}` },
        ]}
      />
    </>
  );
}
