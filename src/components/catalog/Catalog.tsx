import { FC, useEffect, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useBookStore } from '../../store/books/book.store'
import VolumeItem from '../volume/VolumeItem'
import Sorter from '../sorter/Sorter'
import Heading from '../UI/heading/Heading'
import Loader from '../UI/loader/Loader'
import Scroll from '../UI/scroll/Scroll'
import { sortBooks } from '../../hooks/sortBooks'
import { sortByCategory } from '../../hooks/sortByCategory'

const Catalog: FC = () => {
	// states
	const {
		books,
		searchRequest,
		currentRequestIndex,
		isLoading,
		hasMore,
		sortOption,
		sortCategories,
		setSearchEnabled,
		setCurrentRequestIndex,
		addSearchedBooks
	} = useBookStore()

	const nextFetch = () => {
		setCurrentRequestIndex(currentRequestIndex + 1)
		addSearchedBooks(searchRequest, currentRequestIndex + 1)
	}

	useEffect(() => {
		setSearchEnabled(true)
	}, [])

	const sortedBooks = useMemo(() => {
		const categoryBooks = sortByCategory(sortCategories, books)

		return sortBooks(sortOption, categoryBooks)
	}, [sortOption, books, sortCategories])

	console.log(sortedBooks)

	return (
		<div className='flex flex-col overflow-y-auto items-center p-5 flex-wrap mb-8 gap-5'>
			{isLoading && <Loader />}
			{books.length === 0 ? (
				<Heading
					text='Find some books...'
					color='black'
					fontSize='lg'
					className='text-center'
				/>
			) : (
				<>
					<Sorter />
					<InfiniteScroll
						next={nextFetch}
						hasMore={hasMore}
						loader={<Loader />}
						dataLength={sortedBooks.length}
						style={{ overflow: 'hidden' }}
						endMessage={
							<Heading className='text-center' text='No more books' />
						}
					>
						<div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-5'>
							{sortedBooks.map(
								book =>
									book.volumeInfo?.imageLinks?.thumbnail &&
									book.volumeInfo?.description && (
										<VolumeItem key={book.id} bookId={book.id} />
									)
							)}
						</div>
					</InfiniteScroll>
					<Scroll anchor='#header' />
				</>
			)}
		</div>
	)
}

export default Catalog
