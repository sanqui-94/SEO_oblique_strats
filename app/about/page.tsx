import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Oblique Strategies — the card-based creativity method by Brian Eno and Peter Schmidt, first published in 1975.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between border-b border-border/50 bg-background/80 px-8 py-5 backdrop-blur-sm">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors hover:text-muted-foreground"
        >
          Oblique Strategies
        </Link>
        <nav className="flex items-center gap-7 text-sm text-muted-foreground">
          <Link href="/about" className="text-foreground">
            About
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-12 px-8 py-16">
        {/* Hero */}
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Over One Hundred Worthwhile Dilemmas
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Oblique Strategies</h1>
        </div>

        {/* What are they */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What are they?
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            Oblique Strategies is a card-based method for promoting creativity, first published in
            1975. Each card offers a challenging constraint or prompt — intended to help artists break
            through creative blocks by encouraging lateral thinking.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Physically, the original deck takes the form of printed cards in a black box, each
            measuring 7&thinsp;×&thinsp;9&thinsp;cm. When you are stuck, you draw a card and let its
            instruction redirect your thinking — not by giving you an answer, but by shifting the
            frame of the problem.
          </p>
        </section>

        {/* How to use */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            How to use them
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            There is no single correct way. Draw a card whenever you feel stuck, uninspired, or too
            attached to a single direction. Read it literally, metaphorically, or somewhere in
            between. The goal is not to follow instructions blindly, but to let the card break your
            current pattern of thought and open up possibilities you might not have considered.
          </p>
          <ul className="flex flex-col gap-3 border-l-2 border-primary/30 pl-5 text-sm text-foreground/70">
            <li>Use them when a creative decision feels impossible to make.</li>
            <li>Use them when you have been working on something for too long.</li>
            <li>Use them when every idea feels like the wrong one.</li>
            <li>
              Use them when the right answer is obvious — and you want to question it anyway.
            </li>
          </ul>
        </section>

        {/* Credits */}
        <section className="flex flex-col gap-6 rounded-2xl bg-card p-8 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The creators
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold">Brian Eno</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                Musician, producer, and visual artist. Known for pioneering ambient music and his
                work with artists including David Bowie, Talking Heads, and U2. Eno has long
                explored the use of systems and chance in creative practice.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold">Peter Schmidt</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                British multimedia artist whose work frequently examined the relationship between
                language, image, and perception. His collaboration with Eno produced one of the most
                enduring tools in the creative process.
              </p>
            </div>
          </div>
          <p className="border-t border-border pt-5 text-xs text-muted-foreground">
            Oblique Strategies was first published in 1975. The cards remain in print and in use by
            musicians, writers, designers, and anyone who benefits from a well-timed disruption.
          </p>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-start gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Draw a card
          </Link>
          <p className="text-xs text-muted-foreground">113 cards in the deck.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-8 py-5">
        <span className="text-xs text-muted-foreground">2026 Sanqui Dev</span>
      </footer>
    </div>
  )
}
