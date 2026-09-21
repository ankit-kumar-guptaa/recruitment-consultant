import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Reveal } from "@/components/motion/Reveal";
import { hiringModels } from "@/lib/site";

export function HiringModels() {
  return (
    <section
      id="hiring-models"
      aria-labelledby="hiring-models-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="hiring-models-heading"
            eyebrow="Engagement Models & Fees"
            title="How our recruitment agency fees work"
            description="Four ways to work with us, depending on the role and the volume. Nothing is hidden — commercials are agreed in writing before a search begins, and contingency hiring carries no upfront cost."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {hiringModels.map((model, index) => (
            <Reveal
              as="li"
              key={model.name}
              delay={index * 100}
              className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1.5 ${
                model.featured
                  ? "border-navy-700 bg-gradient-to-br from-navy-900 to-navy-700 text-white shadow-float"
                  : "border-slate-100 bg-white shadow-card hover:shadow-float"
              }`}
            >
              {model.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink">
                  Most in demand
                </span>
              ) : null}

              <h3
                className={`font-display text-lg font-bold ${
                  model.featured ? "text-white" : "text-ink"
                }`}
              >
                {model.name}
              </h3>

              <dl
                className={`mt-4 space-y-2.5 border-b pb-5 text-sm ${
                  model.featured ? "border-white/15" : "border-slate-100"
                }`}
              >
                <div>
                  <dt
                    className={`text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
                      model.featured ? "text-navy-200" : "text-navy-600"
                    }`}
                  >
                    Best for
                  </dt>
                  <dd
                    className={
                      model.featured ? "text-navy-100" : "text-ink-soft"
                    }
                  >
                    {model.best}
                  </dd>
                </div>
                <div>
                  <dt
                    className={`text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
                      model.featured ? "text-navy-200" : "text-navy-600"
                    }`}
                  >
                    Commercials
                  </dt>
                  <dd
                    className={`font-semibold ${
                      model.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {model.fee}
                  </dd>
                </div>
              </dl>

              <ul className="mt-5 flex-1 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                        model.featured
                          ? "bg-white/15 text-white"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      <Icon name="check" size={11} />
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        model.featured ? "text-navy-100" : "text-ink-soft"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={300}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-navy-50 px-6 py-6 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm text-ink-soft">
            <strong className="font-semibold text-ink">
              Not sure which model fits?
            </strong>{" "}
            Send us the role and we will recommend the cheapest way to fill it —
            even if that is not the one we earn most from.
          </p>
          <EnquiryButton className="shrink-0">Get a Quote</EnquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
