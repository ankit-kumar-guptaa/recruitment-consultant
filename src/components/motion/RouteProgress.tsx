"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Top-of-page navigation progress bar.
 *
 * Next.js client-side navigation has no visible feedback of its own, so a slow
 * RSC fetch just looks like a frozen page. This starts a bar as soon as an
 * internal link is clicked and finishes it when the route actually changes.
 */
function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ticker = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (ticker.current) {
      clearInterval(ticker.current);
      ticker.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setActive(true);
    setProgress(12);

    // Creep towards 90% — never reach it, so arriving always feels like a jump.
    ticker.current = setInterval(() => {
      setProgress((current) => (current >= 90 ? current : current + (90 - current) * 0.12));
    }, 180);

    // Safety net: never leave the bar stuck if a navigation is cancelled.
    timers.current.push(
      setTimeout(() => {
        clearTimers();
        setProgress(100);
        timers.current.push(setTimeout(() => setActive(false), 260));
      }, 12_000),
    );
  }, [clearTimers]);

  const done = useCallback(() => {
    clearTimers();
    setProgress(100);
    timers.current.push(
      setTimeout(() => {
        setActive(false);
        timers.current.push(setTimeout(() => setProgress(0), 200));
      }, 240),
    );
  }, [clearTimers]);

  // Finish only when the route has actually changed. Compare the serialised
  // URL, because useSearchParams() hands back a fresh object on every render —
  // using it as an effect dependency would end the bar the moment it started.
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const lastRouteKey = useRef(routeKey);
  useEffect(() => {
    if (lastRouteKey.current === routeKey) return;
    lastRouteKey.current = routeKey;
    done();
  }, [routeKey, done]);

  // Start on any internal link click, and on browser back/forward.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("rel")?.includes("external")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      // External links, mailto:, tel: and same-page hashes get no bar.
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      start();
    }

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("popstate", start);
      clearTimers();
    };
  }, [start, clearTimers]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px]"
    >
      <div
        className="h-full bg-gradient-to-r from-navy-600 via-navy-400 to-gold shadow-[0_0_10px_rgba(26,115,232,0.7)] transition-[width,opacity] duration-200 ease-out"
        style={{ width: `${progress}%`, opacity: active ? 1 : 0 }}
      />
    </div>
  );
}

export function RouteProgress() {
  // useSearchParams needs a Suspense boundary so it cannot opt pages out of
  // static rendering.
  return (
    <Suspense fallback={null}>
      <RouteProgressBar />
    </Suspense>
  );
}
