import { ImageResponse } from "next/og"
import { getStrategyBySlug } from "@/lib/strategies"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const strategy = getStrategyBySlug(slug)

  const text = strategy?.text ?? "Oblique Strategies"

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
          padding: 80,
          gap: 32,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#2d8b6e",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Oblique Strategies
        </div>
        <div
          style={{
            fontSize: text.length > 60 ? 44 : 64,
            fontWeight: 500,
            color: "#f5f5f5",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {text}
        </div>
        <div
          style={{
            width: 48,
            height: 4,
            backgroundColor: "#2d8b6e",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    size,
  )
}
