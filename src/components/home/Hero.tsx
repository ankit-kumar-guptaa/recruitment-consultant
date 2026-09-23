"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { RingBackdrop, DotGrid, Squiggle } from "@/components/ui/Artwork";
import {
  EnquiryForm,
  IntentTabs,
  type EnquiryIntent,
} from "@/components/ui/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import {
  heroHighlights,
  heroStats,
  siteConfig,
  yearsInBusiness,
} from "@/lib/site";

export function Hero() {
  const [intent, setIntent] = useState<EnquiryIntent>("employer");
  const isEmployer = intent === "employer";

  return (
    <section
      className="relative overflow-x-clip bg-gradient-to-b from-navy-50 via-white to-white"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-28 top-1/4 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -right-20 -top-24 h-[30rem] w-[30rem] rounded-full bg-navy-200/40 blur-3xl" />
        <DotGrid className="absolute inset-x-0 top-0 h-40 w-full text-navy-200/60" />
      </div>

      <div className="container-page grid items-start gap-10 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:pt-14">
        {/* ---------- Copy ---------- */}
        <div className="max-w-2xl lg:max-w-none lg:pt-4">
          <Reveal
            as="p"
            direction="fade"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-navy-900 shadow-card ring-1 ring-navy-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Hiring Partner Since {siteConfig.foundedYear}
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-5 font-display text-[2.15rem] font-extrabold leading-[1.07] text-ink sm:text-[3rem] lg:text-[2.7rem] xl:text-[3.1rem]"
            >
              Recruitment Agency{" "}
              <br />
              In India To{" "}
              <span className="relative inline-block whitespace-nowrap text-navy-600">
                Hire Faster
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-gold" />
              </span>
            </h1>
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft text-balance-pretty sm:text-lg"
          >
            Permanent staffing, contract hiring, executive search and RPO across
            12+ industries and 100+ Indian cities. Screened shortlists in 48
            hours, no upfront fee — right people for a brighter tomorrow.
          </Reveal>

          <Reveal
            as="ul"
            delay={200}
            className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 lg:max-w-xl"
          >
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

          {/* Portrait — desktop only, sits under the copy so nothing covers it */}
          <Reveal
            delay={260}
            className="relative mt-10 hidden items-end gap-5 lg:flex"
          >
            <div className="relative h-44 w-40 shrink-0">
              <div
                aria-hidden="true"
                className="hero-blob absolute inset-0 bg-gradient-to-br from-navy-200/70 via-navy-100 to-white"
              />
              <RingBackdrop
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-slow text-navy-300 motion-reduce:animate-none"
              />
              <Image
                src="/images/hero-consultant.webp"
                alt="Recruitment consultant at Recruitment Consultant India"
                width={746}
                height={1056}
                priority
                sizes="160px"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>
            <p className="pb-4 font-script text-xl leading-snug text-navy-900/80">
              People building
              <br />
              possibilities since {siteConfig.foundedYear}
              <Squiggle className="mt-1 h-2.5 w-24 text-gold" />
            </p>
          </Reveal>
        </div>

        {/* ---------- Enquiry card ---------- */}
        <Reveal direction="scale" delay={120} className="lg:sticky lg:top-28">
          <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-float sm:p-7">
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden rounded-full bg-gold px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink shadow-md sm:block"
            >
              Reply in 1 working day
            </span>

            <h2 className="font-display text-xl font-bold text-ink">
              {isEmployer ? "Tell us who you need to hire" : "Tell us what role you want"}
            </h2>
            <p className="mt-1.5 text-sm text-ink-soft">
              {isEmployer
                ? "Share the role and a consultant will call you back with a plan and a timeline. No upfront fee."
                : "Send your profile and a consultant will match you to relevant openings. Always free for candidates."}
            </p>

            <IntentTabs
              intent={intent}
              onChange={setIntent}
              className="mt-5"
            />

            <div className="mt-5">
              <EnquiryForm intent={intent} compact />
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="mail" size={14} className="text-navy-600" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-navy-700 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="shield" size={14} className="text-emerald-600" />
                {yearsInBusiness}+ years · {siteConfig.address.locality}
              </span>
            </p>
          </div>

          <p className="mt-4 text-center text-sm text-ink-soft lg:text-left">
            {isEmployer ? (
              <>
                Looking for a job instead?{" "}
                <button
                  type="button"
                  onClick={() => setIntent("jobseeker")}
                  className="font-semibold text-navy-600 underline underline-offset-2"
                >
                  Switch to the job seeker form
                </button>
              </>
            ) : (
              <>
                Hiring for your company?{" "}
                <button
                  type="button"
                  onClick={() => setIntent("employer")}
                  className="font-semibold text-navy-600 underline underline-offset-2"
                >
                  Switch to the employer form
                </button>
              </>
            )}
            {" · "}
            <Link
              href="/job-seekers"
              className="font-semibold text-navy-600 underline underline-offset-2"
            >
              Job seeker info
            </Link>
          </p>
        </Reveal>
      </div>

      {/* ---------- Stat strip ---------- */}
      <div className="container-page relative z-10 mt-10 pb-2 sm:-mb-10 sm:translate-y-10 sm:pb-0">
        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200/70 shadow-float ring-1 ring-slate-200/70 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <li
                key={stat.label}
                className="flex items-center gap-3 bg-white/90 px-5 py-5 backdrop-blur transition-colors hover:bg-white"
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${stat.tone}`}
                >
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
