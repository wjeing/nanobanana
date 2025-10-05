import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    avatar: "/professional-woman-portrait.png",
    content:
      "Nano Banana has completely transformed my workflow. The character consistency is unmatched - I can finally create cohesive series without worrying about style drift.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    avatar: "/professional-man-portrait.png",
    content:
      "The natural language editing is a game-changer. I can describe exactly what I want and get perfect results on the first try. It's like having a professional editor on demand.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    avatar: "/confident-businesswoman.png",
    content:
      "We use Nano Banana for all our UGC campaigns. The multi-image support and scene preservation features save us hours of work every week.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Photographer",
    avatar: "/photographer-portrait.png",
    content:
      "As a professional photographer, I was skeptical about AI editing. Nano Banana proved me wrong - the quality is exceptional and it enhances my creative process.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Loved by Creators Worldwide</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Nano Banana for their image editing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
