import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
	title: 'Contact Us | Ekse Print',
	description:
		'Get in touch with Ekse Print. Located at 417 Commissioner Street, Fairview, Johannesburg.',
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["120 Main Street", "Rosettenville, Johannesburg", "South Africa, 2190"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 74 539 1611"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ekseprint.co.za"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8am - 5pm", "Saturday: 8am - 3pm", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  return (
		<div>
			{/* Hero Section */}
			<section className='bg-foreground py-16 text-background md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-3xl text-center'>
						<h1 className='mb-6 text-4xl font-bold tracking-tight md:text-5xl'>
							Contact Us
						</h1>
						<p className='text-lg text-neutral-300'>
							We&apos;d love to hear from you. Get in touch with us today.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='grid gap-12 lg:grid-cols-2'>
						{/* Contact Info */}
						<div>
							<h2 className='mb-6 text-2xl font-bold text-foreground'>
								Get In Touch
							</h2>
							<p className='mb-8 text-muted-foreground'>
								Have a question or need a quote? Contact us using the form or
								reach out directly using the information below.
							</p>

							<div className='grid gap-6 sm:grid-cols-2'>
								{contactInfo.map((info) => (
									<Card key={info.title} className='border-border bg-card'>
										<CardContent className='pt-6'>
											<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
												<info.icon className='h-6 w-6 text-primary' />
											</div>
											<h3 className='mb-2 font-semibold text-foreground'>
												{info.title}
											</h3>
											{info.details.map((detail, index) => (
												<p
													key={index}
													className='text-sm text-muted-foreground'
												>
													{detail}
												</p>
											))}
										</CardContent>
									</Card>
								))}
							</div>
							{/* Map Placeholder */}
							<div className='mt-8 overflow-hidden rounded-lg border border-border'>
								<div className='aspect-video bg-secondary'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.339990879117!2d28.0491899111801!3d-26.2506267769522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f1a9bbacd53%3A0xff494cb54808f930!2s120%20Main%20St%2C%20Rosettenville%2C%20Johannesburg%20South%2C%202190!5e0!3m2!1sen!2sza!4v1768043935682!5m2!1sen!2sza'
										width='100%'
										height='100%'
										style={{ border: 0, minHeight: '300px' }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										title='Ekse Print location map'
									/>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className='mb-6 text-2xl font-bold text-foreground'>
								Send Us a Message
							</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
