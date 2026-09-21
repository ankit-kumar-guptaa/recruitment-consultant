import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Stats } from "@/components/home/Stats";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Recruitment Consultant | Pan-India Hiring & Staffing Partner",
  description:
    "Hire pre-screened talent across India with permanent staffing, contract hiring, executive search, RPO and campus recruitment. Shortlists in 48 hours — 5000+ placements delivered.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <Stats />
      <WhyUs />
      <Process />
      <AudienceSplit />
      <Testimonials />
      <Faq />
      <CtaBand />
      <FaqJsonLd />
    </>
  );
}
