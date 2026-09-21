import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page max-w-3xl">
        <Reveal>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions we get asked most"
          />
        </Reveal>

        <Reveal delay={120} className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:hidden">
                {faq.question}
                <Icon
                  name="chevron"
                  size={20}
                  className="shrink-0 text-navy-600 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
