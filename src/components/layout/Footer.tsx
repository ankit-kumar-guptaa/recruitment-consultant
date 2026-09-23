import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, industries, yearsInBusiness } from "@/lib/site";
import { serviceDetails } from "@/lib/services-content";
import { cityPages } from "@/lib/cities-content";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Employers", href: "/employers" },
  { label: "Job Seekers", href: "/job-seekers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { name: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { name: "instagram", label: "Instagram", href: siteConfig.social.instagram },
  { name: "twitter", label: "X (Twitter)", href: siteConfig.social.twitter },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-navy-950 text-navy-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
        <div>
          <Logo inverted className="h-12 w-auto sm:h-14" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
            {siteConfig.shortDescription} Serving employers across India since{" "}
            {siteConfig.foundedYear} — {yearsInBusiness} years of building teams
            that stay.
          </p>

          <ul className="mt-6 flex gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${social.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-navy-600"
                >
                  <Icon name={social.name} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-links">
          <h2
            id="footer-links"
            className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white"
          >
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-navy-200 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2
            id="footer-services"
            className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white"
          >
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceDetails.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-navy-200 transition hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white">
            Get in Touch
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-navy-400" />
              <span className="text-navy-200">
                {siteConfig.address.street},<br />
                {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" size={18} className="shrink-0 text-navy-400" />
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="text-navy-200 transition hover:text-white"
              >
                Call our hiring desk
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-navy-400" />
              <span className="text-navy-200">{siteConfig.officeHours}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" size={18} className="shrink-0 text-navy-400" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all text-navy-200 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5">
          <h2 className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-navy-400">
            Recruitment agency near you
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {cityPages.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/recruitment-agency-in-${city.slug}`}
                  className="text-navy-300 transition hover:text-white"
                >
                  Recruitment Agency in {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5">
          <p className="sr-only">Industries we recruit for</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-navy-300">
            {industries.map((industry) => (
              <li key={industry.name}>{industry.name} Recruitment</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-300 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="transition hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
