"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useEnquiry } from "@/components/ui/EnquiryModal";
import { intentTabs, type EnquiryIntent } from "@/components/ui/EnquiryForm";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:ring-2 focus:ring-navy-200";

const experienceBands = ["Fresher", "0–2 years", "2–5 years", "5–10 years", "10+ years"];

const assurances = [
  { icon: "file", text: "No upfront fee" },
  { icon: "bolt", text: "Reply in 1 working day" },
  { icon: "shield", text: "90-day replacement guarantee" },
];

/**
 * Lead capture bar on the hero/logo-strip boundary.
 *
 * Deliberately four fields and a button: the shortest path to a callable lead.
 * Anyone who needs to attach a CV or give detail is pushed to the full form in
 * the modal, which collects the same fields plus the extras.
 */
export function HeroLeadForm() {
  const { open } = useEnquiry();
  const [intent, setIntent] = useState<EnquiryIntent>("employer");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isEmployer = intent === "employer";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("intent", intent);

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: data });
      const payload = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !payload.ok) throw new Error(payload.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again.",
      );
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-float backdrop-blur sm:rounded-3xl">
      {/* Accent edge */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-800 via-navy-500 to-gold"
      />

      {status === "success" ? (
        <div className="flex flex-col items-center gap-3 px-6 py-8 text-center sm:flex-row sm:justify-center sm:text-left">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
            <Icon name="check" size={24} />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-ink">
              Got it — we will be in touch
            </p>
            <p className="mt-0.5 text-sm text-ink-soft">
              {isEmployer
                ? "A consultant will call you back within one working day with a plan and a timeline."
                : "Our team will review your profile and contact you about matching openings."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="shrink-0 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-navy-50 sm:ml-4"
          >
            Send another
          </button>
        </div>
      ) : (
        <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
          {/* Heading + intent switch */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-base font-bold text-ink sm:text-lg">
                {isEmployer
                  ? "Get a screened shortlist in 48 hours"
                  : "Send your profile — it is free for candidates"}
              </h2>
              <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
                {isEmployer
                  ? "Tell us the role. A consultant calls you back with a plan, a timeline and a fee — before you commit to anything."
                  : "Share your details and a sector specialist will match you to relevant openings."}
              </p>
            </div>

            <div
              role="tablist"
              aria-label="What do you need?"
              className="grid shrink-0 grid-cols-2 gap-1 rounded-full bg-navy-50 p-1 sm:w-auto"
            >
              {intentTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={intent === tab.key}
                  onClick={() => {
                    setIntent(tab.key);
                    setStatus("idle");
                  }}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.71rem] font-semibold transition sm:px-3.5 sm:text-[0.82rem] ${
                    intent === tab.key
                      ? "bg-navy-800 text-white shadow-sm"
                      : "text-navy-800 hover:bg-navy-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fields */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
              <div>
                <label htmlFor="lead-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Full name*"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="lead-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{8,18}"
                  placeholder="Phone*"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="sr-only">
                  {isEmployer ? "Work email" : "Email address"}
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={isEmployer ? "Work email*" : "Email*"}
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="lead-extra" className="sr-only">
                  {isEmployer ? "Company name" : "Total experience"}
                </label>
                {isEmployer ? (
                  <input
                    id="lead-extra"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company"
                    className={field}
                  />
                ) : (
                  <select
                    id="lead-extra"
                    name="experience"
                    defaultValue=""
                    className={field}
                  >
                    <option value="">Experience</option>
                    {experienceBands.map((band) => (
                      <option key={band} value={band}>
                        {band}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Honeypot — real people never fill this in */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgb(11_61_145/0.25)] transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 lg:col-span-1"
              >
                {status === "submitting"
                  ? "Sending…"
                  : isEmployer
                    ? "Get Shortlist"
                    : "Submit Profile"}
                <Icon name="arrow" size={17} />
              </button>
            </div>

            <div aria-live="polite" className="empty:hidden">
              {status === "error" ? (
                <p className="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
                  {message}
                </p>
              ) : null}
            </div>

            {/* Assurances + escape hatch to the full form */}
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-3.5 max-sm:pl-16 md:flex-row md:items-center md:justify-between">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                {assurances.map((item) => (
                  <li
                    key={item.text}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft"
                  >
                    <Icon
                      name={item.icon}
                      size={14}
                      className="shrink-0 text-emerald-600"
                    />
                    {item.text}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-ink-soft">
                {isEmployer ? (
                  <>
                    Need to share a full JD?{" "}
                    <button
                      type="button"
                      onClick={() => open("employer")}
                      className="font-semibold text-navy-700 underline underline-offset-2"
                    >
                      Open the detailed form
                    </button>
                  </>
                ) : (
                  <>
                    Want to attach your CV?{" "}
                    <button
                      type="button"
                      onClick={() => open("jobseeker")}
                      className="font-semibold text-navy-700 underline underline-offset-2"
                    >
                      Open the detailed form
                    </button>
                  </>
                )}{" "}
                · or email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-navy-700 underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
