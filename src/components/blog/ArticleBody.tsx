import { Icon } from "@/components/ui/Icon";
import type { Block } from "@/lib/blog-content";

/** Turn a slug-safe id out of a heading. */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter(
    (block): block is Extract<Block, { type: "h2" }> => block.type === "h2",
  );
  if (headings.length < 3) return null;

  return (
    <nav
      aria-labelledby="toc-heading"
      className="rounded-2xl border border-slate-100 bg-navy-50/70 p-6"
    >
      <h2
        id="toc-heading"
        className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-700"
      >
        On this page
      </h2>
      <ol className="mt-4 space-y-2.5">
        {headings.map((heading) => (
          <li key={heading.text}>
            <a
              href={`#${headingId(heading.text)}`}
              className="flex gap-2 text-sm leading-snug text-ink-soft transition hover:text-navy-700"
            >
              <Icon
                name="arrow"
                size={14}
                className="mt-1 shrink-0 text-navy-400"
              />
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={headingId(block.text)}
                className="scroll-mt-28 pt-4 font-display text-2xl font-extrabold leading-snug text-ink sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={index}
                className="pt-2 font-display text-lg font-bold text-ink"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={index}
                className="text-[1.02rem] leading-[1.75] text-ink-soft"
              >
                {block.text}
              </p>
            );

          case "ul":
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-500" />
                    <span className="text-[1.02rem] leading-[1.7] text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-100 text-xs font-bold text-navy-800">
                      {i + 1}
                    </span>
                    <span className="text-[1.02rem] leading-[1.7] text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="rounded-2xl border-l-4 border-gold bg-gold-soft/40 p-6"
              >
                <p className="font-display text-sm font-bold uppercase tracking-wide text-[#8a5a06]">
                  {block.title}
                </p>
                <p className="mt-2 text-[1.02rem] leading-[1.7] text-ink">
                  {block.text}
                </p>
              </aside>
            );

          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto rounded-2xl border border-slate-200"
              >
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-navy-800 text-white">
                      {block.head.map((cell) => (
                        <th
                          key={cell}
                          scope="col"
                          className="px-5 py-3.5 font-semibold"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 last:border-0 odd:bg-white even:bg-slate-50/70"
                      >
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cell}
                              scope="row"
                              className="px-5 py-3.5 font-semibold text-ink"
                            >
                              {cell}
                            </th>
                          ) : (
                            <td key={cell} className="px-5 py-3.5 text-ink-soft">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
