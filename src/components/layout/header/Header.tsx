import { FC } from 'react'
import SearchForm from '../../form/SearchForm'
import { Link } from 'react-router-dom'
import { useBookStore } from '../../../store/books/book.store'
import ModeToggler from '../../UI/modeToggler/ModeToggler'
import Heading from '../../UI/heading/Heading'

const Header: FC = () => {
	const {
		isSearchEnabled,
		searchRequest,
		changeSearchRequest,
		addSearchedBooks,
		clearAll
	} = useBookStore()

	return (
		<header
			id='header'
			className='w-full dark:bg-darkPrimary bg-primary p-5 flex items-center'
		>
			<div className='logo'>
				<Link to='/' className='select-none text-4xl font-bold'>
					<Heading text='Reading Worm' fontSize='lg' />
				</Link>
			</div>
			<nav className='ml-10 mr-auto'>
				<Link to='/saved' className='font-medium'>
					<Heading className='underline' text='Saved books' fontSize='sm' />
				</Link>
			</nav>
			<ModeToggler />
			{isSearchEnabled && (
				<SearchForm
					searchRequest={searchRequest}
					changeSearchRequest={changeSearchRequest}
					submitCallback={addSearchedBooks}
					clearCallback={clearAll}
					inputId='search_form'
				/>
			)}
		</header>
	)
}

export default Header
