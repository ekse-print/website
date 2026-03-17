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
    slug: "promotional-items",
    title: "Promotional Items",
    items: [
      {
        slug: "tshirts-dtf",
        name: "T-Shirts (DTF Print)",
        price: 0,
        description: "High-quality custom t-shirt printing using DTF (Direct to Film) technology. Ideal for vibrant, full-colour designs. We can print on customer-supplied garments or provide t-shirts if needed.",
        features: [
          "Full colour prints",
          "Durable and stretch resistant prints",
          "Suitable for cotton and poly fabrics",
          "No minimum for small runs",
          "Garment supply available"
        ],
        specifications: {
          "Print Method": "DTF (Direct to Film)",
          "Material": "Cotton / Polyester",
          "Sizes": "S - XXL (larger on request)",
          "Turnaround": "2-5 working days"
        }
      },
            {
        slug: "tshirts-embroidery",
        name: "T-Shirts (Embroidery)",
        price: 0,
        description: "Premium embroidered t-shirts for a professional and long-lasting finish. Perfect for uniforms and corporate wear. We can also supply garments if required.",
        features: [
          "High-end stitched finish",
          "Long-lasting durability",
          "Ideal for logos and branding",
          "Professional look",
          "Garment supply available"
        ],
        specifications: {
          "Method": "Embroidery",
          "Thread": "High-quality polyester thread",
          "Sizes": "S - XXL",
          "Turnaround": "3-7 working days"
        }
      },
      {
        slug: "mugs",
        name: "Printed Mugs",
        price: 0,
        description: "Custom printed mugs perfect for gifts, branding, and promotional use. High-quality prints that are dishwasher safe.",
        features: [
          "Full colour printing",
          "Durable finish",
          "Dishwasher safe",
          "Great for gifts and branding"
        ],
        specifications: {
          "Material": "Ceramic",
          "Capacity": "11oz",
          "Print": "Full wrap available",
          "Turnaround": "2-4 working days"
        }
      },
            {
        slug: "caps-dtf",
        name: "Caps (DTF Print)",
        price: 0,
        description: "Custom caps printed using DTF for bold and colourful designs. Suitable for events, promotions, and casual branding. Caps can also be supplied if needed.",
        features: [
          "Full colour prints",
          "Lightweight application",
          "Quick production",
          "Great for promotions",
          "Cap supply available"
        ],
        specifications: {
          "Print Method": "DTF",
          "Fit": "Adjustable",
          "Material": "Cotton / Poly blend",
          "Turnaround": "2-5 working days"
        }
      },
            {
        slug: "caps-embroidery",
        name: "Caps (Embroidery)",
        price: 0,
        description: "Premium embroidered caps for a clean and professional finish. Ideal for corporate branding and uniforms. Caps can be provided if the customer does not have.",
        features: [
          "High-quality stitching",
          "Professional finish",
          "Long-lasting",
          "Ideal for logos",
          "Cap supply available"
        ],
        specifications: {
          "Method": "Embroidery",
          "Fit": "Adjustable",
          "Material": "Cotton / Structured fabric",
          "Turnaround": "3-7 working days"
        }
      },
            {
        slug: "keyrings",
        name: "Key Rings",
        price: 0,
        description: "Custom branded key rings for promotional giveaways and corporate branding.",
        features: [
          "Compact and portable",
          "Custom branding",
          "Durable materials",
          "Great promotional item"
        ],
        specifications: {
          "Material": "Acrylic / Metal",
          "Print": "Single or double-sided",
          "Use": "Promotional",
          "Turnaround": "2-4 working days"
        }
      },
            {
        slug: "name-tags",
        name: "Name Tags",
        price: 0,
        description: "Professional name tags for staff identification and corporate environments. Customisable with names and logos.",
        features: [
          "Custom names and titles",
          "Logo branding",
          "Magnetic or pin backing",
          "Professional finish"
        ],
        specifications: {
          "Material": "Plastic / Metal",
          "Attachment": "Magnet or Pin",
          "Finish": "Gloss / Matt",
          "Turnaround": "2-5 working days"
        }
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
    slug: "large-format",
    title: "Large Format Printing",
    items: [
      {
        slug: "banners",
        name: "Banners",
        price: 0,
        description: "High-quality banners for indoor and outdoor advertising. Perfect for events, promotions, and business branding.",
        features: ["Weather resistant","Vibrant full colour print","Durable material","Custom sizes available"],
        specifications: { Material: "PVC / Vinyl", Print: "Full Colour", Use: "Indoor & Outdoor", Turnaround: "2-5 working days" }
      },
            {
        slug: "stickers",
        name: "Stickers",
        price: 0,
        description: "Custom printed stickers for branding, packaging, and promotions. Available in various shapes and finishes.",
        features: ["Custom shapes and sizes","Gloss or matt finish","Water resistant","Strong adhesive"],
        specifications: { Material: "Vinyl / Paper", Finish: "Gloss / Matt", Cut: "Die-cut / Kiss-cut", Turnaround: "2-4 working days" }
      },
            {
        slug: "pvc",
        name: "PVC Prints",
        price: 0,
        description: "Rigid PVC prints ideal for signage, displays, and long-term indoor/outdoor use.",
        features: ["Rigid and durable","Weather resistant","Professional finish","Long lifespan"],
        specifications: { Material: "PVC Board", Thickness: "3mm / 5mm", Print: "Full Colour", Turnaround: "2-5 working days" }
      },
            {
        slug: "canvas",
        name: "Canvas Prints",
        price: 0,
        description: "Premium canvas prints perfect for home décor, gifts, and professional displays.",
        features: ["High-resolution printing","Gallery-quality finish","Fade resistant","Framing available"],
        specifications: { Material: "Canvas Fabric", Frame: "Optional Wooden Frame", Print: "Full Colour", Turnaround: "3-7 working days" }
      },
            {
        slug: "contra-vision",
        name: "Contra Vision",
        price: 0,
        description: "Perforated window graphics that allow visibility from inside while displaying graphics outside.",
        features: ["One-way visibility","Ideal for shopfronts","UV resistant","Professional installation optional"],
        specifications: { Material: "Perforated Vinyl", Use: "Windows / Glass", Print: "Full Colour", Turnaround: "2-5 working days" }
      },
            {
        slug: "corex-boards",
        name: "Corex Boards",
        price: 0,
        description: "Lightweight and cost-effective signage boards ideal for short-term promotions and events.",
        features: ["Lightweight","Affordable","Easy to install","Suitable for outdoor use"],
        specifications: { Material: "Corrugated Plastic", Thickness: "3mm / 5mm", Print: "Full Colour", Turnaround: "2-4 working days" }
      }
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
  {
    slug: "photos-frames",
    title: "Photos & Frames",
    items: [
      {
        slug: "a1",
        name: "A1 Prints & Frames",
        price: 0,
        description: "Large A1 photo prints and frames for impactful displays, events, and décor.",
        features: ["High-resolution prints","Premium paper options","Framing available","Perfect for large displays"],
        specifications: { Size: "A1 (594x841mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "2-5 working days" }
      },
      {
        slug: "a2",
        name: "A2 Prints & Frames",
        price: 0,
        description: "Professional A2 photo prints and frames ideal for posters, portraits, and presentations.",
        features: ["Sharp image quality","Multiple finishes","Frame options available","Durable prints"],
        specifications: { Size: "A2 (420x594mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "2-5 working days" }
      },
      {
        slug: "a3",
        name: "A3 Prints & Frames",
        price: 0,
        description: "Versatile A3 photo prints suitable for home décor, certificates, and office use.",
        features: ["Crisp printing","Affordable option","Frame options","Quick turnaround"],
        specifications: { Size: "A3 (297x420mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "1-3 working days" }
      },
      {
        slug: "a4",
        name: "A4 Prints & Frames",
        price: 0,
        description: "Standard A4 photo prints and frames ideal for everyday printing and display.",
        features: ["Cost-effective","High quality prints","Frame options","Fast production"],
        specifications: { Size: "A4 (210x297mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "1-2 working days" }
      },
      {
        slug: "a5",
        name: "A5 Prints & Frames",
        price: 0,
        description: "Compact A5 photo prints perfect for personal photos, gifts, and small displays.",
        features: ["Portable size","Affordable","High quality finish","Great for gifts"],
        specifications: { Size: "A5 (148x210mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "1-2 working days" }
      }
    ]
  },
    {
    slug: "bulk-printing",
    title: "Bulk Printing",
    items: [
      {
        slug: "bulk-a4",
        name: "Bulk A4 Printing",
        price: 0,
        description: "High-volume A4 printing services for businesses, schools, and organisations. Ideal for documents, handouts, and reports.",
        features: ["High-speed production","Consistent quality","Black & white or colour","Bulk discounts available"],
        specifications: { Size: "A4 (210x297mm)", Print: "Black & White / Colour", Paper: "80gsm / 100gsm", Turnaround: "Same day / Next day" }
      },
      {
        slug: "bulk-a3",
        name: "Bulk A3 Printing",
        price: 0,
        description: "Bulk A3 printing for larger documents, plans, and posters. Perfect for professional and commercial use.",
        features: ["Large format printing","High quality output","Bulk pricing","Fast turnaround"],
        specifications: { Size: "A3 (297x420mm)", Print: "Black & White / Colour", Paper: "80gsm / 100gsm", Turnaround: "Same day / Next day" }
      }
    ]
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
