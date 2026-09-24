"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Fades each route in as it mounts. Purely cosmetic — the animation never
 * delays content, and it is disabled under prefers-reduced-motion.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-page-enter motion-reduce:animate-none">
      {children}
    </div>
  );
}
