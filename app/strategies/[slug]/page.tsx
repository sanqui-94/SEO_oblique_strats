import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllStrategies, getStrategyBySlug } from "@/lib/strategies"
import JsonLd from "@/components/json-ld"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const strategy = getStrategyBySlug(slug)

  if (!strategy) {
    return { title: "Not Found" }
  }

  const description = `An Oblique Strategy card: "${strategy.text}".`

  return {
    title: strategy.text,
    description,
    openGraph: {
      title: strategy.text,
      description,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  const strategies = getAllStrategies()
  return strategies.map((strategy) => ({ slug: strategy.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function StrategyPage({ params }: Props) {
  const { slug } = await params
  const strategy = getStrategyBySlug(slug)

  if (!strategy) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quotation",
    text: strategy.text,
    spokenByCharacter: {
      "@type": "Person",
      name: "Brian Eno",
    },
    isPartOf: {
      "@type": "CreativeWork",
      name: "Oblique Strategies",
      author: [
        { "@type": "Person", name: "Brian Eno" },
        { "@type": "Person", name: "Peter Schmidt" },
      ],
      url: "https://oblique-strats.vercel.app/",
    },
  }

  return (
    <div className="flex min-h-svh flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between border-b border-border/50 bg-background/80 px-8 py-5 backdrop-blur-sm">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Oblique Strategies
        </Link>
        <nav className="flex items-center gap-7 text-sm text-muted-foreground">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Revealed card */}
          <div className="relative h-[26rem] w-72 overflow-hidden rounded-2xl bg-primary shadow-sm">
            <div className="absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent" />
            <div className="flex h-full items-center justify-center px-8">
              <p className="text-center text-xl font-medium leading-relaxed text-primary-foreground">
                {strategy.text}
              </p>
            </div>
          </div>

          <p className="h-4 text-center text-xs italic text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground hover:underline">
              ← Draw your own card
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-border/50 px-8 py-5">
        <span className="text-xs text-muted-foreground">2026 Sanqui Dev</span>
      </footer>

      <JsonLd data={jsonLd} />
    </div>
  )
}
