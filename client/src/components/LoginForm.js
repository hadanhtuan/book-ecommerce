import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./css/LoginForm.css";
import { login } from "./user/userAction";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {isLoading, message, error } = useSelector(state => state.user)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(userInfo, history));

    // if (isLoginSuccess) {
    //   history.push("/");
    // }
  };
  return (
    <div className="col-lg-6">
      <div className="card2 card border-0 px-4 pb-8 m-4">
        <h4>“A room without books is like a body without a soul.”</h4>
        <p>― Marcus Tullius Cicero</p>
      </div>
      <div className="row px-3 mb-4">
        <h2 className="mb-0 mr-4 mt-2">Welcome Back!</h2>
      </div>
        {message && (
                    <div class={`alert alert-${error ? 'danger' : 'success'}`} role="alert">
                        {message}
                    </div>
                )}
                
        {isLoading && (
                 <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
        )}
      <form onSubmit={handleFormSubmit}>
        <div className="row px-3">
            <label className="mb-1">
            <h6 className="mb-0 text-sm">Email</h6>
            </label>
            <input
                className="mb-4 form-control"
                type="text"
                name="email"
                placeholder="Enter a valid username "
                required
                onChange={(e) => handleFormChange(e)}
                value={userInfo.email}
            />
        </div>
        <div className="row px-3">
            <label className="mb-1">
                <h6 className="mb-0 text-sm">Password</h6>
            </label>
            <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={(e) => handleFormChange(e)}
                value={userInfo.password}
            />
        </div>
        <div className="row mb-3 px-3">
            <button
                type="submit"
                className="btn btn-blue text-center"
            >
            Login
            </button>
        </div>
      </form>
      <div className="row px-3 mb-4">
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            id="chk1"
            type="checkbox"
            name="chk"
            className="custom-control-input"
          />
        </div>
        <Link to="/forgot-password" className="ml-auto mb-0 text-sm mr-2">
          Forgot Password?
        </Link>
      </div>
      <div className="row mb-4 px-3">
        <small className="font-weight-bold">
          Don't have an account?{" "}
          <Link to="/register">
            <p className="text-danger ">Register</p>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default LoginForm;