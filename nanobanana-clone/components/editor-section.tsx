"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, Sparkles, ImageIcon, Loader2 } from "lucide-react"

export function EditorSection() {
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedResult, setGeneratedResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        setGeneratedResult(null) // Clear previous result
        setError(null) // Clear any errors
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt.trim()) {
      setError("Please upload an image and enter a prompt")
      return
    }

    setIsGenerating(true)
    setError(null)
    setGeneratedResult(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          imageUrl: uploadedImage
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate')
      }

      setGeneratedResult(data.result)
    } catch (error) {
      console.error('Generation error:', error)
      setError(error instanceof Error ? error.message : 'Failed to generate result')
    } finally {
      setIsGenerating(false)
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

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleGenerate}
                disabled={isGenerating || !uploadedImage || !prompt.trim()}
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2" />
                )}
                {isGenerating ? 'Generating...' : 'Generate Now'}
              </Button>

              {error && (
                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
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
              {isGenerating ? (
                <div className="text-center">
                  <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-sm font-medium text-foreground">Generating with AI...</p>
                  <p className="text-xs text-muted-foreground mt-1">Please wait while we process your image</p>
                </div>
              ) : generatedResult ? (
                <div className="w-full h-full p-4">
                  <div className="w-full h-full bg-card rounded-lg p-4 overflow-auto">
                    <h4 className="font-semibold text-foreground mb-2">AI Analysis Result:</h4>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{generatedResult}</p>
                  </div>
                </div>
              ) : uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium text-foreground">Ready for instant generation</p>
                  <p className="text-xs text-muted-foreground mt-1">Upload an image and enter your prompt</p>
                </div>
              )}
            </div>

            <label htmlFor="image-upload">
              <Button variant="outline" className="w-full mt-4 bg-transparent cursor-pointer" asChild>
                <div>
                  <Upload className="w-4 h-4 mr-2" />
                  {uploadedImage ? 'Change Image' : 'Upload Image'}
                </div>
              </Button>
            </label>
          </Card>
        </div>
      </div>
    </section>
  )
}
