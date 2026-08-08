import { ImageResponse } from "next/og";

export const alt = "Akusara Digital — Websites, Apps & Digital Products That Sell";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#a31621",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 900,
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#1c1917",
              display: "flex",
            }}
          >
            <span>Akusara</span>
            <span style={{ color: "#a31621" }}>Digital</span>
          </div>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#1c1917",
            lineHeight: 1.1,
            maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Websites, Apps &amp; Digital Products that </span>
          <span style={{ color: "#a31621" }}>Sell</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6b6660",
            marginTop: "24px",
            maxWidth: "800px",
            display: "flex",
          }}
        >
          <span>
            Not just pretty screens — products that are actually used,
            maintained, and generating results.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["WEBSITES", "APPS", "E-COMMERCE", "AI TOOLS"].map((t) => (
            <div
              key={t}
              style={{
                background: "#f7f5f2",
                color: "#7a0f18",
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 800,
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
