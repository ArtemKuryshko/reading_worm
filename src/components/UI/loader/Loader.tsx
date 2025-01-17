import { FC } from 'react'

const Loader: FC = () => {
	return (
		<svg className='animate-spin' style={{margin: "50px auto 0", background: "none", display: "block", shapeRendering: "auto", width: "200px", height: "200px"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
		<circle cx="50" cy="50" fill="none" stroke="#f0c129" strokeWidth="15" r="40" strokeDasharray="188.49555921538757 64.83185307179586">
		</circle>
		</svg>
	)
}

export default Loader