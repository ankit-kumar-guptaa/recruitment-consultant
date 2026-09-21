import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnquiryProvider } from "@/components/ui/EnquiryModal";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display-face",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Recruitment Consultant | Pan-India Hiring & Staffing Partner",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "recruitment consultant",
    "recruitment agency India",
    "staffing company",
    "permanent staffing",
    "contract staffing",
    "executive search India",
    "RPO services",
    "manpower consultancy",
    "job consultancy",
    "hiring partner",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  category: "Recruitment",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Recruitment Consultant | Pan-India Hiring & Staffing Partner",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — right people for a brighter tomorrow`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Consultant | Pan-India Hiring & Staffing Partner",
    description: siteConfig.shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d91",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${outfit.variable} ${caveat.variable}`}
    >
      <body className="min-h-dvh bg-white antialiased">
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingContact />
        </EnquiryProvider>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </body>
    </html>
  );
}
