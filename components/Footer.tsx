import Image from 'next/image'
import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import locationIcon from '../assets/icons/location.svg'
import phoneIcon from '../assets/icons/phone.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import styles from '../styles/footer.module.css'
const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.list_wrapper}>
				<ul className={styles.footer_list}>
					<li className={styles.footer_list__item}>
						<a
							target='_blank'
							href='https://www.google.com/maps/place/Giotto+Urgench,+%D0%A5%D0%BE%D1%80%D0%B5%D0%B7%D0%BC%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%90%D0%BB%D1%8C-%D0%A5%D0%BE%D1%80%D0%B5%D0%B7%D0%BC%D0%B8+%D0%B4%D0%BE%D0%BC+74,+220100,+Urgench,+Xorazm+Region,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.5634335,60.6313894,19z/data=!4m6!3m5!1s0x41dfcf12711ac019:0x7da900d99aad817e!8m2!3d41.5633929!4d60.6312989!16s%2Fg%2F11vrlt_wv0'
						>
							<Image
								className={styles.footer_icon}
								src={locationIcon}
								alt='location-icon'
								width={20}
							/>
							<span>
								Адрес: улица Аль-Хорезми, дом 74 <br /> (рядом с гостиницей
								Файз)
							</span>
						</a>
					</li>
					<li className={styles.footer_list__item}>
						<a href='tel:95-777-77-99'>
							<Image
								className={styles.footer_icon}
								src={phoneIcon}
								alt='phone-icon'
								width={20}
							/>
							<span>(95) 777 77 99</span>
						</a>
					</li>
				</ul>
				<div className={styles.socials}>
					<a
						target='_blank'
						href='https://www.instagram.com/giotto.urgench?igsh=MWp5N3EyaWR5aDZybA=='
					>
						<Image
							className={styles.socials_icon}
							src={instagramIcon}
							alt='instagram-icon'
							width={30}
						/>
					</a>
					<a target='_blank' href='https://t.me/Giotto_urgench'>
						<Image
							className={styles.socials_icon}
							src={telegramIcon}
							alt='telegram-icon'
							width={30}
						/>
					</a>
					<a
						target='_blank'
						href='https://www.facebook.com/giotto.urgench?mibextid=LQQJ4d'
					>
						<Image
							className={styles.socials_icon}
							src={facebookIcon}
							alt='facebook-icon'
							height={30}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
