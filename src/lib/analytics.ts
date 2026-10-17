/**
 * Client-side conversion tracking for successful enquiries.
 *
 * A Google Ads tag on its own only proves the page was visited — it does not
 * tell Ads which visits became leads, which is the number that makes a
 * campaign optimisable. That needs a conversion action: in Google Ads create
 * one (Goals -> Conversions -> New conversion action -> Website), and it gives
 * a send_to value shaped like AW-16878629802/AbC-D_efGhIjK. Put that in
 * NEXT_PUBLIC_ADS_CONVERSION_LABEL and every successful submission reports
 * itself.
 *
 * Until that variable is set this no-ops, so nothing breaks and no invented
 * value is sent.
 */

type GtagArgs =
  | ["event", string, Record<string, unknown>]
  | ["config", string]
  | ["js", Date];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
  }
}

const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL ?? "";

/**
 * Reports a completed enquiry to GA4 and, when a conversion label is
 * configured, to Google Ads.
 *
 * Never throws: an analytics failure must not turn a successful submission
 * into an error the visitor sees.
 */
export function trackLeadConversion(
  intent: "employer" | "jobseeker",
  sourcePage: string,
) {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    // GA4: a custom event, so leads can be segmented by page and by which side
    // of the form was used.
    window.gtag("event", "generate_lead", {
      lead_type: intent,
      source_page: sourcePage,
    });

    if (ADS_CONVERSION_LABEL) {
      window.gtag("event", "conversion", {
        send_to: ADS_CONVERSION_LABEL,
      });
    }
  } catch (error) {
    console.error("[analytics] conversion tracking failed:", error);
  }
}
