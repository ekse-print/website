import type { Metadata } from "next"
import { Award, Clock, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
	title: 'About Us | Ekse Print',
	description:
		'Learn about Ekse Print - over 50 years of commercial printing excellence in Johannesburg, South Africa.',
};

const values = [
  {
    icon: Clock,
    title: "50+ Years Experience",
    description: "Since the 1970s, we've been delivering quality printing services to businesses across South Africa.",
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
    description: "Trusted by thousands of businesses for reliable, professional printing services.",
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
							Your trusted commercial printing partner since the 1970s
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
										Established in the 1970s, Ekse Print has grown from a small
										print shop to become one of Johannesburg&apos;s most trusted
										commercial printing companies. Our journey spans over five
										decades of dedication to quality and customer service.
									</p>
									<p>
										Located in the heart of Johannesburg at 417 Commissioner
										Street, Fairview, we&apos;ve served thousands of businesses,
										from small startups to large corporations. Our commitment to
										excellence has remained unchanged throughout the years.
									</p>
									<p>
										Today, we combine traditional printing expertise with modern
										technology to deliver exceptional results. Whether you need
										business cards, flyers, posters, or custom printing
										solutions, we have the experience and capability to meet
										your needs.
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
							To provide businesses across South Africa with reliable,
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
