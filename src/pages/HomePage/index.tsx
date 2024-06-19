import { useQuery } from 'react-query'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import { apiUrl } from '../../contants/urls'
import { ICategory } from '../../types'
import styles from './home.module.css'

const HomePage = () => {
	const { data, isLoading } = useQuery<ICategory[]>(
		'categories',
		async () => {
			const res = await fetch(apiUrl + '/categories')
			return res.json()
		},
		{
			refetchOnMount: false,
		}
	)

	return (
		<div className={styles.home}>
			<div className='caption'>
				<span>МЕНЮ</span>
			</div>

			<div className={styles.wrapper}>
				{isLoading ? (
					<Loader />
				) : (
					<div className={'product-wrapper'}>
						{data?.map(category => (
							<Card product={category} isCategory={true} key={category.id} />
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	)
}

export default HomePage
