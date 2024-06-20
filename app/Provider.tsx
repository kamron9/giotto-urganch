'use client'

import BasketProvider from '@/context/BasketProvider'
import ModalProvider from '@/context/ModalProvider'
import { SWRConfig } from 'swr'
import { fetcher } from '../lib/fetcher'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SWRConfig value={{ fetcher }}>
			<BasketProvider>
				<ModalProvider>{children}</ModalProvider>
			</BasketProvider>
		</SWRConfig>
	)
}
export default Provider
