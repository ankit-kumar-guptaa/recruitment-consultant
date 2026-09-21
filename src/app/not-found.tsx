import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-navy-200">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        This page is not live yet
      </h1>
      <p className="mt-4 max-w-md text-ink-soft text-balance-pretty">
        The link you followed does not exist or has moved. Head back to the
        homepage, or get in touch and we will point you in the right direction.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-900"
        >
          Back to home
          <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
