import type React from "react"
import type { Metadata } from "next"
import { Fredoka as Fredoka_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AudioProvider } from "@/components/audio-provider"
import "./globals.css"

// Import smooth scroll polyfill
if (typeof window !== 'undefined') {
  import('smoothscroll-polyfill').then((smoothscrollPolyfill) => {
    smoothscrollPolyfill.polyfill()
  })
  
  // Additional mobile scrolling optimizations
  document.addEventListener('DOMContentLoaded', () => {
    // Enable smooth scrolling for all browsers
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  })
}

const fredokaOne = Fredoka_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
})

export const metadata: Metadata = {
  title: "$FOURFOOT - BNB Chain Meme Revolution",
  description: "BNB had the hand, now it's got the foot. Join the $FOURFOOT meme revolution on BNB Chain!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredokaOne.variable} font-sans antialiased`}>
        <AudioProvider />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
