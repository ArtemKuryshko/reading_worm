import axios from 'axios'
import { getContentType } from './api.helper'

const axiosOptions = {
	baseURL: import.meta.env.VITE_SERVER_URL,
	headers: getContentType()
}

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(
	config => {
		config.params = {
			...config.params,
			key: import.meta.env.VITE_ACCESS_KEY
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
