import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LightMode } from '../../types/app.interface'

type AppState = {
	lightMode: LightMode
	setLightMode: (lightMode: LightMode) => void
}

export const useAppStore = create<AppState>()(
	persist(
		set => ({
			lightMode: LightMode.LIGHT,
			setLightMode: (lightMode: LightMode) => set(() => ({ lightMode }))
		}),
		{ name: 'app_store' }
	)
)
