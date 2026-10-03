import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { heroStats } from "@/lib/site";

/** The four headline numbers, sitting below the logo strip. */
export function StatsBand() {
  return (
    <section aria-label="Our numbers" className="bg-white py-10 sm:py-12">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              className="flex items-center gap-3"
            >
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${stat.tone}`}
              >
                <Icon name={stat.icon} size={24} />
              </span>
              <span className="min-w-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold leading-none text-navy-900 sm:text-3xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-ink-soft sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </span>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
