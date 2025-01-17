export interface IVolumeInfo {
	title: string
	authors: string[]
	description: string
	pageCount: number
	categories: string[]
	averageRating: number
	ratingsCount: number
	imageLinks: {
		thumbnail: string
		medium: string
	}
}

export interface IVolume {
	id: string
	volumeInfo: IVolumeInfo
}

export interface IVolumeEditable extends IVolume {
	isSaved?: boolean
}

export interface IVolumeResponse {
	items: IVolume[]
}
