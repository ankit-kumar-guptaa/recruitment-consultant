import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Recruitment Agency in India",
  description:
    "Get in touch with Recruitment Consultant. Share a hiring requirement or your CV, and a consultant will get back to you within one working day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Recruitment Agency in India",
    description:
      "Share a hiring requirement or your CV. A consultant replies within one working day.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: "mail",
    title: "Email us",
    lines: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
    note: "Best for requirements, JDs and CVs. We reply within one working day.",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    lines: ["Message our hiring desk"],
    href: `https://wa.me/${siteConfig.whatsapp}`,
    note: "Quick questions about a role, a shortlist or an ongoing mandate.",
    external: true,
  },
  {
    icon: "phone",
    title: "Call us",
    lines: ["Request a callback"],
    href: `tel:${siteConfig.phoneHref}`,
    note: siteConfig.officeHours,
  },
  {
    icon: "pin",
    title: "Office",
    lines: [
      siteConfig.address.street,
      `${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    ],
    note: "Visits by appointment — email us first so a consultant is free.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Contact"
        title="Tell us what you need to hire"
        description={`A consultant reads every enquiry. Share the role, the location and the timeline, and you will hear back within one working day — the same way we have worked for ${yearsInBusiness} years.`}
        crumbs={[{ label: "Contact" }]}
      />

      <section
        aria-labelledby="contact-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ---------- Channels ---------- */}
          <div>
            <h2
              id="contact-heading"
              className="font-display text-2xl font-extrabold text-ink"
            >
              Ways to reach us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Email is fastest and gives us the detail we need to be useful on
              the first reply.
            </p>

            <Photo
              slot="officeReception"
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="mt-8 h-auto w-full rounded-2xl object-cover shadow-card"
            />

            <ul className="mt-8 space-y-4">
              {channels.map((channel, index) => {
                const body = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-800 group-hover:text-white">
                      <Icon name={channel.icon} size={22} />
                    </span>
                    <span className="min-w-0">
                      <strong className="block font-display text-base font-bold text-ink">
                        {channel.title}
                      </strong>
                      {channel.lines.map((line) => (
                        <span
                          key={line}
                          className="block break-words text-sm font-medium text-navy-700"
                        >
                          {line}
                        </span>
                      ))}
                      <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                        {channel.note}
                      </span>
                    </span>
                  </>
                );

                return (
                  <Reveal
                    as="li"
                    key={channel.title}
                    delay={index * 90}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float"
                  >
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex gap-4"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex gap-4">{body}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* ---------- Form ---------- */}
          <Reveal direction="right">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-float sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
    </>
  );
}
