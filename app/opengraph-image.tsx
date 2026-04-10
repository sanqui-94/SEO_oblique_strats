import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          gap: 24,
          padding: 80,
        }}
      >
        <div
          style={{
            width: 48,
            height: 4,
            backgroundColor: "#2d8b6e",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#f5f5f5",
            letterSpacing: "-1px",
            textAlign: "center",
          }}
        >
          Oblique Strategies
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a0a0a0",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          {"Brian Eno & Peter Schmidt's cards for breaking creative deadlocks"}
        </div>
      </div>
    ),
    size,
  )
}
