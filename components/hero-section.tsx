import Image from "next/image"
import { ArrowRight, Send, Twitter, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-6">
      {/* toned-down ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f3ba2f]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-[#ff6b35]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-10">
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
              className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Telegram"
            >
              <Send className="text-white" />
            </a>
            <a
              aria-label="Twitter / X"
              href="#"
              className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Twitter / X"
            >
              <Twitter className="text-white" />
            </a>
            <a
              aria-label="Discord"
              href="#"
              className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Discord"
            >
              <MessageCircle className="text-white" />
            </a>
          </div>
        </div>

        {/* Right: main mascot visual */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 -z-10 blur-3xl bg-[#f3ba2f]/20 rounded-full translate-y-10" />
          <Image
            src="/images/doxxed-logo.png"
            alt="FOURFOOT degen mascot"
            width={560}
            height={560}
            className="select-none pointer-events-none drop-shadow-2xl rounded-[22px] ring-4 ring-[#f3ba2f]/70 transition-transform duration-500 hover:scale-[1.03] anim-bob"
            priority
          />
        </div>
      </div>
    </section>
  )
}
