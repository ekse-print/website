"use client"

import { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProductSidebar } from "@/components/header"
import { useCart } from "@/lib/cart-context"
import { getProduct, getRecommendedProducts } from "@/lib/products-data"
import { ShoppingCart, Check, ChevronRight } from "lucide-react"

interface Props {
  params: Promise<{ category: string; product: string }>
}

export default function ProductPage({ params }: Props) {
  const { category, product: productSlug } = use(params)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const product = getProduct(category, productSlug)
  const recommendedProducts = getRecommendedProducts(category, productSlug, 4)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      category: product.category,
      product: product.name,
      variant: product.name,
      quantity,
      price: product.price,
      image: product.image.src,
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
          <nav className="mb-4 flex items-center gap-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/specials" className="hover:text-primary">
              Specials
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/specials/${category}`} className="hover:text-primary">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src={product.image.src || "/placeholder.svg"}
                alt={product.image.alt || product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm font-medium text-primary">{product.category}</p>
                <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-3xl font-bold text-primary">
                  R{product.price} <span className="text-base font-normal text-muted-foreground">ex VAT</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Price based on standard quantity. Contact us for bulk pricing.
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Specifications</h3>
                  <div className="rounded-md border border-border">
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex justify-between px-3 py-2 text-sm ${idx % 2 === 0 ? "bg-muted/50" : ""}`}
                      >
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="space-y-4 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <Label htmlFor="quantity" className="text-sm">
                      Quantity
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="mt-1 w-24"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Subtotal</p>
                    <p className="text-xl font-bold text-foreground">R{(product.price * quantity).toLocaleString()}</p>
                  </div>
                </div>

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
                <Link href="/cart" className="block">
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    View Quote Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">Recommended Products</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedProducts.map((recProduct) => {
                const recImage = recProduct.image?.src || "/placeholder.svg"

                return (
                  <Link key={recProduct.id} href={`/specials/${recProduct.categorySlug}/${recProduct.slug}`}>
                    <Card className="group h-full overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <Image
                          src={recImage || "/placeholder.svg"}
                          alt={recProduct.name}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="bg-primary p-2">
                        <p className="text-center text-xs text-primary-foreground">{recProduct.category}</p>
                      </CardHeader>
                      <CardContent className="p-3">
                        <h3 className="mb-1 line-clamp-2 text-sm font-medium text-foreground">{recProduct.name}</h3>
                        <p className="font-bold text-primary">From R{recProduct.price}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
