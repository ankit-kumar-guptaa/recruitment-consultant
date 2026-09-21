import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { whyUs } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <SectionHeading
            id="why-us-heading"
            align="left"
            eyebrow="Why Choose Us"
            title="A hiring partner that actually shortens your hiring cycle"
            description="We combine an active pan-India talent network with consultants who own your mandate from brief to joining date."
          />
          <div className="mt-8">
            <EnquiryButton>Talk to a Consultant</EnquiryButton>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
