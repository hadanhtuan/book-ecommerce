import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getUserProfile } from '../user/userAction'

const AdminProtected = ({ component: Component, ...rest }) => {
	const { user } = useSelector((state) => state.user)


	return (
		<Route
			{...rest}
			render={props =>
				user.role === 'admin' ? (
					<>
						<Component {...rest} {...props} />
					</>
				) : (
					<Redirect to='/' />
				)
			}
		/>
	)
}

export default AdminProtected