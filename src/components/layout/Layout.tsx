import { FC, PropsWithChildren, memo } from 'react'
import Header from './header/Header'
import { useAppStore } from '../../store/main/app.store'

interface ILayout extends PropsWithChildren {}

const Layout: FC<ILayout> = memo(({ children }) => {
	const { lightMode } = useAppStore()

	return (
		<>
			<div className={lightMode}>
				<Header />
				<main className='p-4'>{children}</main>
				<div className='background fixed top-0 left-0 -z-10 bg-secondary dark:bg-darkSecondary w-screen h-screen'></div>
			</div>
		</>
	)
})

export default Layout
