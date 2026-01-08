"use client"

import { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProductSidebar } from "@/components/header"
import { useCart } from "@/lib/cart-context"
import { productCategories } from "@/lib/products-data"
import { ShoppingCart, Check } from "lucide-react"

interface Props {
  params: Promise<{ category: string; product: string }>
}

export default function ProductPage({ params }: Props) {
  const { category, product } = use(params)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const categoryData = productCategories.find((c) => c.slug === category)
  const productData = categoryData?.items.find((p) => p.slug === product)

  if (!categoryData || !productData) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: `${category}-${product}`,
      category: categoryData.title,
      product: productData.name,
      variant: productData.name,
      quantity,
      price: productData.price,
      image: `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(productData.name + " printing")}`,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
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
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/specials" className="hover:text-primary">
              Specials
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/specials/${category}`} className="hover:text-primary">
              {categoryData.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{productData.name}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={`/.jpg?height=500&width=500&query=${encodeURIComponent(productData.name + " printing product")}`}
                alt={productData.name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{productData.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    R{productData.price} <span className="text-base font-normal text-muted-foreground">ex VAT</span>
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Price based on standard quantity. Contact us for bulk pricing.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-32"
                  />
                </div>

                <div className="space-y-4">
                  <Button onClick={handleAddToCart} className="w-full" size="lg" disabled={added}>
                    {added ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Added to Quote
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Quote
                      </>
                    )}
                  </Button>
                  <Link href="/cart">
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      View Quote Cart
                    </Button>
                  </Link>
                </div>

                <div className="rounded border border-border bg-secondary p-4">
                  <h3 className="mb-2 font-semibold">Product Details</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Category: {categoryData.title}</li>
                    <li>High quality professional printing</li>
                    <li>Fast turnaround available</li>
                    <li>Bulk discounts available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
