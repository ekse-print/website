import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customer, items, totalPrice } = body

    // In production, you would:
    // 1. Send an email to the business owner with the quote details
    // 2. Send a confirmation email to the customer
    // 3. Optionally store the quote in a database

    // For now, we'll just log and return success
    console.log("Quote Request Received:")
    console.log("Customer:", customer)
    console.log("Items:", items)
    console.log("Total:", totalPrice)

    // Email content would look like:
    const quoteDetails = items
      .map(
        (item: { quantity: number; product: string; price: number }) =>
          `${item.quantity}x ${item.product} - R${(item.price * item.quantity).toLocaleString()}`,
      )
      .join("\n")

    const emailBody = `
New Quote Request from ${customer.name}

Company: ${customer.company || "N/A"}
Email: ${customer.email}
Phone: ${customer.phone}
Address: ${customer.address || "N/A"}

Products:
${quoteDetails}

Subtotal (ex VAT): R${totalPrice.toLocaleString()}
VAT (15%): R${(totalPrice * 0.15).toLocaleString()}
Total (incl VAT): R${(totalPrice * 1.15).toLocaleString()}

Additional Notes:
${customer.notes || "None"}
    `

    console.log("Email would be sent:", emailBody)

    return NextResponse.json({ success: true, message: "Quote request received" })
  } catch (error) {
    console.error("Error processing quote:", error)
    return NextResponse.json({ success: false, message: "Error processing quote" }, { status: 500 })
  }
}
