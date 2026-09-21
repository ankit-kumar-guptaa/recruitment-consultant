import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  network: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 19a4 4 0 0 1 5.5-3.7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.9 7 9.5 4.1-1.6 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.2A5.6 5.6 0 0 1 21 19.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  crown: (
    <>
      <path d="M4 17.5h16L18.7 8l-4.1 3.2L12 6l-2.6 5.2L5.3 8 4 17.5Z" />
      <path d="M4.5 20.5h15" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Z" />
      <path d="m3.5 12.4 8.5 4.6 8.5-4.6" />
      <path d="m3.5 16.9 8.5 4.6 8.5-4.6" />
    </>
  ),
  cap: (
    <>
      <path d="m12 4 9.5 4.5L12 13 2.5 8.5 12 4Z" />
      <path d="M6.5 10.8V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-5.2" />
      <path d="M21 9v5" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z" />
      <path d="M13.8 3.2V8h4.6" />
      <path d="M9 13h6M9 16.5h4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
    </>
  ),
  bank: (
    <>
      <path d="m3.5 9.5 8.5-5 8.5 5" />
      <path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20.5V11l5.5 3.2V11L14 14.2V6.5h3.5l1.5 14" />
      <path d="M3 20.5h18" />
    </>
  ),
  health: (
    <>
      <path d="M12 20.5s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 8.3a4.1 4.1 0 0 1 7.5 2.8c0 5-7.5 9.4-7.5 9.4Z" />
      <path d="M12 11v3.5M10.3 12.8h3.4" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.3 11h10l2-7.5H6.5" />
      <circle cx="9.5" cy="19" r="1.4" />
      <circle cx="16.5" cy="19" r="1.4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h10.5V16H3z" />
      <path d="M13.5 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  signal: (
    <>
      <path d="M6.5 17.5a7 7 0 0 1 0-11M17.5 6.5a7 7 0 0 1 0 11" />
      <path d="M9.5 14.5a3 3 0 0 1 0-5M14.5 9.5a3 3 0 0 1 0 5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </>
  ),
  building: (
    <>
      <path d="M5 20.5V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5v15" />
      <path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5v9" />
      <path d="M8 8h4M8 12h4M8 16h4M3.5 20.5h17" />
    </>
  ),
  cup: (
    <>
      <path d="M5 4h11v7a5.5 5.5 0 0 1-11 0V4Z" />
      <path d="M16 6h2.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M3.5 20.5h14" />
    </>
  ),
  car: (
    <>
      <path d="M4 15.5 5.6 10A2 2 0 0 1 7.5 8.5h9A2 2 0 0 1 18.4 10L20 15.5" />
      <path d="M3 15.5h18v3.2h-3v-1.6H6v1.6H3z" />
      <path d="M7 12.5h2M15 12.5h2" />
    </>
  ),
  headset: (
    <>
      <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
      <path d="M5 13.5h1.8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5.8A1.8 1.8 0 0 1 4 16.7v-1.4a1.8 1.8 0 0 1 1-1.8Z" />
      <path d="M19 13.5h-1.8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1.8 1.8 0 0 0 1.8-1.8v-1.4a1.8 1.8 0 0 0-1-1.8Z" />
      <path d="M18 18.5v.5a2 2 0 0 1-2 2h-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  arrow: <path d="M4 12h15m-5.5-5.5L19.5 12l-6 5.5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  phone: (
    <path d="M6.6 3.5 9 3.9l1.2 3.6-2 1.5a11.5 11.5 0 0 0 5.3 5.3l1.5-2 3.6 1.2.4 2.4a1.8 1.8 0 0 1-1.9 2.1A15.6 15.6 0 0 1 4.5 5.4 1.8 1.8 0 0 1 6.6 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.8 6.5 8.2 6 8.2-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.7 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  quote: (
    <path d="M9.5 6C6.5 7.3 5 9.8 5 13.5V18h6v-6H8.2c.1-1.9.9-3.2 2.6-4L9.5 6Zm9 0c-3 1.3-4.5 3.8-4.5 7.5V18h6v-6h-2.8c.1-1.9.9-3.2 2.6-4L18.5 6Z" />
  ),
  linkedin: (
    <path d="M4.5 9h3v10.5h-3V9Zm1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 9h2.9v1.5a3.2 3.2 0 0 1 2.9-1.6c2.5 0 3.7 1.6 3.7 4.4v6.2h-3v-5.5c0-1.4-.5-2.2-1.7-2.2s-1.9.8-1.9 2.2v5.5H10V9Z" />
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6A22 22 0 0 0 14.4 3.5C12 3.5 10.4 5 10.4 7.6v2.3H7.8V13h2.6v8h3.1Z" />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  twitter: (
    <path d="M17.5 4h2.9l-6.3 7.2L21.5 20h-5.6l-4.4-5.6L6.4 20H3.5l6.7-7.7L3 4h5.7l4 5.2L17.5 4Zm-1 14.2h1.6L8.6 5.7H6.9l9.6 12.5Z" />
  ),
  whatsapp: (
    <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 21l4.9-1.3A8.4 8.4 0 1 0 12 3.5Zm4.6 11.8c-.2.6-1.1 1.1-1.6 1.2-.4 0-.9.1-3-.7a10.6 10.6 0 0 1-4.3-3.8c-.3-.5-.8-1.4-.8-2.3s.5-1.4.7-1.6a.8.8 0 0 1 .6-.3h.4c.2 0 .4 0 .5.4l.7 1.7c0 .2 0 .3-.1.4l-.3.4-.2.3c-.1.1-.2.3 0 .5a7.7 7.7 0 0 0 3.5 2.9c.2.1.4.1.5 0l.8-1c.2-.2.3-.1.5 0l1.6.8c.2.1.4.2.4.3v.9Z" />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof paths | string;
  size?: number;
  filled?: boolean;
};

export function Icon({ name, size = 24, filled, ...props }: IconProps) {
  const node = paths[name];
  if (!node) return null;
  const solid = filled ?? ["quote", "linkedin", "facebook", "twitter", "whatsapp", "bolt"].includes(name);

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={solid ? undefined : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {node}
    </svg>
  );
}
