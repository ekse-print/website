import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductSidebar } from "@/components/header"

export const metadata: Metadata = {
  title: "Printing Specials | Kwik Printing",
  description: "Take advantage of our great specials: Business Cards from R300 ex VAT & Flyers from R560 ex VAT.",
}

const specials = [
  {
    id: "business-cards",
    title: "Business Card Specials",
    image: "/professional-business-cards-stack-printing.jpg",
    href: "/quote",
  },
  {
    id: "flyers",
    title: "Flyer Specials",
    image: "/colorful-marketing-flyers-stack-printing.jpg",
    href: "/quote",
  },
  {
    id: "posters",
    title: "Poster Specials",
    image: "/large-format-poster-printing-rolled.jpg",
    href: "/quote",
  },
  {
    id: "folders",
    title: "Folder Specials",
    image: "/presentation-folders-corporate-printing.jpg",
    href: "/quote",
  },
]

export default function SpecialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <ProductSidebar />
          <div className="mt-4">
            <Link href="/quote">
              <Image
                src="/get-free-quote-red-banner-printing-services.jpg"
                alt="Get a Free Quote"
                width={250}
                height={150}
                className="w-full rounded"
              />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <Image
              src="/special-offer-banner-red-printing-discount.jpg"
              alt="Special Offer"
              width={900}
              height={150}
              className="w-full rounded"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold text-foreground">Printing Specials</h1>

          <div className="mb-8 text-muted-foreground">
            <p className="mb-4">
              Take advantage of our great specials:{" "}
              <strong className="text-primary">Business Cards from R300 ex vat</strong> &{" "}
              <strong className="text-primary">Flyers from R560 ex vat</strong>
            </p>
            <p className="mb-4">
              Kwik Printing prints hundreds of thousands of flyers and business cards monthly for Printing Companies,
              Brokers, Advertising Agencies and End Users.
            </p>
            <p className="mb-4">
              Over the last 50 years, we have mastered the art of producing high quality work, on time and at
              competitive prices.
            </p>
            <p>Click on one of our specials below, to learn more.</p>
            <p className="mt-4">
              <strong>We can help with all your printing requirements.</strong>{" "}
              <Link href="/services" className="text-primary hover:underline">
                Find out more
              </Link>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {specials.map((special) => (
              <Link key={special.id} href={special.href}>
                <Card className="group overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={special.image || "/placeholder.svg"}
                      alt={special.title}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="bg-primary py-3">
                    <CardTitle className="text-center text-lg text-primary-foreground">{special.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
