'use client'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import { ICategory } from '@/types'
import useSWR from 'swr'

const HomePage = () => {
	const { data, isLoading } = useSWR<ICategory[]>('/categories')

	return (
		<div className='container home-page'>
			<div className='caption'>
				<span>МЕНЮ</span>
			</div>

			<div>
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
