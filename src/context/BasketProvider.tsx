import { createContext, useContext, useState } from 'react'
import { IBasket, IProduct } from '../types'

interface IBasketContext {
	basket: IBasket[]
	addToBasket: (product: IProduct) => void
	increment: (product: IProduct) => void
	decrement: (product: IProduct) => void
	removeFromBasket: (type: 'one' | 'all', product?: IProduct) => void
	calculateTotalPrice: () => number
}

const BasketContext = createContext<IBasketContext>({
	basket: [],
	addToBasket: () => {},
	increment: () => {},
	decrement: () => {},
	removeFromBasket: () => {},
	calculateTotalPrice: () => 0,
})

export const useBasket = () => useContext(BasketContext)

const BasketProvider = ({ children }: { children: React.ReactNode }) => {
	const [basket, setBasket] = useState<IBasket[]>([])

	const addToBasket = (product: IProduct) => {
		const checkBasket = basket.some(item => item.id === product.id)
		if (!checkBasket) {
			setBasket([...basket, { ...product, count: 1 }])
		}
	}

	const increment = (product: IProduct) => {
		const newProductCount = basket.map((p: IBasket) =>
			p.id === product.id ? { ...p, count: p.count + 1 } : p
		)
		setBasket(newProductCount)
	}
	const decrement = (product: IProduct) => {
		const newProductCount = basket.map((p: IBasket) =>
			p.id === product.id ? { ...p, count: p.count - 1 } : p
		)
		setBasket(newProductCount)
	}

	const removeFromBasket = (type: 'one' | 'all', product?: IProduct) => {
		if (type === 'one') {
			const newBasket = basket.filter((p: IBasket) => p.id !== product?.id)
			setBasket(newBasket)
		} else if (type === 'all') {
			setBasket([])
		}
	}

	const calculateTotalPrice = () => {
		return basket.reduce(
			(total: number, product: IBasket) =>
				total + Number(product.price) * product.count,
			0
		) as number
	}

	return (
		<BasketContext.Provider
			value={{
				basket,
				addToBasket,
				increment,
				decrement,
				removeFromBasket,
				calculateTotalPrice,
			}}
		>
			{children}
		</BasketContext.Provider>
	)
}
export default BasketProvider
