import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { DotGrid } from "@/components/ui/Artwork";
import { Reveal } from "@/components/motion/Reveal";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-14 pt-10 text-white sm:pb-16 sm:pt-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <DotGrid className="absolute inset-x-0 top-0 h-32 w-full text-white/10" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-navy-600/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-page relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-navy-300">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <Icon name="arrow" size={12} className="text-navy-500" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal className="mt-7 max-w-3xl">
          {eyebrow ? (
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-tight sm:text-[2.75rem]">
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
