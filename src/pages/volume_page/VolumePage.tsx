import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowUndo } from 'react-icons/io5'
import { IVolumeInfo } from '../../types/volume.interface'
import Rating from '../../components/UI/rating/Rating'
import Heading from '../../components/UI/heading/Heading'

interface IVolumePage {
	volumeInfo: IVolumeInfo
}

const VolumePage: FC<IVolumePage> = ({ volumeInfo }) => {
	console.log(volumeInfo.categories)

	return (
		<div>
			<Link to='/' className='absolute top-32 left-6'>
				<IoArrowUndo size={'2em'} className='dark:text-white' />
			</Link>
			<div className='relative overflow-hidden rounded-xl'>
				<img
					className='rounded-xl relative py-4 z-10 ml-auto mr-auto'
					src={volumeInfo?.imageLinks?.thumbnail}
					alt=''
				/>
				<img
					className='absolute top-0 left-0 w-full blur-xl opacity-70'
					src={volumeInfo?.imageLinks?.thumbnail}
					alt=''
				/>
			</div>
			<div className='flex'>
				<div className='flex flex-col'>
					<Heading
						text={volumeInfo.title}
						className='font-bold text-3xl mt-4 self-center'
						color='black'
						fontSize='lg'
					/>

					{/* Rating */}
					<div className='rating text-right flex flex-col items-end mb-4 text-xl'>
						{volumeInfo.averageRating && (
							<Rating rating={volumeInfo.averageRating} />
						)}
						{volumeInfo.ratingsCount && (
							<p className='text-primary'>{volumeInfo.ratingsCount}</p>
						)}
					</div>

					<Heading
						text='Description'
						className='font-bold text-3xl mt-4 self-start'
						color='black'
						fontSize='sm'
					/>
					<div
						className='dark:text-white'
						dangerouslySetInnerHTML={{ __html: volumeInfo.description }}
					></div>

					{volumeInfo.categories && (
						<div>
							<Heading
								text='Categories:'
								className='font-semibold mt-4'
								color='black'
								fontSize='sm'
							/>
							{volumeInfo.categories?.map(category => {
								return (
									<p key={category} className='text-lg text-grey'>
										{category}
									</p>
								)
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default VolumePage
