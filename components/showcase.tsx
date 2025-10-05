import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const showcaseItems = [
  {
    image: "/majestic-mountain-range-at-golden-hour-with-dramat.jpg",
    title: "Ultra-Fast Mountain Generation",
    description: "Created in 0.8 seconds with Nano Banana's optimized neural engine",
    badge: "Lightning Speed",
  },
  {
    image: "/japanese-garden-with-cherry-blossoms-and-tradition.jpg",
    title: "Instant Garden Creation",
    description: "Complex scene rendered in milliseconds using Nano Banana technology",
    badge: "Scene Mastery",
  },
  {
    image: "/tropical-beach-with-palm-trees-and-crystal-clear-w.jpg",
    title: "Tropical Paradise Scene",
    description: "Natural lighting and realistic textures generated instantly",
    badge: "Photo Realism",
  },
  {
    image: "/aurora-borealis-over-snowy-landscape-with-vibrant-.jpg",
    title: "Northern Lights Magic",
    description: "Stunning atmospheric effects with perfect color accuracy",
    badge: "Color Precision",
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Lightning-Fast AI Creations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what Nano Banana generates in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-shadow bg-card border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">{item.badge}</Badge>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
