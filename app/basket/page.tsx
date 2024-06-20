'use client'
import BasketCard from '@/components/BasketCard'
import { useRouter } from 'next/navigation'
import { useBasket } from '../../context/BasketProvider'
import styles from '../../styles/basket.module.css'

const BasketPage = () => {
	const router = useRouter()
	const { calculateTotalPrice, basket, removeFromBasket } = useBasket()
	const totalPrice = calculateTotalPrice()
	const totalPriceWithTax = totalPrice + totalPrice * 0.15
	console.log(basket)

	return (
		<div className='container'>
			<h2>Заказы</h2>
			{basket.length > 0 && (
				<div>
					<div>Общая сумма: {totalPrice.toLocaleString('ru')} сум</div>
					<div>
						Общая сумма с обслуживанием (15%):{'  '}
						{totalPriceWithTax.toLocaleString('ru')} сум
					</div>
				</div>
			)}

			<div className={styles.basket_wrapper}>
				{basket.map(item => (
					<BasketCard key={item.id} product={item} />
				))}
			</div>
			{basket.length ? (
				<div className={styles.clear_basket}>
					<button onClick={() => removeFromBasket('all')}>
						Очистить корзину
					</button>
				</div>
			) : (
				<div className={styles.basket_info}>
					<div>
						<span>Корзина пуста</span>
					</div>
					<button
						onClick={() => router.push('/')}
						className={styles.basket_back_btn}
					>
						Вернуться в меню
					</button>
				</div>
			)}
		</div>
	)
}

export default BasketPage
