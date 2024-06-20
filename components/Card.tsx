'use client'
import { FC } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useModal } from '../../context/ModalProvider'
import { ICategory, IProduct } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
