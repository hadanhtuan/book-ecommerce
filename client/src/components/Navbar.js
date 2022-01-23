import React from 'react';
import "./css/Navbar.css";
import { Link, useHistory } from 'react-router-dom';
import { logout } from './auth/authAction';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const { user } = useSelector((state) => state.user)

	const handleLogout = () => {
		dispatch(logout())
		history.push("/login");
	}

	console.log(user)

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<Link to="/" className="navbar-brand">Wds<b>Store</b>
			</Link>

			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
				<div className="navbar-nav">
					<Link to="/" className="nav-item nav-link">Home</Link>
					{/* <div className="nav-item dropdown">
						<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Services</a>
						<div className="dropdown-menu">					
							<a href="#" className="dropdown-item">Web Design</a>
							<a href="#" className="dropdown-item">Web Development</a>
							<a href="#" className="dropdown-item">Graphic Design</a>
							<a href="#" className="dropdown-item">Digital Marketing</a>
						</div>
					</div> */}
					<Link to="/cart" className="cart-icon">
						<i className="material-icons">shopping_cart</i>
					</Link>
				</div>
				<form className="navbar-form form-inline">
					<div className="input-group search-box">								
						<input type="text" id="search" className="form-control" placeholder="Search here..."/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="material-icons">&#xE8B6;</i>
							</span>
						</div>
					</div>
				</form>
				{
					!localStorage.getItem("accessToken") ? (
						<div className="navbar-nav ml-auto action-buttons">
							<div className="nav-item dropdown">
								<Link to="/login" className="nav-link dropdown-toggle mr-4">Login</Link>
								
							</div>
							<div className="nav-item dropdown">
								<Link to="/register" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</Link>
							</div>
						</div>
					) : (

						<div class="navbar-nav ml-auto">
							<div class="nav-item dropdown">
								<a data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="https://image.thanhnien.vn/460x306/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg" class="avatar" alt="Avatar"/> Paula Wilson <b class="caret"></b></a>
							<div class="dropdown-menu">
								<Link to="#" class="dropdown-item">Danh sách đã mua</Link>
								
								<Link to="/cart" class="dropdown-item">Giỏ hàng của tôi</Link>
								<div class="dropdown-divider"></div>
								<a onClick={handleLogout} class="dropdown-item text-danger">
									Logout
								</a>
							</div>
							</div>
						</div>
					)
				}


			</div>
		</nav>
  );
};

export default Navbar;
