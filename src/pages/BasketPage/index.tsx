import { useBasket } from '../../context/BasketProvider'
import styles from './basket.module.css'
import BasketCard from './components/BasketCard'

const BasketPage = () => {
	const { calculateTotalPrice, basket, removeFromBasket } = useBasket()
	const totalPrice = calculateTotalPrice()
	const totalPriceWithTax = totalPrice + totalPrice * 0.14

	return (
		<div>
			<h2>Заказы</h2>
			<div>Общая сумма: {totalPrice.toLocaleString('ru')} сум</div>
			<div>
				Общая сумма с обслуживанием (14%):{'  '}
				{totalPriceWithTax.toLocaleString('ru')} сум
			</div>

			<div className={styles.basket_wrapper}>
				{basket.map(item => (
					<BasketCard key={item.id} product={item} />
				))}
			</div>
			<div className={styles.clear_basket}>
				<button onClick={() => removeFromBasket('all')}>
					Очистить корзину
				</button>
			</div>
		</div>
	)
}

export default BasketPage
