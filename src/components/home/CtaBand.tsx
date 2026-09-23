import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <Reveal direction="scale" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-600 px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-navy-400/20 blur-2xl"
          />

          <h2
            id="cta-heading"
            className="relative mx-auto max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl"
          >
            Have a role open? Let&apos;s fill it.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy-100 text-balance-pretty">
            Send us the job description and get a screened shortlist within 48 working
            hours. No obligation, no upfront fee, and a 90-day replacement
            guarantee on every permanent placement.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <EnquiryButton variant="light" className="w-full sm:w-auto">
              Hire Talent
            </EnquiryButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <Icon name="mail" size={18} />
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
