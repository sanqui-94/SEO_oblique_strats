"use client"

import { useState, useCallback } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Strategy } from "@/lib/strategies"

type CardState = "idle" | "revealed"

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function StrategyCard({ strategies }: { strategies: Strategy[] }) {
  const [cardState, setCardState] = useState<CardState>("idle")
  const [current, setCurrent] = useState<Strategy | null>(null)

  const handleClick = useCallback(() => {
    setCurrent(pickRandom(strategies))
    setCardState("revealed")
  }, [strategies])

  const isIdle = cardState === "idle"
  const isRevealed = cardState === "revealed"

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        aria-label={isIdle ? "Draw a card" : "Draw another card"}
        onClick={handleClick}
        className="relative h-[26rem] w-72 cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-shadow duration-200 hover:shadow-md"
      >
        {/* Idle/drawn face — teal card back with sparkles */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-primary transition-opacity duration-300",
            isIdle ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent" />
          <div className="flex h-full flex-col items-center justify-center gap-5">
            <Sparkles className="h-10 w-10 text-primary-foreground/40" strokeWidth={1} />
            <div className="flex flex-col items-center gap-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">Brian Eno</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">Peter Schmidt</p>
            </div>
          </div>
        </div>

        {/* Revealed face — strategy text */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-primary px-8 transition-opacity duration-500",
            isRevealed ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent" />
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-xl font-medium leading-relaxed text-primary-foreground">
              {current?.text}
            </p>
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="h-4 text-center text-xs italic text-muted-foreground">
        {isIdle && "Click the deck to draw a card"}
        {isRevealed && current && (
          <a
            href={`/strategies/${current.slug}`}
            className="transition-colors hover:text-foreground hover:underline"
          >
            View permalink →
          </a>
        )}
      </p>
    </div>
  )
}
