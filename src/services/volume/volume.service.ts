import { instance } from '../../api/api.interceptor'
import { IVolume, IVolumeResponse } from '../../types/volume.interface'
import { fullVolumeFields, volumeFields } from './volumeResponse.fields'

const maxResults = import.meta.env.VITE_MAX_RESULT

export const VolumeService = {
	async getBySearch(searchRequest: string, startIndex: number = 0) {
		return instance<IVolumeResponse>({
			url: '/volumes',
			params: {
				q: `${searchRequest}`,
				fields: volumeFields,
				startIndex: startIndex * maxResults,
				maxResults,
				printType: 'books'
			},
			method: 'GET'
		})
	},

	async getById(id: string) {
		return instance<IVolume>({
			url: `/volumes/${id}`,
			params: {
				fields: fullVolumeFields,
				printType: 'books'
			},
			method: 'GET'
		})
	}
}
