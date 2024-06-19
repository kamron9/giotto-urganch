import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import leftArrowIcon from '../../assets/icons/left-arrow.svg'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { apiUrl } from '../../contants/urls'
import { IOneCategory, IProduct } from '../../types'

const CategoryPage = () => {
	const { id } = useParams<{ id: string }>()
	const Key = `category${id}`
	const { data, isLoading } = useQuery<IOneCategory>(Key, async () => {
		const res = await fetch(apiUrl + '/category/' + id)
		return res.json()
	})

	const navigate = useNavigate()
	return (
		<div>
			<div className='caption'>
				<button className='close-btn' onClick={() => navigate(-1)}>
					<img src={leftArrowIcon} alt='left-icon' />
				</button>
				<span>{data?.name}</span>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className='product-wrapper'>
					{(data?.sub_categories.length as number) > 0
						? data?.sub_categories.map(category => (
								<Card key={category.id} product={category} isCategory={true} />
						  ))
						: data?.products.map((product: IProduct) => (
								<Card key={product.id} product={product} isCategory={false} />
						  ))}
				</div>
			)}
		</div>
	)
}

export default CategoryPage
