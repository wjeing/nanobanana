import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative banana elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 rotate-12">🍌</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 -rotate-12">🍌</div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Try the model that outperforms Flux Kontext. Try Now →
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Nano Banana</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
          Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
          editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Start Editing
          </Button>
          <Button size="lg" variant="outline">
            View Examples
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>One-shot editing</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Multi-image support</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>Natural language</span>
          </div>
        </div>
      </div>
    </section>
  )
}
