import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBookIdStore } from '../../../store/bookId/bookId.store'
import VolumePage from '../../../pages/volume_page/VolumePage'
import Loader from '../../../components/UI/loader/Loader'
import { useBookStore } from '../../../store/books/book.store'

const BookPage: FC = () => {
	const { id } = useParams()

	const { setSearchEnabled } = useBookStore()
	const { book, loadBookById, clearBookInfo } = useBookIdStore()

	useEffect(() => {
		setSearchEnabled(false)
		clearBookInfo()
		if (id) loadBookById(id)
	}, [id])

	const newBook = book

	return (
		<div className='w-100 flex justify-center'>
			<div className='w-2/3 flex'>
				{newBook !== book || newBook === null ? (
					<Loader />
				) : (
					<VolumePage volumeInfo={newBook.volumeInfo} />
				)}
			</div>
		</div>
	)
}

export default BookPage
