import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialsSection } from "@/components/socials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SocialsSection />
      <Footer />
    </main>
  )
}
