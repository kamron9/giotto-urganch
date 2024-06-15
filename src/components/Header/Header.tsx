import { Link } from 'react-router-dom'
import basket from '../../assets/icons/basket.svg'
import styles from './header.module.css'
const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__inner}>
				<Link to={'/'}>
					<img
						height={35}
						src='https://media-cdn.tripadvisor.com/media/photo-s/11/f1/47/af/waffle-and-italian-gelato.jpg'
						alt=''
					/>
				</Link>
				<Link to={'/basket'}>
					<img draggable={false} src={basket} alt='basket-icon' height={35} />
				</Link>
			</div>
		</div>
	)
}

export default Header
