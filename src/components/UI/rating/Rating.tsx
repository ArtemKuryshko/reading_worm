import { FC } from 'react'
import { IconContext } from 'react-icons'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'


interface IRating {
	rating: number
}

const Rating: FC<IRating> = ({ rating }) => {
	return (
			<div className='flex gap-2 items-center'>
				<IconContext.Provider value={{color: '#F0C129'}}>
					<span className='text-primary mt-1'>{rating} / 5</span>
					{rating >= 4 && <BsStarFill />}
					{rating < 4 && rating > 1 && <BsStarHalf />}
					{rating <= 1 && <BsStar />} 
				</IconContext.Provider>
			</div>
	);
};

export default Rating;