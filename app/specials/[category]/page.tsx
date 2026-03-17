import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductSidebar } from "@/components/header"
import { productCategories } from "@/lib/products-data"

const productImages: Record<string, string> = {
  "350g-matt-laminated": "/product-business-card-matt.jpg",
  "350g-gloss-laminated": "/product-business-card-gloss.jpg",
  "300g-uncoated": "/product-business-card-uncoated.jpg",
  "a4-calendars": "/product-calendar-a4.jpg",
  "a3-calendars": "/product-calendar-a3.jpg",
  "a3-flyers": "/product-flyer-a3.jpg",
  "a4-flyers": "/product-flyer-a4.jpg",
  "a5-flyers": "/product-flyer-a5.jpg",
  "a6-flyers": "/product-flyer-a6.jpg",
  "dl-flyers": "/product-flyer-dl.jpg",
  "same-day": "/product-flyer-same-day.jpg",
  "full-colour-1-side": "/product-folder-1side.jpg",
  "full-colour-both-sides": "/product-folder-2sides.jpg",
  "a4-duplicate": "/product-invoice-a4-dup.jpg",
  "a4-triplicate": "/product-invoice-a4-trip.jpg",
  "a5-duplicate": "/product-invoice-a5-dup.jpg",
  "a5-triplicate": "/product-invoice-a5-trip.jpg",
  "a5-100-sheets": "/product-pad-100.jpg",
  "a5-50-sheets": "/product-pad-50.jpg",
  "a2-posters": "/product-poster-a2.jpg",
  "a3-posters": "/product-poster-a3.jpg",
}

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryData = productCategories.find((c) => c.slug === category)

  if (!categoryData) {
    return { title: "Category Not Found | Kwik Printing" }
  }

  return {
    title: `${categoryData.title} | Kwik Printing`,
    description: `Browse our ${categoryData.title.toLowerCase()} products and get a quote today.`,
  }
}

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const categoryData = productCategories.find((c) => c.slug === category)

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <ProductSidebar />
          <div className="mt-4">
            <Link href="/quote">
              <Image
                src="/get-free-quote-banner.jpg"
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
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/specials" className="hover:text-primary">
              Specials
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{categoryData.title}</span>
          </nav>

          <h1 className="mb-6 text-3xl font-bold text-foreground">{categoryData.title}</h1>

          <p className="mb-8 text-muted-foreground">
            Choose from our range of {categoryData.title.toLowerCase()} options below. Click on a product to view
            details and add to your quote.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryData.items.map((item) => (
              <Link key={item.slug} href={`/specials/${category}/${item.slug}`}>
                <Card className="group overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <Image
                      src={productImages[item.slug] || `/product-${category}-default.jpg`}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="bg-primary py-3">
                    <CardTitle className="text-center text-sm text-primary-foreground">{item.name}</CardTitle>
                  </CardHeader>
                  <div className="p-3 text-center">
                    <span className="text-lg font-bold text-primary">From R{item.price} ex VAT</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
