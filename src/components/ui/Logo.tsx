import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Intrinsic size of public/brand/logo.webp (and the white variant).
const LOGO_W = 849;
const LOGO_H = 220;

export function Logo({
  inverted = false,
  className = "h-10 w-auto sm:h-12 xl:h-[3.4rem]",
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src={inverted ? "/brand/logo-white.webp" : "/brand/logo.webp"}
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        width={LOGO_W}
        height={LOGO_H}
        priority
        sizes="(min-width: 1280px) 220px, 200px"
        className={`${className} transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </Link>
  );
}
