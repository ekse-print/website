import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from '@/lib/cart-context';
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: 'Ekse Print | Commercial Printing Services in Johannesburg',
	description:
		'Our professional commercial printing services in Johannesburg, South Africa. Business cards, flyers, posters, folders, and more.',
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
		apple: '/apple-icon.png',
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
		<html lang='en'>
			<body className='font-sans antialiased'>
				<CartProvider>
					<Header />
					<main className='min-h-screen'>{children}</main>
					<Footer />
				</CartProvider>
				<Analytics />
			</body>
		</html>
	);
}
