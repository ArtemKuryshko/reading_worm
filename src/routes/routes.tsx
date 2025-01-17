import { createBrowserRouter } from 'react-router-dom'
import BookPage from './pages/BookPage/BookPage'
import Main from './pages/Main/Main'
import Catalog from '../components/catalog/Catalog'
import SavedPage from './pages/SavedPage/SavedPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Catalog />
			},
			{
				path: 'book/:id',
				element: <BookPage />
			},
			{
				path: 'saved',
				element: <SavedPage />
			}
		]
	}
])
