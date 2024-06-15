export interface IProduct {
	id: number
	categoryId: number
	title: string
	description: string
	image: string
	price: number
}

export const products: IProduct[] = [
	{
		id: 1,
		categoryId: 1,
		title: 'Каша овсяная с карамелизованными бананами ',
		description:
			'Глазунья из куриных яиц , говяжьи колбаски, свежие помидоры и консервированная фасоль в сете с панкейками в кленовом сиропе и сливочным маслом.',
		image: 'https://via.placeholder.com/150',
		price: 10000,
	},
	{
		id: 2,
		categoryId: 1,
		title: 'Product 2',
		description: 'Description 2',
		image: 'https://via.placeholder.com/150',
		price: 20000,
	},
	{
		id: 3,
		categoryId: 1,
		title: 'Product 3',
		description: 'Description 3',
		image: 'https://via.placeholder.com/150',
		price: 30000,
	},
	{
		id: 4,
		categoryId: 2,
		title: 'Product 4',
		description: 'Description 4',
		image: 'https://via.placeholder.com/150',
		price: 40000,
	},
	{
		id: 5,
		categoryId: 2,
		title: 'Product 5',
		description: 'Description 5',
		image: 'https://via.placeholder.com/150',
		price: 50000,
	},
	{
		id: 6,
		categoryId: 2,
		title: 'Product 6',
		description: 'Description 6',
		image: 'https://via.placeholder.com/150',
		price: 60000,
	},
	{
		id: 7,
		categoryId: 3,
		title: 'Product 7',
		description: 'Description 7',
		image: 'https://via.placeholder.com/150',
		price: 70000,
	},
	{
		id: 8,
		categoryId: 3,
		title: 'Product 8',
		description: 'Description 8',
		image: 'https://via.placeholder.com/150',
		price: 80000,
	},
	{
		id: 9,
		categoryId: 3,
		title: 'Product 9',
		description: 'Description 9',
		image: 'https://via.placeholder.com/150',
		price: 90000,
	},
	{
		id: 10,
		categoryId: 4,
		title: 'Product 10',
		description: 'Description 10',
		image: 'https://via.placeholder.com/150',
		price: 100000,
	},
	{
		id: 11,
		categoryId: 4,
		title: 'Product 11',
		description: 'Description 11',
		image: 'https://via.placeholder.com/150',
		price: 110000,
	},
	{
		id: 12,
		categoryId: 4,
		title: 'Product 12',
		description: 'Description 12',
		image: 'https://via.placeholder.com/150',
		price: 120000,
	},
]

export const tabs = [
	{
		id: 1,
		title: 'Tab 1',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		title: 'Tab 2',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		title: 'Tab 3',
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 4,
		title: 'Tab 4',
		image: 'https://via.placeholder.com/150',
	},
]
