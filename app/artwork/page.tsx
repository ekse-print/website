import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, FileType, Ruler, Palette, AlertTriangle, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Artwork Guidelines | Kwik Printing",
  description:
    "Learn how to prepare your artwork for printing. File formats, resolution requirements, and print-ready guidelines.",
}

const guidelines = [
  {
    icon: FileType,
    title: "Accepted File Formats",
    description: "We accept the following file formats for print-ready artwork:",
    items: [
      "PDF (Preferred - High Resolution)",
      "JPEG / JPG (300 DPI minimum)",
      "TIFF (300 DPI minimum)",
      "EPS (Vector format)",
      "AI (Adobe Illustrator)",
    ],
  },
  {
    icon: Ruler,
    title: "Resolution Requirements",
    description: "To ensure crisp, high-quality prints:",
    items: [
      "Minimum 300 DPI for all images",
      "Vector graphics preferred for logos",
      "No upscaling of low-resolution images",
      "Embed all fonts or convert to outlines",
    ],
  },
  {
    icon: Palette,
    title: "Color Mode",
    description: "For accurate color reproduction:",
    items: [
      "Use CMYK color mode for all artwork",
      "Avoid RGB colors (may shift in print)",
      "Provide Pantone codes for spot colors",
      "Rich black: C60 M40 Y40 K100",
    ],
  },
  {
    icon: FileCheck,
    title: "Bleed & Safety",
    description: "Proper margins ensure clean edges:",
    items: [
      "Include 3mm bleed on all sides",
      "Keep important content 5mm from edges",
      "Crop marks are helpful but not required",
      "Extend background colors to bleed edge",
    ],
  },
]

const tips = [
  "Always provide a print-ready PDF when possible",
  "Convert all fonts to outlines to avoid font substitution",
  "Flatten any transparent layers before exporting",
  "Check spelling and content before submitting",
  "Include a low-res proof for color reference",
  "Clearly name your files with job description",
]

export default function ArtworkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Artwork Guidelines</h1>
            <p className="text-lg text-neutral-300">Follow these guidelines to ensure your artwork prints perfectly</p>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Preparing Your Artwork</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Properly prepared artwork ensures the best print quality and helps us process your order faster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((guideline) => (
              <Card key={guideline.title} className="border-border bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <guideline.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{guideline.title}</CardTitle>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guideline.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Pro Tips</h2>
              <p className="text-lg text-muted-foreground">Additional recommendations for the best results</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-amber-900">Important Note</h3>
                  <p className="text-sm text-amber-800">
                    Kwik Printing is not responsible for errors in customer-supplied artwork. Please carefully review
                    your files before submission. We recommend requesting a proof before final printing for large
                    orders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Download className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">Need Help With Your Artwork?</h2>
            <p className="mb-8 text-neutral-300">
              Our team can help you prepare your files for print. Contact us for design assistance or file preparation
              services.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-600 bg-transparent text-background hover:bg-neutral-800 hover:text-background"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
