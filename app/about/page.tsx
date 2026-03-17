import type { Metadata } from "next"
import { Award, Clock, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
	title: 'About Us | Ekse Print',
	description:
		'Learn about Ekse Print - over 5 years of commercial printing excellence in Johannesburg, South Africa. Request quotes, upload artwork and shop our services online.',
};

const values = [
	{
		icon: Clock,
		title: "5+ Years Experience",
		description: "Since the 2020 we've been delivering quality printing services to businesses across South Africa.",
	},
	{
		icon: Shield,
		title: "Quality Guaranteed",
		description: "Every print job goes through rigorous quality checks to ensure your satisfaction.",
	},
	{
		icon: Users,
		title: "Customer Focused",
		description: "We work closely with our clients to understand their needs and deliver exceptional results.",
	},
	{
		icon: Award,
		title: "Industry Leaders",
		description: "Trusted by hundreds of businesses for reliable, professional printing services.",
	},
]

export default function AboutPage() {
  return (
		<div>
			{/* Hero Section */}
			<section className='bg-foreground py-16 text-background md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-3xl text-center'>
						<h1 className='mb-6 text-4xl font-bold tracking-tight md:text-5xl'>
							About Ekse Print
						</h1>
						<p className='text-lg text-neutral-300'>
							Your trusted commercial printing partner since the 2020
						</p>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-4xl'>
						<div className='grid gap-12 md:grid-cols-2 md:items-center'>
							<div>
								<h2 className='mb-6 text-3xl font-bold text-foreground'>
									Our Story
								</h2>
								<div className='space-y-4 text-muted-foreground'>
									<p>
										Established in the 2020, Ekse Print has grown from a small
										print shop to become one of Johannesburg's trusted commercial
										printers. Our journey spans over five years of dedication to
										quality, service and adapting new technologies to better serve
										our clients.
									</p>
									<p>
										We operate from Johannesburg and serve businesses across South
										Africa. Over the years we've worked with small startups and large
										organisations, delivering print solutions ranging from business
										cards and flyers to photos and frames and large-format
										prints.
									</p>
									<p>
										Alongside our traditional services, this website offers online
										features to make working with us easier: request a quote using the
										Quote form, upload artwork, browse services, use the shopping
										cart, and search for products.
									</p>
								</div>
							</div>
							<div className='relative aspect-square overflow-hidden rounded-2xl bg-secondary'>
								<img
									src='/commercial-printing-press-machinery.jpg'
									alt='Commercial printing press at Ekse Print'
									className='h-full w-full object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='bg-secondary py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mb-12 text-center'>
						<h2 className='mb-4 text-3xl font-bold text-foreground md:text-4xl'>
							Why Choose Us
						</h2>
						<p className='text-lg text-muted-foreground'>
							The values that drive our commitment to excellence
						</p>
					</div>

					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
						{values.map((value) => (
							<div key={value.title} className='text-center'>
								<div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
									<value.icon className='h-8 w-8 text-primary' />
								</div>
								<h3 className='mb-2 text-lg font-semibold text-foreground'>
									{value.title}
								</h3>
								<p className='text-sm text-muted-foreground'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='mx-auto max-w-3xl text-center'>
						<h2 className='mb-6 text-3xl font-bold text-foreground md:text-4xl'>
							Our Mission
						</h2>
						<p className='text-lg text-muted-foreground'>
							To provide businesses across South Africa and beyond with reliable,
							high-quality commercial printing services that help them
							communicate effectively and make lasting impressions. We strive to
							combine the best of traditional craftsmanship with modern printing
							technology, ensuring every job meets our exacting standards.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
