import { Button } from "@/components/ui/button"
import { MessageCircle, Send, Twitter } from "lucide-react"

const socials = [
  {
    name: "Telegram",
    icon: Send,
    href: "#",
    color: "from-[#0088cc] to-[#0088cc]",
    bgColor: "bg-[#0088cc]",
    description: "Join the community",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    href: "#",
    color: "from-[#1DA1F2] to-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]",
    description: "Follow for updates",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "#",
    color: "from-[#5865F2] to-[#5865F2]",
    bgColor: "bg-[#5865F2]",
    description: "Chat with degens",
  },
]

const partners = [
  { name: "BNB Chain", logo: "🔶" },
  { name: "PancakeSwap", logo: "🥞" },
  { name: "DexTools", logo: "📊" },
  { name: "CoinGecko", logo: "🦎" },
]

export function SocialsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-[#f3ba2f]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              PARTNERS
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#f3ba2f] to-[#ff6b35] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#151b3d] border-2 border-[#f3ba2f]/30 rounded-2xl p-8 text-center hover:border-[#f3ba2f] transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{partner.logo}</div>
                <div className="text-sm font-semibold text-white group-hover:text-[#f3ba2f] transition-colors">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Socials Section */}
        <div>
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-[#ff6b35]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              SOCIALS
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff6b35] to-[#f3ba2f] rounded-full mx-auto mb-4" />
            <p className="text-xl text-[#a8b3cf]">Join the FOURFOOT revolution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative overflow-hidden bg-[#151b3d] border-2 border-[#f3ba2f]/30 rounded-2xl p-8 hover:border-[#f3ba2f] transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 text-center space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${social.bgColor} rounded-full transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{social.name}</h3>
                      <p className="text-sm text-[#a8b3cf]">{social.description}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#f3ba2f]/10 via-[#ff6b35]/10 to-[#f3ba2f]/10 border-2 border-[#f3ba2f] rounded-3xl p-12 max-w-3xl mx-auto">
              <h3
                className="text-3xl md:text-4xl font-black mb-4 text-balance text-white"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Ready to join the <span className="text-[#f3ba2f]">FOURFOOT</span> family?
              </h3>
              <p className="text-lg text-[#a8b3cf] mb-8">Be part of the biggest meme revolution on BNB Chain</p>
              <Button
                size="lg"
                className="bg-[#f3ba2f] hover:bg-[#ff6b35] text-[#0a0e27] font-black text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Buy Now on PancakeSwap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
