import { IVolumeEditable } from './../types/volume.interface'
import { SortOption } from './../types/app.interface'

export const sortBooks = (sortOption: SortOption, books: IVolumeEditable[]) => {
	switch (sortOption) {
		case SortOption.NONE:
			return [...books.sort(() => Math.random() - 0.5)]
			break
		case SortOption.ALPHABET:
			return [
				...books.sort((book1, book2) =>
					book1.volumeInfo.title.localeCompare(book2.volumeInfo.title)
				)
			]
			break
		case SortOption.RATING_ASC:
			return [
				...books.sort((book1, book2) => {
					const rating1 = book1.volumeInfo.averageRating ?? Infinity
					const rating2 = book2.volumeInfo.averageRating ?? Infinity
					return rating1 - rating2
				})
			]
			break
		case SortOption.RATING_DESC:
			return [
				...books.sort((book1, book2) => {
					const rating1 = book1.volumeInfo.averageRating ?? -1
					const rating2 = book2.volumeInfo.averageRating ?? -1
					return rating2 - rating1
				})
			]
			break
	}
}
