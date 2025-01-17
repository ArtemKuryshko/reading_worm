import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowUndo } from 'react-icons/io5'
import VolumeItem from '../../../components/volume/VolumeItem'
import Heading from '../../../components/UI/heading/Heading'
import { useSavedBooksStore } from '../../../store/savedBooks/savedBooks.store'

const SavedPage: FC = () => {
	const { savedBooks } = useSavedBooksStore()

	return (
		<div className='w-100 d-flex'>
			<Link to='/' className='block max-w-9'>
				<IoArrowUndo size={'2em'} className='dark:text-white' />
			</Link>
			<div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5'>
				{savedBooks.map(
					book =>
						book.volumeInfo?.imageLinks?.thumbnail &&
						book.volumeInfo?.description && (
							<VolumeItem key={book.id} bookId={book.id} saved />
						)
				)}
			</div>
			{savedBooks.length === 0 && (
				<div className='w-100'>
					<Heading
						className='text-center'
						text='No saved books'
						fontSize='lg'
					/>
				</div>
			)}
		</div>
	)
}

export default SavedPage
