import React from 'react';
import "./css/Navbar.css";
import { Link, useHistory } from 'react-router-dom';


const Navbar = () => {
	const history = useHistory()
	const handleLogout = () => {
		window.localStorage.removeItem("accessToken");
		history.push("/login");
	}

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a href="/" className="navbar-brand">Brand<b>Name</b></a>  		
			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
				<div className="navbar-nav">
					<a href="/" className="nav-item nav-link">Home</a>
					{/* <div className="nav-item dropdown">
						<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Services</a>
						<div className="dropdown-menu">					
							<a href="#" className="dropdown-item">Web Design</a>
							<a href="#" className="dropdown-item">Web Development</a>
							<a href="#" className="dropdown-item">Graphic Design</a>
							<a href="#" className="dropdown-item">Digital Marketing</a>
						</div>
					</div> */}
					<a to="/cart" className="cart-icon">
						<i className="material-icons">shopping_cart</i>
					</a>
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
								<a href="/login" className="nav-link dropdown-toggle mr-4">Login</a>
								
							</div>
							<div className="nav-item dropdown">
								<a href="/register" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
							</div>
						</div>
					) : (

						<div class="navbar-nav ml-auto">
							<div class="nav-item dropdown">
								<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="https://image.thanhnien.vn/460x306/Uploaded/2022/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg" class="avatar" alt="Avatar"/> Paula Wilson <b class="caret"></b></a>
							<div class="dropdown-menu">
								<a href="#" class="dropdown-item">Danh sách đã mua</a>
								
								<a href="#" class="dropdown-item">Giỏ hàng của tôi</a>
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
