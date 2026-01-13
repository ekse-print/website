"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselSlide {
  src: string
  alt: string
  title?: string
  subtitle?: string
}

interface ImageCarouselProps {
  slides: CarouselSlide[]
  autoScrollInterval?: number
  className?: string
}

export function ImageCarousel({ slides, autoScrollInterval = 5000, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = setInterval(goToNext, autoScrollInterval)
    return () => clearInterval(interval)
  }, [isPaused, goToNext, autoScrollInterval, slides.length])

  if (slides.length === 0) return null

  return (
    <div
      className={`relative overflow-hidden rounded ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full">
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              width={900}
              height={400}
              className="h-64 w-full object-cover md:h-96"
              priority={index === 0}
            />
            {/* Overlay text */}
            {(slide.title || slide.subtitle) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white">
                {slide.title && <h2 className="text-2xl font-bold drop-shadow-lg md:text-4xl">{slide.title}</h2>}
                {slide.subtitle && <p className="mt-2 text-lg drop-shadow-lg md:text-xl">{slide.subtitle}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
