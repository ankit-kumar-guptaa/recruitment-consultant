import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing the use of the ${siteConfig.name} website and the information published on it.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The terms on which you may use this website and the information published on it."
      updated="23 September 2026"
      crumbLabel="Terms of Use"
      path="/terms"
      sections={[
        {
          heading: "About these terms",
          paragraphs: [
            `This website is operated by ${siteConfig.legalName}. By using it you accept these terms. If you do not accept them, please do not use the site.`,
            "These terms cover the website only. Recruitment and staffing services are provided under a separate written agreement signed with each client, and that agreement takes precedence over anything on this website.",
          ],
        },
        {
          heading: "Information on this site",
          paragraphs: [
            "We keep the information on this website accurate and up to date, but it is provided for general information. Timelines, fee structures, guarantee periods and service descriptions published here describe how we normally work; the terms that apply to you are the ones in your signed agreement.",
            "Nothing on this website is legal, tax or compliance advice. Statements about payroll, PF, ESIC, professional tax and other statutory matters are general descriptions of our services, not advice on your obligations.",
          ],
        },
        {
          heading: "Using the enquiry forms",
          paragraphs: [
            "When you submit an enquiry you confirm that the information you provide is accurate and that you are entitled to share it. Do not submit anyone else's personal data through this website without their permission.",
          ],
          list: [
            "Submitting an enquiry does not create a contract or oblige either of us to proceed.",
            "We will use the details you send only to respond to your enquiry and to provide our services, as set out in our Privacy Policy.",
            "Do not use the forms to send confidential commercial information before an agreement is in place.",
          ],
        },
        {
          heading: "For job seekers",
          paragraphs: [
            "Our services are free for candidates. We never charge a registration fee, placement fee or deposit, and we will never ask you to pay anyone in exchange for a role.",
            `If you receive a message asking for payment in our name, treat it as fraudulent and report it to ${siteConfig.email}. We publish our openings and communicate from our own domain only.`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The content, design, logo and branding on this website belong to us or our licensors. You may read, print and share pages for your own reference, but you may not republish our content, use our branding, or present our material as your own without written permission.",
          ],
        },
        {
          heading: "Links to other sites",
          paragraphs: [
            "Where we link to third-party websites, we do so for convenience. We do not control those sites and are not responsible for their content, accuracy or privacy practices.",
          ],
        },
        {
          heading: "Availability and liability",
          paragraphs: [
            "We aim to keep this website available, but we do not guarantee uninterrupted access and we may change or withdraw any part of it without notice.",
            "To the extent permitted by law, we are not liable for any loss arising from reliance on general information published on this website. This does not limit any liability that cannot be excluded under Indian law, and it does not affect the commitments in a signed client agreement.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            `These terms are governed by the laws of India, and the courts at ${siteConfig.address.locality} have exclusive jurisdiction over any dispute relating to this website.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms can be sent to ${siteConfig.email}.`,
          ],
        },
      ]}
    />
  );
}
