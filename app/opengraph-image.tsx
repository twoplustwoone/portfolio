import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Francisco Di Giandomenico — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Fetch DM Serif Display from Google Fonts
  const fontRes = await fetch(
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
  );
  const css = await fontRes.text();
  const fontUrl = css.match(/url\(([^)]+)\)/)?.[1];
  const fontData = fontUrl
    ? await fetch(fontUrl).then((r) => r.arrayBuffer())
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fbf8f4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "88px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large faint decorative letter */}
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 520,
            lineHeight: 1,
            color: "#c4622d",
            opacity: 0.05,
            fontFamily: fontData ? "DM Serif Display" : "serif",
          }}
        >
          F
        </div>

        {/* Terracotta accent bar */}
        <div
          style={{
            width: 56,
            height: 5,
            background: "#c4622d",
            borderRadius: 3,
            marginBottom: 44,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 76,
            color: "#231a17",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: 24,
            fontFamily: fontData ? "DM Serif Display" : "serif",
            maxWidth: 860,
          }}
        >
          Francisco Di Giandomenico
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 30,
            color: "#c4622d",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 56,
            fontFamily: "sans-serif",
          }}
        >
          Frontend Engineer
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 22,
            color: "#9a7b6e",
            fontFamily: "sans-serif",
            fontWeight: 500,
          }}
        >
          twoplustwoone.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "DM Serif Display", data: fontData, style: "normal" }]
        : [],
    }
  );
}
