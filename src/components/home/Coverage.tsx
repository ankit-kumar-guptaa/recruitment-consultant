import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cities } from "@/lib/site";

export function Coverage() {
  return (
    <section
      id="coverage"
      aria-labelledby="coverage-heading"
      className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full text-navy-400/40"
        >
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M120 400 320 180 520 300 760 120 1040 260" strokeDasharray="5 8" />
            <path d="M80 220 300 330 600 140 880 380 1120 160" strokeDasharray="5 8" opacity=".6" />
          </g>
          <g fill="currentColor">
            {[
              [120, 400],
              [320, 180],
              [520, 300],
              [760, 120],
              [1040, 260],
              [300, 330],
              [600, 140],
              [880, 380],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
            ))}
          </g>
        </svg>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-navy-600/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            id="coverage-heading"
            inverted
            eyebrow="Recruitment Services Across India"
            title="A recruitment agency wherever you are hiring in India"
            description="Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai and tier-2 cities across India — with consultants who know each local salary band, notice-period norm and talent pool."
          />
        </Reveal>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:gap-3">
          {cities.map((city, index) => (
            <Reveal
              as="li"
              key={city}
              direction="scale"
              delay={index * 45}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-navy-100 backdrop-blur transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-white"
            >
              <Icon name="pin" size={15} className="text-gold" />
              {city}
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-10 text-center">
          <p className="text-sm text-navy-200">
            Hiring somewhere we have not listed?{" "}
            <span className="font-semibold text-white">
              We source across 100+ locations in India on request.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
