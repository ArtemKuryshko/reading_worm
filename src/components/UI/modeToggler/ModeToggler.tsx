import { FC } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'
import { useAppStore } from '../../../store/main/app.store'
import { LightMode } from '../../../types/app.interface'

const ModeToggler: FC = () => {
	const { lightMode, setLightMode } = useAppStore()

	return (
		<div className='cursor-pointer'>
			{lightMode === LightMode.LIGHT ? (
				<LuSun size={'1.5em'} onClick={() => setLightMode(LightMode.DARK)} />
			) : (
				<LuMoon
					color='white'
					size={'1.5em'}
					onClick={() => setLightMode(LightMode.LIGHT)}
				/>
			)}
		</div>
	)
}

export default ModeToggler
