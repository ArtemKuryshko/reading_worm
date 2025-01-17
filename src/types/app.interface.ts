export enum LightMode {
	LIGHT = 'light',
	DARK = 'dark'
}

export enum SortOption {
	NONE = 'None',
	RATING_ASC = 'Rating ascending',
	RATING_DESC = 'Rating descending',
	ALPHABET = 'Alphabet'
}

export type CategoryOption = {
	readonly label: string
	readonly value: string
}
