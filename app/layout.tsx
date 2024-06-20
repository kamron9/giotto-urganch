import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Provider from './Provider'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Giotto Urgench',
	description: 'Giotto Urgench menu',
	icons: '/logo.png',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	)
}
