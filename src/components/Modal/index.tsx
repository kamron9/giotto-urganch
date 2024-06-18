import { useEffect } from 'react'
import leftArrow from '../../assets/icons/close.svg'
import { useBasket } from '../../context/BasketProvider'
import { useModal } from '../../context/ModalProvider'
import { IProduct } from '../../types'
import styles from './modal.module.css'

const Modal = () => {
	const { isOpen, product, closeModal } = useModal()
	const { basket, addToBasket, increment, decrement, removeFromBasket } =
		useBasket()

	const onClose = (e: any) => {
		const target = e.target as HTMLDivElement
		if (target.className === styles.modal) {
			closeModal()
		}
	}
	const findProduct = basket.find(item => item.id === product?.id)

	useEffect(() => {
		if (findProduct && findProduct.count < 1) {
			removeFromBasket('one', product as IProduct)
		}
	}, [basket])

	return (
		<>
			{isOpen && (
				<div className={styles.modal} onClick={onClose}>
					<div
						className={`${styles.modalContent} ${
							isOpen ? styles.modalOpen : ''
						}`}
					>
						<button className={styles.modal_close} onClick={closeModal}>
							<img src={leftArrow} alt='left arrow' />
						</button>
						<img
							src={product?.image}
							className={styles.modal_image}
							alt={product?.name}
						/>
						<div className={styles.modal_inner}>
							<span className={styles.modal_title}>{product?.name}</span>
							<p className={styles.modal_text}>{product?.description}</p>
						</div>
						<div className={styles.modal__footer}>
							<div className={styles.modal_price}>
								<span className={styles.modal_price_text}>
									{Number(product?.price).toLocaleString('ru')} сум
								</span>
							</div>
							<div className={styles.modal_actions}>
								{findProduct && findProduct.count > 0 ? (
									<div>
										<div className={styles.modal_count}>
											<button
												onClick={() => decrement(product as IProduct)}
												className={`${styles.modal_count_btn} ${styles.modal_decrement_btn}`}
											>
												-
											</button>

											<span className={styles.modal_count_text}>
												{findProduct.count}
											</span>
											<button
												onClick={() => increment(product as IProduct)}
												className={`${styles.modal_count_btn} ${styles.modal_increment_btn}`}
											>
												+
											</button>
										</div>
									</div>
								) : (
									<button
										onClick={() => addToBasket(product as IProduct)}
										className={styles.add_basket_btn}
									>
										Добавить в корзину
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default Modal
