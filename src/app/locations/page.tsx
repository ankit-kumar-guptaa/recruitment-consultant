import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { cityPages } from "@/lib/cities-content";

export const metadata: Metadata = {
  title: "Our Locations — Recruitment Agency Across India",
  description:
    "Recruitment and staffing services across 17 Indian cities — Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Kolkata and more, with sourcing in 100+ locations on request.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Our Locations — Recruitment Agency Across India",
    description:
      "Consultants covering 17 cities and sourcing across 100+ locations in India.",
    url: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        variant="teal"
        eyebrow="Locations"
        title="Recruitment agency services across India"
        description="Metro hubs, tier-2 manufacturing belts and emerging tech corridors — each with consultants who know the local salary bands, notice-period norms and talent pools."
        crumbs={[{ label: "Locations" }]}
      >
        <EnquiryButton variant="light">Hire In Your City</EnquiryButton>
      </PageHero>

      <section
        aria-labelledby="city-list-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="city-list-heading"
              eyebrow="Where We Hire"
              title="Pick your city"
              description="Every service — permanent, contract, executive search, RPO, bulk hiring and payroll — is available in each of these markets."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityPages.map((city, index) => (
              <Reveal as="li" key={city.slug} delay={(index % 3) * 90}>
                <Link
                  href={`/recruitment-agency-in-${city.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-float"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name="pin" size={24} />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-bold text-ink">
                    Recruitment Agency in {city.name}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-ink-soft">
                    {city.state}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {city.sectors.slice(0, 4).join(" · ")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    View {city.name} page
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

          <Reveal
            delay={240}
            className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-navy-50 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <p className="text-sm text-ink-soft">
              <strong className="font-semibold text-ink">
                Hiring somewhere we have not listed?
              </strong>{" "}
              We source across 100+ locations in India on request, including
              tier-3 towns and new industrial sites.
            </p>
            <EnquiryButton className="shrink-0">Ask About Your Location</EnquiryButton>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <BreadcrumbJsonLd items={[{ name: "Locations", path: "/locations" }]} />
    </>
  );
}
