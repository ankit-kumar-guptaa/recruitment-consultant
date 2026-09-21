export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
  id?: string;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <p
          className={`text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
            inverted ? "text-navy-200" : "text-navy-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-balance-pretty sm:text-lg ${
            inverted ? "text-navy-100" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
