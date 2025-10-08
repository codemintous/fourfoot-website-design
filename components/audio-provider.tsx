"use client"

import { useLoadSound } from "@/lib/use-load-sound"

export function AudioProvider() {
  // Generate and play a fun meme-style "boop" sound effect
  // This will play once when the page loads (or on first user interaction if autoplay is blocked)
  useLoadSound(undefined, 0.35)

  return null // This component doesn't render anything
}

