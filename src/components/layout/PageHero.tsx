import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export type Crumb = { label: string; href?: string };

/** Generated banner art in public/images/banners — see README. */
export type BannerVariant = "navy" | "cobalt" | "teal" | "gold";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  variant = "navy",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  variant?: BannerVariant;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-14 pt-10 text-white sm:pb-16 sm:pt-12">
      {/* Background art */}
      <Image
        src={`/images/banners/${variant}.webp`}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-10 object-cover object-center"
      />
      {/* Readability scrim — keeps text contrast well above AA on every variant */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/85 via-navy-950/55 to-navy-950/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-navy-950/60 to-transparent"
      />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-navy-200">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <Icon name="arrow" size={12} className="text-navy-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal className="mt-7 max-w-3xl">
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-tight drop-shadow-sm sm:text-[2.75rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-navy-100 text-balance-pretty sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
