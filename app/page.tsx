import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductSidebar } from "@/components/header"

export default function HomePage() {
  return (
		<div>
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
						<div className='relative mb-8 overflow-hidden rounded'>
							<Image
								src='/professional-printing-press-heidelberg-machine-qua.jpg'
								alt='High Quality Printing'
								width={900}
								height={400}
								className='h-64 w-full object-cover md:h-96'
								priority
							/>
						</div>

						{/* Main Heading */}
						<h1 className='mb-6 text-3xl font-bold text-foreground md:text-4xl'>
							Quality Printing Services In Johannesburg
						</h1>

						<div className='prose prose-lg max-w-none text-muted-foreground'>
							<p>
								Ekse Print is a printing company based in Johannesburg, South
								Africa. We offer a wide range of top quality printing services
								to our clients. Ekse Print specialises in full colour printing,
								litho printing, UV varnishing and Virco printing. With one day
								quotes, and fast turnarounds on urgent print jobs, our motto is
								&quot;Do it once, do it right.&quot;
							</p>
							<p>
								Whether you are looking to print some fancy new business cards,
								or you need a major printing job done for your next marketing
								event – no job is too big or small for us.{' '}
								<strong>With 50 years of experience</strong> in the industry,
								Ekse Print has established itself as a leading South African
								printing company.
							</p>
						</div>

						<div className='mt-12 grid gap-8 md:grid-cols-2'>
							<div>
								<h2 className='mb-4 text-xl font-bold text-foreground'>
									High Quality Printing
								</h2>
								<p className='text-muted-foreground'>
									At Ekse Print, we use only Heidelberg printing machines and
									finishing equipment. The Rolls Royce of printing presses,
									Heidelberg machines allow faster turnaround times, and
									unsurpassed printing quality.
								</p>
								<p className='mt-4 text-muted-foreground'>
									Provide a colour sample, and we&apos;ll match colours, and
									even improve on them. We use a colour densitometer to
									determine colour density, and print your colours to order at
									the ideal density relative to your paper choice.
								</p>
							</div>

							<div>
								<div className='aspect-video overflow-hidden rounded bg-muted'>
									<iframe
										width='100%'
										height='100%'
										src='https://www.youtube.com/embed/HmNJmz7nL3E'
										title='Ekse Print Video'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										className='h-full w-full'
									/>
								</div>
							</div>
						</div>

						<div className='mt-12 grid gap-8 md:grid-cols-2'>
							<div>
								<h2 className='mb-4 text-xl font-bold text-foreground'>
									Professional Printing & Finishing
								</h2>
								<p className='text-muted-foreground'>
									With 50 years of experience in the printing industry,
									we&apos;re a full service printing company that mainly
									services the printing industry, designers and ad agencies.
								</p>
								<p className='mt-4 text-muted-foreground'>
									As well as full colour printing of a range of different types
									of printing jobs, we also offer complete finishing services,
									from folding to drilling and binding.
								</p>
							</div>

							<div>
								<h2 className='mb-4 text-xl font-bold text-foreground'>
									Full Service Printing
								</h2>
								<p className='text-muted-foreground'>
									From printing to finishing, Ekse Print can meet your printing
									needs every time. Provide us with your artwork in PDF format,
									and we&apos;ll do the rest.
								</p>
								<p className='mt-4'>
									<Link
										href='/contact'
										className='font-medium text-primary hover:underline'
									>
										Contact us today
									</Link>
									, and find out how Ekse Print can help you.
								</p>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className='mt-12 flex flex-wrap gap-4'>
							<Button
								asChild
								size='lg'
								className='bg-primary text-primary-foreground hover:bg-primary/90'
							>
								<Link href='/quote'>Get a Quote</Link>
							</Button>
							<Button asChild size='lg' variant='outline'>
								<Link href='/specials'>View Specials</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
