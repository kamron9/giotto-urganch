// import { useParams } from 'react-router-dom'
import { getData } from '../../api'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { IProduct } from '../../types'

const CategoryPage = () => {
	//const { id } = useParams()
	const { data, isLoading } = getData<IProduct[]>(`/products`)

	return (
		<div style={{ marginTop: '30px' }}>
			{isLoading ? (
				<Loader />
			) : (
				<div className='product-wrapper'>
					{data?.map((product: IProduct) => (
						<Card key={product.id} product={product} isCategory={false} />
					))}
				</div>
			)}
		</div>
	)
}

export default CategoryPage
