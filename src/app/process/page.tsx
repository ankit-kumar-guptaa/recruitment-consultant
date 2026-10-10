import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { hiringProcess, whyUs, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Hiring Process — How a Recruitment Agency Mandate Actually Runs",
  description:
    "Step by step: how we take a requirement from brief to joining. Requirement mapping, sourcing and screening, shortlist and interviews, offer and the 90-day replacement guarantee — with the timelines you can hold us to.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Hiring Process — How a Recruitment Agency Mandate Runs",
    description:
      "Brief to joining in four stages, with the timeline and the responsibilities on both sides stated up front.",
    url: "/process",
  },
};

/** What each side owns. Stated plainly, because most stalled mandates stall here. */
const responsibilities = [
  {
    stage: "At the brief",
    us: "Ask the questions that surface a hard-to-fill role before the search starts — budget against market, notice-period tolerance, must-have versus nice-to-have.",
    you: "One decision-maker who can sign off the role, the band and the location. A brief agreed by committee takes three weeks to agree and changes in week four.",
  },
  {
    stage: "During sourcing",
    us: "Screen on skill, stability, notice period and compensation fit, so you never interview someone who was never going to accept.",
    you: "Feedback on the first shortlist within 2–3 working days. The first shortlist is also a calibration tool — tell us what was wrong with it.",
  },
  {
    stage: "During interviews",
    us: "Schedule every round, prepare the candidate, chase feedback, keep them warm between rounds.",
    you: "Interview slots inside a week. Good candidates hold three processes at once; a two-week gap between rounds loses them to whoever moves faster.",
  },
  {
    stage: "At offer",
    us: "Manage negotiation, flag a counter-offer risk early, stay in contact through the whole notice period.",
    you: "A decision and an offer letter quickly. The gap between verbal yes and written offer is where most drop-offs happen.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        variant="cobalt"
        eyebrow="How We Work"
        title="How a mandate runs, from brief to joining"
        description="No mystery and no black box. Four stages, the timeline you can hold us to at each one, and what we need from you to hit it."
        crumbs={[{ label: "Our Process" }]}
      >
        <EnquiryButton variant="light">Start a Requirement</EnquiryButton>
      </PageHero>

      {/* ---------- The four stages ---------- */}
      <section
        aria-labelledby="stages-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="stages-heading"
              eyebrow="The Four Stages"
              title="Brief, search, shortlist, close"
              description="Most mid-level roles run brief-to-offer in two to four weeks. Niche and leadership mandates take longer, and we say so at the brief rather than at week six."
            />
          </Reveal>

          <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-navy-200 lg:block"
            />
            {hiringProcess.map((step, index) => (
              <Reveal as="li" key={step.step} delay={index * 120} className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy-800 font-display text-base font-bold text-white ring-8 ring-white">
                  {step.step}
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Who does what ---------- */}
      <section
        aria-labelledby="responsibilities-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="responsibilities-heading"
              eyebrow="Who Does What"
              title="A mandate is a two-sided process"
              description="Searches rarely stall because the talent does not exist. They stall on feedback, interview slots and offer decisions — so here is what each side owns."
            />
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Responsibilities at each stage of a recruitment mandate
              </caption>
              <thead className="bg-navy-50/80 text-[0.7rem] uppercase tracking-[0.08em] text-navy-800">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-bold">Stage</th>
                  <th scope="col" className="px-5 py-3.5 font-bold">We do</th>
                  <th scope="col" className="px-5 py-3.5 font-bold">You do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {responsibilities.map((row) => (
                  <tr key={row.stage}>
                    <th
                      scope="row"
                      className="px-5 py-4 align-top font-display text-sm font-bold text-ink"
                    >
                      {row.stage}
                    </th>
                    <td className="px-5 py-4 align-top leading-relaxed text-ink-soft">
                      {row.us}
                    </td>
                    <td className="px-5 py-4 align-top leading-relaxed text-ink-soft">
                      {row.you}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- What you get ---------- */}
      <section
        aria-labelledby="guarantees-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="guarantees-heading"
              eyebrow="What You Get"
              title="The commitments that come with every mandate"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 4) * 90}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name={item.icon} size={22} />
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

          <Reveal delay={200} className="mt-10 text-center">
            <p className="text-sm text-ink-soft">
              Questions about fees, guarantees or timelines are answered on the{" "}
              <Link
                href="/faq"
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                FAQ page
              </Link>
              , or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <HowToJsonLd
        name="How our recruitment process works"
        description="How Recruitment Consultant takes an employer's requirement from brief to joining, in four stages."
        path="/process"
        steps={hiringProcess.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
      />
      <BreadcrumbJsonLd items={[{ name: "Our Process", path: "/process" }]} />
    </>
  );
}
