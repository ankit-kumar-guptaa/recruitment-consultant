import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";
import { Coverage } from "@/components/home/Coverage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { jobSeekerSteps, industries, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers — Free Placement Support Across India",
  description:
    "Share your CV with a recruitment consultancy that never charges candidates. Openings across IT, BFSI, manufacturing, healthcare, retail, logistics and more, in 16 cities across India.",
  alternates: { canonical: "/job-seekers" },
  openGraph: {
    title: "For Job Seekers — Free Placement Support Across India",
    description:
      "Always free for candidates. Honest role briefings, interview prep and openings across 12+ industries.",
    url: "/job-seekers",
  },
};

export default function JobSeekersPage() {
  return (
    <>
      <PageHero
        variant="teal"
        eyebrow="For Job Seekers"
        title="Move to a role that actually fits — and never pay a rupee"
        description="We are paid by the companies that hire, never by candidates. Send us your profile and a consultant will tell you honestly where you fit in today's market."
        crumbs={[{ label: "Job Seekers" }]}
      >
        <EnquiryButton intent="jobseeker" variant="light">
          Submit Your Profile
        </EnquiryButton>
      </PageHero>

      {/* ---------- Warning / trust ---------- */}
      <section aria-label="Fee policy" className="bg-emerald-50 py-6">
        <div className="container-page flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
            <Icon name="shield" size={20} />
          </span>
          <p className="text-sm leading-relaxed text-emerald-900">
            <strong className="font-bold">We never charge job seekers.</strong>{" "}
            No registration fee, no placement fee, no &ldquo;security
            deposit&rdquo;. If anyone asks you for money in our name, stop and
            email us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section
        aria-labelledby="jobseeker-process-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="jobseeker-process-heading"
              eyebrow="How It Works"
              title="From your CV to your joining date"
            />
          </Reveal>

          <Photo
            slot="jobSeekerInterview"
            sizes="(min-width: 1024px) 70vw, 92vw"
            className="mx-auto mt-10 h-auto w-full max-w-4xl rounded-3xl object-cover shadow-float"
          />

          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-navy-200 lg:block"
            />
            {jobSeekerSteps.map((item, index) => (
              <Reveal
                as="li"
                key={item.step}
                delay={index * 120}
                className="relative"
              >
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

      {/* ---------- Where we hire ---------- */}
      <section
        aria-labelledby="jobseeker-sectors-heading"
        className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="jobseeker-sectors-heading"
              eyebrow="Where The Openings Are"
              title="We place candidates across 12+ industries"
              description="Permanent roles, contract assignments and leadership moves — from fresher intakes to functional heads."
            />
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal
                as="li"
                key={industry.name}
                direction="scale"
                delay={(index % 4) * 70}
                className="flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-4 shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700">
                  <Icon name={industry.icon} size={20} />
                </span>
                <span className="text-sm font-semibold leading-tight text-ink">
                  {industry.name}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Candidate FAQ ---------- */}
      <section
        aria-labelledby="jobseeker-faq-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              id="jobseeker-faq-heading"
              eyebrow="Candidate FAQs"
              title="Questions candidates ask us"
            />
          </Reveal>

          <Reveal
            delay={120}
            className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card"
          >
            {[
              {
                q: "Do I have to pay anything?",
                a: "No. Our services are completely free for candidates at every stage — registration, interviews, offer and joining. We are paid by the hiring company.",
              },
              {
                q: "What happens after I send my CV?",
                a: "A consultant from your sector reviews it and calls you within a few working days if there is a fit. If there is nothing suitable right now we keep your profile on file and come back when a matching role opens.",
              },
              {
                q: "Will my current employer find out?",
                a: "No. We never share your profile with a company without telling you first and getting your go-ahead, and we can block specific employers on request.",
              },
              {
                q: "Do you help with interview preparation?",
                a: "Yes. Before every round you get the full brief — the team, the manager, the budget band and what they are really looking for — plus feedback after each stage.",
              },
              {
                q: "I am a fresher. Can you help?",
                a: "Yes. We run campus and bulk fresher drives across engineering, management and skill-based colleges, and place freshers into IT, BPO, retail, banking and manufacturing roles.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                  <h3 className="font-display text-base font-bold text-ink">
                    {faq.q}
                  </h3>
                  <Icon
                    name="chevron"
                    size={20}
                    className="shrink-0 text-navy-600 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            ))}
          </Reveal>

          <Reveal delay={200} className="mt-10 text-center">
            <EnquiryButton intent="jobseeker">Submit Your Profile</EnquiryButton>
            <p className="mt-4 text-sm text-ink-soft">
              Hiring for a company instead?{" "}
              <Link
                href="/employers"
                className="font-semibold text-navy-600 underline underline-offset-2"
              >
                See our employer services
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <Coverage />

      <BreadcrumbJsonLd items={[{ name: "Job Seekers", path: "/job-seekers" }]} />
    </>
  );
}
