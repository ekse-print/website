import Link from "next/link"
import { Mail, MapPin, Phone, Truck, CreditCard, PhoneCall, FileText } from "lucide-react"

export function Footer() {
  return (
		<footer>
			<div className='border-t border-border bg-secondary'>
				<div className='container mx-auto grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4'>
					<div className='flex flex-col items-center gap-2 text-center'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
							<Truck className='h-6 w-6 text-primary-foreground' />
						</div>
						<h3 className='text-sm font-semibold text-foreground'>
							Fast & Efficient Delivery
						</h3>
						<p className='text-xs text-muted-foreground'>Or collect in-store</p>
					</div>
					<div className='flex flex-col items-center gap-2 text-center'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
							<CreditCard className='h-6 w-6 text-primary-foreground' />
						</div>
						<h3 className='text-sm font-semibold text-foreground'>
							100% Secure Payments
						</h3>
						<p className='text-xs text-muted-foreground'>
							Credit/Debit Card/EFT
						</p>
					</div>
					<div className='flex flex-col items-center gap-2 text-center'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
							<PhoneCall className='h-6 w-6 text-primary-foreground' />
						</div>
						<h3 className='text-sm font-semibold text-foreground'>
							Contact Us
						</h3>
						<Link
							href='tel:0116102240'
							className='text-xs text-primary hover:underline'
						>
							Call us: +27 74 539 1611
						</Link>
					</div>
					<div className='flex flex-col items-center gap-2 text-center'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
							<FileText className='h-6 w-6 text-primary-foreground' />
						</div>
						<h3 className='text-sm font-semibold text-foreground'>
							Get a FREE Quote
						</h3>
						<Link
							href='/quote'
							className='text-xs text-primary hover:underline'
						>
							Click Here &gt;&gt;
						</Link>
					</div>
				</div>
			</div>

			<div className='bg-accent text-accent-foreground'>
				<div className='container mx-auto px-4 py-12'>
					<div className='grid gap-8 md:grid-cols-3'>
						{/* Company Info */}
						<div>
							<div className='mb-4 flex items-center gap-2'>
								<span className='text-xl font-bold text-primary'>Ekse</span>
								<span className='text-xl font-bold'>Print</span>
							</div>
							<p className='text-sm text-neutral-400'>
								For more than 5 years, we have been helping businesses across
								Johannesburg stand out through high-quality commercial printing.
								We believe in precision, consistency, and results that speak for
								themselves. No shortcuts. No reprints. Do it once, do it right.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider'>
								Quick Links
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/services'
										className='text-sm text-neutral-400 transition-colors hover:text-primary'
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										href='/specials'
										className='text-sm text-neutral-400 transition-colors hover:text-primary'
									>
										Specials
									</Link>
								</li>
								<li>
									<Link
										href='/quote'
										className='text-sm text-neutral-400 transition-colors hover:text-primary'
									>
										Get a Quote
									</Link>
								</li>
								<li>
									<Link
										href='/artwork'
										className='text-sm text-neutral-400 transition-colors hover:text-primary'
									>
										Artwork Guidelines
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className='mb-4 text-sm font-semibold uppercase tracking-wider'>
								Contact Us
							</h3>
							<ul className='space-y-3'>
								<li className='flex items-start gap-3'>
									<MapPin className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
									<span className='text-sm text-neutral-400'>
										120 Main Street, Rosettenville, Johannesburg, South Africa,
										2190
									</span>
								</li>
								<li className='flex items-center gap-3'>
									<Phone className='h-4 w-4 shrink-0 text-primary' />
									<span className='text-sm text-neutral-400'>
										+27 74 539 1611
									</span>
								</li>
								<li className='flex items-center gap-3'>
									<Mail className='h-4 w-4 shrink-0 text-primary' />
									<span className='text-sm text-neutral-400'>
										info@ekseprint.co.za
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='mt-8 border-t border-neutral-700 pt-8 text-center'>
						<p className='text-sm text-neutral-400'>
							© {new Date().getFullYear()} Ekse Print. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
