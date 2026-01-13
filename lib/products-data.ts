export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  slug: string
  price: number
  description: string
  image: string
  features?: string[]
  specifications?: Record<string, string>
}

export interface ProductItem {
  slug: string
  name: string
  price: number
  description?: string
  features?: string[]
  specifications?: Record<string, string>
}

export interface ProductCategory {
  slug: string
  title: string
  items: ProductItem[]
}

export const productCategories: ProductCategory[] = [
  {
    slug: "business-cards",
    title: "Business Cards",
    items: [
      {
        slug: "350g-matt-laminated",
        name: "350g Board Matt Laminated Both Sides",
        price: 300,
        description:
          "Premium matt laminated business cards with a smooth, elegant finish. Perfect for professional and corporate branding.",
        features: [
          "Matt lamination both sides",
          "350gsm premium board",
          "Scratch resistant",
          "Elegant professional finish",
        ],
        specifications: {
          "Paper Weight": "350gsm",
          Finish: "Matt Laminated",
          Sides: "Both",
          "Standard Qty": "500 cards",
        },
      },
      {
        slug: "350g-gloss-laminated",
        name: "350g Board Gloss Laminated Both Sides",
        price: 320,
        description:
          "High-shine gloss laminated business cards that make colors pop. Ideal for vibrant, eye-catching designs.",
        features: [
          "Gloss lamination both sides",
          "350gsm premium board",
          "Vibrant color reproduction",
          "Water resistant",
        ],
        specifications: {
          "Paper Weight": "350gsm",
          Finish: "Gloss Laminated",
          Sides: "Both",
          "Standard Qty": "500 cards",
        },
      },
      {
        slug: "300g-uncoated",
        name: "300g Uncoated Board",
        price: 280,
        description:
          "Classic uncoated business cards with a natural, tactile feel. Great for writing notes and a premium touch.",
        features: ["Uncoated natural finish", "300gsm quality board", "Easy to write on", "Eco-friendly option"],
        specifications: { "Paper Weight": "300gsm", Finish: "Uncoated", Sides: "Both", "Standard Qty": "500 cards" },
      },
    ],
  },
  {
    slug: "calendars",
    title: "Calendars",
    items: [
      {
        slug: "a2-calendars",
        name: "A2 Calendars 250g Gloss Art Paper",
        price: 850,
        description:
          "Large format A2 wall calendars printed on premium gloss art paper. Perfect for offices and promotional use.",
        features: ["A2 size (594x420mm)", "250gsm gloss art paper", "Full color printing", "Wire-O binding"],
        specifications: {
          Size: "A2 (594x420mm)",
          Paper: "250gsm Gloss Art",
          Binding: "Wire-O",
          Pages: "13 (cover + 12 months)",
        },
      },
      {
        slug: "a3-calendars",
        name: "A3 Calendars 250g Gloss Art Paper",
        price: 650,
        description: "Popular A3 wall calendars with stunning print quality. Ideal for homes and business gifts.",
        features: ["A3 size (420x297mm)", "250gsm gloss art paper", "Full color printing", "Wire-O binding"],
        specifications: {
          Size: "A3 (420x297mm)",
          Paper: "250gsm Gloss Art",
          Binding: "Wire-O",
          Pages: "13 (cover + 12 months)",
        },
      },
    ],
  },
  {
    slug: "flyers",
    title: "Flyers",
    items: [
      {
        slug: "a3-flyers",
        name: "A3 Flyers",
        price: 1200,
        description:
          "Large format A3 flyers for maximum impact. Perfect for posters, menus, and promotional materials.",
        features: ["A3 size (420x297mm)", "Full color both sides", "Various paper options", "Fast turnaround"],
        specifications: {
          Size: "A3 (420x297mm)",
          Paper: "150gsm Gloss",
          Print: "Full Color Both Sides",
          "Min Qty": "250",
        },
      },
      {
        slug: "a4-flyers",
        name: "A4 Flyers",
        price: 800,
        description: "Standard A4 flyers ideal for handouts, inserts, and general marketing materials.",
        features: ["A4 size (297x210mm)", "Full color both sides", "Various paper options", "Fast turnaround"],
        specifications: {
          Size: "A4 (297x210mm)",
          Paper: "150gsm Gloss",
          Print: "Full Color Both Sides",
          "Min Qty": "500",
        },
      },
      {
        slug: "a5-flyers",
        name: "A5 Flyers",
        price: 560,
        description: "Compact A5 flyers perfect for promotions, events, and targeted marketing campaigns.",
        features: ["A5 size (210x148mm)", "Full color both sides", "Various paper options", "Fast turnaround"],
        specifications: {
          Size: "A5 (210x148mm)",
          Paper: "150gsm Gloss",
          Print: "Full Color Both Sides",
          "Min Qty": "500",
        },
      },
      {
        slug: "a6-flyers",
        name: "A6 Flyers",
        price: 450,
        description: "Small A6 flyers ideal for postcards, vouchers, and quick promotional pieces.",
        features: ["A6 size (148x105mm)", "Full color both sides", "Various paper options", "Fast turnaround"],
        specifications: {
          Size: "A6 (148x105mm)",
          Paper: "150gsm Gloss",
          Print: "Full Color Both Sides",
          "Min Qty": "1000",
        },
      },
      {
        slug: "dl-flyers",
        name: "DL Flyers",
        price: 500,
        description: "Slim DL format flyers perfect for rack cards, menus, and information sheets.",
        features: ["DL size (210x99mm)", "Full color both sides", "Fits standard envelopes", "Fast turnaround"],
        specifications: {
          Size: "DL (210x99mm)",
          Paper: "150gsm Gloss",
          Print: "Full Color Both Sides",
          "Min Qty": "500",
        },
      },
      {
        slug: "same-day",
        name: "Same Day Service",
        price: 1500,
        description:
          "Urgent same-day flyer printing for last-minute campaigns and events. Order by 10am for same-day collection.",
        features: ["Same day turnaround", "Order by 10am", "A4/A5 sizes available", "Full color printing"],
        specifications: { Turnaround: "Same Day", Cutoff: "10:00 AM", Sizes: "A4, A5", "Min Qty": "250" },
      },
    ],
  },
  {
    slug: "folders",
    title: "Folders",
    items: [
      {
        slug: "full-colour-1-side",
        name: "Full Colour 1 Side",
        price: 2500,
        description:
          "Professional presentation folders with full-color printing on the outside. Includes business card slits.",
        features: ["Full color outside", "350gsm board", "Business card slits", "Gloss or matt lamination"],
        specifications: {
          Size: "A4 Capacity",
          Paper: "350gsm Board",
          Print: "Full Color 1 Side",
          Features: "Card Slits",
        },
      },
      {
        slug: "full-colour-both-sides",
        name: "Full Colour Both Sides",
        price: 3200,
        description: "Premium presentation folders with full-color printing inside and out. Maximum branding impact.",
        features: ["Full color both sides", "350gsm board", "Business card slits", "Gloss or matt lamination"],
        specifications: {
          Size: "A4 Capacity",
          Paper: "350gsm Board",
          Print: "Full Color Both Sides",
          Features: "Card Slits",
        },
      },
    ],
  },
  {
    slug: "invoice-books",
    title: "Invoice Books",
    items: [
      {
        slug: "a4-duplicate",
        name: "A4 Books Duplicate",
        price: 450,
        description: "A4 duplicate invoice books with NCR paper. Perfect for invoicing, receipts, and order forms.",
        features: ["A4 size", "Duplicate (2 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A4", Copies: "Duplicate (2)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a4-triplicate",
        name: "A4 Books Triplicate",
        price: 550,
        description: "A4 triplicate invoice books with three copies per set. Ideal for detailed record keeping.",
        features: ["A4 size", "Triplicate (3 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A4", Copies: "Triplicate (3)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a5-duplicate",
        name: "A5 Books Duplicate",
        price: 350,
        description: "Compact A5 duplicate books perfect for field work, deliveries, and mobile invoicing.",
        features: ["A5 size", "Duplicate (2 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A5", Copies: "Duplicate (2)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a5-triplicate",
        name: "A5 Books Triplicate",
        price: 420,
        description: "A5 triplicate books with three copies per set. Great for small businesses and contractors.",
        features: ["A5 size", "Triplicate (3 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A5", Copies: "Triplicate (3)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
    ],
  },
  {
    slug: "pads",
    title: "Pads",
    items: [
      {
        slug: "a5-100-sheets",
        name: "A5 Pads 100 Sheets",
        price: 280,
        description:
          "Custom printed A5 notepads with 100 sheets. Perfect for branded stationery and promotional items.",
        features: ["A5 size", "100 sheets per pad", "Full color header", "Glued spine"],
        specifications: { Size: "A5 (210x148mm)", Sheets: "100", Print: "Full Color Header", Binding: "Glued" },
      },
      {
        slug: "a5-50-sheets",
        name: "A5 Pads 50 Sheets",
        price: 180,
        description: "Custom printed A5 notepads with 50 sheets. Economical option for everyday note-taking.",
        features: ["A5 size", "50 sheets per pad", "Full color header", "Glued spine"],
        specifications: { Size: "A5 (210x148mm)", Sheets: "50", Print: "Full Color Header", Binding: "Glued" },
      },
    ],
  },
  {
    slug: "posters",
    title: "Posters",
    items: [
      {
        slug: "a2-posters",
        name: "A2 Posters",
        price: 950,
        description: "Large A2 posters for high-impact visual displays. Perfect for retail, events, and advertising.",
        features: ["A2 size (594x420mm)", "Full color printing", "Various paper options", "Indoor/outdoor options"],
        specifications: { Size: "A2 (594x420mm)", Paper: "150gsm Gloss", Print: "Full Color 1 Side", "Min Qty": "50" },
      },
      {
        slug: "a3-posters",
        name: "A3 Posters",
        price: 650,
        description: "Versatile A3 posters ideal for window displays, notice boards, and promotional campaigns.",
        features: ["A3 size (420x297mm)", "Full color printing", "Various paper options", "Indoor/outdoor options"],
        specifications: { Size: "A3 (420x297mm)", Paper: "150gsm Gloss", Print: "Full Color 1 Side", "Min Qty": "100" },
      },
    ],
  },
]


export function getProduct(categorySlug: string, productSlug: string): Product | null {
  const category = productCategories.find((c) => c.slug === categorySlug)
  if (!category) return null

  const item = category.items.find((i) => i.slug === productSlug)
  if (!item) return null

  return {
    id: `${categorySlug}-${productSlug}`,
    name: item.name,
    category: category.title,
    categorySlug: category.slug,
    slug: item.slug,
    price: item.price,
    description: item.description || `High quality ${category.title.toLowerCase()} - ${item.name}`,
    image: `/product-${categorySlug}-${productSlug}.jpg`,
    features: item.features,
    specifications: item.specifications,
  }
}

export function getRecommendedProducts(categorySlug: string, currentProductSlug: string, limit = 4): Product[] {
  const products: Product[] = []

  // First, add products from the same category
  const sameCategory = productCategories.find((c) => c.slug === categorySlug)
  if (sameCategory) {
    sameCategory.items
      .filter((item) => item.slug !== currentProductSlug)
      .forEach((item) => {
        products.push({
          id: `${categorySlug}-${item.slug}`,
          name: item.name,
          category: sameCategory.title,
          categorySlug: sameCategory.slug,
          slug: item.slug,
          price: item.price,
          description: item.description || `High quality ${sameCategory.title.toLowerCase()}`,
          image: `/product-${categorySlug}-${item.slug}.jpg`,
          features: item.features,
          specifications: item.specifications,
        })
      })
  }

  // If not enough, add from other categories
  if (products.length < limit) {
    productCategories
      .filter((c) => c.slug !== categorySlug)
      .forEach((category) => {
        if (products.length >= limit) return
        category.items.slice(0, 2).forEach((item) => {
          if (products.length >= limit) return
          products.push({
            id: `${category.slug}-${item.slug}`,
            name: item.name,
            category: category.title,
            categorySlug: category.slug,
            slug: item.slug,
            price: item.price,
            description: item.description || `High quality ${category.title.toLowerCase()}`,
            image: `/product-${category.slug}-${item.slug}.jpg`,
            features: item.features,
            specifications: item.specifications,
          })
        })
      })
  }

  return products.slice(0, limit)
}

export function getAllProducts(): Product[] {
  const products: Product[] = []

  productCategories.forEach((category) => {
    category.items.forEach((item) => {
      products.push({
        id: `${category.slug}-${item.slug}`,
        name: item.name,
        category: category.title,
        categorySlug: category.slug,
        slug: item.slug,
        price: item.price,
        description: item.description || `High quality ${category.title.toLowerCase()} - ${item.name}`,
        image: `/product-${category.slug}-${item.slug}.jpg`,
        features: item.features,
        specifications: item.specifications,
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
