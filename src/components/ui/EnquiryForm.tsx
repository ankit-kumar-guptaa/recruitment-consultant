"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { industries, siteConfig } from "@/lib/site";

export type EnquiryIntent = "employer" | "jobseeker";

export const intentTabs = [
  { key: "employer" as const, label: "Looking for candidates" },
  { key: "jobseeker" as const, label: "Looking for a job" },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-200";

const experienceBands = [
  "Fresher",
  "0–2 years",
  "2–5 years",
  "5–10 years",
  "10+ years",
];

function Field({
  label,
  name,
  required,
  children,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={`enquiry-${name}`}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

/**
 * Shared enquiry form. Used inside the hero card and inside the popup modal,
 * so both always collect and validate the same fields.
 */
export function EnquiryForm({
  intent,
  compact = false,
  autoFocus = false,
  onSuccess,
}: {
  intent: EnquiryIntent;
  compact?: boolean;
  autoFocus?: boolean;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const statusId = useId();

  const isEmployer = intent === "employer";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, intent }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center"
      >
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white">
          <Icon name="check" size={24} />
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-emerald-900">
          Request received
        </h3>
        <p className="mt-1 text-sm text-emerald-800">
          {isEmployer
            ? "A consultant will get back to you within one working day with next steps."
            : "Our team will review your profile and contact you about matching openings."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-emerald-800 underline underline-offset-2"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby={statusId}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <Field label="Full name" name="name" required>
        <input
          ref={firstFieldRef}
          id="enquiry-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          autoFocus={autoFocus}
          placeholder="Your name"
          className={inputClass}
        />
      </Field>

      <Field
        label={isEmployer ? "Work email" : "Email address"}
        name="email"
        required
      >
        <input
          id="enquiry-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={isEmployer ? "you@company.com" : "you@email.com"}
          className={inputClass}
        />
      </Field>

      <Field label="Phone number" name="phone" required>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\-\s()]{8,18}"
          placeholder="+91 00000 00000"
          className={inputClass}
        />
      </Field>

      <Field
        label={isEmployer ? "Company name" : "Current / last employer"}
        name="company"
        required={isEmployer}
      >
        <input
          id="enquiry-company"
          name="company"
          type="text"
          required={isEmployer}
          autoComplete="organization"
          placeholder={isEmployer ? "Company Pvt Ltd" : "Optional"}
          className={inputClass}
        />
      </Field>

      <Field label="Industry" name="industry">
        <select id="enquiry-industry" name="industry" defaultValue="" className={inputClass}>
          <option value="">Select an industry</option>
          {industries.map((industry) => (
            <option key={industry.name} value={industry.name}>
              {industry.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </Field>

      {isEmployer ? (
        <Field label="Positions to fill" name="role">
          <input
            id="enquiry-role"
            name="role"
            type="text"
            placeholder="e.g. 3 Backend Engineers, Bengaluru"
            className={inputClass}
          />
        </Field>
      ) : (
        <Field label="Total experience" name="experience">
          <select
            id="enquiry-experience"
            name="experience"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select experience</option>
            {experienceBands.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field
        label={isEmployer ? "Anything else?" : "Role & location you want"}
        name="message"
        className={compact ? "" : "sm:col-span-2"}
      >
        <textarea
          id="enquiry-message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder={
            isEmployer
              ? "Skills, location, budget band and joining timeline…"
              : "e.g. Sales Manager in Pune, 30-day notice period"
          }
          className={`${inputClass} resize-y`}
        />
      </Field>

      {/* Honeypot — real people never fill this in */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div
        id={statusId}
        aria-live="polite"
        className={compact ? "" : "sm:col-span-2"}
      >
        {status === "error" ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </p>
        ) : null}
      </div>

      <div
        className={`flex flex-col gap-3 ${
          compact ? "" : "sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"
        }`}
      >
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60 ${
            compact ? "w-full" : "sm:order-2"
          }`}
        >
          {status === "submitting"
            ? "Sending…"
            : isEmployer
              ? "Request a callback"
              : "Submit my profile"}
          <Icon name="arrow" size={18} />
        </button>
        <p className="text-xs leading-relaxed text-ink-soft">
          {isEmployer
            ? "No obligation. We reply within one working day."
            : "Free for candidates — we never charge job seekers."}{" "}
          Prefer email?{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-navy-700 underline underline-offset-2"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </form>
  );
}

/** Segmented control used above the form in the hero and the modal. */
export function IntentTabs({
  intent,
  onChange,
  className = "",
}: {
  intent: EnquiryIntent;
  onChange: (next: EnquiryIntent) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="What do you need?"
      className={`grid grid-cols-2 gap-1 rounded-full bg-navy-50 p-1 ${className}`}
    >
      {intentTabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={intent === tab.key}
          onClick={() => onChange(tab.key)}
          className={`rounded-full px-3 py-2.5 text-[0.82rem] font-semibold transition sm:text-sm ${
            intent === tab.key
              ? "bg-navy-800 text-white shadow-sm"
              : "text-navy-800 hover:bg-navy-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
