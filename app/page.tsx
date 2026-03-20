import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/image-carousel';
import { ArrowRight, Printer, Clock, Award, Truck } from 'lucide-react';

const carouselSlides = [
	{
		src: '/professional-printing-press-heidelberg-machine-qua.jpg',
		alt: 'High Quality Printing',
		title: 'Quality Printing',
		subtitle: 'Do it once, do it right',
	},
	{
		src: '/professional-business-cards-stack-printing.jpg',
		alt: 'Business Cards',
		title: 'Business Cards',
		subtitle: 'Make a lasting impression',
	},
	{
		src: '/professional-brochure-flyer-printing-services.png',
		alt: 'Brochures, Flyers & Invoices',
		title: 'Brochures & Flyers',
		subtitle: 'Full colour printing',
	},
	{
		src: '/shirts-and-apparel.png',
		alt: 'Shirts & Apparel Printing',
		title: 'Shirts & Apparel',
		subtitle: 'Custom branded clothing',
	},
	{
		src: '/large-format-poster-banner-printing.png',
		alt: 'Large Format Printing',
		title: 'Large Format',
		subtitle: 'Posters, banners & more',
	},
];

const services = [
	{
		title: 'Business Cards',
		image: '/category/business-cards.jpg',
		href: '/specials/business-cards',
	},
	{
		title: 'Flyers & Brochures',
		image: '/category/flyers.jpg',
		href: '/specials/flyers',
	},
	{
		title: 'Calendars',
		image: '/category/calendars.jpg',
		href: '/specials/calendars',
	},
];

export default function HomePage() {
	return (
		<div>
			<section className='relative'>
				<ImageCarousel slides={carouselSlides} autoScrollInterval={5000} />
			</section>

			<section className='border-b border-border bg-secondary'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-2 gap-4 py-6 md:grid-cols-4'>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Award className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='text-sm font-semibold text-foreground'>
									5+ Years
								</p>
								<p className='text-xs text-muted-foreground'>Experience</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Clock className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='text-sm font-semibold text-foreground'>Fast</p>
								<p className='text-xs text-muted-foreground'>Turnaround</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Printer className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='text-sm font-semibold text-foreground'>
									Mimaki
								</p>
								<p className='text-xs text-muted-foreground'>Machines</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Truck className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='text-sm font-semibold text-foreground'>
									Nationwide
								</p>
								<p className='text-xs text-muted-foreground'>Delivery</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-3xl text-center'>
						<h1 className='mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance'>
							Quality Printing Services in Johannesburg
						</h1>
						<p className='mb-8 text-lg text-muted-foreground md:text-xl text-pretty'>
							With 5+ years of experience, Ekse Print delivers exceptional
							full colour printing. Our motto: &quot;Do it once, do it right.&quot;
						</p>
						<div className='flex flex-wrap items-center justify-center gap-4'>
							<Button
								asChild
								size='lg'
								className='bg-primary text-primary-foreground hover:bg-primary/90'
							>
								<Link href='/quote'>
									Get a Quote
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
							</Button>
							<Button asChild size='lg' variant='outline'>
								<Link href='/specials'>View Specials</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-secondary py-16'>
				<div className='container mx-auto px-4'>
					<div className='mb-12 text-center'>
						<h2 className='mb-4 text-3xl font-bold text-foreground'>
							Our Services
						</h2>
						<p className='mx-auto max-w-2xl text-muted-foreground'>
							From business cards to large format printing, we handle all your
							printing needs with precision and care.
						</p>
					</div>
					<div className='grid gap-6 md:grid-cols-3'>
						{services.map((service) => (
							<Link
								key={service.title}
								href={service.href}
								className='group relative overflow-hidden rounded-lg bg-background shadow-sm transition-shadow hover:shadow-md'
							>
								<div className='aspect-4/3 overflow-hidden'>
									<Image
										src={service.image || '/placeholder.svg'}
										alt={service.title}
										width={400}
										height={300}
										className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
									/>
								</div>
								<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-6'>
									<h3 className='text-xl font-semibold text-white'>
										{service.title}
									</h3>
									<span className='mt-2 inline-flex items-center text-sm text-white/80 group-hover:text-white'>
										View Products
										<ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<div>
							<h2 className='mb-4 text-2xl font-bold text-foreground'>
								High Quality Printing
							</h2>
							<p className='mb-4 text-muted-foreground'>
								At Ekse Print, we use only Heidelberg printing machines and
								finishing equipment. The Rolls Royce of printing presses,
								Heidelberg machines allow faster turnaround times, and
								unsurpassed printing quality.
							</p>
							<p className='text-muted-foreground'>
								Provide a colour sample, and we&apos;ll match colours, and even
								improve on them. We use a colour densitometer to determine
								colour density, and print your colours to order at the ideal
								density relative to your paper choice.
							</p>
						</div>
						<div>
							<h2 className='mb-4 text-2xl font-bold text-foreground'>
								Full Service Printing
							</h2>
							<p className='mb-4 text-muted-foreground'>
								With 5+ years of experience in the printing industry, we&apos;re
								a full service printing company that mainly services the
								printing industry, designers and ad agencies.
							</p>
							<p className='text-muted-foreground'>
								From printing to finishing, Ekse Print can meet your printing
								needs every time. Provide us with your artwork in PDF format,
								and we&apos;ll do the rest.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-primary py-16'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='mb-4 text-3xl font-bold text-primary-foreground'>
							Ready to Start Your Project?
						</h2>
						<p className='mb-8 text-primary-foreground/80'>
							Contact us today and find out how Ekse Print can help you with
							your next printing project.
						</p>
						<div className='flex flex-wrap items-center justify-center gap-4'>
							<Button asChild size='lg' variant='secondary'>
								<Link href='/quote'>Request a Quote</Link>
							</Button>
							<Button
								asChild
								size='lg'
								variant='outline'
								className='border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent'
							>
								<Link href='/contact'>Contact Us</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
