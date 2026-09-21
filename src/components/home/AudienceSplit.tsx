import { Icon } from "@/components/ui/Icon";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Reveal } from "@/components/motion/Reveal";

const blocks = [
  {
    intent: "employer" as const,
    eyebrow: "For Employers",
    title: "Hire without the hiring overhead",
    points: [
      "Screened shortlists within 48 working hours",
      "Permanent, contract, executive search or RPO",
      "No upfront fee — pay only when the candidate joins",
      "90-day replacement guarantee on permanent hires",
    ],
    cta: "Hire Talent",
    tone: "dark",
  },
  {
    intent: "jobseeker" as const,
    eyebrow: "For Job Seekers",
    title: "Move to a role that fits",
    points: [
      "Always free — candidates never pay a fee",
      "Honest role briefings and interview prep",
      "Openings across 12+ industries, pan India",
    ],
    cta: "Find a Job",
    tone: "light",
  },
];

export function AudienceSplit() {
  return (
    <section
      aria-label="For employers and job seekers"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {blocks.map((block, index) => {
          const dark = block.tone === "dark";
          return (
            <Reveal
              key={block.intent}
              direction={index === 0 ? "left" : "right"}
              className={`flex flex-col rounded-3xl p-8 sm:p-10 ${
                dark
                  ? "bg-gradient-to-br from-navy-900 to-navy-700 text-white"
                  : "border border-slate-100 bg-white shadow-card"
              }`}
            >
              <p
                className={`text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
                  dark ? "text-navy-200" : "text-navy-600"
                }`}
              >
                {block.eyebrow}
              </p>
              <h2
                className={`mt-3 font-display text-2xl font-extrabold sm:text-3xl ${
                  dark ? "text-white" : "text-ink"
                }`}
              >
                {block.title}
              </h2>
              <ul className="mt-6 flex-1 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        dark
                          ? "bg-white/15 text-white"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      <Icon name="check" size={13} />
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        dark ? "text-navy-100" : "text-ink-soft"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <EnquiryButton
                  intent={block.intent}
                  variant={dark ? "light" : "outline"}
                >
                  {block.cta}
                </EnquiryButton>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
