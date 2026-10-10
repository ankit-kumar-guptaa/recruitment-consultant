import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Coverage } from "@/components/home/Coverage";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { rolePages, roleGroups } from "@/lib/roles-content";

export const metadata: Metadata = {
  title: "Hire By Role — Salary Bands, Timelines & Screening Checklists",
  description:
    "Hire developers, sales and marketing managers, HR, finance and plant engineers in India. Each role page carries indicative salary bands, realistic time-to-hire and the checklist we screen on.",
  alternates: { canonical: "/hire" },
  openGraph: {
    title: "Hire By Role — Salary Bands, Timelines & Screening Checklists",
    description:
      "16 role briefs with indicative 2026 salary bands, realistic hiring timelines and the screening checklist behind every shortlist we send.",
    url: "/hire",
  },
};

export default function HireHubPage() {
  return (
    <>
      <PageHero
        variant="gold"
        eyebrow="Hire By Role"
        title="Hiring briefs for the roles employers ask us for most"
        description="Every brief below carries the same three things a hiring manager actually wants before opening a search: what the market pays, how long it will realistically take, and exactly what we check before a profile reaches you."
        crumbs={[{ label: "Hire By Role" }]}
      >
        <EnquiryButton variant="light">Share a Requirement</EnquiryButton>
      </PageHero>

      {roleGroups.map((group, groupIndex) => {
        const roles = rolePages.filter((role) => role.group === group);
        const headingId = `group-${group.toLowerCase().replace(/[^a-z]+/g, "-")}`;

        return (
          <section
            key={group}
            aria-labelledby={headingId}
            className={
              groupIndex % 2 === 0
                ? "py-16 sm:py-20"
                : "bg-navy-50/60 py-16 sm:py-20"
            }
          >
            <div className="container-page">
              <Reveal>
                <SectionHeading
                  id={headingId}
                  eyebrow={group}
                  title={`${group} roles we recruit for`}
                />
              </Reveal>

              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {roles.map((role, index) => (
                  <Reveal as="li" key={role.slug} delay={(index % 3) * 80}>
                    <Link
                      href={`/hire/${role.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-float"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                        <Icon name={role.icon} size={24} />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-ink">
                        Hire {role.title}s
                      </h3>
                      <dl className="mt-3 flex-1 space-y-1.5 text-sm text-ink-soft">
                        <div className="flex gap-2">
                          <dt className="font-semibold text-ink">Band:</dt>
                          <dd>
                            {role.salaryBands[1].band} ·{" "}
                            {role.salaryBands[1].experience}
                          </dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="font-semibold text-ink">Shortlist:</dt>
                          <dd>{role.hiringNotes[0].value.split(";")[0]}</dd>
                        </div>
                      </dl>
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
        );
      })}

      <section aria-labelledby="role-not-listed" className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="flex flex-col items-center gap-5 rounded-3xl bg-navy-50 px-6 py-9 text-center sm:px-10">
            <h2
              id="role-not-listed"
              className="font-display text-xl font-bold text-ink"
            >
              Role not on the list?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
              These sixteen are simply the briefs we are asked for most often. We
              recruit across every function in our{" "}
              <Link
                href="/industries"
                className="font-semibold text-navy-700 underline underline-offset-2"
              >
                twelve sector practices
              </Link>
              , from a single niche specialist to a hundred-seat floor. Send us
              the requisition and you will get a band, a timeline and an honest
              view of how hard it will be before any search starts.
            </p>
            <EnquiryButton>Send Us the Role</EnquiryButton>
          </Reveal>
        </div>
      </section>

      <Coverage />
      <CtaBand />

      <BreadcrumbJsonLd items={[{ name: "Hire By Role", path: "/hire" }]} />
    </>
  );
}
