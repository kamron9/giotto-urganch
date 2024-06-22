'use client'
import Image from 'next/image'
import Link from 'next/link'
import basketIcon from '../assets/icons/basket.svg'
import { useBasket } from '../context/BasketProvider'
import styles from '../styles/header.module.css'
const Header = () => {
	const { basket } = useBasket()
	return (
		<div className={styles.header}>
			<div className={styles.header__inner}>
				<Link href={'/'} style={{ height: 51 }}>
					<img height={51} src='/logo.png' alt='logo' />
				</Link>
				<Link href={'/basket'}>
					<div className={styles.header_basket}>
						{basket.length > 0 && <span>{basket.length}</span>}
						<Image
							draggable={false}
							src={basketIcon}
							alt='basket-icon'
							height={35}
							width={35}
						/>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
