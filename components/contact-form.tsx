"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for contacting us. We&apos;ll get back to you as soon as possible.
          </p>
          <Button
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full Name *</Label>
              <Input id="contact-name" name="name" placeholder="John Smith" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email Address *</Label>
              <Input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input id="contact-phone" name="phone" type="tel" placeholder="+27 11 123 4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject *</Label>
              <Input id="contact-subject" name="subject" placeholder="General Enquiry" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message *</Label>
            <Textarea id="contact-message" name="message" placeholder="How can we help you?" rows={5} required />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
