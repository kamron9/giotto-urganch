import { FC } from 'react'
import { IProduct } from '../../data'
import styles from './product.module.css'

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.product__gallery}>
				<img
					src={product.image}
					alt={product.title}
					className={styles.product__img}
				/>
			</div>
			<div className={styles.product__info}>
				<span>{product.title}</span>
				<p className={styles.product__description}>{product.description}</p>
				<span className={styles.product__price}>
					{product.price.toLocaleString('ru')} so'm
				</span>
			</div>
		</div>
	)
}

export default ProductCard
