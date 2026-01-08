"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus, Minus, CheckCircle, ShoppingCart } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart()
  const [step, setStep] = useState<"cart" | "details" | "success">("cart")
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate sending quote request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, this would send an email to both the customer and the business
    console.log("Quote Request:", { customer: formData, items, totalPrice })

    setSubmitting(false)
    setStep("success")
    clearCart()
  }

  if (items.length === 0 && step !== "success") {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 text-2xl font-bold">Your Quote Cart is Empty</h1>
        <p className="mt-2 text-muted-foreground">Add some products to get a quote.</p>
        <Link href="/specials">
          <Button className="mt-6">Browse Products</Button>
        </Link>
      </div>
    )
  }

  if (step === "success") {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-2xl font-bold">Quote Request Sent!</h1>
        <p className="mt-2 text-muted-foreground">
          Thank you for your request. We will email you a detailed quote shortly.
        </p>
        <p className="mt-1 text-muted-foreground">A copy has also been sent to your email address.</p>
        <Link href="/specials">
          <Button className="mt-6">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{step === "cart" ? "Your Quote Cart" : "Your Details"}</h1>

      {step === "cart" ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.product}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                    <p className="text-primary font-medium">R{item.price} ex VAT each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-24 text-right">
                    <p className="font-bold">R{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quote Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Subtotal (ex VAT):</span>
                  <span className="font-bold">R{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>VAT (15%):</span>
                  <span>R{(totalPrice * 0.15).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-4 text-xl font-bold">
                  <span>Total (incl VAT):</span>
                  <span className="text-primary">R{(totalPrice * 1.15).toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  *Final pricing may vary based on specifications. We will confirm the exact quote.
                </p>
                <Button className="w-full" size="lg" onClick={() => setStep("details")}>
                  Proceed to Get Quote
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                  Clear Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Details</CardTitle>
              <p className="text-sm text-muted-foreground">
                We will send you a detailed quote for your selected products.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes / Special Requirements</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any specific requirements, artwork details, or questions..."
                  />
                </div>

                <div className="rounded border border-border bg-secondary p-4">
                  <h3 className="mb-2 font-semibold">Your Quote Items:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {items.map((item) => (
                      <li key={item.id}>
                        {item.quantity}x {item.product} - R{(item.price * item.quantity).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 font-semibold">Total: R{(totalPrice * 1.15).toLocaleString()} (incl VAT)</p>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep("cart")}>
                    Back to Cart
                  </Button>
                  <Button type="submit" className="flex-1" disabled={submitting}>
                    {submitting ? "Sending Quote Request..." : "Submit Quote Request"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
