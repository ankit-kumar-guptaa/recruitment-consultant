/** Reusable decorative vector art. Purely presentational — always aria-hidden. */

export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern id="rc-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rc-dots)" />
    </svg>
  );
}

export function RingBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className={className}>
      <circle
        cx="200"
        cy="200"
        r="188"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        opacity="0.55"
      />
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.28"
      />
      <circle cx="200" cy="12" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="356" cy="292" r="3.5" fill="currentColor" opacity="0.5" />
      <circle cx="46" cy="118" r="3.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" aria-hidden="true" className={className}>
      <path
        d="M3 8c26-6 62-7 114-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const blogArt = {
  hiring: { from: "#0a2c6b", to: "#1a73e8", accent: "#ffcf78" },
  salary: { from: "#0b3d91", to: "#3b6ef0", accent: "#6ee7b7" },
  resume: { from: "#123a86", to: "#1a73e8", accent: "#f5a524" },
} as const;

export type BlogArtVariant = keyof typeof blogArt;

/** Abstract cover art for insight cards — no stock photography needed. */
export function BlogArt({
  variant,
  className = "",
}: {
  variant: BlogArtVariant;
  className?: string;
}) {
  const { from, to, accent } = blogArt[variant];
  const id = `art-${variant}`;

  return (
    <svg
      viewBox="0 0 400 220"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill={`url(#${id})`} />
      <circle cx="330" cy="30" r="90" fill="#ffffff" opacity="0.06" />
      <circle cx="60" cy="200" r="70" fill="#ffffff" opacity="0.05" />

      {variant === "hiring" ? (
        <g>
          <rect x="44" y="120" width="34" height="56" rx="8" fill="#ffffff" opacity=".85" />
          <rect x="94" y="96" width="34" height="80" rx="8" fill="#ffffff" opacity=".6" />
          <rect x="144" y="64" width="34" height="112" rx="8" fill={accent} />
          <path d="M44 92 110 58l58 18 82-44" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
          <circle cx="250" cy="32" r="7" fill={accent} />
        </g>
      ) : null}

      {variant === "salary" ? (
        <g>
          <rect x="48" y="52" width="150" height="116" rx="14" fill="#ffffff" opacity=".9" />
          <rect x="66" y="74" width="80" height="9" rx="4.5" fill={from} opacity=".35" />
          <rect x="66" y="94" width="114" height="9" rx="4.5" fill={from} opacity=".18" />
          <rect x="66" y="120" width="60" height="26" rx="8" fill={accent} />
          <circle cx="278" cy="110" r="52" fill="none" stroke="#ffffff" strokeWidth="14" opacity=".28" />
          <path d="M278 58a52 52 0 0 1 45 78" fill="none" stroke={accent} strokeWidth="14" strokeLinecap="round" />
        </g>
      ) : null}

      {variant === "resume" ? (
        <g>
          <rect x="120" y="36" width="126" height="150" rx="14" fill="#ffffff" opacity=".92" />
          <circle cx="156" cy="72" r="16" fill={from} opacity=".3" />
          <rect x="182" y="62" width="48" height="8" rx="4" fill={from} opacity=".32" />
          <rect x="182" y="78" width="34" height="8" rx="4" fill={from} opacity=".18" />
          <rect x="140" y="108" width="86" height="8" rx="4" fill={from} opacity=".2" />
          <rect x="140" y="126" width="66" height="8" rx="4" fill={from} opacity=".2" />
          <rect x="140" y="150" width="52" height="20" rx="7" fill={accent} />
          <path d="m286 92 12 12 24-26" fill="none" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : null}
    </svg>
  );
}
