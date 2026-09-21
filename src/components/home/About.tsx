import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { DotGrid } from "@/components/ui/Artwork";
import { Reveal } from "@/components/motion/Reveal";
import { aboutPoints } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Portrait panel */}
        <Reveal direction="left" className="order-last lg:order-first">
          <div className="relative mx-auto w-full max-w-sm pb-10 pl-6 lg:max-w-md">
            <DotGrid
              aria-hidden="true"
              className="absolute right-2 top-2 h-24 w-24 text-navy-200"
            />
            <span
              aria-hidden="true"
              className="absolute -right-2 bottom-16 h-20 w-20 rounded-2xl bg-gold/15"
            />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-200 via-navy-100 to-navy-50 ring-1 ring-navy-100">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/10 to-transparent"
              />
              <Image
                src="/images/hero-consultant.webp"
                alt="Recruitment consultant at work"
                width={746}
                height={1056}
                sizes="(min-width: 1024px) 26vw, 70vw"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[13rem] rounded-2xl bg-white p-5 shadow-float ring-1 ring-slate-100">
              <p className="font-display text-3xl font-extrabold leading-none text-navy-900">
                12<span className="text-gold">+</span>
              </p>
              <p className="mt-1.5 text-sm font-medium leading-snug text-ink">
                Years of recruitment experience
              </p>
              <p className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-ink-soft">
                <Icon name="pin" size={15} className="shrink-0 text-navy-600" />
                16 cities across India
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal direction="right">
            <SectionHeading
              id="about-heading"
              align="left"
              eyebrow="Who We Are"
              title="A recruitment partner that behaves like part of your team"
              description="We started with a simple belief: hiring goes wrong when nobody owns it. So every mandate we take gets a consultant who understands the role, the market and the people on both sides of the table."
            />
          </Reveal>

          <ul className="mt-8 space-y-5">
            {aboutPoints.map((point, index) => (
              <Reveal
                as="li"
                key={point.title}
                direction="right"
                delay={100 + index * 90}
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name={point.icon} size={22} />
                </span>
                <span>
                  <strong className="block font-display text-base font-bold text-ink">
                    {point.title}
                  </strong>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                    {point.description}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={400} className="mt-9">
            <EnquiryButton>Start a Conversation</EnquiryButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
