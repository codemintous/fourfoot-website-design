'use client'

import { useEffect } from 'react'
import { initSmoothScrollPolyfill, enhanceMobileScrolling } from '@/lib/smooth-scroll-polyfill'

export function SmoothScrollProvider() {
  useEffect(() => {
    // Initialize smooth scrolling polyfill
    const cleanup = initSmoothScrollPolyfill()
    
    // Enhance mobile scrolling
    enhanceMobileScrolling()
    
    // Additional Safari-specific fixes
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
      // Force smooth scrolling on Safari
      document.documentElement.style.scrollBehavior = 'smooth'
      document.body.style.scrollBehavior = 'smooth'
      
      // Add momentum scrolling
      ;(document.body.style as any).webkitOverflowScrolling = 'touch'
      
      // Prevent scroll bounce on iOS
      document.addEventListener('touchmove', (e) => {
        if (e.target === document.body) {
          e.preventDefault()
        }
      }, { passive: false })
    }
    
    // Cleanup function
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  return null
}
