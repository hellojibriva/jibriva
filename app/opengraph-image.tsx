import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}, ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social-preview image for every page: name, title and core message on navy. */
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
          padding: "0 96px",
          background: "#0F172A",
          color: "#FFFFFF",
        }}
      >
        <div style={{ width: 72, height: 6, background: "#C9A227", marginBottom: 40 }} />
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 34, color: "#C9A227", marginTop: 16 }}>{siteConfig.title}</div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.72)", marginTop: 40, maxWidth: 900, lineHeight: 1.35 }}>
          {siteConfig.message}
        </div>
        <div style={{ position: "absolute", left: 96, bottom: 48, fontSize: 20, color: "rgba(255,255,255,0.38)" }}>
          {new URL(siteConfig.domain).hostname.replace(/^www\./, "")}
        </div>
      </div>
    ),
    size,
  );
}
