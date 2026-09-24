"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { industries } from "@/lib/site";

export type EnquiryIntent = "employer" | "jobseeker";

export const intentTabs = [
  { key: "employer" as const, label: "Looking for candidates" },
  { key: "jobseeker" as const, label: "Looking for a job" },
];

type Status = "idle" | "submitting" | "success" | "error";

/** Keep in sync with the limits enforced in src/app/api/enquiry/route.ts */
export const CV_MAX_BYTES = 5 * 1024 * 1024;
export const CV_ACCEPT = ".pdf,.doc,.docx,.rtf,.odt";
const CV_EXTENSIONS = [".pdf", ".doc", ".docx", ".rtf", ".odt"];

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-200";

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
        className="mb-1 block text-[0.8rem] font-medium text-ink"
      >
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function formatBytes(bytes: number) {
  return bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Shared enquiry form. Rendered inside the popup modal and on the contact page,
 * so both always collect and validate the same fields.
 * Submits as multipart/form-data because job seekers can attach a CV.
 */
export function EnquiryForm({
  intent,
  onSuccess,
  /** Pins the submit row to the bottom of a scrolling container (the modal). */
  stickySubmit = false,
}: {
  intent: EnquiryIntent;
  onSuccess?: () => void;
  stickySubmit?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const cvInputRef = useRef<HTMLInputElement>(null);
  const statusId = useId();

  const isEmployer = intent === "employer";

  function handleCvChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setCvError("");

    if (!file) {
      setCv(null);
      return;
    }
    const name = file.name.toLowerCase();
    if (!CV_EXTENSIONS.some((ext) => name.endsWith(ext))) {
      setCv(null);
      event.target.value = "";
      setCvError("Please attach a PDF, DOC, DOCX, RTF or ODT file.");
      return;
    }
    if (file.size > CV_MAX_BYTES) {
      setCv(null);
      event.target.value = "";
      setCvError(`That file is ${formatBytes(file.size)}. Please keep it under 5 MB.`);
      return;
    }
    setCv(file);
  }

  function clearCv() {
    setCv(null);
    setCvError("");
    if (cvInputRef.current) cvInputRef.current.value = "";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("intent", intent);
    if (!isEmployer && cv) data.set("cv", cv);
    else data.delete("cv");

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: data });
      const payload = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !payload.ok) {
        throw new Error(payload.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      clearCv();
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
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center"
      >
        <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-emerald-600 text-white">
          <Icon name="check" size={22} />
        </div>
        <h3 className="mt-3 font-display text-base font-bold text-emerald-900">
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
          className="mt-4 text-sm font-semibold text-emerald-800 underline underline-offset-2"
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
      encType="multipart/form-data"
      className="grid gap-3.5 sm:grid-cols-2"
    >
      <Field label="Full name" name="name" required>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          required
          autoComplete="name"
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
        <select
          id="enquiry-industry"
          name="industry"
          defaultValue=""
          className={inputClass}
        >
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

      {/* ---------- CV upload (candidates only) ---------- */}
      {!isEmployer ? (
        <div className="sm:col-span-2">
          <label
            htmlFor="enquiry-cv"
            className="mb-1 block text-[0.8rem] font-medium text-ink"
          >
            Attach your CV{" "}
            <span className="font-normal text-ink-soft">
              (PDF or Word, up to 5 MB)
            </span>
          </label>

          <input
            ref={cvInputRef}
            id="enquiry-cv"
            name="cv"
            type="file"
            accept={CV_ACCEPT}
            onChange={handleCvChange}
            className="sr-only"
          />

          {cv ? (
            <div className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-600 text-white">
                <Icon name="file" size={16} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-emerald-900">
                  {cv.name}
                </span>
                <span className="block text-xs text-emerald-700">
                  {formatBytes(cv.size)} · attached
                </span>
              </span>
              <button
                type="button"
                onClick={clearCv}
                className="shrink-0 rounded-full p-1.5 text-emerald-800 transition hover:bg-emerald-100"
                aria-label={`Remove ${cv.name}`}
              >
                <Icon name="close" size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => cvInputRef.current?.click()}
              className="flex w-full items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50/70 px-3.5 py-3 text-left transition hover:border-navy-400 hover:bg-navy-50/60"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy-100 text-navy-700">
                <Icon name="file" size={16} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-ink">
                  Choose a file
                </span>
                <span className="block text-xs text-ink-soft">
                  Optional, but it gets you matched faster
                </span>
              </span>
            </button>
          )}

          {cvError ? (
            <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {cvError}
            </p>
          ) : null}
        </div>
      ) : null}

      <Field
        label={isEmployer ? "Anything else?" : "Role & location you want"}
        name="message"
        className="sm:col-span-2"
      >
        <textarea
          id="enquiry-message"
          name="message"
          rows={2}
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

      <div id={statusId} aria-live="polite" className="sm:col-span-2 empty:hidden">
        {status === "error" ? (
          <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
            {message}
          </p>
        ) : null}
      </div>

      <div
        className={`sm:col-span-2 flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:justify-between ${
          stickySubmit
            ? "sticky bottom-0 z-10 -mx-5 -mb-4 border-t border-slate-100 bg-white px-5 py-3 sm:-mx-7 sm:-mb-5 sm:px-7 sm:py-3.5"
            : ""
        }`}
      >
        <p className="text-xs leading-snug text-ink-soft">
          {isEmployer
            ? "No obligation. We reply within one working day."
            : "Free for candidates — we never charge job seekers."}
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting"
            ? "Sending…"
            : isEmployer
              ? "Request a callback"
              : "Submit my profile"}
          <Icon name="arrow" size={17} />
        </button>
      </div>
    </form>
  );
}

/** Segmented control used above the form in the modal and on the contact page. */
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
          className={`rounded-full px-3 py-2 text-[0.8rem] font-semibold transition sm:text-sm ${
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

