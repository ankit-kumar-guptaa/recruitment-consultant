import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/site";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries We Serve"
          title="Specialist hiring across 12+ sectors"
          description="Our consultants are aligned to industries, not just job boards — so they understand the roles, the market rates and the talent pools."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="group flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-navy-200"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700 transition group-hover:bg-navy-600 group-hover:text-white">
                <Icon name={industry.icon} size={20} />
              </span>
              <span className="text-sm font-semibold leading-tight text-ink">
                {industry.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
