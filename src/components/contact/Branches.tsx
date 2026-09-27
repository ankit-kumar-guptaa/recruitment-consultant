import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { branches, siteConfig } from "@/lib/site";

/** Google Maps search link — works without an API key or embed. */
function mapsHref(lines: string[]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.name} ${lines.join(", ")}`,
  )}`;
}

export function Branches() {
  return (
    <section
      id="offices"
      aria-labelledby="offices-heading"
      className="scroll-mt-24 bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="offices-heading"
            eyebrow="Our Offices"
            title="Five offices across India and the UAE"
            description="Walk in by appointment, or just send us the role — most mandates are run remotely with on-ground support wherever the hiring happens."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Reveal
              as="li"
              key={branch.name}
              delay={(index % 3) * 90}
              className={`flex h-full flex-col rounded-2xl border p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float ${
                branch.isHeadOffice
                  ? "border-navy-700 bg-gradient-to-br from-navy-900 to-navy-700 text-white"
                  : "border-white bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                    branch.isHeadOffice
                      ? "bg-white/15 text-white"
                      : "bg-navy-50 text-navy-700"
                  }`}
                >
                  <Icon name="pin" size={22} />
                </span>
                {branch.isHeadOffice ? (
                  <span className="rounded-full bg-gold px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink">
                    Head office
                  </span>
                ) : (
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-ink-soft">
                    {branch.countryName}
                  </span>
                )}
              </div>

              <h3
                className={`mt-4 font-display text-base font-bold ${
                  branch.isHeadOffice ? "text-white" : "text-ink"
                }`}
              >
                {branch.name}
              </h3>

              <address
                className={`mt-2 flex-1 text-sm not-italic leading-relaxed ${
                  branch.isHeadOffice ? "text-navy-100" : "text-ink-soft"
                }`}
              >
                {branch.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div
                className={`mt-5 space-y-2 border-t pt-4 text-sm ${
                  branch.isHeadOffice ? "border-white/15" : "border-slate-100"
                }`}
              >
                {branch.phoneDisplay && branch.phoneHref ? (
                  <a
                    href={`tel:${branch.phoneHref}`}
                    className={`flex items-center gap-2 font-semibold transition ${
                      branch.isHeadOffice
                        ? "text-white hover:text-gold"
                        : "text-navy-700 hover:text-navy-900"
                    }`}
                  >
                    <Icon name="phone" size={15} className="shrink-0" />
                    {siteConfig.showPhoneNumber
                      ? branch.phoneDisplay
                      : "Call this office"}
                  </a>
                ) : null}

                <a
                  href={mapsHref(branch.lines)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition ${
                    branch.isHeadOffice
                      ? "text-navy-200 hover:text-white"
                      : "text-ink-soft hover:text-navy-700"
                  }`}
                >
                  <Icon name="arrow" size={15} className="shrink-0" />
                  Get directions
                </a>

                {branch.cityPath ? (
                  <Link
                    href={branch.cityPath}
                    className={`flex items-center gap-2 transition ${
                      branch.isHeadOffice
                        ? "text-navy-200 hover:text-white"
                        : "text-ink-soft hover:text-navy-700"
                    }`}
                  >
                    <Icon name="search" size={15} className="shrink-0" />
                    Hiring in {branch.locality}
                  </Link>
                ) : null}
              </div>
            </Reveal>
          ))}

          {/* Keeps the grid balanced and points people with no local office at
              the coverage page. */}
          <Reveal
            as="li"
            delay={180}
            className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-navy-300 bg-white/60 p-7 text-center"
          >
            <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
              <Icon name="network" size={22} />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink">
              Hiring somewhere else?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Our consultants source across 100+ locations in India. You do not
              need an office near you for us to fill the role.
            </p>
            <Link
              href="/locations"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-navy-800"
            >
              See all locations
              <Icon name="arrow" size={15} />
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
