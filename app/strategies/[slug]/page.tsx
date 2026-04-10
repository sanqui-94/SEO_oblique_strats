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
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md flex-col gap-8 text-center">
        <p className="text-3xl font-medium">{strategy.text}</p>
        <Link href="/" className="text-sm hover:underline">
          ← Back
        </Link>
      </div>
      <JsonLd data={jsonLd} />
    </div>
  )
}
