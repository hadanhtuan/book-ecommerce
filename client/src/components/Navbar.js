import React, { useEffect, useState } from "react";
import "./css/Navbar.css";
import { Link, useHistory, useParams } from 'react-router-dom';
import { logout } from './auth/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchBooks } from "./filters/FilterAction"



const Navbar = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [searchValue, setSearchValue] = useState("");

	const { user } = useSelector((state) => state.user)

	const handleLogout = () => {
		dispatch(logout())
		history.push("/login");
	}

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);

		dispatch(filterSearchBooks(e.target.value));
	};


	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<Link to="/" className="navbar-brand">WebDev<b>Store</b>
			</Link>

			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
				<div className="navbar-nav">
					<Link to="/" className="nav-item nav-link">Trang chủ</Link>

					{user.role === 'admin' && (<Link to="/admin" className="nav-link nav-item text-danger">Admin Dashboard</Link>)}
								
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
						<input
							type="text"
							id="search"
							className="form-control"
							placeholder="Tìm kiếm sách..."
							onChange={handleSearchChange}
              				value={searchValue}
						/>
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
								<Link to="/login" className="nav-link dropdown-toggle mr-4">Đăng nhập</Link>
								
							</div>
							<div className="nav-item dropdown">
								<Link to="/register" className="btn btn-primary dropdown-toggle sign-up-btn">Đăng kí</Link>
							</div>
						</div>
					) : (
							
							<div className="navbar-nav ml-auto">
								<div className="nav-item dropdown">
									<a data-toggle="dropdown" className="nav-link dropdown-toggle user-action"> {`${user.email}`} <b className="caret"></b></a>
								<div className="dropdown-menu">
									<Link to="/user/orders" className="dropdown-item">Danh sách đã mua</Link>
									
									<Link to="/cart" className="dropdown-item">Giỏ hàng của tôi</Link>
									<div className="dropdown-divider"></div>
									<a onClick={handleLogout} className="dropdown-item text-danger">
										Đăng xuất
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
