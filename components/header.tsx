"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"
import { productCategories } from "@/lib/products-data"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/artwork", label: "Artwork" },
  { href: "/quote", label: "Quote" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { totalItems } = useCart()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-border bg-background">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Search - Left */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 sm:w-64"
                    autoFocus
                  />
                  <Button type="submit" size="icon" variant="ghost">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button type="button" size="icon" variant="ghost" onClick={() => setSearchOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <Button size="icon" variant="ghost" onClick={() => setSearchOpen(true)} aria-label="Search products">
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Logo - Center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/ekse-print-logo-professional.jpg"
              alt="Ekse Printing"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Cart & Quote - Right */}
          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative">
              <Button size="icon" variant="ghost" aria-label="View cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/quote" className="hidden sm:block">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="hidden items-center justify-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between py-2 lg:hidden">
            <span className="text-sm font-medium text-primary-foreground">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background lg:hidden">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export function ProductSidebar() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <aside className="rounded border border-border bg-secondary">
      <nav aria-label="Product categories">
        <ul>
          {productCategories.map((category) => (
            <li key={category.slug} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.slug ? null : category.slug)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-background hover:text-primary"
                aria-expanded={expandedCategory === category.slug}
              >
                {category.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedCategory === category.slug ? "rotate-180" : ""}`}
                />
              </button>
              {expandedCategory === category.slug && (
                <ul className="bg-background pb-2">
                  {category.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/specials/${category.slug}/${item.slug}`}
                        className="block px-6 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
