import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-navy-50/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client & Candidate Stories"
          title="Hiring teams and candidates who stayed with us"
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-white bg-white p-7 shadow-card"
            >
              <Icon name="quote" size={30} className="text-navy-200" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-800 font-display text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span>
                  <cite className="block text-sm font-bold not-italic text-ink">
                    {item.name}
                  </cite>
                  <span className="text-xs text-ink-soft">{item.role}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
