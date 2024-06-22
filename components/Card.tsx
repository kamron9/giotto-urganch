'use client'
import { ICategory, IProduct } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useModal } from '../context/ModalProvider'
import styles from '../styles/card.module.css'

const Card: FC<{ product: ICategory | IProduct; isCategory: boolean }> = ({
	product,
	isCategory,
}) => {
	const { openModal } = useModal()
	const router = useRouter()
	const handleNavigate = () => {
		if (isCategory) {
			router.push(`/category/${product.id}`)
		} else {
			openModal(product as IProduct)
		}
	}
	return (
		<div onClick={handleNavigate}>
			<div className={styles.product}>
				{!isCategory && (product as IProduct).is_new && (
					<Image
						src={'/new.png'}
						alt='new'
						height={40}
						width={100}
						className={styles.new_photo}
					/>
				)}
				<Image
					width={200}
					height={200}
					draggable={false}
					className={styles.product__img}
					src={product.image}
					alt={product.name}
					priority
				/>
				<p className={styles.product__text}>{product.name}</p>
			</div>
		</div>
	)
}
export default Card
