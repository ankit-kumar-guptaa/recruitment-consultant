import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { RingBackdrop, DotGrid, Squiggle } from "@/components/ui/Artwork";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { heroHighlights, heroStats } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative overflow-x-clip bg-gradient-to-b from-navy-50 via-white to-white"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-1/4 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -right-20 -top-24 h-[28rem] w-[28rem] rounded-full bg-navy-200/40 blur-3xl" />
        <DotGrid className="absolute inset-x-0 top-0 h-40 w-full text-navy-200/60" />
      </div>

      <div className="container-page grid items-center gap-8 pt-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8 lg:pt-12 xl:pt-14">
        {/* ---------- Copy ---------- */}
        <div className="max-w-2xl lg:max-w-none">
          <Reveal as="p" direction="fade" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-navy-900 shadow-card ring-1 ring-navy-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Your Trusted Hiring Partner
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-5 font-display text-[2.15rem] font-extrabold leading-[1.07] text-ink sm:text-[3rem] lg:text-[2.75rem] xl:text-[3.15rem] 2xl:text-[3.5rem]"
            >
              Right People
              <br />
              For A <span className="text-navy-600">Brighter</span>{" "}
              <span className="relative inline-block whitespace-nowrap text-navy-600">
                Tomorrow
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-gold" />
              </span>
            </h1>
          </Reveal>

          <Reveal as="p" delay={140} className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft text-balance-pretty sm:text-lg">
            We connect exceptional talent with great opportunities across
            industries. From hiring to career growth — we make it happen.
          </Reveal>

          <Reveal delay={200} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EnquiryButton className="w-full sm:w-auto">Hire Talent</EnquiryButton>
            <EnquiryButton intent="jobseeker" variant="outline" className="w-full sm:w-auto">
              Find a Job
            </EnquiryButton>
          </Reveal>

          <Reveal as="ul" delay={260} className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <li key={item.title} className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-100/70 text-navy-700">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="text-[0.82rem] font-medium leading-tight text-ink">
                  {item.title}
                  <br />
                  <span className="text-ink-soft">{item.subtitle}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* ---------- Portrait ---------- */}
        <Reveal direction="scale" delay={120} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <div className="relative aspect-[5/5.1] w-full sm:aspect-[5/4.2] lg:aspect-[5/4.45]">
            <div
              aria-hidden="true"
              className="hero-blob absolute inset-x-[5%] bottom-0 top-[3%] bg-gradient-to-br from-navy-200/70 via-navy-100 to-white"
            />
            <RingBackdrop
              aria-hidden="true"
              className="absolute left-1/2 top-[6%] h-[80%] w-auto -translate-x-1/2 animate-spin-slow text-navy-300 motion-reduce:animate-none"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[16%] right-[4%] hidden h-3.5 w-3.5 rounded-full bg-gold shadow-[0_0_0_6px_rgba(245,165,36,0.15)] lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[2%] left-[14%] hidden h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)] lg:block"
            />

            <Image
              src="/images/hero-consultant.webp"
              alt="Recruitment consultant standing with arms crossed in a modern office"
              width={746}
              height={1056}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 76vw"
              className="absolute bottom-0 left-1/2 h-[97%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_18px_40px_rgba(10,44,107,0.2)]"
            />

            <span
              aria-hidden="true"
              className="absolute left-0 top-[34%] hidden -rotate-[8deg] font-script text-lg leading-tight text-navy-900/75 xl:block"
            >
              People
              <br />
              Building
              <br />
              Possibilities
              <Squiggle className="mt-1 h-2.5 w-20 text-gold" />
            </span>

            <span
              aria-hidden="true"
              className="absolute right-0 top-[4%] hidden rotate-[6deg] text-right font-script text-lg leading-tight text-navy-900/75 xl:block"
            >
              Talent Today
              <br />
              Better Tomorrows
              <Squiggle className="ml-auto mt-1 h-2.5 w-20 text-gold" />
            </span>
          </div>
        </Reveal>
      </div>

      {/* ---------- Floating stat strip (sits below the visual, never over it) ---------- */}
      <div className="container-page relative z-10 pb-2 sm:-mb-10 sm:translate-y-10 sm:pb-0">
        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200/70 shadow-float ring-1 ring-slate-200/70 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <li
                key={stat.label}
                className="flex items-center gap-3 bg-white/90 px-5 py-5 backdrop-blur transition-colors hover:bg-white"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${stat.tone}`}>
                  <Icon name={stat.icon} size={22} />
                </span>
                <span className="min-w-0">
                  <strong className="block font-display text-xl font-extrabold leading-none text-navy-900 sm:text-2xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span className="mt-1 block text-xs leading-snug text-ink-soft sm:text-sm">
                    {stat.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
