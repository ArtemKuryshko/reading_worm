import { FC, InputHTMLAttributes } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../UI/button/Button'

interface ISearchForm extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	searchRequest: string
	inputId?: string
	changeSearchRequest: (searchRequest: string) => void
	submitCallback: (searchRequest: string, currentRequestIndex: number) => void
	clearCallback: () => void
}

const SearchForm: FC<ISearchForm> = ({
	searchRequest,
	changeSearchRequest,
	submitCallback,
	clearCallback
}) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const submit = (event: React.FormEvent) => {
		event.preventDefault()
		if (searchRequest.length != 0) {
			clearCallback()
			submitCallback(searchRequest, 0)
			changeSearchRequest(searchRequest)
			pathname !== '/' && navigate('/')
		}
	}

	const reset = () => clearCallback()

	return (
		<form
			onSubmit={submit}
			onReset={reset}
			className='search p-5 flex items-center gap-4'
		>
			<input
				className='p-2 rounded-lg focus:outline-black focus:outline focus:outline-2'
				placeholder='Search...'
				value={searchRequest}
				onChange={e => changeSearchRequest(e.target.value)}
				type='text'
			/>
			<Button variant='primary' size='md' type='submit'>
				Search
			</Button>
			{pathname === '/' && (
				<Button variant='secondary' size='md' type='reset'>
					Clear all
				</Button>
			)}
		</form>
	)
}

export default SearchForm
