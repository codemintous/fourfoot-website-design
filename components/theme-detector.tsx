'use client'

import { useEffect } from 'react'

export function ThemeDetector() {
  useEffect(() => {
    // Set dark theme as default
    const setDarkTheme = () => {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#0a0e27'
      document.body.style.color = '#ffffff'
    }

    // Initial theme setup
    setDarkTheme()

    // No need for theme change listeners since we only use dark theme
  }, [])

  return null
}