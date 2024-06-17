import { Link } from 'react-router-dom'
import basketIcon from '../../assets/icons/basket.svg'
import { useBasket } from '../../context/BasketProvider'
import styles from './header.module.css'
const Header = () => {
	const { basket } = useBasket()
	return (
		<div className={styles.header}>
			<div className={styles.header__inner}>
				<Link to={'/'} style={{ height: 51 }}>
					<img height={51} src='/logo.png' alt='' />
				</Link>
				<Link to={'/basket'}>
					<div className={styles.header_basket}>
						{basket.length > 0 && <span>{basket.length}</span>}

						<img
							draggable={false}
							src={basketIcon}
							alt='basket-icon'
							height={35}
						/>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
