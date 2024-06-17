import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.tsx'
import BasketProvider from './context/BasketProvider.tsx'
import ModalProvider from './context/ModalProvider.tsx'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
})
ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<BasketProvider>
				<ModalProvider>
					<Root />
				</ModalProvider>
			</BasketProvider>
		</QueryClientProvider>
	</BrowserRouter>
)
