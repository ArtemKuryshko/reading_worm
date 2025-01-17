import { FC } from 'react'

interface IIcon {
	src: string
	alt: string
	width: string
	height: string
}

const Icon: FC<IIcon> = ({ src, alt, width, height }) => {
	return <img src={src} alt={alt} width={width} height={height} />
}

export default Icon
