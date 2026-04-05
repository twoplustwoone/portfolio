import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Francisco Di Giandomenico — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Fetch DM Serif Display from Google Fonts
  const fontRes = await fetch(
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
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
        {/* Large faint cat in the corner */}
        <div
          style={{
            position: "absolute",
            right: 48,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 320,
            lineHeight: 1,
            opacity: 0.07,
          }}
        >
          🐱
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
            marginBottom: 28,
            fontFamily: fontData ? "DM Serif Display" : "serif",
            maxWidth: 820,
          }}
        >
          Francisco Di Giandomenico
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#6b5a52",
            fontFamily: fontData ? "DM Serif Display" : "serif",
            fontStyle: "italic",
            marginBottom: 52,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Frontend engineer. Cat dad. Definitely not using a CRA template.
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 20,
            color: "#c4622d",
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "0.04em",
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
