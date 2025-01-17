import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IVolumeEditable } from '../../types/volume.interface'

type SavedBooksState = {
	savedBooks: IVolumeEditable[]
	addSavedBook: (book: IVolumeEditable) => void
	removeSavedBook: (id: string) => void
}

export const useSavedBooksStore = create<SavedBooksState>()(
	persist(
		set => ({
			savedBooks: [],
			addSavedBook: (book: IVolumeEditable) => {
				set(state => ({
					savedBooks: [...state.savedBooks, { ...book, isSaved: true }]
				}))
			},
			removeSavedBook: (id: string) => {
				set(state => ({
					savedBooks: state.savedBooks.filter(book => book.id !== id)
				}))
			}
		}),
		{ name: 'saved_books_store' }
	)
)
