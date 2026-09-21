import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${siteConfig.name} — home`}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-9 w-9 shrink-0 sm:h-[42px] sm:w-[42px]"
      >
        <circle cx="16" cy="13" r="6" fill="#0b3d91" />
        <circle cx="32" cy="15" r="5" fill="#1a73e8" />
        <path
          d="M4 34c0-6.6 5.4-12 12-12s12 5.4 12 12v3H4v-3Z"
          fill="#0b3d91"
        />
        <path
          d="M29 37v-3c0-3.6-1.3-6.9-3.5-9.4A10 10 0 0 1 44 31.4V37H29Z"
          fill="#1a73e8"
        />
        <circle cx="9" cy="20" r="4" fill="#5f8df7" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.28rem] ${
            inverted ? "text-white" : "text-navy-900"
          }`}
        >
          Recruitment<span className="text-navy-600">Consultant</span>
        </span>
        <span
          className={`mt-1 block text-[0.56rem] font-medium tracking-[0.14em] sm:text-[0.66rem] sm:tracking-[0.16em] ${
            inverted ? "text-navy-200" : "text-ink-soft"
          }`}
        >
          PEOPLE | GROWTH | SUCCESS
        </span>
      </span>
    </Link>
  );
}
