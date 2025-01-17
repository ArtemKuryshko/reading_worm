import { FC } from 'react'
import Layout from '../../../components/layout/Layout'
import { Outlet } from 'react-router-dom'

const Main: FC = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

export default Main
