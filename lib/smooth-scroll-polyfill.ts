'use client'

// Safari-specific smooth scrolling polyfill
export function initSmoothScrollPolyfill() {
  if (typeof window === 'undefined') return

  // Check if smooth scrolling is supported
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style

  if (!supportsSmoothScroll) {
    // Polyfill for browsers that don't support smooth scrolling
    const smoothScrollTo = (target: number, duration: number = 800) => {
      const start = window.pageYOffset
      const distance = target - start
      const startTime = performance.now()

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      const animation = (currentTime: number) => {
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)
        
        window.scrollTo(0, start + distance * ease)
        
        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }

    // Override window.scrollTo for smooth scrolling
    const originalScrollTo = window.scrollTo
    window.scrollTo = function(options: any) {
      if (typeof options === 'object' && options.behavior === 'smooth') {
        const target = options.top || 0
        smoothScrollTo(target, 800)
      } else {
        originalScrollTo.call(this, options)
      }
    }

    // Override Element.scrollIntoView for smooth scrolling
    const originalScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function(options: any) {
      if (options && options.behavior === 'smooth') {
        const rect = this.getBoundingClientRect()
        const target = window.pageYOffset + rect.top
        smoothScrollTo(target, 800)
      } else {
        originalScrollIntoView.call(this, options)
      }
    }
  }

  // Safari-specific touch scrolling optimizations
  if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    // Add touch event listeners for better scrolling performance
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleTouchStart = () => {
      isScrolling = true
      document.body.style.overflow = 'hidden'
    }

    const handleTouchEnd = () => {
      isScrolling = false
      document.body.style.overflow = 'auto'
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 150)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) {
        e.preventDefault()
      }
    }

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })

    // Cleanup function
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      clearTimeout(scrollTimeout)
    }
  }
}

// Enhanced smooth scrolling for mobile Safari
export function enhanceMobileScrolling() {
  if (typeof window === 'undefined') return

  // Force hardware acceleration
  const style = document.createElement('style')
  style.textContent = `
    * {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    
    html, body {
      -webkit-overflow-scrolling: touch !important;
      scroll-behavior: smooth !important;
      overscroll-behavior: contain;
    }
  `
  document.head.appendChild(style)

  // Add momentum scrolling for iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.webkitOverflowScrolling = 'touch'
    document.documentElement.style.webkitOverflowScrolling = 'touch'
  }
}
