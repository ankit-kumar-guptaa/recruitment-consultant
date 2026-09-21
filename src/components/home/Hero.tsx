import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { heroHighlights } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-navy-50/70 via-white to-white"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-navy-100/50 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:py-16 xl:py-20">
        {/* ---------- Copy ---------- */}
        <div className="max-w-2xl lg:max-w-none">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-navy-900 shadow-card ring-1 ring-navy-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Your Trusted Hiring Partner
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.06] text-ink sm:text-[3.25rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.7rem]"
          >
            Right People
            <br />
            For A <span className="text-navy-600">Brighter</span>{" "}
            <span className="relative inline-block whitespace-nowrap text-navy-600">
              Tomorrow
              <svg
                aria-hidden="true"
                viewBox="0 0 220 22"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold sm:-bottom-3 sm:h-4"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 14c48-8 120-11 212-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M28 20c44-6 108-8 176-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft text-balance-pretty">
            We connect exceptional talent with great opportunities across
            industries. From hiring to career growth — we make it happen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EnquiryButton className="w-full sm:w-auto">
              Hire Talent
            </EnquiryButton>
            <EnquiryButton
              intent="jobseeker"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Find a Job
            </EnquiryButton>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-100/70 text-navy-700">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="text-sm font-medium leading-tight text-ink">
                  {item.title}
                  <br />
                  <span className="text-ink-soft">{item.subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="relative aspect-[5/5.4] w-full sm:aspect-[5/4.6] lg:aspect-[5/4.85]">
            {/* Blob */}
            <div
              aria-hidden="true"
              className="hero-blob absolute inset-x-[6%] bottom-0 top-[4%] bg-gradient-to-br from-navy-100 via-navy-50 to-white"
            />
            <div
              aria-hidden="true"
              className="hero-blob absolute inset-x-[14%] bottom-[8%] top-[12%] bg-white/50"
            />

            <Image
              src="/images/hero-consultant.webp"
              alt="Recruitment consultant standing with arms crossed in a modern office"
              width={746}
              height={1056}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 80vw"
              className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_18px_40px_rgba(10,44,107,0.18)]"
            />

            {/* Handwritten accents */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-[38%] hidden -rotate-[8deg] font-script text-xl leading-tight text-navy-900/80 lg:block"
            >
              People
              <br />
              Building
              <br />
              Possibilities
              <svg
                viewBox="0 0 120 12"
                className="mt-1 h-3 w-24 text-gold"
                aria-hidden="true"
              >
                <path
                  d="M3 8c26-6 62-7 114-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span
              aria-hidden="true"
              className="absolute right-0 top-[6%] hidden rotate-[6deg] text-right font-script text-xl leading-tight text-navy-900/80 lg:block"
            >
              Talent Today
              <br />
              Better Tomorrows
              <svg
                viewBox="0 0 120 12"
                className="ml-auto mt-1 h-3 w-24 text-gold"
                aria-hidden="true"
              >
                <path
                  d="M3 8c26-6 62-7 114-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            {/* Floating stat cards */}
            <div className="absolute left-0 top-[10%] flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-slate-100 backdrop-blur animate-float-slow sm:px-5 sm:py-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon name="users" size={22} />
              </span>
              <span>
                <strong className="block font-display text-xl font-bold leading-none text-navy-900">
                  5000+
                </strong>
                <span className="text-xs text-ink-soft sm:text-sm">
                  Successful Placements
                </span>
              </span>
            </div>

            <div
              className="absolute bottom-[14%] left-0 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-slate-100 backdrop-blur animate-float-slow sm:px-5 sm:py-4"
              style={{ animationDelay: "1.4s" }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-100 text-navy-700">
                <Icon name="building" size={22} />
              </span>
              <span>
                <strong className="block font-display text-xl font-bold leading-none text-navy-900">
                  1000+
                </strong>
                <span className="text-xs text-ink-soft sm:text-sm">
                  Happy Clients
                </span>
              </span>
            </div>

            <div
              className="absolute right-0 top-[44%] rounded-2xl bg-white/95 px-4 py-3 shadow-float ring-1 ring-slate-100 backdrop-blur animate-float-slow"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center">
                {[
                  { initials: "A", tone: "bg-navy-600" },
                  { initials: "S", tone: "bg-emerald-600" },
                  { initials: "M", tone: "bg-navy-800" },
                ].map((person, index) => (
                  <span
                    key={person.initials}
                    aria-hidden="true"
                    className={`grid h-9 w-9 place-items-center rounded-full text-[0.78rem] font-bold text-white ring-2 ring-white ${person.tone} ${index === 0 ? "" : "-ml-2.5"}`}
                  >
                    {person.initials}
                  </span>
                ))}
                <span
                  aria-hidden="true"
                  className="-ml-2.5 grid h-9 w-9 place-items-center rounded-full bg-navy-100 text-sm font-bold text-navy-700 ring-2 ring-white"
                >
                  +
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-navy-900 sm:text-sm">
                Talent for Every Industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
