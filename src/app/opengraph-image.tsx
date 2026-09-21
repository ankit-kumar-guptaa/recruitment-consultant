import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — right people for a brighter tomorrow`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #061c46 0%, #0b3d91 55%, #1a73e8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#bfd4fd",
          }}
        >
          Recruitment Agency in India
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          Hire the right people, faster
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#dbe7fe",
          }}
        >
          Shortlists in 48 hours · No upfront fee · 90-day guarantee
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {siteConfig.domain}
        </div>
      </div>
    ),
    size,
  );
}
