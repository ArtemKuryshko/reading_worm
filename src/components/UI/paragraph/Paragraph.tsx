import cn from 'clsx'
import { FC } from 'react'

interface IParagraph {
	color?: 'black' | 'white'
	className?: string
	maxLength?: number
	fontSize?: 'sm' | 'md' | 'lg'
	text: string
}

const Paragraph: FC<IParagraph> = ({
	maxLength,
	className,
	color = 'black',
	fontSize = 'sm',
	text
}) => {
	return (
		<p
			className={cn(
				className,
				{
					'text-sm': fontSize === 'sm',
					'text-base': fontSize === 'md',
					'text-lg': fontSize === 'lg'
				},
				{
					'text-black': color === 'black',
					'text-secondary': color === 'white'
				}
			)}
		>
			{maxLength && text?.slice(0, maxLength)}
			{maxLength && text.length > maxLength && (
				<span className='text-grey'>...</span>
			)}
		</p>
	)
}

export default Paragraph
