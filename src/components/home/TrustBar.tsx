import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { clientLogos } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function TrustBar() {
  return (
    <section
      aria-label="Companies that trust us"
      className="border-y border-slate-100 bg-navy-50/50 pt-8 sm:pt-20"
    >
      <Reveal direction="fade" className="container-page flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.14em] text-ink-soft">
          Trusted by
          <br className="hidden lg:block" /> Growing Businesses
        </p>

        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <ul className="flex w-max items-center gap-10 animate-marquee sm:gap-14">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <li
                key={`${logo}-${index}`}
                aria-hidden={index >= clientLogos.length}
                className="font-display text-xl font-bold tracking-tight text-slate-400 grayscale transition duration-300 hover:text-navy-700 sm:text-2xl"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/about#clients"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800"
        >
          And Many More
          <Icon name="arrow" size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
