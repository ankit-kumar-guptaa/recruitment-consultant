import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Services } from "@/components/home/Services";
import { HiringModels } from "@/components/home/HiringModels";
import { Comparison } from "@/components/home/Comparison";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServicesJsonLd,
} from "@/components/seo/JsonLd";
import { whyUs, shortlistPreview } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers — Hire Pre-Screened Talent Across India",
  description:
    "Hire with a recruitment agency that carries the risk: screened shortlists in 48 working hours, no upfront fee on permanent roles, a 90-day replacement guarantee, and payroll and compliance handled for contract staff.",
  alternates: { canonical: "/employers" },
  openGraph: {
    title: "For Employers — Hire Pre-Screened Talent Across India",
    description:
      "Screened shortlists in 48 hours, no upfront fee, 90-day replacement guarantee. Permanent, contract, executive search and RPO.",
    url: "/employers",
  },
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Hire without the hiring overhead"
        description="Send us the job description. You get a screened, briefed shortlist in 48 working hours, one consultant answerable for the role, and an invoice only when your candidate actually joins."
        crumbs={[{ label: "Employers" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton variant="light">Share a Requirement</EnquiryButton>
          <a
            href="#how-we-charge"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10"
          >
            See how fees work
            <Icon name="chevron" size={18} />
          </a>
        </div>
      </PageHero>

      {/* ---------- Commitments ---------- */}
      <section
        aria-labelledby="commitments-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="commitments-heading"
                align="left"
                eyebrow="What We Commit To"
                title="Four commitments we put in the contract"
                description="These are the reasons employers move their hiring to us — so they are written into the agreement, not just the website."
              />
            </Reveal>

            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {whyUs.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 100}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-[#b8770a]">
                    <Icon name={item.icon} size={24} />
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

          <Reveal direction="right" className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-100 via-navy-50 to-transparent blur-xl"
            />
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-float sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-600">
                    Shortlist ready
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink">
                    {shortlistPreview.role}
                  </h3>
                  <p className="text-sm text-ink-soft">
                    {shortlistPreview.location}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  42 hrs
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {shortlistPreview.candidates.map((candidate) => (
                  <li
                    key={candidate.initials}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-bold text-white ${candidate.tone}`}
                    >
                      {candidate.initials}
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-sm font-bold text-ink">
                        {candidate.name}
                      </strong>
                      <span className="block truncate text-xs text-ink-soft">
                        {candidate.note}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="block font-display text-sm font-extrabold text-navy-700">
                        {candidate.match}%
                      </span>
                      <span className="block text-[0.65rem] text-ink-soft">
                        match
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-navy-900 px-4 py-3.5 text-white">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15">
                  <Icon name="check" size={17} />
                </span>
                <p className="text-sm font-medium leading-snug">
                  Interview slots confirmed — offer stage in 9 days
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Services />
      <div id="how-we-charge" className="scroll-mt-24">
        <HiringModels />
      </div>
      <Process />
      <Comparison />
      <Testimonials />
      <Faq />
      <CtaBand />

      <ServicesJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Employers", path: "/employers" }]} />
    </>
  );
}
