import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductSidebar } from "@/components/header"
import { productCategories } from '@/lib/products-data';

export const metadata: Metadata = {
	title: 'Printing Specials | Ekse Print',
	description:
		'Take advantage of our great specials: Business Cards from R300 ex VAT & Flyers from R560 ex VAT.',
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
								src='/get-free-quote-red-banner-printing-services.jpg'
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
					<div className='mb-8'>
						<Image
							src='/special-offer-banner-red-printing-discount.jpg'
							alt='Special Offer'
							width={900}
							height={150}
							className='w-full rounded'
						/>
					</div>

					<h1 className='mb-6 text-3xl font-bold text-foreground'>
						Printing Specials
					</h1>

					<div className='mb-8 text-muted-foreground'>
						<p className='mb-4'>
							Take advantage of our great specials:{' '}
							<strong className='text-primary'>
								Business Cards from R300 ex vat
							</strong>{' '}
							&{' '}
							<strong className='text-primary'>Flyers from R560 ex vat</strong>
						</p>
						<p className='mb-4'>
							Ekse Print prints hundreds of thousands of flyers and business
							cards monthly for Printing Companies, Brokers, Advertising
							Agencies and End Users.
						</p>
						<p className='mb-4'>
							Over the last 50 years, we have mastered the art of producing high
							quality work, on time and at competitive prices.
						</p>
						<p>
							Click on a category below to browse products and add them to your
							quote cart.
						</p>
					</div>

					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{productCategories.map((category) => (
							<Link key={category.slug} href={`/specials/${category.slug}`}>
								<Card className='group overflow-hidden border-border transition-all hover:border-primary hover:shadow-lg'>
									<div className='aspect-video overflow-hidden bg-muted'>
										<Image
											src={`/.jpg?key=vqesv&height=200&width=300&query=${encodeURIComponent(
												category.title + ' printing products',
											)}`}
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
