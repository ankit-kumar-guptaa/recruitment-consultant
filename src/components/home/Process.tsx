import { SectionHeading } from "@/components/ui/SectionHeading";
import { hiringProcess } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          eyebrow="How It Works"
          title="Four steps from brief to joining date"
          description="A transparent process with a single point of contact, so you always know exactly where every role stands."
        />

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-navy-200 lg:block"
          />
          {hiringProcess.map((item) => (
            <li key={item.step} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy-800 font-display text-base font-bold text-white ring-8 ring-navy-50/60">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
