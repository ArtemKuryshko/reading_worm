import { create } from 'zustand'
import { VolumeService } from '../../services/volume/volume.service'
import { IVolume } from '../../types/volume.interface'

type BooksState = {
	book: IVolume | null
	loadBookById: (id: string) => void
	clearBookInfo: () => void
}

export const useBookIdStore = create<BooksState>(set => ({
	book: null,
	loadBookById: async (id: string) => {
		const { data } = await VolumeService.getById(id)

		set(() => ({
			book: data
		}))
	},
	clearBookInfo: () => {
		set(() => ({
			book: null
		}))
	}
}))
