import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#f3ba2f]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <div className="bg-[#151b3d] border-2 border-[#f3ba2f] rounded-full px-6 py-3 text-sm font-bold text-[#f3ba2f] mb-6 inline-flex items-center gap-2 animate-neon-border">
                <span className="w-2 h-2 bg-[#f3ba2f] rounded-full animate-pulse" />
                BNB CHAIN MEME REVOLUTION
              </div>
            </div>

            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              <span className="text-[#f3ba2f] block">$FOURFOOT</span>
              <span className="text-white block mt-2 text-5xl md:text-6xl">STEPPING UP</span>
              <span className="text-[#ff6b35] block">THE GAME</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#a8b3cf] max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
              BNB had the hand 🖐️ now it&apos;s got the FOOT 🦶
              <br />
              <span className="text-[#f3ba2f]">We&apos;re taking the next step in the meme revolution!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#f3ba2f] hover:bg-[#d9a520] text-black font-black text-xl px-10 py-7 rounded-full group transition-all hover:scale-105"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                BUY $FOURFOOT
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-black font-black text-xl px-10 py-7 rounded-full bg-transparent transition-all hover:scale-105"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                VIEW CHART
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm flex-wrap">
              <div className="bg-[#151b3d] border border-[#f3ba2f]/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-[#f3ba2f]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  4EVER
                </div>
                <div className="text-[#a8b3cf] font-bold">BNB CHAIN</div>
              </div>
              <div className="bg-[#151b3d] border border-[#ff6b35]/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-[#ff6b35]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  100%
                </div>
                <div className="text-[#a8b3cf] font-bold">DEGEN VIBES</div>
              </div>
              <div className="bg-[#151b3d] border border-[#f3ba2f]/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-[#f3ba2f]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  🔥
                </div>
                <div className="text-[#a8b3cf] font-bold">LP BURNED</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-[#f3ba2f]/20 rounded-full blur-3xl scale-75 animate-pulse-glow" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-photo_2025-10-06_23-55-49-Photoroom-OMTOsqIdlrvf0rqlPxxnpj8VNCA3Hm.png"
                alt="FOURFOOT Mascot - The BNB Hand"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#f3ba2f] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#f3ba2f] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
