"use client";

import { useState } from "react";
import { EnquiryForm, IntentTabs, type EnquiryIntent } from "./EnquiryForm";

/** Contact-page form: same fields as everywhere else, with the intent switch. */
export function ContactForm() {
  const [intent, setIntent] = useState<EnquiryIntent>("employer");
  const isEmployer = intent === "employer";

  return (
    <>
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
        Send us a message
      </h2>
      <p className="mt-2 text-sm text-ink-soft">
        {isEmployer
          ? "Share the role, location, budget band and timeline — the more detail, the faster we can come back with a plan."
          : "Tell us the role and location you are targeting. Our services are always free for candidates."}
      </p>

      <IntentTabs intent={intent} onChange={setIntent} className="mt-6 max-w-md" />

      <div className="mt-6">
        <EnquiryForm intent={intent} />
      </div>
    </>
  );
}
