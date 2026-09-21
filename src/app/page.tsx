import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { HiringModels } from "@/components/home/HiringModels";
import { Comparison } from "@/components/home/Comparison";
import { Coverage } from "@/components/home/Coverage";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { Testimonials } from "@/components/home/Testimonials";
import { Insights } from "@/components/home/Insights";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqJsonLd, ServicesJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Recruitment Agency in India | Staffing & Hiring Company for Employers",
  description:
    "Recruitment agency in India for employers. Permanent staffing, contract & temporary staffing, executive search, RPO, bulk and campus hiring across 12+ industries. Screened shortlists in 48 hours, no upfront fee, 90-day replacement guarantee.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Recruitment Agency in India | Staffing & Hiring Company for Employers",
    description:
      "Hire pre-screened talent across India — permanent staffing, contract hiring, executive search and RPO. Shortlists in 48 hours, no upfront fee.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Industries />
      <Process />
      <HiringModels />
      <Comparison />
      <Coverage />
      <AudienceSplit />
      <Testimonials />
      <Insights />
      <Faq />
      <CtaBand />
      <ServicesJsonLd />
      <FaqJsonLd />
    </>
  );
}
