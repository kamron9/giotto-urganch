import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.tsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>
)
