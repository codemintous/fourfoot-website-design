import type React from "react"
import type { Metadata } from "next"
import { Fredoka as Fredoka_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AudioProvider } from "@/components/audio-provider"
import { ThemeDetector } from "@/components/theme-detector"
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
  title: "$FOURFOOT - BNB Chain Meme Revolution | 4EVER BNB",
  description: "BNB had the hand, now it's got the foot. Join the $FOURFOOT meme revolution on BNB Chain! Built by degens, made to move culture. We are 4EVER BNB.",
  keywords: [
    "FOURFOOT",
    "BNB Chain",
    "meme coin",
    "BNB meme",
    "crypto meme",
    "degen token",
    "4EVER BNB",
    "meme revolution",
    "BNB community",
    "crypto community",
    "meme culture",
    "BNB Chain token",
    "degen culture",
    "meme token",
    "crypto revolution"
  ],
  authors: [{ name: "FOURFOOT Team" }],
  creator: "FOURFOOT",
  publisher: "FOURFOOT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fourfoot.vercel.app',
    title: '$FOURFOOT - BNB Chain Meme Revolution | 4EVER BNB',
    description: 'BNB had the hand, now it\'s got the foot. Join the $FOURFOOT meme revolution on BNB Chain! Built by degens, made to move culture.',
    siteName: 'FOURFOOT',
    images: [
      {
        url: '/image-Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'FOURFOOT - BNB Chain Meme Revolution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$FOURFOOT - BNB Chain Meme Revolution | 4EVER BNB',
    description: 'BNB had the hand, now it\'s got the foot. Join the $FOURFOOT meme revolution on BNB Chain!',
    images: ['/image-Photoroom.png'],
    creator: '@4onbnb',
  },
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
        <ThemeDetector />
        <AudioProvider />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
