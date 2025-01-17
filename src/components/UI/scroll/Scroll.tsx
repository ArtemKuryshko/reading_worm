import { FC } from 'react'
import { IoArrowUpCircle } from 'react-icons/io5'

interface IScroll {
	anchor: string
}

const Scroll: FC<IScroll> = ({ anchor }) => {
	return (
		<a href={anchor || '#'} className='fixed bottom-6 right-6'>
			<IoArrowUpCircle
				className='text-primary bg-black dark:text-white dark:bg-darkPrimary rounded-full'
				size='4em'
			/>
		</a>
	)
}

export default Scroll
