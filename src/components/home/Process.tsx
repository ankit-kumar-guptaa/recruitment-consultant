import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hiringProcess } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="Our Recruitment Process"
            title="How we fill a role, from brief to joining date"
            description="One point of contact, weekly pipeline reporting and a written SLA — so you always know exactly where every open position stands."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-navy-200 lg:block"
          />
          {hiringProcess.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 130} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy-800 font-display text-base font-bold text-white ring-8 ring-navy-50/60">
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

        <Reveal delay={200} className="mt-12 text-center">
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800 transition hover:border-navy-800 hover:bg-navy-50"
          >
            See the full process, and what we need from you
            <Icon
              name="arrow"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
