import { useQuery } from 'react-query'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { apiUrl } from '../../contants/urls'
import { ICategory } from '../../types'

const HomePage = () => {
	const { data, isLoading } = useQuery<ICategory[]>(
		'category',
		async () => {
			const res = await fetch(apiUrl + '/categories')
			return res.json()
		},
		{
			refetchOnMount: false,
		}
	)
	console.log(data)

	return (
		<div>
			<div className='caption'>
				<span>МЕНЮ</span>
			</div>

			<div className=''>
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
		</div>
	)
}

export default HomePage
