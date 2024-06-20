'use client'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'
import { ICategory, IOneCategory, IProduct } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import leftArrowIcon from '../../../assets/icons/left-arrow.svg'
import Card from '../../../components/Card'

const Category = ({ params }: { params: { id: string } }) => {
	const router = useRouter()
	const id = params.id
	const { data, isLoading } = useSWR<IOneCategory>(`/category/${id}`)

	return (
		<div className='container'>
			<div className='caption'>
				<button className='close-btn' onClick={() => router.back()}>
					<Image src={leftArrowIcon} alt='left-icon' width={20} height={20} />
				</button>
				<span>{data?.name}</span>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className='product-wrapper'>
					{(data?.sub_categories.length as number) > 0
						? data?.sub_categories.map((category: ICategory) => (
								<Card key={category.id} product={category} isCategory={true} />
						  ))
						: data?.products.map((product: IProduct) => (
								<Card key={product.id} product={product} isCategory={false} />
						  ))}
				</div>
			)}
			<Modal />
		</div>
	)
}

export default Category
