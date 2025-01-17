import { CategoryOption, SortOption } from './../../types/app.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { VolumeService } from '../../services/volume/volume.service'
import { IVolumeEditable } from '../../types/volume.interface'
import { useSavedBooksStore } from '../savedBooks/savedBooks.store'

type BooksState = {
	currentRequestIndex: number
	books: IVolumeEditable[]
	categories: string[]
	sortCategories: CategoryOption[]
	searchRequest: string
	isSearchEnabled: boolean
	isLoading: boolean
	hasMore: boolean
	sortOption: SortOption
	setIsLoading: (isLoading: boolean) => void
	setCurrentRequestIndex: (indexPage: number) => void
	changeSearchRequest: (value: string) => void
	setSearchEnabled: (enabled: boolean) => void
	setIsSaved: (bookId: string, isSaved: boolean) => void
	setHasMore: (hasMore: boolean) => void
	setSortOption: (sortOption: SortOption) => void
	setSortCategory: (sortCategories: CategoryOption[]) => void
	searchedBooksMiddleware: (
		state: BooksState,
		bookList: IVolumeEditable[]
	) => void
	updateCategories: () => void
	addSearchedBooks: (searchMessage: string, currentIndex: number) => void
	clearAll: () => void
}

export const useBookStore = create<BooksState>()(
	persist(
		set => ({
			currentRequestIndex: 0,
			books: [],
			categories: [],
			sortCategories: [],
			searchRequest: '',
			isSearchEnabled: true,
			isLoading: false,
			hasMore: true,
			sortOption: SortOption.NONE,
			setIsLoading: isLoading => set({ isLoading }),
			setHasMore: hasMore => set({ hasMore }),
			setCurrentRequestIndex: (indexPage: number) =>
				set(() => ({
					currentRequestIndex: indexPage
				})),
			changeSearchRequest: (value: string) =>
				set(() => ({ searchRequest: value })),
			setSearchEnabled: (enabled: boolean) =>
				set(() => ({ isSearchEnabled: enabled })),

			searchedBooksMiddleware: (
				state: BooksState,
				bookList: IVolumeEditable[]
			) => {
				mainLoop: for (const book of bookList) {
					for (const bookState of state.books) {
						if (book.id === bookState.id) {
							state.setHasMore(false)
							bookList = []
							break mainLoop
						} else {
							book.isSaved = false
						}
					}
				}

				const savedBooks = useSavedBooksStore.getState().savedBooks

				state.books.forEach(book => {
					savedBooks.forEach(bookSaved => {
						if (book.id === bookSaved.id) book.isSaved = true
					})
				})

				return {}
			},
			updateCategories: () => {
				set(state => {
					state.books.forEach(book => {
						book.volumeInfo.categories &&
							book.volumeInfo.categories.forEach(category => {
								if (!state.categories.includes(category)) {
									state.categories.push(category)
								}
							})
					})

					return {}
				})
			},
			addSearchedBooks: async (searchMessage: string, currentIndex: number) => {
				set(state => {
					state.setIsLoading(true)
					return {}
				})

				const { data } = await VolumeService.getBySearch(
					searchMessage,
					currentIndex
				)

				if (data.items) {
					let bookList: IVolumeEditable[] = [...data.items]

					set(state => {
						state.searchedBooksMiddleware(state, bookList)

						set(state => ({
							books: [...state.books, ...bookList]
						}))

						state.updateCategories()

						return {}
					})
				} else {
					set(state => {
						state.setHasMore(false)

						return {}
					})
				}

				set(state => {
					state.setIsLoading(false)

					return {}
				})
			},
			setSortOption: (sortOption: SortOption) => {
				set({
					sortOption
				})
			},
			setSortCategory: (sortCategories: CategoryOption[]) => {
				set(() => ({
					sortCategories
				}))
			},
			setIsSaved: (bookId: string, isSaved: boolean) => {
				set(state => ({
					books: state.books.map(book =>
						book.id === bookId ? { ...book, isSaved } : book
					)
				}))
			},
			clearAll: () => {
				set(() => ({
					currentRequestIndex: 0,
					isLoading: false,
					isSearchEnabled: true,
					hasMore: true,
					books: [],
					searchRequest: '',
					categories: [],
					sortCategories: []
				}))
			}
		}),
		{ name: 'book_store' }
	)
)
