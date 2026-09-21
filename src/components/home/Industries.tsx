import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/lib/site";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries We Recruit For"
            title="Specialist recruitment across 12+ sectors in India"
            description="Our consultants are aligned to industries, not job boards — so they know the roles, the salary bands and where the talent actually sits."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal
              as="li"
              key={industry.name}
              direction="scale"
              delay={(index % 3) * 80}
              className="group flex items-start gap-4 rounded-2xl border border-white bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-float"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-600 group-hover:text-white">
                <Icon name={industry.icon} size={22} />
              </span>
              <span className="min-w-0">
                <h3 className="font-display text-base font-bold leading-tight text-ink">
                  {industry.name} Recruitment
                </h3>
                <span className="mt-1 block text-[0.8rem] leading-snug text-ink-soft">
                  {industry.roles}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
