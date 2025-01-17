import { CategoryOption, SortOption } from '../../../types/app.interface'
import Select, { PropsValue } from 'react-select'

interface ISelecter<T> {
	name: string
	selected: T
	options: SortOption[] | string[]
	onSelect: (option: T) => void
	isMultiple?: boolean
	placeholder?: string
}

const Selecter = <T extends SortOption | CategoryOption[]>({
	name,
	selected,
	options,
	onSelect,
	isMultiple,
	placeholder
}: ISelecter<T>) => {
	const optionsModified = [
		...options.map(value => {
			return { label: value as T, value: value as T }
		})
	]

	return isMultiple ? (
		<Select
			name={name}
			className='px-3 py-2 rounded-lg'
			options={optionsModified as any}
			value={selected as PropsValue<CategoryOption>}
			onChange={value => onSelect(value.map(field => field) as T)}
			placeholder={placeholder}
			isLoading={false}
			isClearable={true}
			isRtl={false}
			isSearchable={true}
			isMulti={isMultiple}
		/>
	) : (
		<Select
			name={name}
			className='px-3 py-2 rounded-lg'
			options={optionsModified}
			value={{ label: selected, value: selected }}
			onChange={value => onSelect(value?.value as T)}
			placeholder={placeholder}
			isLoading={false}
			isClearable={false}
			isRtl={false}
			isSearchable={false}
			isMulti={isMultiple}
		/>
	)
}

export default Selecter
