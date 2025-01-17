import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/button/Button'
import Paragraph from '../UI/paragraph/Paragraph'
import Rating from '../UI/rating/Rating'
import Heading from '../UI/heading/Heading'
import Icon from '../UI/icon/Icon'

import StarIcon from '../../assets/img/icons/star.svg'
import StarIconFilled from '../../assets/img/icons/starFilled.svg'
import { useBookStore } from '../../store/books/book.store'
import { IVolumeEditable } from '../../types/volume.interface'
import { getBookById } from '../../hooks/getBookById'
import { useSavedBooksStore } from '../../store/savedBooks/savedBooks.store'

interface IVolumeItem {
	bookId: string
	saved?: boolean
}

const VolumeItem: FC<IVolumeItem> = ({ bookId, saved }) => {
	const { savedBooks, addSavedBook, removeSavedBook } = useSavedBooksStore()

	const book: IVolumeEditable = useBookStore(state =>
		saved ? getBookById(savedBooks, bookId) : getBookById(state.books, bookId)
	)
	const { setIsSaved } = useBookStore()

	return (
		<div className='rounded-xl flex'>
			<img
				className='item-image rounded-l-xl'
				src={book.volumeInfo.imageLinks?.thumbnail}
				alt=''
			/>
			<div className='bg-black dark:bg-darkPrimary rounded-r-xl p-4 flex flex-col justify-between w-full'>
				<div>
					<div className='flex mb-4 items-center justify-between'>
						<Link to={`/book/${book.id}`}>
							<Heading
								text={book.volumeInfo.title}
								className='cursor-pointer'
								color='white'
								fontSize='sm'
								maxLength={20}
							/>
						</Link>
						<div
							className='save_button cursor-pointer'
							onClick={() => {
								setIsSaved(book.id, !book.isSaved)
								if (book.isSaved) {
									removeSavedBook(book.id)
								} else {
									addSavedBook(book)
								}
							}}
						>
							<Icon
								src={book.isSaved ? StarIconFilled : StarIcon}
								alt='Save'
								width='20px'
								height='20px'
							/>
						</div>
					</div>
					<div>
						{book.volumeInfo.averageRating && (
							<Rating rating={book.volumeInfo.averageRating} />
						)}
					</div>
					<Paragraph
						text={book.volumeInfo.description}
						color='white'
						maxLength={100}
					/>
					{book.volumeInfo.categories && (
						<div className='mt-2'>
							{book.volumeInfo.categories.map(category => (
								<span key={category} className='text-sm text-grey'>
									{category}
								</span>
							))}
						</div>
					)}
				</div>
				<div className='mt-2 self-end'>
					<Link to={`/book/${book.id}`}>
						<Button variant='orange' size='md'>
							Learn more
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default VolumeItem
