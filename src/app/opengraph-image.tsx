import { ImageResponse } from "next/og";
import { APP_NAME } from "@/lib/constants";

export const alt = `${APP_NAME} – Your Campus. Your Voice. Your Rules.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#09090b",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 12,
            background: "#2563eb",
            fontSize: 32,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 40,
          }}
        >
          U
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#f8fafc",
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {APP_NAME}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            maxWidth: 600,
            lineHeight: 1.4,
          }}
        >
          Your campus. Your voice.
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#2563eb",
            marginTop: 32,
            fontWeight: 600,
          }}
        >
          Founded by Yug Rathee
        </div>
      </div>
    ),
    { ...size }
  );
}
