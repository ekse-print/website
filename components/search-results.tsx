"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductSidebar } from "@/components/header"
import { searchProducts } from "@/lib/products-data"
import { Search } from "lucide-react"

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const results = searchProducts(query)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <ProductSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center gap-2">
            <Search className="h-6 w-6 text-muted-foreground" />
            <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your search.</p>
              <Link href="/specials" className="mt-4 inline-block text-primary hover:underline">
                Browse all products
              </Link>
            </div>
          ) : (
            <>
              <p className="mb-6 text-muted-foreground">
                Found {results.length} product{results.length !== 1 ? "s" : ""}
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((product) => (
                  <Link key={product.id} href={`/specials/${product.categorySlug}/${product.slug}`}>
                    <Card className="group h-full overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <Image
                          src={product.image?.src || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="bg-primary py-3">
                        <CardTitle className="text-center text-sm text-primary-foreground">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <p className="text-lg font-bold text-primary">From R{product.price} ex VAT</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
