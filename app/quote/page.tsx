import type { Metadata } from "next"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
	title: 'Kwik Quote | Ekse Print',
	description:
		'Request a quote for your printing needs. Fast, professional service with competitive pricing.',
};

export default function QuotePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-foreground py-16 text-background md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Kwik Quote</h1>
            <p className="text-lg text-neutral-300">Get a fast, no-obligation quote for your printing project</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Request Your Quote</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you with a competitive quote within 24 hours.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
