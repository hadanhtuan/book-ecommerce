import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { isLoading, isAuthenticated } = useSelector((state) => state.user)

    
	// if (authLoading)
	// 	return (
	// 		// <div className='spinner-container'>
	// 		// 	<Spinner animation='border' variant='info' />
	// 		// </div>
	// 	)

	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem("accessToken") ? (
					<>
						<Component {...rest} {...props} />
					</>
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute