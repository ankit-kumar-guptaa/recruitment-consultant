import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src={inverted ? "/brand/logo-mark-white.svg" : "/brand/logo-mark.svg"}
        alt=""
        width={64}
        height={64}
        priority
        unoptimized
        aria-hidden="true"
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-11 sm:w-11"
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.3rem] ${
            inverted ? "text-white" : "text-navy-900"
          }`}
        >
          Recruitment
          <span className={inverted ? "text-navy-300" : "text-navy-600"}>
            Consultant
          </span>
        </span>
        <span
          className={`mt-1 block text-[0.54rem] font-semibold tracking-[0.18em] sm:text-[0.63rem] ${
            inverted ? "text-navy-300" : "text-ink-soft"
          }`}
        >
          PEOPLE <span className="text-gold">|</span> GROWTH{" "}
          <span className="text-gold">|</span> SUCCESS
        </span>
      </span>
    </Link>
  );
}
