import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { rolePages, roleGroups } from "@/lib/roles-content";

/**
 * Role briefs, linked from the home page.
 *
 * This section exists as much for crawling as for visitors: the home page is
 * the strongest internal link source a new domain has, and until this was here
 * every /hire URL was reachable only from the footer — which is why they sat in
 * Search Console as "Discovered - currently not indexed" with no crawl at all.
 */
export function HireByRole() {
  return (
    <section
      id="hire-by-role"
      aria-labelledby="hire-by-role-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="hire-by-role-heading"
            eyebrow="Hire By Role"
            title="Know what the role should cost before you open the search"
            description="Every brief carries indicative 2026 salary bands by experience, a realistic time to hire, the checklist we screen on and the mistakes that keep that role unfilled."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {roleGroups.map((group, groupIndex) => (
            <Reveal key={group} delay={groupIndex * 110}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-navy-700">
                {group}
              </h3>
              <ul className="mt-4 space-y-2">
                {rolePages
                  .filter((role) => role.group === group)
                  .map((role) => (
                    <li key={role.slug}>
                      <Link
                        href={`/hire/${role.slug}`}
                        className="group flex items-baseline justify-between gap-3 rounded-lg px-3 py-2 transition hover:bg-navy-50"
                      >
                        <span className="text-sm font-semibold text-ink">
                          {role.title}
                        </span>
                        <span className="shrink-0 text-xs text-ink-soft">
                          {role.salaryBands[1].band}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={260}
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-navy-50 px-6 py-7 text-center sm:flex-row sm:justify-center sm:text-left"
        >
          <p className="text-sm text-ink-soft">
            <strong className="font-semibold text-ink">
              Bands shown are mid-level, metro.
            </strong>{" "}
            Each brief breaks them down by experience and explains what moves
            them.
          </p>
          <Link
            href="/hire"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            See all role briefs
            <Icon name="arrow" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
