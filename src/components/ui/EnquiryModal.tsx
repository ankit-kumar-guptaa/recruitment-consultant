"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "./Icon";
import { siteConfig, industries } from "@/lib/site";

export type EnquiryIntent = "employer" | "jobseeker";

type EnquiryContextValue = {
  open: (intent?: EnquiryIntent) => void;
  close: () => void;
  isOpen: boolean;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  }
  return ctx;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<EnquiryIntent>("employer");

  const open = useCallback((next: EnquiryIntent = "employer") => {
    setIntent(next);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      {isOpen ? (
        <EnquiryDialog intent={intent} setIntent={setIntent} onClose={close} />
      ) : null}
    </EnquiryContext.Provider>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

function EnquiryDialog({
  intent,
  setIntent,
  onClose,
}: {
  intent: EnquiryIntent;
  setIntent: (i: EnquiryIntent) => void;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isEmployer = intent === "employer";

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

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
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
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
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-navy-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-2xl rounded-t-3xl bg-white shadow-float sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="rounded-t-3xl bg-gradient-to-br from-navy-900 to-navy-700 px-6 py-6 text-white sm:rounded-t-3xl sm:px-8">
          <h2 id={titleId} className="text-xl font-bold sm:text-2xl">
            {isEmployer ? "Hire the right talent" : "Find your next role"}
          </h2>
          <p className="mt-1 text-sm text-navy-100">
            {isEmployer
              ? "Share your requirement and a consultant will call you back within one working day."
              : "Tell us what you are looking for and we will match you to relevant openings."}
          </p>
        </div>

        <div className="px-6 pb-8 pt-6 sm:px-8">
          <div
            className="mb-6 inline-flex rounded-full bg-navy-50 p-1"
            role="tablist"
            aria-label="Enquiry type"
          >
            {(
              [
                ["employer", "I'm hiring"],
                ["jobseeker", "I'm job hunting"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={intent === key}
                onClick={() => {
                  setIntent(key);
                  setStatus("idle");
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  intent === key
                    ? "bg-navy-800 text-white shadow-sm"
                    : "text-navy-800 hover:bg-navy-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white">
                <Icon name="check" size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-emerald-900">
                Request received
              </h3>
              <p className="mt-1 text-sm text-emerald-800">
                Thanks for reaching out. Our team will contact you within one
                working day.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-full bg-navy-800 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-900"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required>
                <input
                  ref={firstFieldRef}
                  id="enquiry-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
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
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>

              <Field label="Email address" name="email" required>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>

              <Field
                label={isEmployer ? "Company name" : "Current employer"}
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
                <select id="enquiry-industry" name="industry" className={inputClass} defaultValue="">
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry.name} value={industry.name}>
                      {industry.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field
                label={isEmployer ? "Positions to fill" : "Role you are looking for"}
                name="role"
              >
                <input
                  id="enquiry-role"
                  name="role"
                  type="text"
                  placeholder={
                    isEmployer ? "e.g. 3 Backend Engineers" : "e.g. Sales Manager"
                  }
                  className={inputClass}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Message" name="message">
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    placeholder={
                      isEmployer
                        ? "Skills, location, budget and timeline…"
                        : "Your experience, notice period and preferred location…"
                    }
                    className={`${inputClass} resize-y`}
                  />
                </Field>
              </div>

              {/* Simple honeypot — real people never fill this in */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {status === "error" ? (
                <p
                  role="alert"
                  className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {message}
                </p>
              ) : null}

              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-soft">
                  By submitting you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3 text-sm font-semibold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Submit request"}
                  <Icon name="arrow" size={18} />
                </button>
              </div>
            </form>
          )}

          <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-ink-soft">
            Prefer to talk?{" "}
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="font-semibold text-navy-700 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-200";

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
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
