// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getData } from '../../api'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { IOneCategory, IProduct } from '../../types'

const CategoryPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isLoading } = getData<IOneCategory>(`/category/${id}`)
	return (
		<div>
			<div className='caption'>
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
