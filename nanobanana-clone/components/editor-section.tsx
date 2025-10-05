"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, Sparkles, ImageIcon } from "lucide-react"

export function EditorSection() {
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section id="editor" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Try The AI Editor</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Prompt Engine */}
          <Card className="p-6 bg-card border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Prompt Engine</h3>
                <p className="text-sm text-muted-foreground">Transform your image with AI-powered editing</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Batch Processing <span className="text-primary">NEW</span>
                </label>
                <p className="text-xs text-muted-foreground mb-2">
                  Enable batch mode to process multiple images at once
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Reference Image 0/9</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Add Image</p>
                    <p className="text-xs text-muted-foreground">Max 10MB</p>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Main Prompt</label>
                <Textarea
                  placeholder="A futuristic city powered by nano-technology, golden hour lighting, ultra detailed..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Now
              </Button>
            </div>
          </Card>

          {/* Output Gallery */}
          <Card className="p-6 bg-card border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Output Gallery</h3>
                <p className="text-sm text-muted-foreground">Your edits will appear here instantly</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg aspect-square flex items-center justify-center bg-muted/30">
              {uploadedImage ? (
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium text-foreground">Ready for instant generation</p>
                  <p className="text-xs text-muted-foreground mt-1">Enter your prompt and unleash the power</p>
                </div>
              )}
            </div>

            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
