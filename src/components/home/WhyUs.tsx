import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Reveal } from "@/components/motion/Reveal";
import { whyUs, shortlistPreview } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              id="why-us-heading"
              align="left"
              eyebrow="Why Choose Us"
              title="A hiring partner that actually shortens your hiring cycle"
              description="We combine an active pan-India talent network with consultants who own your mandate from brief to joining date."
            />
          </Reveal>

          <ul className="mt-9 grid gap-5 sm:grid-cols-2">
            {whyUs.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 100}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-[#b8770a]">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={420} className="mt-9">
            <EnquiryButton>Talk to a Consultant</EnquiryButton>
          </Reveal>
        </div>

        {/* Shortlist preview mock */}
        <Reveal direction="right" className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-100 via-navy-50 to-transparent blur-xl"
          />
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-float sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-600">
                  Shortlist ready
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-ink">
                  {shortlistPreview.role}
                </h3>
                <p className="text-sm text-ink-soft">{shortlistPreview.location}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                42 hrs
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {shortlistPreview.candidates.map((candidate, index) => (
                <li
                  key={candidate.initials}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 animate-float-slow motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 0.9}s` }}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-bold text-white ${candidate.tone}`}
                  >
                    {candidate.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block text-sm font-bold text-ink">
                      {candidate.name}
                    </strong>
                    <span className="block truncate text-xs text-ink-soft">
                      {candidate.note}
                    </span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block font-display text-sm font-extrabold text-navy-700">
                      {candidate.match}%
                    </span>
                    <span className="block text-[0.65rem] text-ink-soft">match</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-navy-900 px-4 py-3.5 text-white">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15">
                <Icon name="check" size={17} />
              </span>
              <p className="text-sm font-medium leading-snug">
                Interview slots confirmed — offer stage in 9 days
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
