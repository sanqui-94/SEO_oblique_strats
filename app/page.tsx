import type { Metadata } from "next"
import Link from "next/link"
import { getAllStrategies } from "@/lib/strategies"
import JsonLd from "@/components/json-ld"
import StrategyCard from "@/components/strategy-card"

export const metadata: Metadata = {
  title: "Draw a Card",
  description:
    "Draw a random Oblique Strategies card and let chance guide your next creative move.",
}

export default function Page() {
  const strategies = getAllStrategies()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Oblique Strategies",
    description:
      "A digital deck of Brian Eno and Peter Schmidt's Oblique Strategies cards to help break creative deadlocks.",
    url: "https://oblique-strats.vercel.app/",
  }

  return (
    <div className="flex min-h-svh flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between border-b border-border/50 bg-background/80 px-8 py-5 backdrop-blur-sm">
        <span className="text-base font-semibold tracking-tight">Oblique Strategies</span>
        <nav className="flex items-center gap-7 text-sm text-muted-foreground">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <StrategyCard strategies={strategies} />
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-border/50 px-8 py-5">
        <span className="text-xs text-muted-foreground">2026 Sanqui Dev</span>
      </footer>

      <JsonLd data={jsonLd} />
    </div>
  )
}
