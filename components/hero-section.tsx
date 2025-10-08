import Image from "next/image"
import { ArrowRight, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full max-w-full flex items-center justify-center overflow-x-hidden overflow-y-auto px-6 group/hero pt-8 pb-8 sm:pt-0 sm:pb-0 lg:overflow-hidden bg-[#0a0e27]">
      {/* Dark theme background */}
      <div className="absolute inset-0 pointer-events-none bg-[#0a0e27]">
        {/* Subtle ambient blobs with hover enhancement */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f3ba2f]/5 rounded-full blur-3xl transition-all duration-1000 group-hover/hero:bg-[#f3ba2f]/10 group-hover/hero:scale-110 group-hover/hero:blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-[#ff6b35]/5 rounded-full blur-3xl transition-all duration-1000 group-hover/hero:bg-[#ff6b35]/10 group-hover/hero:scale-110 group-hover/hero:blur-2xl" />
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#f3ba2f]/3 rounded-full blur-2xl transition-all duration-1200 group-hover/hero:bg-[#f3ba2f]/8 group-hover/hero:scale-125 group-hover/hero:translate-x-8" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#ff6b35]/3 rounded-full blur-2xl transition-all duration-1200 group-hover/hero:bg-[#ff6b35]/8 group-hover/hero:scale-125 group-hover/hero:-translate-x-6" />
        
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f3ba2f]/20 rounded-full animate-float"
            style={{
              top: `${(i * 5) % 100}%`,
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f3ba2f]/10 via-transparent to-[#ff6b35]/10 animate-wave" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#ff6b35]/10 via-transparent to-[#f3ba2f]/10 animate-wave-reverse" />
      </div>

      {/* Mobile Layout - Simple and Centered */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-[100svh] py-8 space-y-8 w-full max-w-full mx-auto px-4">
        {/* Mascot Image - Centered */}
        <div className="relative group">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-[#f3ba2f]/20 rounded-full translate-y-10" />
          
          {/* Main mascot image */}
          <div className="relative">
            <Image
              src="/image-Photoroom.png"
              alt="FOURFOOT Mascot"
              width={200}
              height={200}
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain mx-auto animate-bob hover:animate-wiggle transition-all duration-300"
              style={{
                width: 'clamp(180px, 40vw, 220px)',
                height: 'clamp(180px, 40vw, 220px)',
              }}
              priority
            />
          </div>
        </div>

        {/* Text Content - Centered */}
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
            $FOURFOOT
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f3ba2f] leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
            4EVER BNB
          </h2>
          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-md mx-auto">
            BNB had the hand, now it's got the foot. $FOURFOOT carries the $4 legacy, taking the next step in the meme-chain. Born on BNB, built by degens, made to move culture. We are 4EVER BNB 🟡
          </p>
        </div>

        {/* Social Icons - Centered Below Text */}
        <div className="flex flex-row items-center justify-center gap-4 mt-6">
          <a
            href="https://x.com/4onbnb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] rounded-full hover:bg-[#0d8bd9] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            </a>
            <a
            href="https://x.com/i/communities/1970662180841197771"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#f3ba2f] hover:bg-[#ff6b35] text-[#0a0e27] font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Join Community
          </a>
        </div>
          </div>

      {/* Desktop Layout - Grid */}
      <div className="hidden lg:block w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-12 py-12">
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
                $FOURFOOT
              </h1>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#f3ba2f] leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
                4EVER BNB
            </h2>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl">
                BNB had the hand, now it's got the foot. $FOURFOOT carries the $4 legacy, taking the next step in the meme-chain. Born on BNB, built by degens, made to move culture. We are 4EVER BNB 🟡
            </p>
          </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://x.com/4onbnb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
            </a>
            <a
                href="https://x.com/i/communities/1970662180841197771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#f3ba2f] hover:bg-[#ff6b35] text-[#0a0e27] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Users className="w-6 h-6" />
                Join Community
            </a>
          </div>
        </div>

          {/* Right: Mascot */}
          <div className="relative block group">
            {/* Background glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-[#f3ba2f]/20 rounded-full translate-y-10" />
            
            {/* Meme-style background elements */}
            <div className="absolute inset-0 -z-5 pointer-events-none">
              {/* Floating "4" icons */}
              <div className="absolute -top-16 -left-16 text-4xl font-black text-[#f3ba2f]/30 animate-float" style={{ animationDelay: '0s' }}>
                4
              </div>
              <div className="absolute -top-8 -right-20 text-3xl font-black text-[#ff6b35]/30 animate-float" style={{ animationDelay: '1s' }}>
                4
              </div>
              <div className="absolute -bottom-12 -left-12 text-3xl font-black text-[#f3ba2f]/25 animate-float" style={{ animationDelay: '2s' }}>
                4
              </div>
              <div className="absolute -bottom-8 -right-16 text-4xl font-black text-[#ff6b35]/25 animate-float" style={{ animationDelay: '1.5s' }}>
                4
              </div>
              
              {/* Diamond/trending up icons */}
              <div className="absolute top-8 -right-8 text-2xl text-[#f3ba2f]/40 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                📈
              </div>
              <div className="absolute -top-12 left-8 text-2xl text-[#ff6b35]/40 animate-bounce-slow" style={{ animationDelay: '1.2s' }}>
                💎
              </div>
              <div className="absolute bottom-16 -left-8 text-2xl text-[#f3ba2f]/35 animate-bounce-slow" style={{ animationDelay: '2.5s' }}>
                🚀
              </div>
              
              {/* Fire/moon icons */}
              <div className="absolute top-20 -left-20 text-xl text-[#ff6b35]/30 animate-pulse-glow" style={{ animationDelay: '0.8s' }}>
                🔥
              </div>
              <div className="absolute -bottom-16 right-8 text-xl text-[#f3ba2f]/30 animate-pulse-glow" style={{ animationDelay: '1.8s' }}>
                🌙
              </div>
              
              {/* BNB chain symbols */}
              <div className="absolute top-4 left-4 text-lg text-[#f3ba2f]/20 animate-float" style={{ animationDelay: '3s' }}>
                ⛓️
              </div>
              <div className="absolute bottom-4 right-4 text-lg text-[#ff6b35]/20 animate-float" style={{ animationDelay: '2.2s' }}>
                ⛓️
              </div>
              
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#f3ba2f]/30 rounded-full animate-float"
                  style={{
                    top: `${(i * 12) % 100}%`,
                    left: `${(i * 15) % 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + (i % 2)}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Main mascot image */}
            <div className="relative">
          <Image
                src="/image-Photoroom.png"
                alt="FOURFOOT Mascot"
                width={400}
                height={400}
                className="w-80 h-80 xl:w-96 xl:h-96 object-contain mx-auto animate-bob hover:animate-wiggle transition-all duration-300"
            priority
          />
            </div>
          </div>
        </div>

        {/* Desktop Social Icons Below Mascot */}
        <div className="flex flex-row items-center justify-center gap-6 mt-8">
          <a
            href="https://x.com/4onbnb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#1DA1F2] rounded-full hover:bg-[#0d8bd9] transition-all duration-300 hover:scale-110"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://x.com/i/communities/1970662180841197771"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#f3ba2f] hover:bg-[#ff6b35] text-[#0a0e27] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Users className="w-6 h-6" />
            Join Community
          </a>
        </div>
      </div>
    </section>
  )
}