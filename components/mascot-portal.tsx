"use client"

import { useState, useEffect } from "react"

export function MascotPortal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Trigger portal entrance after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsAnimating(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleMascotClick = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="relative hidden lg:block group">
      {/* Portal glow effect */}
      <div className={`absolute inset-0 -z-10 blur-3xl bg-[#f3ba2f]/20 rounded-full transition-all duration-1000 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`} />
      
      {/* Portal ring */}
      <div className={`absolute inset-0 -z-5 border-4 border-[#f3ba2f]/40 rounded-full transition-all duration-1000 ${
        isVisible ? 'scale-100 opacity-100 animate-portal-rotate' : 'scale-50 opacity-0'
      } animate-neon-border`} />
      
      {/* Mascot container */}
      <div 
        className={`relative transition-all duration-1000 cursor-pointer ${
          isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        onClick={handleMascotClick}
      >
        {/* Floating "4" */}
        <div className="absolute -top-8 -left-8 z-10">
          <div className="text-6xl font-black text-[#f3ba2f] animate-float-glow">
            4
          </div>
        </div>

        {/* Main mascot */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Mascot body */}
          <div className={`relative w-full h-full transition-transform duration-300 ${
            isAnimating ? 'animate-bounce-slow' : ''
          } hover:scale-105`}>
            {/* Head with hand-like crest */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16">
              <div className="w-full h-full bg-gradient-to-b from-[#f3ba2f] to-[#d9a520] rounded-t-full relative">
                {/* Hand-like protrusions */}
                <div className="absolute top-0 left-2 w-6 h-8 bg-[#f3ba2f] rounded-t-full"></div>
                <div className="absolute top-0 left-8 w-6 h-10 bg-[#f3ba2f] rounded-t-full"></div>
                <div className="absolute top-0 left-14 w-6 h-8 bg-[#f3ba2f] rounded-t-full"></div>
                <div className="absolute top-0 left-20 w-6 h-6 bg-[#f3ba2f] rounded-t-full"></div>
              </div>
            </div>

            {/* Main body */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-[#f3ba2f] to-[#d9a520] rounded-full relative">
              {/* Body "4" */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-black">
                4
              </div>

              {/* Eyes */}
              <div className="absolute top-8 left-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#f3ba2f] rounded-full animate-eye-glow"></div>
              </div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#f3ba2f] rounded-full animate-eye-glow"></div>
              </div>

              {/* Eyebrows */}
              <div className="absolute top-4 left-6 w-6 h-2 bg-black rounded-full transform rotate-12"></div>
              <div className="absolute top-4 right-6 w-6 h-2 bg-black rounded-full transform -rotate-12"></div>

              {/* Mouth */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full"></div>

              {/* Right arm (extended) */}
              <div className="absolute top-16 -right-8 w-16 h-8 bg-gradient-to-r from-[#f3ba2f] to-[#d9a520] rounded-full transform rotate-12"></div>
              <div className="absolute top-20 -right-12 w-8 h-6 bg-gradient-to-r from-[#f3ba2f] to-[#d9a520] rounded-full"></div>

              {/* Left arm (on hip) */}
              <div className="absolute top-20 -left-8 w-12 h-8 bg-gradient-to-l from-[#f3ba2f] to-[#d9a520] rounded-full transform -rotate-12"></div>
              <div className="absolute top-24 -left-10 w-6 h-6 bg-gradient-to-l from-[#f3ba2f] to-[#d9a520] rounded-full"></div>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-[#f3ba2f]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Portal particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#f3ba2f] rounded-full opacity-60 animate-particle-float`}
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 15)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i * 0.3)}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
