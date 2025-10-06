import Image from "next/image"

export function AboutSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151b3d]/50 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-8xl font-black mb-6 text-[#ff6b35]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            ABOUT
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#f3ba2f] to-[#ff6b35] rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative flex justify-center">
            <div className="relative animate-bounce-slow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-photo_2025-10-06_23-55-49-Photoroom-OMTOsqIdlrvf0rqlPxxnpj8VNCA3Hm.png"
                alt="FOURFOOT Mascot"
                width={500}
                height={500}
                className="w-full max-w-md h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#f3ba2f]/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-3xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
              MEET $FOURFOOT!
              <br />
              <span className="text-[#f3ba2f]">BNB&apos;S #1 MASCOT!</span>
            </p>

            <div className="space-y-4 text-lg text-[#a8b3cf] leading-relaxed">
              <p>
                BNB had the hand, now it&apos;s got the foot.{" "}
                <span className="text-[#f3ba2f] font-bold">$FOURFOOT</span> continues the $4 legacy, taking the next
                step in the meme-chain revolution.
              </p>

              <p className="text-white font-bold">
                Born on BNB, driven by degens, and built to move the culture forward.
              </p>

              <p>
                Taking the BNB chain by storm, we&apos;re embarking on an epic journey to unite the biggest and
                strongest community on the BNB chain!
              </p>

              <p>
                Together we&apos;ll grow to epic heights as the yellow hand leads BNB memes and cements the legacy on
                the BSC Chain!
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#f3ba2f]/20 to-[#ff6b35]/20 border-2 border-[#f3ba2f] rounded-2xl p-6">
              <p
                className="text-4xl font-black text-[#f3ba2f] text-center"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                WE ARE ALL 4EVER BNB
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#151b3d] border-2 border-[#f3ba2f]/50 rounded-xl p-6 text-center hover:border-[#f3ba2f] transition-colors">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-sm text-[#f3ba2f] font-black" style={{ fontFamily: "var(--font-fredoka)" }}>
                  LP BURNED
                </div>
              </div>
              <div className="bg-[#151b3d] border-2 border-[#ff6b35]/50 rounded-xl p-6 text-center hover:border-[#ff6b35] transition-colors">
                <div className="text-4xl mb-2">✅</div>
                <div className="text-sm text-[#ff6b35] font-black" style={{ fontFamily: "var(--font-fredoka)" }}>
                  RENOUNCED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
