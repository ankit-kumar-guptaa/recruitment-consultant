"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { useEnquiry } from "./EnquiryModal";
import { siteConfig } from "@/lib/site";

/** Fixed quick-contact rail: WhatsApp, call and enquiry. */
export function FloatingContact() {
  const { open, isOpen } = useEnquiry();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      key: "whatsapp",
      label: "Chat on WhatsApp",
      href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Hi, I would like to know more about your recruitment services.",
      )}`,
      icon: "whatsapp",
      className: "bg-[#25d366] hover:bg-[#1eb954]",
      external: true,
    },
    {
      key: "call",
      label: "Call our hiring desk",
      href: `tel:${siteConfig.phoneHref}`,
      icon: "phone",
      className: "bg-navy-800 hover:bg-navy-900",
      external: false,
    },
  ] as const;

  return (
    <div
      aria-hidden={isOpen}
      className={`fixed bottom-5 left-4 z-40 flex flex-col gap-3 transition-all duration-300 sm:bottom-7 sm:left-6 ${
        visible && !isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {actions.map((action) => (
        <a
          key={action.key}
          href={action.href}
          {...(action.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          aria-label={action.label}
          className={`group relative grid h-13 w-13 place-items-center rounded-full text-white shadow-float transition-transform duration-200 hover:scale-105 ${action.className}`}
        >
          {action.key === "whatsapp" ? (
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#25d366] animate-pulse-ring motion-reduce:hidden"
            />
          ) : null}
          <Icon name={action.icon} size={24} className="relative" />
          <span className="pointer-events-none absolute left-[calc(100%+0.65rem)] whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:hidden">
            {action.label}
          </span>
        </a>
      ))}

      <button
        type="button"
        onClick={() => open("employer")}
        aria-label="Open the enquiry form"
        className="group relative grid h-13 w-13 place-items-center rounded-full bg-gold text-ink shadow-float transition-transform duration-200 hover:scale-105"
      >
        <Icon name="mail" size={23} />
        <span className="pointer-events-none absolute left-[calc(100%+0.65rem)] whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:hidden">
          Send an enquiry
        </span>
      </button>
    </div>
  );
}
