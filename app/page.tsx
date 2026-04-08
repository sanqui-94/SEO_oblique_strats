import type { Metadata } from "next"
import { getAllStrategies } from "@/lib/strategies"

export const metadata: Metadata = {
  title: "Draw a Card",
  description:
    "Draw a random Oblique Strategies card and let chance guide your next creative move.",
}

export default async function Page() {
  const strategies = getAllStrategies()

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-2xl min-w-0 flex-col gap-4">
        <h1 className="text-lg font-medium">Oblique Strategies</h1>
        <ul className="flex flex-col gap-1 text-sm">
          {strategies.map((strategy) => (
            <li key={strategy.id}>
              <a href={`/strategies/${strategy.slug}`} className="hover:underline">
                {strategy.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
