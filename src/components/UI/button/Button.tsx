import cn from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'orange'
	size?: 'sm' | 'md' | 'lg'
	type?: 'button' | 'submit' | 'reset'
}
const Button: FC<IButton> = ({
	children,
	onClick,
	className,
	variant = 'primary',
	size = 'sm',
	type = 'button'
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(className, 'rounded-lg', {
				'bg-black text-secondary': variant === 'primary',
				'bg-secondary text-primary dark:bg-darkSecondary dark:text-white':
					variant === 'secondary',
				'bg-primary text-secondary dark:bg-darkSecondary': variant === 'orange',
				'px-3 py-1 text-sm': size === 'sm',
				'px-5 py-2 text-md': size === 'md',
				'px-8 py-3 text-lg': size === 'lg'
			})}
		>
			{children}
		</button>
	)
}

export default Button
