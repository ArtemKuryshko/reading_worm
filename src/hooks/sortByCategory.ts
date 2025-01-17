import { CategoryOption } from './../types/app.interface'
import { IVolumeEditable } from '../types/volume.interface'

export const sortByCategory = (
	sortedCategories: CategoryOption[],
	books: IVolumeEditable[]
) => {
	return [
		...books.filter(book => {
			const bookCategories = book.volumeInfo.categories || []

			return sortedCategories.every(sortedCategory =>
				bookCategories.includes(sortedCategory.value)
			)
		})
	]
}
