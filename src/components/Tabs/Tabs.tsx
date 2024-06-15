import { useEffect, useState } from 'react'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import styles from './tabs.module.css'
interface ITab {
	id: number
	title: string
	image: string
}
const Tabs = () => {
	const [tabs, setTabs] = useState<ITab[]>([])
	const [activeTab, setActiveTab] = useState<number | null>(null)

	const getTabs = async () => {
		try {
			const response = await fetch(
				'https://fea6cc472887def7.mokky.dev/category'
			)
			const data = await response.json()
			setTabs(data)
			setActiveTab(data[0].id)
		} catch (error) {
			console.error(error)
		}
	}

	const filterProducts = products?.filter(
		product => product.categoryId === activeTab
	)

	useEffect(() => {
		getTabs()
	}, [])
	return (
		<div>
			<div className={styles.tabs_wrapper}>
				{tabs?.map(tab => (
					<div
						onClick={() => setActiveTab(tab.id)}
						className={`${styles.tab} ${
							activeTab === tab.id ? styles.active : ''
						}`}
						key={tab?.id}
					>
						<img
							draggable={false}
							className={styles?.tab__img}
							src={tab?.image}
							alt={tab?.title}
						/>
						<span className={styles.tab__text}>{tab.title}</span>
					</div>
				))}
			</div>
			<h3>{!filterProducts.length && "Bu menyuda maxsulot yo'q"}</h3>
			<div className={styles.product_wrapper}>
				{filterProducts.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default Tabs
