'use client'

import { useEffect } from 'react'

export function IOSTouchHandler() {
  useEffect(() => {
    // Only run on iOS Safari
    const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent)
    
    if (!isIOSSafari) return

    let startX = 0
    let startY = 0
    let isScrolling = false

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      isScrolling = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return

      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY

      const diffX = Math.abs(startX - currentX)
      const diffY = Math.abs(startY - currentY)

      // If horizontal movement is greater than vertical, prevent it
      if (diffX > diffY && diffX > 10) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // If we're scrolling vertically, allow it
      if (diffY > diffX) {
        isScrolling = true
      }
    }

    const handleTouchEnd = () => {
      startX = 0
      startY = 0
      isScrolling = false
    }

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return null
}
