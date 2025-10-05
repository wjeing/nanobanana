import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EditorSection } from "@/components/editor-section"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EditorSection />
      <Features />
      <Showcase />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
