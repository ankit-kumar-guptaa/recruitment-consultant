/**
 * Shown while a route segment is still streaming. Static pages usually never
 * hit this, but it keeps dynamic routes (like /search) from looking frozen.
 */
export default function Loading() {
  return (
    <div className="animate-skeleton" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page…</span>

      {/* Banner placeholder */}
      <div className="h-[19rem] w-full bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 sm:h-[21rem]">
        <div className="container-page pt-10 sm:pt-12">
          <div className="h-3 w-40 rounded-full bg-white/15" />
          <div className="mt-7 h-6 w-48 rounded-full bg-white/10" />
          <div className="mt-5 h-9 w-full max-w-xl rounded-lg bg-white/15" />
          <div className="mt-3 h-9 w-full max-w-md rounded-lg bg-white/10" />
          <div className="mt-6 h-4 w-full max-w-2xl rounded bg-white/10" />
          <div className="mt-2.5 h-4 w-full max-w-xl rounded bg-white/10" />
        </div>
      </div>

      {/* Body placeholder */}
      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-3 w-28 rounded-full bg-navy-100" />
          <div className="mx-auto mt-4 h-8 w-full max-w-lg rounded-lg bg-slate-200" />
          <div className="mx-auto mt-3 h-4 w-full max-w-md rounded bg-slate-100" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
            >
              <div className="h-12 w-12 rounded-xl bg-navy-50" />
              <div className="mt-5 h-4 w-2/3 rounded bg-slate-200" />
              <div className="mt-3 h-3 w-full rounded bg-slate-100" />
              <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
              <div className="mt-2 h-3 w-4/6 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
