import { ImageResponse } from "next/og";

export const alt = "Akusara Digital — Website, Aplikasi & Produk Digital yang Menjual";
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
          background: "#faf6f1",
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
              color: "#faf6f1",
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
              color: "#26160f",
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
            color: "#26160f",
            lineHeight: 1.1,
            maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Website, Aplikasi &amp; Produk Digital yang </span>
          <span style={{ color: "#a31621" }}>Menjual</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6e5d55",
            marginTop: "24px",
            maxWidth: "800px",
            display: "flex",
          }}
        >
          <span>
            Bukan sekadar tampilan cantik — benar-benar dipakai, dirawat, dan
            menghasilkan.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["WEBSITE", "APLIKASI", "E-COMMERCE", "AI TOOLS"].map((t) => (
            <div
              key={t}
              style={{
                background: "#f2eae0",
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
