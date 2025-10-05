import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍌</span>
              <span className="font-bold text-xl">Nano Banana</span>
            </div>
            <p className="text-background/70 text-sm">
              Transform any image with simple text prompts. The future of AI image editing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#editor" className="text-background/70 hover:text-background">
                  Image Editor
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-background/70 hover:text-background">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-background/70 hover:text-background">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#api" className="text-background/70 hover:text-background">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-background/70 hover:text-background">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">© 2025 Nano Banana. All rights reserved.</p>
          <p className="text-background/50 text-xs">
            Nanobanana.ai is an independent product and is not affiliate with Google or any AI brands.
          </p>
        </div>
      </div>
    </footer>
  )
}
