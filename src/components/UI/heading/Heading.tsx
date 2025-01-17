import cn from 'clsx'
import { FC } from 'react'

interface IHeading {
	color?: 'black' | 'white'
	className?: string
	maxLength?: number
	fontSize?: 'sm' | 'md' | 'lg'
	text: string
}

const Heading: FC<IHeading> = ({
	maxLength,
	className,
	color = 'black',
	fontSize = 'sm',
	text
}) => {
	const customClassname = cn(
		className,
		{
			'text-xl': fontSize === 'sm',
			'text-2xl': fontSize === 'md',
			'text-3xl': fontSize === 'lg'
		},
		{
			'text-black dark:text-white': color === 'black',
			'text-secondary': color === 'white'
		}
	)

	return (
		<h2 className={customClassname}>
			{maxLength ? text?.slice(0, maxLength) : text}
			{maxLength && text.length > maxLength && (
				<span className='text-grey'>...</span>
			)}
		</h2>
	)
}

export default Heading
