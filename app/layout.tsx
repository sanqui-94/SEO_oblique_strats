import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://oblique-strats.vercel.app"),
  title: {
    default: "Oblique Strategies",
    template: "%s | Oblique Strategies",
  },
  description:
    "A digital deck of Brian Eno and Peter Schmidt's Oblique Strategies cards to help break creative deadlocks.",
}

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, manrope.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
