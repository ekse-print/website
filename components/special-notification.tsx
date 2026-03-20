"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Tag, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SpecialNotification {
  id: string
  title: string
  message: string
  link: string
  linkText: string
  expiresAt?: Date
}

// Configure current special
const currentSpecial: SpecialNotification = {
  id: "jan-2026-business-cards",
  title: "New Year Special!",
  message: "500 Matt Laminated Business Cards for only R250",
  link: "/specials/business-cards/350g-matt-laminated",
  linkText: "View Special",
  expiresAt: new Date("2026-02-28"),
}

export function SpecialNotificationBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // Check if user has dismissed this specific notification
    const dismissedId = localStorage.getItem("dismissed-special-notification")

    // Check if special has expired
    if (currentSpecial.expiresAt && new Date() > currentSpecial.expiresAt) {
      setIsExpired(true)
      return
    }

    // Show notification if not dismissed
    if (dismissedId !== currentSpecial.id) {
      // Small delay for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("dismissed-special-notification", currentSpecial.id)
  }

  if (isExpired || !isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-5 duration-300">
      <div className="overflow-hidden rounded-lg border border-primary/20 bg-card shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-primary px-4 py-2">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-primary-foreground" />
            <span className="font-bold text-primary-foreground">{currentSpecial.title}</span>
          </div>
          <button
            onClick={handleDismiss}
            className="rounded-full p-1 text-primary-foreground/80 hover:bg-primary-foreground/20 hover:text-primary-foreground"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="mb-3 text-foreground">{currentSpecial.message}</p>
          <Link href={currentSpecial.link} onClick={handleDismiss}>
            <Button size="sm" className="w-full">
              {currentSpecial.linkText}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Top banner version for more visibility
export function SpecialNotificationBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const dismissedId = localStorage.getItem("dismissed-special-bar")

    if (currentSpecial.expiresAt && new Date() > currentSpecial.expiresAt) {
      setIsExpired(true)
      return
    }

    if (dismissedId !== currentSpecial.id) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("dismissed-special-bar", currentSpecial.id)
  }

  if (isExpired || !isVisible) return null

  return (
    <div className="relative bg-linear-to-r from-primary via-primary/90 to-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2 text-center text-sm">
        <Tag className="h-4 w-4 shrink-0" />
        <p>
          <span className="font-bold">{currentSpecial.title}</span> <span className="hidden sm:inline">— </span>
          <span className="hidden sm:inline">{currentSpecial.message}</span>
          <Link
            href={currentSpecial.link}
            className="ml-2 inline-flex items-center font-semibold underline underline-offset-2 hover:no-underline"
          >
            {currentSpecial.linkText}
            <ChevronRight className="ml-0.5 h-3 w-3" />
          </Link>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-primary-foreground/20"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
