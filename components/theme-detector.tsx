'use client'

import { useEffect } from 'react'

export function ThemeDetector() {
  useEffect(() => {
    // Safari-specific theme detection and application
    const detectAndApplyTheme = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches
      
      // Apply theme classes to document
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.body.style.backgroundColor = '#0a0e27'
        document.body.style.color = '#ffffff'
      } else if (isLightMode) {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
        document.body.style.backgroundColor = '#ffffff'
        document.body.style.color = '#000000'
      } else {
        // Default to dark theme
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        document.body.style.backgroundColor = '#0a0e27'
        document.body.style.color = '#ffffff'
      }
    }

    // Initial theme detection
    detectAndApplyTheme()

    // Listen for theme changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)')
    
    const handleThemeChange = () => {
      detectAndApplyTheme()
    }

    // Add event listeners for Safari compatibility
    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', handleThemeChange)
      lightModeQuery.addEventListener('change', handleThemeChange)
    } else {
      // Fallback for older Safari versions
      darkModeQuery.addListener(handleThemeChange)
      lightModeQuery.addListener(handleThemeChange)
    }

    // Cleanup
    return () => {
      if (darkModeQuery.removeEventListener) {
        darkModeQuery.removeEventListener('change', handleThemeChange)
        lightModeQuery.removeEventListener('change', handleThemeChange)
      } else {
        darkModeQuery.removeListener(handleThemeChange)
        lightModeQuery.removeListener(handleThemeChange)
      }
    }
  }, [])

  return null
}
