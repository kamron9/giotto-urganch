import { useBasket } from '../../context/BasketProvider'
import styles from './basket.module.css'
import BasketCard from './components/BasketCard'

const BasketPage = () => {
	const { calculateTotalPrice, basket, removeFromBasket } = useBasket()
	const totalPrice = calculateTotalPrice()
	const totalPriceWithTax = totalPrice + totalPrice * 0.15

	return (
		<div>
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
				<div style={{ textAlign: 'center' }}>Корзина пуста</div>
			)}
		</div>
	)
}

export default BasketPage
