import type { MetadataRoute } from "next"
import { getAllStrategies } from "@/lib/strategies"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const strategies = getAllStrategies()
  const published = new Date("2026-04-10")

  const strategyEntries: MetadataRoute.Sitemap = strategies.map((strategy) => ({
    url: `https://oblique-strats.vercel.app/strategies/${strategy.slug}`,
    lastModified: published,
    changeFrequency: "never",
    priority: 0.7,
  }))

  return [
    {
      url: "https://oblique-strats.vercel.app/",
      lastModified: published,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...strategyEntries,
  ]
}
