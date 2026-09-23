import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, stores and protects the personal data of candidates and client contacts.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`How we collect, use, store and protect personal data at ${siteConfig.name}.`}
      updated="23 September 2026"
      crumbLabel="Privacy Policy"
      path="/privacy-policy"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${siteConfig.legalName} is a recruitment consultancy operating in India from ${siteConfig.address.locality}. We act as a data controller for the personal data of candidates and client contacts that we process in the course of providing recruitment and staffing services.`,
            `If you have any question about this policy or about how your data is handled, write to us at ${siteConfig.email}.`,
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "We only collect information that we need in order to match people to roles and to provide recruitment services to employers.",
          ],
          list: [
            "From candidates: name, contact details, CV, employment and education history, current and expected compensation, notice period, location preferences and any information you choose to include in your CV or share with a consultant.",
            "From client contacts: name, work email, phone number, company name and details of the roles you are hiring for.",
            "From our website: the details you enter into an enquiry form, and standard technical information such as your browser type and the pages you visited.",
          ],
        },
        {
          heading: "How we use your information",
          list: [
            "To match candidates to suitable open roles and to present shortlists to employers.",
            "To contact you about your enquiry, your application or an assignment you are on.",
            "To run payroll and meet statutory obligations for staff placed on our own payroll.",
            "To keep our records accurate and to meet legal, tax and audit obligations.",
            "To improve our services and understand which parts of our website are useful.",
          ],
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We share a candidate's profile with a prospective employer only after telling the candidate which company it is and getting their agreement. We do not sell personal data to anyone, and we do not share candidate data with third parties for marketing.",
            "We may share data with service providers who help us operate — for example payroll, background verification or IT providers — under agreements that require them to protect it. We may also disclose information where we are required to by law.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Candidate profiles are retained while there is a realistic prospect of matching you to a role, and then reviewed periodically. Records relating to placements, payroll and statutory filings are kept for as long as Indian tax, labour and company law requires.",
            "You can ask us to delete your profile at any time and we will do so, except where we are legally required to retain specific records.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can ask us to tell you what personal data we hold about you, to correct anything that is wrong, to delete your profile, or to stop contacting you. Write to us and we will act on the request.",
          ],
          list: [
            `Access a copy of the data we hold about you — email ${siteConfig.email}.`,
            "Ask us to correct or update inaccurate information.",
            "Ask us to delete your profile from our database.",
            "Withdraw consent to being contacted about opportunities.",
            "Ask us not to share your profile with named employers.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We restrict access to personal data to the consultants who need it, use access-controlled systems, and require our service providers to maintain appropriate safeguards. No system is completely secure, but we take the protection of candidate data seriously because our business depends on people trusting us with it.",
          ],
        },
        {
          heading: "We never charge candidates",
          paragraphs: [
            `Our services are free for job seekers. We are paid by the hiring company. If anyone asks you for money in our name — a registration fee, a placement fee or a "security deposit" — it is not us. Stop and report it to ${siteConfig.email}.`,
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This website uses only the cookies needed for the site to function. If we add analytics or advertising cookies in future, we will update this policy and ask for consent where required.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
          ],
        },
      ]}
    >
      <aside className="mt-12 rounded-2xl border-l-4 border-gold bg-gold-soft/40 p-6">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-[#8a5a06]">
          Questions about your data?
        </p>
        <p className="mt-2 text-[1.02rem] leading-[1.7] text-ink">
          Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-navy-700 underline underline-offset-2"
          >
            {siteConfig.email}
          </a>{" "}
          and we will respond within one working day.
        </p>
      </aside>
    </LegalPage>
  );
}
