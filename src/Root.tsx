import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Modal from './components/Modal'
import BasketPage from './pages/BasketPage'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function Root() {
	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/category/:id' element={<CategoryPage />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
			<Modal />
		</div>
	)
}

export default Root
