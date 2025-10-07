import Image from "next/image"
import { ArrowRight, Send, Twitter, MessageCircle } from "lucide-react"
import { MascotPortal } from "./mascot-portal"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-6 group/hero">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main ambient blobs with hover enhancement */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f3ba2f]/10 rounded-full blur-3xl transition-all duration-1000 group-hover/hero:bg-[#f3ba2f]/20 group-hover/hero:scale-110 group-hover/hero:blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-[#ff6b35]/10 rounded-full blur-3xl transition-all duration-1000 group-hover/hero:bg-[#ff6b35]/20 group-hover/hero:scale-110 group-hover/hero:blur-2xl" />
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#f3ba2f]/5 rounded-full blur-2xl transition-all duration-1200 group-hover/hero:bg-[#f3ba2f]/15 group-hover/hero:scale-125 group-hover/hero:translate-x-8" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#ff6b35]/5 rounded-full blur-2xl transition-all duration-1200 group-hover/hero:bg-[#ff6b35]/15 group-hover/hero:scale-125 group-hover/hero:-translate-x-6" />
        
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f3ba2f] rounded-full opacity-20 animate-background-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Interactive background grid */}
        <div className="absolute inset-0 opacity-5 group-hover/hero:opacity-10 transition-opacity duration-1000">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="border border-[#f3ba2f]/20 transition-all duration-500 group-hover/hero:border-[#f3ba2f]/40 group-hover/hero:bg-[#f3ba2f]/5"
                style={{
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating crypto symbols */}
        <div className="absolute top-10 left-10 text-2xl opacity-10 group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:scale-110 animate-float" style={{ animationDelay: '0s' }}>
          ₿
        </div>
        <div className="absolute top-20 right-20 text-xl opacity-10 group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:scale-110 animate-float" style={{ animationDelay: '1s' }}>
          Ξ
        </div>
        <div className="absolute bottom-20 left-20 text-lg opacity-10 group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:scale-110 animate-float" style={{ animationDelay: '2s' }}>
          💎
        </div>
        <div className="absolute bottom-10 right-10 text-xl opacity-10 group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:scale-110 animate-float" style={{ animationDelay: '1.5s' }}>
          🚀
        </div>
        
        {/* Animated background waves */}
        <div className="absolute inset-0 opacity-5 group-hover/hero:opacity-15 transition-opacity duration-1000">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f3ba2f]/10 via-transparent to-[#ff6b35]/10 animate-wave" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#ff6b35]/10 via-transparent to-[#f3ba2f]/10 animate-wave-reverse" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-6 lg:gap-10">
        {/* Left: headline + actions + about */}
        <div className="space-y-6 text-center lg:text-left">
          {/* removed badge */}
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95]" style={{ fontFamily: "var(--font-fredoka)" }}>
            <span className="text-[#f3ba2f]">$FOURFOOT</span>
            <span className="block text-white">4EVER BNB</span>
          </h1>

          <p className="text-lg md:text-xl text-[#a8b3cf] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            BNB had the hand, now it’s got the foot. <span className="text-white font-semibold">$FOURFOOT</span>{" "}
            continues the $4 legacy—born on BNB, driven by degens, built to move the culture forward. We are all{" "}
            <span className="text-[#f3ba2f] font-semibold">4EVER BNB</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#f3ba2f] text-black font-black px-8 py-4 text-lg transition-transform hover:scale-105"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              BUY $FOURFOOT
              <ArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#ff6b35] text-[#ff6b35] font-black px-8 py-4 text-lg transition-colors hover:bg-[#ff6b35] hover:text-black"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              VIEW CHART
            </a>
          </div>

          {/* About card inline (no scroll) */}
          <div className="bg-[#151b3d]/80 border border-[#f3ba2f]/30 rounded-2xl p-4 md:p-5 max-w-xl mx-auto lg:mx-0">
            <h2 className="text-white text-xl font-black mb-1" style={{ fontFamily: "var(--font-fredoka)" }}>
              About FOURFOOT
            </h2>
            <p className="text-sm text-[#a8b3cf]">
              We’re taking the next step in the meme‑chain revolution. We are all{" "}
              <span className="text-[#f3ba2f] font-semibold">4EVER BNB</span>.
            </p>
          </div>

          {/* Socials row inside hero */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              aria-label="Telegram"
              href="#"
              className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center hover:opacity-90 transition-all hover:-translate-y-0.5"
              title="Telegram"
            >
              <Send className="text-white" />
            </a>
            <a
              aria-label="Twitter / X"
              href="#"
              className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:opacity-90 transition-all hover:-translate-y-0.5"
              title="Twitter / X"
            >
              <Twitter className="text-white" />
            </a>
            <a
              aria-label="Discord"
              href="#"
              className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center hover:opacity-90 transition-all hover:-translate-y-0.5"
              title="Discord"
            >
              <MessageCircle className="text-white" />
            </a>
          </div>
        </div>

        {/* Right: main mascot visual with meme background */}
        <div className="relative block group">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-[#f3ba2f]/20 rounded-full translate-y-10" />
          
          {/* Meme-style background elements */}
          <div className="absolute inset-0 -z-5 pointer-events-none">
            {/* Floating "4" icons - hidden on mobile */}
            <div className="absolute -top-16 -left-16 text-4xl font-black text-[#f3ba2f]/30 animate-float hidden sm:block" style={{ animationDelay: '0s' }}>
              4
            </div>
            <div className="absolute -top-8 -right-20 text-3xl font-black text-[#ff6b35]/30 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
              4
            </div>
            <div className="absolute -bottom-12 -left-12 text-3xl font-black text-[#f3ba2f]/25 animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
              4
            </div>
            <div className="absolute -bottom-8 -right-16 text-4xl font-black text-[#ff6b35]/25 animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
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
                className="absolute w-1 h-1 bg-[#f3ba2f] rounded-full opacity-40 animate-particle-float"
                style={{
                  top: `${15 + (i * 10)}%`,
                  left: `${10 + (i * 12)}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + (i * 0.2)}s`
                }}
              />
            ))}
            
            {/* Meme text elements - hidden on mobile */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-sm font-black text-[#f3ba2f]/40 animate-float hidden md:block" style={{ animationDelay: '2.8s' }}>
              TO THE MOON
            </div>
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-sm font-black text-[#ff6b35]/40 animate-float hidden md:block" style={{ animationDelay: '1.7s' }}>
              DIAMOND HANDS
            </div>
            <div className="absolute top-1/2 -left-24 transform -translate-y-1/2 text-sm font-black text-[#f3ba2f]/35 animate-float hidden lg:block" style={{ animationDelay: '0.3s', writingMode: 'vertical-rl' }}>
              HODL
            </div>
            <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 text-sm font-black text-[#ff6b35]/35 animate-float hidden lg:block" style={{ animationDelay: '2.1s', writingMode: 'vertical-rl' }}>
              WAGMI
            </div>
          </div>
          
          {/* Main mascot image */}
          <div className="flex justify-center">
            <Image
              src="/image-Photoroom.png"
              alt="FOURFOOT degen mascot"
              width={560}
              height={560}
              className="select-none drop-shadow-2xl rounded-[22px] ring-4 ring-[#f3ba2f]/70 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:drop-shadow-[0_25px_50px_rgba(243,186,47,0.4)] hover:ring-[#f3ba2f] hover:ring-8 anim-bob relative z-10 cursor-pointer w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[560px] lg:h-[560px]"
              priority
            />
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-[#f3ba2f]/20 via-[#ff6b35]/20 to-[#f3ba2f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
          
          {/* Hover particle burst */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#f3ba2f] rounded-full animate-particle-burst"
                style={{
                  top: '50%',
                  left: '50%',
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 30}deg) translateX(100px)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
