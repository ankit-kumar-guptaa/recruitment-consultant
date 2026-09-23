import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Process } from "@/components/home/Process";
import { HiringModels } from "@/components/home/HiringModels";
import { Comparison } from "@/components/home/Comparison";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServicesJsonLd,
} from "@/components/seo/JsonLd";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services in India for Employers",
  description:
    "Permanent staffing services, contract and temporary staffing, executive search, RPO, bulk and campus hiring, and third-party payroll — delivered across India with 48-hour shortlists and a 90-day replacement guarantee.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Recruitment & Staffing Services in India for Employers",
    description:
      "Six recruitment services under one roof: permanent, contract, executive search, RPO, bulk hiring and payroll outsourcing.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Recruitment and staffing services for employers in India"
        description="Six practices under one roof, so a single consultant can solve the whole problem — whether that is one confidential leadership hire or 300 warehouse associates across three cities."
        crumbs={[{ label: "Our Services" }]}
      >
        <EnquiryButton variant="light">Get a Hiring Plan</EnquiryButton>
      </PageHero>

      {/* ---------- Service detail ---------- */}
      <section
        aria-labelledby="services-detail-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <h2 id="services-detail-heading" className="sr-only">
            Our recruitment services in detail
          </h2>

          <ul className="space-y-6">
            {services.map((service, index) => (
              <Reveal
                as="li"
                key={service.title}
                delay={(index % 2) * 90}
                id={service.href.split("/").pop()}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition duration-300 hover:shadow-float"
              >
                <div className="grid gap-6 p-7 sm:p-9 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-50 text-navy-700">
                    <Icon name={service.icon} size={28} />
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-700"
                        >
                          <Icon name="check" size={12} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:text-right">
                    <EnquiryButton className="w-full lg:w-auto">
                      Enquire
                    </EnquiryButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <HiringModels />
      <Process />
      <Comparison />

      {/* ---------- What is included ---------- */}
      <section
        aria-labelledby="included-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="included-heading"
              eyebrow="Included In Every Mandate"
              title="What you get regardless of which service you use"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "target",
                title: "A named consultant",
                text: "One specialist owns your roles end to end — no shared inbox, no handover halfway through.",
              },
              {
                icon: "file",
                title: "A written SLA",
                text: "Shortlist timelines, fee, guarantee period and replacement terms agreed in writing before the search starts.",
              },
              {
                icon: "users",
                title: "Screened, briefed candidates",
                text: "Every profile has been spoken to, checked on notice period and compensation, and briefed on your role.",
              },
              {
                icon: "clock",
                title: "Weekly pipeline reporting",
                text: "Where each role stands, who is in which round, and what is blocking a close.",
              },
              {
                icon: "shield",
                title: "Replacement cover",
                text: "90 days on permanent placements, with longer terms available on retained leadership mandates.",
              },
              {
                icon: "bolt",
                title: "Interview coordination",
                text: "We schedule every round, chase feedback and keep candidates warm so offers do not go cold.",
              },
            ].map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 3) * 100}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Faq />
      <CtaBand />

      <ServicesJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Our Services", path: "/services" }]} />
    </>
  );
}
