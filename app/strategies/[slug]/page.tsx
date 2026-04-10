import Link from "next/link"
import { notFound } from "next/navigation"
import { getStrategyBySlug } from "@/lib/strategies"

type Props = { params: Promise<{ slug: string }> }

export default async function StrategyPage({ params }: Props) {
  const { slug } = await params
  const strategy = getStrategyBySlug(slug)

  if (!strategy) {
    notFound()
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md flex-col gap-8 text-center">
        <p className="text-3xl font-medium">{strategy.text}</p>
        <Link href="/" className="text-sm hover:underline">
          ← Back
        </Link>
      </div>
    </div>
  )
}
