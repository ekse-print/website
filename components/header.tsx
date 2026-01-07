"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/artwork", label: "Artwork" },
  { href: "/quote", label: "Kwik Quote" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact Us" },
]

const productCategories = [
  {
    title: "Business Cards",
    items: ["350g Board Matt Laminated Both Sides"],
  },
  {
    title: "Calendars",
    items: ["A2 Calendars 250g Gloss Art Paper", "A3 Calendars 250g Gloss Art Paper"],
  },
  {
    title: "Flyers",
    items: ["A3 Flyers", "A4 Flyers", "A5 Flyers", "A6 Flyers", "DL Flyers", "Same Day Service"],
  },
  {
    title: "Folders",
    items: ["Full Colour 1 Side", "Full Colour Both Sides"],
  },
  {
    title: "Invoice Books",
    items: ["A4 Books Duplicate", "A4 Books Triplicate", "A5 Books Duplicate", "A5 Books Triplicate"],
  },
  {
    title: "Pads",
    items: ["A5 Pads 100 Sheets", "A5 Pads 50 Sheets"],
  },
  {
    title: "Posters",
    items: ["A2 Posters", "A3 Posters"],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-border bg-background">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/kwik-printing-logo-red-text-professional.jpg"
              alt="Kwik Printing"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/quote">
            <Image
              src="/get-free-quote-button-red-banner.jpg"
              alt="Get a Free Quote"
              width={200}
              height={60}
              className="hidden h-14 w-auto sm:block"
            />
          </Link>
        </div>
      </div>

      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
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
            <li key={category.title} className="border-b border-border last:border-b-0">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-background hover:text-primary"
                aria-expanded={expandedCategory === category.title}
              >
                {category.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedCategory === category.title ? "rotate-180" : ""}`}
                />
              </button>
              {expandedCategory === category.title && (
                <ul className="bg-background pb-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/specials#${category.title.toLowerCase().replace(" ", "-")}`}
                        className="block px-6 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item}
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
