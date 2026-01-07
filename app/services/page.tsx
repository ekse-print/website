import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, FileText, ImageIcon, FolderOpen, Calendar, Receipt, StickyNote } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Kwik Printing",
  description:
    "Explore our full range of commercial printing services including business cards, flyers, posters, folders, calendars, and more.",
}

const services = [
  {
    id: "business-cards",
    icon: CreditCard,
    title: "Business Cards",
    description: "Make a lasting first impression with professionally printed business cards.",
    details: [
      "Standard and custom sizes available",
      "Gloss or matt lamination options",
      "Single or double-sided printing",
      "Premium paper stocks",
    ],
  },
  {
    id: "flyers",
    icon: FileText,
    title: "Flyers",
    description: "Eye-catching flyers for effective marketing and promotional campaigns.",
    details: ["A3, A4, A5, A6, and DL sizes", "Single or double-sided", "Gloss or matt finish", "Full color printing"],
  },
  {
    id: "posters",
    icon: ImageIcon,
    title: "Posters",
    description: "High-quality posters in various sizes for maximum visual impact.",
    details: [
      "A2 and A3 sizes available",
      "Vibrant full-color printing",
      "Indoor and outdoor options",
      "Premium paper quality",
    ],
  },
  {
    id: "folders",
    icon: FolderOpen,
    title: "Folders",
    description: "Professional presentation folders to showcase your business documents.",
    details: [
      "300g Gloss or Matt finish",
      "Single or double-sided printing",
      "Custom pocket configurations",
      "Business card slits available",
    ],
  },
  {
    id: "calendars",
    icon: Calendar,
    title: "Calendars",
    description: "Custom calendars to keep your brand visible all year round.",
    details: [
      "A2 and A3 wall calendars",
      "Desk calendar options",
      "Custom designs welcome",
      "Spiral or staple binding",
    ],
  },
  {
    id: "invoice-books",
    icon: Receipt,
    title: "Invoice Books",
    description: "Customized invoice and receipt books tailored to your business needs.",
    details: [
      "Duplicate and triplicate sets",
      "Numbered sequentially",
      "Custom layouts available",
      "Perforated for easy use",
    ],
  },
  {
    id: "pads",
    icon: StickyNote,
    title: "Pads",
    description: "Branded notepads and memo pads for everyday business use.",
    details: [
      "A5 size standard",
      "50 or 100 sheet options",
      "Glue-bound for easy tear-off",
      "Full-color printing available",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="text-lg text-neutral-300">
              Comprehensive commercial printing solutions for all your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="flex flex-col border-border bg-card transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Need a Custom Solution?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Don&apos;t see exactly what you need? Contact us for custom printing solutions tailored to your specific
              requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
