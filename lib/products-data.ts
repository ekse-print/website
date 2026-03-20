export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  slug: string
  price: number
  description: string
  image: Image
  features?: string[]
  specifications?: Record<string, string>
}

interface Image {
  src: string
  alt: string
}

export interface ProductItem {
  slug: string
  name: string
  image: Image
  price: number
  description?: string
  features: string[]
  specifications?: Record<string, string>
}

export interface ProductCategory {
  slug: string
  title: string
  image: Image
  items: ProductItem[]
}

export const productCategories: ProductCategory[] = [
  {
    slug: "business-cards",
    title: "Business Cards",
    image: { src: "/category/business-cards.jpg", alt: "Business Cards" },
    items: [
      {
        slug: "350g-matt-laminated",
        name: "350g Board Matt Laminated Both Sides",
        image: { src: "/business-cards/card-matt.jpg", alt: "350g Board Matt Laminated Both Sides" },
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
        image: { src: "/business-cards/card-gloss.jpg", alt: "350g Board Gloss Laminated Both Sides" },
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
        image: { src: "/business-cards/card-uncoated.jpg", alt: "300g Uncoated Board" },
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
    image: { src: "/category/calendars.jpg", alt: "Calendars" },
    items: [
      {
        slug: "a2-calendars",
        image: { src: "/calenders/a2.jpg", alt: "A2 Calendars 250g Gloss Art Paper" },
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
        image: { src: "/calenders/a3.jpg", alt: "A3 Calendars 250g Gloss Art Paper" },
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
    image: { src: "/category/flyers.jpg", alt: "Flyers" },
    items: [
      {
        slug: "a3-flyers",
        name: "A3 Flyers",
        image: { src: "/flyers/a3.jpg", alt: "A3 Flyers 150g Gloss" },
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
        image: { src: "/flyers/a4.jpg", alt: "A4 Flyers 150g Gloss" },
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
        image: { src: "/flyers/a5.jpg", alt: "A5 Flyers 150g Gloss" },
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
        image: { src: "/flyers/a6.png", alt: "A6 Flyers 150g Gloss" },
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
    ],
  },
  {
    slug: "promotional-items",
    title: "Promotional Items",
    image: { src: "/category/promotional-items.png", alt: "Promotional Items" },
    items: [
      {
        slug: "tshirts-dtf",
        name: "T-Shirts (DTF Print)",
        image: { src: "/promotional-items/t-shirt-dtf.jpg", alt: "T-Shirts (DTF Print)" },
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
        image: { src: "/promotional-items/tshirt-embroidery.jpg", alt: "T-Shirts (Embroidery)" },
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
        image: { src: "/promotional-items/mugs.jpg", alt: "Printed Mugs" },
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
        image: { src: "/promotional-items/caps-dtf.jpg", alt: "Caps (DTF Print)" },
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
        image: { src: "/promotional-items/caps-embroidery.jpg", alt: "Caps (Embroidery)" },
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
        image: { src: "/promotional-items/keyrings.jpg", alt: "Key Rings" },
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
        image: { src: "/promotional-items/name-tags.jpg", alt: "Name Tags" },
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
    image: { src: "/category/invoice-books.jpg", alt: "Invoice Books" },
    items: [
      {
        slug: "a4-duplicate",
        name: "A4 Books Duplicate",
        image: { src: "/invoice-books/a4-dup.jpg", alt: "A4 Books Duplicate" },
        price: 450,
        description: "A4 duplicate invoice books with NCR paper. Perfect for invoicing, receipts, and order forms.",
        features: ["A4 size", "Duplicate (2 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A4", Copies: "Duplicate (2)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a4-triplicate",
        name: "A4 Books Triplicate",
        image: { src: "/invoice-books/a4-trip.png", alt: "A4 Books Triplicate" },
        price: 550,
        description: "A4 triplicate invoice books with three copies per set. Ideal for detailed record keeping.",
        features: ["A4 size", "Triplicate (3 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A4", Copies: "Triplicate (3)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a5-duplicate",
        name: "A5 Books Duplicate",
        image: { src: "/invoice-books/a5-dup.jpg", alt: "A5 Books Duplicate" },
        price: 350,
        description: "Compact A5 duplicate books perfect for field work, deliveries, and mobile invoicing.",
        features: ["A5 size", "Duplicate (2 copies)", "NCR carbonless paper", "Numbered pages"],
        specifications: { Size: "A5", Copies: "Duplicate (2)", Paper: "NCR Carbonless", Sets: "50 per book" },
      },
      {
        slug: "a5-triplicate",
        name: "A5 Books Triplicate",
        image: { src: "/invoice-books/a5-trip.webp", alt: "A5 Books Triplicate" },
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
    image: { src: "/category/large-format.jpg", alt: "Large Format Printing" },
    items: [
      {
        slug: "banners",
        name: "Banners",
        image: { src: "/large-format/banner.jpg", alt: "Banners" },
        price: 0,
        description: "High-quality banners for indoor and outdoor advertising. Perfect for events, promotions, and business branding.",
        features: ["Weather resistant","Vibrant full colour print","Durable material","Custom sizes available"],
        specifications: { Material: "PVC / Vinyl", Print: "Full Colour", Use: "Indoor & Outdoor", Turnaround: "2-5 working days" }
      },
            {
        slug: "stickers",
        name: "Stickers",
        image: { src: "/large-format/stickers.jpg", alt: "Stickers" },
        price: 0,
        description: "Custom printed stickers for branding, packaging, and promotions. Available in various shapes and finishes.",
        features: ["Custom shapes and sizes","Gloss or matt finish","Water resistant","Strong adhesive"],
        specifications: { Material: "Vinyl / Paper", Finish: "Gloss / Matt", Cut: "Die-cut / Kiss-cut", Turnaround: "2-4 working days" }
      },
            {
        slug: "pvc",
        name: "PVC Prints",
        image: { src: "/large-format/pvc.jpg", alt: "PVC Prints" },
        price: 0,
        description: "Rigid PVC prints ideal for signage, displays, and long-term indoor/outdoor use.",
        features: ["Rigid and durable","Weather resistant","Professional finish","Long lifespan"],
        specifications: { Material: "PVC Board", Thickness: "3mm / 5mm", Print: "Full Colour", Turnaround: "2-5 working days" }
      },
            {
        slug: "canvas",
        name: "Canvas Prints",
        image: { src: "/large-format/canvas.webp", alt: "Canvas Prints" },
        price: 0,
        description: "Premium canvas prints perfect for home décor, gifts, and professional displays.",
        features: ["High-resolution printing","Gallery-quality finish","Fade resistant","Framing available"],
        specifications: { Material: "Canvas Fabric", Frame: "Optional Wooden Frame", Print: "Full Colour", Turnaround: "3-7 working days" }
      },
            {
        slug: "contra-vision",
        name: "Contra Vision",
        image: { src: "/large-format/contra-vision.avif", alt: "Contra Vision" },
        price: 0,
        description: "Perforated window graphics that allow visibility from inside while displaying graphics outside.",
        features: ["One-way visibility","Ideal for shopfronts","UV resistant","Professional installation optional"],
        specifications: { Material: "Perforated Vinyl", Use: "Windows / Glass", Print: "Full Colour", Turnaround: "2-5 working days" }
      },
            {
        slug: "corex-boards",
        name: "Corex Boards",
        image: { src: "/large-format/corex-boards.webp", alt: "Corex Boards" },
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
    image: { src: "/category/poster.jpg", alt: "Posters" },
    items: [
      {
        slug: "a2-posters",
        name: "A2 Posters",
        image: { src: "/posters/a2.png", alt: "A2 Posters 150g Gloss" },
        price: 950,
        description: "Large A2 posters for high-impact visual displays. Perfect for retail, events, and advertising.",
        features: ["A2 size (594x420mm)", "Full color printing", "Various paper options", "Indoor/outdoor options"],
        specifications: { Size: "A2 (594x420mm)", Paper: "150gsm Gloss", Print: "Full Color 1 Side", "Min Qty": "50" },
      },
      {
        slug: "a3-posters",
        name: "A3 Posters",
        image: { src: "/posters/a3.png", alt: "A3 Posters 150g Gloss" },
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
    image: { src: "/category/photos-frames.jpg", alt: "Photos & Frames" },
    items: [
      {
        slug: "a0",
        name: "A0 Prints & Frames",
          image: { src: "/photos-frames/a0.webp", alt: "A0 Prints & Frames" },
        price: 0,
        description: "Large A0 for the moments that we just can't capture. Perfect for weddings, events, and special occasions.",
        features: ["High-resolution prints","Premium materials","Framing available","Perfect for large displays"],
        specifications: { Size: "A0 (841x1189mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "2-5 working days" }
      },
      {
        slug: "a1",
        name: "A1 Prints & Frames",
        image: { src: "/photos-frames/a1.webp", alt: "A1 Prints & Frames" },
        price: 0,
        description: "Large A1 photo prints and frames for impactful displays, events, and décor.",
        features: ["High-resolution prints","Premium paper options","Framing available","Perfect for large displays"],
        specifications: { Size: "A1 (594x841mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "2-5 working days" }
      },
      {
        slug: "a2",
        name: "A2 Prints & Frames",
        image: { src: "/photos-frames/a2.jpg", alt: "A2 Prints & Frames" },
        price: 0,
        description: "Professional A2 photo prints and frames ideal for posters, portraits, and presentations.",
        features: ["Sharp image quality","Multiple finishes","Frame options available","Durable prints"],
        specifications: { Size: "A2 (420x594mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "2-5 working days" }
      },
      {
        slug: "a3",
        name: "A3 Prints & Frames",
        image: { src: "/photos-frames/a3.webp", alt: "A3 Prints & Frames" },
        price: 0,
        description: "Versatile A3 photo prints suitable for home décor, certificates, and office use.",
        features: ["Crisp printing","Affordable option","Frame options","Quick turnaround"],
        specifications: { Size: "A3 (297x420mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "1-3 working days" }
      },
      {
        slug: "a4",
        name: "A4 Prints & Frames",
        image: { src: "/photos-frames/a4.webp", alt: "A4 Prints & Frames" },
        price: 0,
        description: "Standard A4 photo prints and frames ideal for everyday printing and display.",
        features: ["Cost-effective","High quality prints","Frame options","Fast production"],
        specifications: { Size: "A4 (210x297mm)", Finish: "Gloss / Matt", Frame: "Optional", Turnaround: "1-2 working days" }
      },
      {
        slug: "a5",
        name: "A5 Prints & Frames",
        image: { src: "/photos-frames/a5.webp", alt: "A5 Prints & Frames" },
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
    image: { src: "/category/bulk-printing.jpeg", alt: "Bulk Printing" },
    items: [
      {
        slug: "bulk-a4",
        name: "Bulk A4 Printing",
        image: { src: "/bulk-printing/a4.png", alt: "Bulk A4 Printing" },
        price: 0,
        description: "High-volume A4 printing services for businesses, schools, and organisations. Ideal for documents, handouts, and reports.",
        features: ["High-speed production","Consistent quality","Black & white or colour","Bulk discounts available"],
        specifications: { Size: "A4 (210x297mm)", Print: "Black & White / Colour", Paper: "80gsm / 100gsm", Turnaround: "Next working day" }
      },
      {
        slug: "bulk-a3",
        name: "Bulk A3 Printing",
        image: { src: "/bulk-printing/a3.png", alt: "Bulk A3 Printing" },
        price: 0,
        description: "Bulk A3 printing for larger documents, plans, and posters. Perfect for professional and commercial use.",
        features: ["Large format printing","High quality output","Bulk pricing","Fast turnaround"],
        specifications: { Size: "A3 (297x420mm)", Print: "Black & White / Colour", Paper: "80gsm / 100gsm", Turnaround: "Next working day" }
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
    image: item.image ? item.image : { src: `/placeholder.svg`, alt: item.name },
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
          image: item.image ? item.image : { src: `/placeholder.svg`, alt: item.name },
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
            image: item.image ? item.image : { src: `/placeholder.svg`, alt: item.name },
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
        image: item.image ? item.image : { src: `/placeholder.svg`, alt: item.name },
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
