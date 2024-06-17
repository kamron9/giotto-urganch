export interface ICategory {
	id: number
	name: string
	image: string
	parent: number | null
}

export interface IProduct {
	id: number
	name: string
	price: number
	image: string
	description: string
	category: ICategory
}
export interface IBasket extends IProduct {
	count: number
}