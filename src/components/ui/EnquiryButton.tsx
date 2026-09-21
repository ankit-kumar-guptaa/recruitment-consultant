"use client";

import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { useEnquiry, type EnquiryIntent } from "./EnquiryModal";

type Variant = "primary" | "outline" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white shadow-[0_8px_20px_rgb(11_61_145/0.25)] hover:bg-navy-900",
  outline:
    "border-2 border-navy-600 bg-white text-navy-700 hover:bg-navy-50",
  light: "bg-white text-navy-800 hover:bg-navy-50",
  ghost: "border border-white/40 text-white hover:bg-white/10",
};

export function EnquiryButton({
  intent = "employer",
  variant = "primary",
  className = "",
  children,
  withIcon = true,
}: {
  intent?: EnquiryIntent;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  withIcon?: boolean;
}) {
  const { open } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => open(intent)}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      {withIcon ? <Icon name="arrow" size={18} /> : null}
    </button>
  );
}
