"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { mainNav, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page flex h-[72px] items-center justify-between gap-2 sm:gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center xl:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.92rem] font-medium transition-colors ${
                  active
                    ? "text-navy-600"
                    : "text-ink hover:text-navy-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-navy-600 transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            aria-label="Search the site"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-800 transition hover:bg-navy-50 sm:h-11 sm:w-11"
          >
            <Icon name={searchOpen ? "close" : "search"} size={22} />
          </button>

          <div className="hidden sm:block">
            <EnquiryButton className="!px-6 !py-3">Hire Talent</EnquiryButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-800 transition hover:bg-navy-50 sm:h-11 sm:w-11 xl:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      <ScrollProgress />

      {searchOpen ? (
        <div id="site-search" className="border-t border-slate-100 bg-white">
          <form
            action="/search"
            role="search"
            className="container-page flex items-center gap-3 py-4"
          >
            <Icon name="search" size={20} className="text-ink-soft" />
            <input
              ref={searchInputRef}
              type="search"
              name="q"
              placeholder="Search jobs, services or industries…"
              aria-label="Search jobs, services or industries"
              className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-navy-800 px-5 py-2 text-sm font-semibold text-white"
            >
              Search
            </button>
          </form>
        </div>
      ) : null}

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="divide-y divide-slate-100">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-4 text-base font-medium ${
                        active ? "text-navy-600" : "text-ink"
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="arrow"
                        size={18}
                        className="text-slate-300"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-3">
              <EnquiryButton className="w-full">Hire Talent</EnquiryButton>
              <EnquiryButton intent="jobseeker" variant="outline" className="w-full">
                Find a Job
              </EnquiryButton>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy-800"
              >
                <Icon name="mail" size={18} />
                {siteConfig.email}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
