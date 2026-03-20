import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductSidebar } from '@/components/header';
import { productCategories } from '@/lib/products-data';
import { Tag, Percent, Clock } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Printing Specials | Ekse Print',
	description: 'Take advantage of our great specials.',
};

const categoryImages: Record<string, string> = {
	'business-cards': '/category/business-cards.jpg',
	'promotional-items': '/category/promotional-items.png',
	calendars: '/category/calendars.jpg',
	flyers: '/category/flyers.jpg',
	'invoice-books': '/category/invoice-books.jpg',
	posters: '/category/poster.jpg',
	'large-format': '/category/large-format.jpg',
	'photos-frames': '/category/photos-frames.jpg',
	'bulk-printing': '/category/bulk-printing.jpeg',
};

export default function SpecialsPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid gap-8 lg:grid-cols-4'>
				{/* Sidebar */}
				<div className='hidden lg:block'>
					<ProductSidebar />
					<div className='mt-4'>
						<Link href='/quote'>
							<Image
								src='/get-free-quote-banner.jpg'
								alt='Get a Free Quote'
								width={250}
								height={150}
								className='w-full rounded'
							/>
						</Link>
					</div>
				</div>

				{/* Main Content */}
				<div className='lg:col-span-3'>
					<div className='mb-8 rounded-lg border border-primary/20 bg-linear-to-r from-primary/10 to-transparent p-6'>
						<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
							<div>
								<h1 className='text-3xl font-bold text-foreground'>
									Printing Specials
								</h1>
								<p className='mt-1 text-muted-foreground'>
									Quality printing at unbeatable prices
								</p>
							</div>
							<div className='flex gap-4'>
								<div className='flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground'>
									<Tag className='h-4 w-4' />
									<span>
										Business Cards from <strong>R300</strong>
									</span>
								</div>
								<div className='flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground'>
									<Percent className='h-4 w-4' />
									<span>
										Flyers from <strong>R560</strong>
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='mb-8 grid gap-4 sm:grid-cols-3'>
						<div className='flex items-center gap-3 rounded-md border border-border bg-card p-4'>
							<div className='rounded-full bg-primary/10 p-2'>
								<Percent className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='font-semibold text-foreground'>Best Prices</p>
								<p className='text-sm text-muted-foreground'>
									Competitive bulk rates
								</p>
							</div>
						</div>
						<div className='flex items-center gap-3 rounded-md border border-border bg-card p-4'>
							<div className='rounded-full bg-primary/10 p-2'>
								<Clock className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='font-semibold text-foreground'>Fast Turnaround</p>
								<p className='text-sm text-muted-foreground'>
									Same day available
								</p>
							</div>
						</div>
						<div className='flex items-center gap-3 rounded-md border border-border bg-card p-4'>
							<div className='rounded-full bg-primary/10 p-2'>
								<Tag className='h-5 w-5 text-primary' />
							</div>
							<div>
								<p className='font-semibold text-foreground'>5+ Years</p>
								<p className='text-sm text-muted-foreground'>
									Quality experience
								</p>
							</div>
						</div>
					</div>

					<div className='mb-6 text-muted-foreground'>
						<p>
							Ekse Print prints hundreds of thousands of flyers and business
							cards monthly for Printing Companies, Brokers, Advertising
							Agencies and End Users. Over the last 5+ years, we have mastered
							the art of producing high quality work, on time and at competitive
							prices.
						</p>
					</div>

					<h2 className='mb-4 text-xl font-semibold text-foreground'>
						Browse Categories
					</h2>

					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{productCategories.map((category) => (
							<Link key={category.slug} href={`/specials/${category.slug}`}>
								<Card className='group overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg'>
									<div className='aspect-video overflow-hidden bg-muted'>
										<Image
											src={categoryImages[category.slug] || '/placeholder.svg'}
											alt={category.title}
											width={300}
											height={200}
											className='h-full w-full object-cover transition-transform group-hover:scale-105'
										/>
									</div>
									<CardHeader className='bg-primary py-3'>
										<CardTitle className='text-center text-lg text-primary-foreground'>
											{category.title}
										</CardTitle>
									</CardHeader>
									<div className='p-3 text-center text-sm text-muted-foreground'>
										{category.items.length} product
										{category.items.length !== 1 ? 's' : ''} available
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
