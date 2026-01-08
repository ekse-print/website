export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  price: number
  description: string
  image: string
  options?: string[]
}

export const productCategories = [
  {
    slug: "business-cards",
    title: "Business Cards",
    items: [
      { slug: "350g-matt-laminated", name: "350g Board Matt Laminated Both Sides", price: 300 },
      { slug: "350g-gloss-laminated", name: "350g Board Gloss Laminated Both Sides", price: 320 },
      { slug: "300g-uncoated", name: "300g Uncoated Board", price: 280 },
    ],
  },
  {
    slug: "calendars",
    title: "Calendars",
    items: [
      { slug: "a2-calendars", name: "A2 Calendars 250g Gloss Art Paper", price: 850 },
      { slug: "a3-calendars", name: "A3 Calendars 250g Gloss Art Paper", price: 650 },
    ],
  },
  {
    slug: "flyers",
    title: "Flyers",
    items: [
      { slug: "a3-flyers", name: "A3 Flyers", price: 1200 },
      { slug: "a4-flyers", name: "A4 Flyers", price: 800 },
      { slug: "a5-flyers", name: "A5 Flyers", price: 560 },
      { slug: "a6-flyers", name: "A6 Flyers", price: 450 },
      { slug: "dl-flyers", name: "DL Flyers", price: 500 },
      { slug: "same-day", name: "Same Day Service", price: 1500 },
    ],
  },
  {
    slug: "folders",
    title: "Folders",
    items: [
      { slug: "full-colour-1-side", name: "Full Colour 1 Side", price: 2500 },
      { slug: "full-colour-both-sides", name: "Full Colour Both Sides", price: 3200 },
    ],
  },
  {
    slug: "invoice-books",
    title: "Invoice Books",
    items: [
      { slug: "a4-duplicate", name: "A4 Books Duplicate", price: 450 },
      { slug: "a4-triplicate", name: "A4 Books Triplicate", price: 550 },
      { slug: "a5-duplicate", name: "A5 Books Duplicate", price: 350 },
      { slug: "a5-triplicate", name: "A5 Books Triplicate", price: 420 },
    ],
  },
  {
    slug: "pads",
    title: "Pads",
    items: [
      { slug: "a5-100-sheets", name: "A5 Pads 100 Sheets", price: 280 },
      { slug: "a5-50-sheets", name: "A5 Pads 50 Sheets", price: 180 },
    ],
  },
  {
    slug: "posters",
    title: "Posters",
    items: [
      { slug: "a2-posters", name: "A2 Posters", price: 950 },
      { slug: "a3-posters", name: "A3 Posters", price: 650 },
    ],
  },
]

export function getAllProducts(): Product[] {
  const products: Product[] = []

  productCategories.forEach((category) => {
    category.items.forEach((item) => {
      products.push({
        id: `${category.slug}-${item.slug}`,
        name: item.name,
        category: category.title,
        subcategory: item.name,
        price: item.price,
        description: `High quality ${category.title.toLowerCase()} - ${item.name}`,
        image: `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(item.name + " printing")}`,
      })
    })
  })

  return products
}

export function searchProducts(query: string): Product[] {
  const products = getAllProducts()
  const lowerQuery = query.toLowerCase()

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery),
  )
}
