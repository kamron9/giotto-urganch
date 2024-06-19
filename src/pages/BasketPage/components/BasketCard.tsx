import trashIcon from '../../../assets/icons/trash.svg'
import { useBasket } from '../../../context/BasketProvider'
import { IBasket } from '../../../types'
import styles from '../basket.module.css'
const BasketCard = ({ product }: { product: IBasket }) => {
	const { removeFromBasket, increment, decrement } = useBasket()

	const productCount = product.count > 1

	const handleDecrement = () => {
		if (productCount) {
			decrement(product)
		}
	}

	return (
		<div className={styles.basket_card}>
			<div className={styles.basket_card__image}>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.basket_card__details}>
				<span className={styles.basket_card__title}>{product.name}</span>
				<p className={styles.basket_card__price}>
					Цена: {Number(product.price).toLocaleString('ru')}
				</p>
				<p className={styles.basket_card_total_price}>
					Итог : {product.count} &nbsp; / &nbsp;
					{(product.price * product.count).toLocaleString('ru')} сум
				</p>
				<div>
					<button
						onClick={handleDecrement}
						disabled={!productCount}
						className='count_btn decrement_btn'
					>
						-
					</button>
					<span className='count_text'>{product.count}</span>
					<button
						onClick={() => increment(product)}
						className='count_btn increment_btn'
					>
						+
					</button>
				</div>
				<div
					className={styles.remove_product}
					onClick={() => removeFromBasket('one', product)}
				>
					<img
						src={trashIcon}
						alt='trash-icon'
						height={30}
						className={styles.trash_icon}
					/>
				</div>
			</div>
		</div>
	)
}

export default BasketCard
