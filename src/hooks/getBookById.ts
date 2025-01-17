import { IVolumeEditable } from './../types/volume.interface'
export const getBookById = (books: IVolumeEditable[], bookId: string) => {
	return books.find(book => bookId == book.id) || books[0]
}
