import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../../context/ModalProvider'
import { ICategory, IProduct } from '../../types'
import styles from './card.module.css'

const Card: FC<{ product: ICategory | IProduct; isCategory: boolean }> = ({
	product,
	isCategory,
}) => {
	const navigate = useNavigate()
	const { openModal } = useModal()
	const handleNavigate = () => {
		if (isCategory) {
			navigate(`/category/${product.id}`)
		} else {
			openModal(product as IProduct)
		}
	}
	return (
		<div onClick={handleNavigate}>
			<div className={styles.product}>
				<img
					draggable={false}
					className={styles.product__img}
					src={product.image}
					alt={product.name}
				/>
				<p className={styles.product__text}>{product.name}</p>
			</div>
		</div>
	)
}
export default Card
