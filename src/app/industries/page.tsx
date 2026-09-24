import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Coverage } from "@/components/home/Coverage";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Recruit For — Sector Specialist Hiring in India",
  description:
    "Specialist recruitment across IT, BFSI, manufacturing, healthcare and pharma, retail and e-commerce, logistics, telecom, education, real estate, hospitality, automotive and BPO — with consultants aligned to each sector.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Recruit For — Sector Specialist Hiring in India",
    description:
      "12+ industry practices, each run by consultants who know the roles, the salary bands and where the talent sits.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        variant="teal"
        eyebrow="Industries"
        title="Sector-specialist recruitment across 12+ industries in India"
        description="A generalist recruiter sends you CVs. A sector specialist knows which companies your next hire is likely to be sitting in, what they are being paid, and what it will take to move them."
        crumbs={[{ label: "Industries" }]}
      >
        <EnquiryButton variant="light">Hire In Your Sector</EnquiryButton>
      </PageHero>

      <section
        aria-labelledby="industry-list-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="industry-list-heading"
              eyebrow="Our Practices"
              title="Every practice is run by consultants from that sector"
              description="Permanent, contract, executive search and bulk hiring are available across all of them."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal
                as="li"
                key={industry.name}
                delay={(index % 3) * 90}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-float"
              >
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-navy-50 p-3 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                  <Icon name={industry.icon} size={26} />
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">
                  {industry.name} Recruitment
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  Roles we fill: {industry.roles}.
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={200}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-navy-50 px-6 py-7 text-center sm:flex-row sm:justify-center sm:text-left"
          >
            <p className="text-sm text-ink-soft">
              <strong className="font-semibold text-ink">
                Sector not listed?
              </strong>{" "}
              We have run mandates in agriculture, energy, legal, media and
              non-profit too. Send us the role.
            </p>
            <EnquiryButton className="shrink-0">Ask About Your Sector</EnquiryButton>
          </Reveal>
        </div>
      </section>

      <Coverage />
      <CtaBand />

      <BreadcrumbJsonLd items={[{ name: "Industries", path: "/industries" }]} />
    </>
  );
}
