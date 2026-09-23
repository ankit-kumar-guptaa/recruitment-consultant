import { siteConfig, services, industries, faqs, cities } from "@/lib/site";
import type { Post } from "@/lib/blog-content";

function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Static, build-time content only — no user input is serialised here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": ["EmploymentAgency", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/icon-512.png`,
        image: `${siteConfig.url}/brand/icon-512.png`,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        email: siteConfig.email,
        // Only published when the client wants the number public (see siteConfig).
        ...(siteConfig.showPhoneNumber
          ? { telephone: siteConfig.phoneDisplay }
          : {}),
        foundingDate: String(siteConfig.foundedYear),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          ...cities.map((city) => ({ "@type": "City", name: city })),
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            ...(siteConfig.showPhoneNumber
              ? { telephone: siteConfig.phoneDisplay }
              : {}),
            email: siteConfig.email,
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        ],
        sameAs: Object.values(siteConfig.social),
        knowsAbout: industries.map((industry) => `${industry.name} recruitment`),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Recruitment and staffing services in India",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              serviceType: service.title,
              areaServed: { "@type": "Country", name: "India" },
              provider: { "@id": `${siteConfig.url}/#organization` },
            },
          })),
        },
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}

/** Individual Service entities so each offering can surface on its own. */
export function ServicesJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#services`,
        name: "Recruitment services for employers in India",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${siteConfig.url}${service.href}`,
            serviceType: service.title,
            category: "Recruitment",
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: { "@type": "Country", name: "India" },
            audience: { "@type": "BusinessAudience", name: "Employers" },
          },
        })),
      }}
    />
  );
}

/** Breadcrumb trail for an inner page. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          ...items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.name,
            item: `${siteConfig.url}${item.path}`,
          })),
        ],
      }}
    />
  );
}

/** A single service page: Service entity plus its own FAQ block. */
export function ServiceJsonLd({
  name,
  description,
  path,
  faqs: serviceFaqs,
}: {
  name: string;
  description: string;
  path: string;
  faqs?: { question: string; answer: string }[];
}) {
  return (
    <>
      <Script
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteConfig.url}${path}#service`,
          name,
          description,
          url: `${siteConfig.url}${path}`,
          serviceType: name,
          category: "Recruitment",
          provider: { "@id": `${siteConfig.url}/#organization` },
          areaServed: [
            { "@type": "Country", name: "India" },
            ...cities.map((city) => ({ "@type": "City", name: city })),
          ],
          audience: { "@type": "BusinessAudience", name: "Employers" },
        }}
      />
      {serviceFaqs && serviceFaqs.length > 0 ? (
        <Script
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${siteConfig.url}${path}#faq`,
            mainEntity: serviceFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      ) : null}
    </>
  );
}

/** Blog article: Article entity plus the post's own FAQ block. */
export function ArticleJsonLd({ post }: { post: Post }) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <Script
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.metaDescription,
          url,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          datePublished: post.published,
          dateModified: post.updated,
          articleSection: post.category,
          inLanguage: "en-IN",
          author: { "@id": `${siteConfig.url}/#organization` },
          publisher: { "@id": `${siteConfig.url}/#organization` },
          image: `${siteConfig.url}/opengraph-image`,
        }}
      />
      <Script
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </>
  );
}

/** City landing page: a Service scoped to that city, plus its FAQ block. */
export function LocalServiceJsonLd({
  city,
  slug,
  faqs: localFaqs,
}: {
  city: string;
  slug: string;
  faqs: { question: string; answer: string }[];
}) {
  const url = `${siteConfig.url}/recruitment-agency-in-${slug}`;

  return (
    <>
      <Script
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Recruitment Agency in ${city}`,
          description: `Permanent staffing, contract staffing, executive search, RPO and bulk hiring services for employers in ${city}, India.`,
          url,
          serviceType: "Recruitment agency",
          category: "Recruitment",
          provider: { "@id": `${siteConfig.url}/#organization` },
          areaServed: { "@type": "City", name: city, address: { "@type": "PostalAddress", addressCountry: "IN" } },
          audience: { "@type": "BusinessAudience", name: "Employers" },
        }}
      />
      <Script
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: localFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </>
  );
}
