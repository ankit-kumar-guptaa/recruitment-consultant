"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

const hidden: Record<Direction, string> = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  scale: "scale-95 opacity-0",
  fade: "opacity-0",
};

/**
 * Scroll-triggered entrance animation.
 * Renders visible by default and only hides once JS confirms IntersectionObserver
 * support, so content is never trapped behind a broken animation.
 */
export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  once = true,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Already on screen at mount (above the fold, or clipped by an ancestor that
    // would keep IntersectionObserver from ever firing) — show it without waiting.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      if (once) return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const state = !armed || shown ? "translate-none opacity-100" : hidden[direction];

  return (
    <Tag
      ref={ref}
      id={id}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-out will-change-transform motion-reduce:transition-none ${state} ${className}`}
    >
      {children}
    </Tag>
  );
}
