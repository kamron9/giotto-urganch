import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '../types'

interface IModalContext {
	isOpen: boolean
	openModal: (product: IProduct) => void
	closeModal: () => void
	product: IProduct | null
}

const ModalContext = createContext<IModalContext>({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
	product: null,
})
export const useModal = () => useContext(ModalContext)

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [product, setProduct] = useState<IProduct | null>(null)

	const openModal = (product: IProduct) => {
		setProduct(product)
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
		setProduct(null)
	}

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal, product }}>
			{children}
		</ModalContext.Provider>
	)
}
export default ModalProvider
