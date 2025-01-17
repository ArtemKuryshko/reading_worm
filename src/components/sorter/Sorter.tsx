import { FC } from 'react'
import { SortOption } from '../../types/app.interface'
import Selecter from '../UI/dropdown/Selecter'
import { useBookStore } from '../../store/books/book.store'

interface ISorter {}

const Sorter: FC<ISorter> = () => {
	const {
		sortOption,
		setSortOption,
		categories,
		sortCategories,
		setSortCategory
	} = useBookStore()

	return (
		<div className='w-full flex gap-4 justify-end'>
			<Selecter
				name='Sort'
				selected={sortOption}
				onSelect={setSortOption}
				options={Object.values(SortOption)}
				placeholder='Sort by'
			/>
			<Selecter
				name='Category sort'
				selected={sortCategories}
				onSelect={setSortCategory}
				options={categories}
				placeholder='Sort by category'
				isMultiple
			/>
		</div>
	)
}

export default Sorter
