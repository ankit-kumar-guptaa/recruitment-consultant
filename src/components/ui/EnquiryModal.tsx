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
import { EnquiryForm, IntentTabs, type EnquiryIntent } from "./EnquiryForm";
import { siteConfig } from "@/lib/site";

export type { EnquiryIntent };

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
  const titleId = useId();
  const isEmployer = intent === "employer";

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("input")?.focus();

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

        <div className="rounded-t-3xl bg-gradient-to-br from-navy-900 to-navy-700 px-6 py-6 text-white sm:px-8">
          <h2 id={titleId} className="text-xl font-bold sm:text-2xl">
            {isEmployer ? "Hire the right talent" : "Find your next role"}
          </h2>
          <p className="mt-1 text-sm text-navy-100">
            {isEmployer
              ? "Share your requirement and a consultant will get back to you within one working day."
              : "Tell us what you are looking for and we will match you to relevant openings."}
          </p>
        </div>

        <div className="px-6 pb-8 pt-6 sm:px-8">
          <IntentTabs
            intent={intent}
            onChange={setIntent}
            className="mb-6 max-w-md"
          />
          <EnquiryForm intent={intent} />

          <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-ink-soft">
            Or write to us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-navy-700 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
