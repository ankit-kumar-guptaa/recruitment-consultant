import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title="Recruitment solutions built around how you hire"
            description="Whether you need one specialist or an entire team, we run the search end to end — sourcing, screening, interviews and onboarding."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.title} delay={(index % 3) * 110}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition duration-200 hover:-translate-y-1 hover:border-navy-200 hover:shadow-float"
              >
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-navy-50 p-3 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                  <Icon name={service.icon} size={26} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                  Learn more
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
}
