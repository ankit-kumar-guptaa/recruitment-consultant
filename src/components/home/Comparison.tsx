import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { comparison } from "@/lib/site";

export function Comparison() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="compare-heading"
            eyebrow="In-House vs. A Recruitment Partner"
            title="What changes when a recruitment consultancy runs the search"
            description="Most HR teams can fill a role eventually. The difference is how long it takes, how many offers drop out, and who carries the cost when a hire does not work."
          />
        </Reveal>

        {/* Table — from md upwards */}
        <Reveal
          delay={120}
          className="mt-12 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card md:block"
        >
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Comparison of hiring in-house only versus working with Recruitment
              Consultant
            </caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th scope="col" className="w-[26%] px-6 py-4">
                  <span className="sr-only">Aspect</span>
                </th>
                <th
                  scope="col"
                  className="w-[37%] px-6 py-4 text-sm font-bold text-ink"
                >
                  {comparison.columns[0]}
                </th>
                <th
                  scope="col"
                  className="w-[37%] bg-navy-800 px-6 py-4 text-sm font-bold text-white"
                >
                  {comparison.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-slate-100 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 align-top text-sm font-semibold text-ink"
                  >
                    {row.label}
                  </th>
                  <td className="px-6 py-4 align-top text-sm text-ink-soft">
                    {row.inhouse}
                  </td>
                  <td className="bg-navy-50/70 px-6 py-4 align-top text-sm font-medium text-navy-900">
                    <span className="flex items-start gap-2">
                      <Icon
                        name="check"
                        size={14}
                        className="mt-1 shrink-0 text-emerald-600"
                      />
                      {row.withUs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Stacked cards — below md, so nothing needs sideways scrolling */}
        <ul className="mt-10 grid gap-4 md:hidden">
          {comparison.rows.map((row, index) => (
            <Reveal
              as="li"
              key={row.label}
              delay={index * 70}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
            >
              <h3 className="border-b border-slate-100 bg-slate-50/80 px-5 py-3 font-display text-sm font-bold text-ink">
                {row.label}
              </h3>
              <dl className="divide-y divide-slate-100">
                <div className="px-5 py-3.5">
                  <dt className="text-[0.66rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                    {comparison.columns[0]}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-soft">{row.inhouse}</dd>
                </div>
                <div className="bg-navy-50/70 px-5 py-3.5">
                  <dt className="text-[0.66rem] font-bold uppercase tracking-[0.1em] text-navy-700">
                    {comparison.columns[1]}
                  </dt>
                  <dd className="mt-1 flex items-start gap-2 text-sm font-medium text-navy-900">
                    <Icon
                      name="check"
                      size={14}
                      className="mt-1 shrink-0 text-emerald-600"
                    />
                    {row.withUs}
                  </dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
