import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { DotGrid } from "@/components/ui/Artwork";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { CtaBand } from "@/components/home/CtaBand";
import { Coverage } from "@/components/home/Coverage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  siteConfig,
  milestones,
  values,
  heroStats,
  industries,
  yearsInBusiness,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Recruitment Agency in India Since 2010",
  description:
    "Recruitment Consultant has been a hiring partner to Indian employers since 2010. Learn how our permanent staffing, contract staffing, executive search and RPO practice works, and what we stand for.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — Recruitment Agency in India Since 2010",
    description:
      "A pan-India recruitment consultancy since 2010: permanent staffing, contract hiring, executive search, RPO and payroll under one roof.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving employers since ${siteConfig.foundedYear}`}
        title="A recruitment agency built around one idea: someone has to own the hire"
        description={`Recruitment Consultant started in ${siteConfig.foundedYear} as a two-person permanent-recruitment desk in ${siteConfig.address.locality}. ${yearsInBusiness} years later we run permanent staffing, contract staffing, executive search, RPO and payroll for employers across India — and the principle has not changed.`}
        crumbs={[{ label: "About Us" }]}
        variant="navy"
      >
        <EnquiryButton variant="light">Talk to a Consultant</EnquiryButton>
      </PageHero>

      {/* ---------- Story ---------- */}
      <section
        aria-labelledby="story-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-sm pb-10 pl-6 lg:max-w-md">
              <DotGrid
                aria-hidden="true"
                className="absolute right-2 top-2 h-24 w-24 text-navy-200"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 bottom-16 h-20 w-20 rounded-2xl bg-gold/15"
              />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-200 via-navy-100 to-navy-50 ring-1 ring-navy-100">
                <Image
                  src="/images/hero-consultant.webp"
                  alt="Consultant at Recruitment Consultant, a recruitment agency in India"
                  width={746}
                  height={1056}
                  sizes="(min-width: 1024px) 26vw, 70vw"
                  className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[13rem] rounded-2xl bg-white p-5 shadow-float ring-1 ring-slate-100">
                <p className="font-display text-3xl font-extrabold leading-none text-navy-900">
                  {siteConfig.foundedYear}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-ink">
                  The year we started hiring for Indian employers
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="right">
              <SectionHeading
                id="story-heading"
                align="left"
                eyebrow="Our Story"
                title={`${yearsInBusiness} years of filling roles other people had given up on`}
              />
            </Reveal>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <Reveal as="p" direction="right" delay={80}>
                We began in {siteConfig.foundedYear} doing one thing: permanent
                recruitment for IT and BFSI companies in{" "}
                {siteConfig.address.locality} who were tired of paying for job
                portals and still doing all the screening themselves. Our first
                clients stayed because we did the part that actually takes time —
                talking to candidates, checking whether they would really move,
                and telling the client the truth when a role was priced wrong.
              </Reveal>
              <Reveal as="p" direction="right" delay={140}>
                As those clients grew, they asked for more. Contract headcount
                they did not want on their own payroll. Confidential leadership
                searches they could not advertise. Whole hiring functions run for
                them during a ramp-up. We built each practice only when an
                existing client needed it, which is why they all still work the
                same way: one named consultant, one written SLA, one person
                answerable for the outcome.
              </Reveal>
              <Reveal as="p" direction="right" delay={200}>
                Today we recruit across{" "}
                {industries.length}+ industries and 16 cities, and source for
                100+ locations across India — for startups making their first ten
                hires and for enterprises opening new sites.
              </Reveal>
            </div>

            <Reveal delay={260} className="mt-8">
              <EnquiryButton>Start a Conversation</EnquiryButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Numbers ---------- */}
      <section aria-label="Company numbers" className="bg-navy-900 py-12 sm:py-14">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold text-white sm:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 block text-sm font-medium text-navy-200">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section
        id="milestones"
        aria-labelledby="milestones-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="milestones-heading"
              eyebrow="Milestones"
              title={`How the practice grew from ${siteConfig.foundedYear} to today`}
              description="Every service line here exists because an existing client asked for it — not because it looked good on a brochure."
            />
          </Reveal>

          <ol className="relative mt-14 space-y-8 before:absolute before:left-[1.4rem] before:top-2 before:bottom-2 before:w-px before:bg-navy-200 sm:before:left-1/2">
            {milestones.map((milestone, index) => (
              <Reveal
                as="li"
                key={milestone.year}
                delay={index * 90}
                direction={index % 2 === 0 ? "left" : "right"}
                className="relative pl-14 sm:flex sm:items-start sm:gap-8 sm:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full bg-navy-800 font-display text-[0.7rem] font-bold text-white ring-8 ring-white sm:left-1/2 sm:-translate-x-1/2"
                >
                  {milestone.year === "Today" ? "Now" : milestone.year}
                </span>

                <div
                  className={`sm:w-1/2 ${
                    index % 2 === 0
                      ? "sm:pr-16 sm:text-right"
                      : "sm:order-2 sm:pl-16"
                  }`}
                >
                  <p className="font-display text-sm font-bold text-navy-600">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {milestone.description}
                  </p>
                </div>
                <div className="hidden sm:block sm:w-1/2" aria-hidden="true" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section
        id="values"
        aria-labelledby="values-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="values-heading"
              eyebrow="What We Stand For"
              title="Four things we will not trade away for a placement"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal
                as="li"
                key={value.title}
                delay={index * 100}
                className="rounded-2xl border border-white bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-[#b8770a]">
                  <Icon name={value.icon} size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Coverage />
      <CtaBand />

      <BreadcrumbJsonLd items={[{ name: "About Us", path: "/about" }]} />
    </>
  );
}
