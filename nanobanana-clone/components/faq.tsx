import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Nano Banana different from other AI image editors?",
    answer:
      "Nano Banana uses advanced natural language processing to understand complex editing instructions. Our model excels at character consistency and scene preservation, outperforming competitors like Flux Kontext in benchmark tests.",
  },
  {
    question: "How does the image upload feature work?",
    answer:
      "Simply drag and drop your images or click the upload button. Nano Banana supports all common image formats (JPG, PNG, WebP) up to 10MB. You can upload multiple reference images for batch processing.",
  },
  {
    question: "Can I use Nano Banana for commercial projects?",
    answer:
      "Yes! All images generated with Nano Banana can be used for commercial purposes. Our Pro and Enterprise plans include full commercial licensing with no attribution required.",
  },
  {
    question: "What is character consistency and why is it important?",
    answer:
      "Character consistency means maintaining the same facial features, style, and identity across multiple edits. This is crucial for creating AI influencers, brand mascots, or any series of images featuring the same character.",
  },
  {
    question: "How fast is the image generation process?",
    answer:
      "Nano Banana generates high-quality images in under 2 seconds on average. Our optimized neural engine ensures lightning-fast processing without compromising quality.",
  },
  {
    question: "Do you offer an API for developers?",
    answer:
      "Yes! We provide a comprehensive REST API with detailed documentation. Enterprise customers get priority support and higher rate limits for production applications.",
  },
  {
    question: "What kind of prompts work best?",
    answer:
      "Natural, descriptive prompts work best. Describe what you want to change in plain English, including details about lighting, style, and specific elements. Our AI understands context and nuance.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! New users get 50 free credits to try all features. No credit card required. You can upgrade to a paid plan anytime to continue using Nano Banana.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about Nano Banana</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
