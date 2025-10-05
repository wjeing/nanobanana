import { Card } from "@/components/ui/card"
import { Sparkles, Zap, ImageIcon, Layers, Globe, Wand2 } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Natural Language Editing",
    description:
      "Edit images using simple, conversational prompts. Nano-banana AI understands complex instructions like GPT for images.",
  },
  {
    icon: Layers,
    title: "Character Consistency",
    description:
      "This model excels at preserving character details across edits. Maintain identity, style, and unique features effortlessly.",
  },
  {
    icon: Sparkles,
    title: "Scene Preservation",
    description:
      "Keep your original backgrounds and scene elements intact while making targeted edits to specific areas.",
  },
  {
    icon: Zap,
    title: "One-Shot Editing",
    description:
      "Perfect results in a single attempt. Nano-banana delivers one-shot image editing challenges effortlessly.",
  },
  {
    icon: ImageIcon,
    title: "Multi-Image Context",
    description: "Activate multiple images simultaneously. Support for advanced multi-image editing workflows.",
  },
  {
    icon: Wand2,
    title: "AI UGC Creation",
    description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Core Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Why Choose Nano Banana?</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Nano-banana is the most advanced AI image editor on LMArena. Revolutionize your photo editing with natural
            language understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
