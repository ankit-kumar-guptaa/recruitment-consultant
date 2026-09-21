import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section aria-label="Key numbers" className="bg-navy-900 py-12 sm:py-14">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-extrabold text-white sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-medium text-navy-200">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
