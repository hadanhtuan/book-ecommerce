import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getAccessToken } from "../api/baseAPI";
import { login } from "./user/apiCall";
import "./css/LoginForm.css";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClikLogin = async (e) => {
    // e.preventDefault();

    const isLoginSuccess = await login(dispatch, userInfo);
    if (isLoginSuccess) {
      history.push("/");
    }
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
      <div className="row px-3">
        <label className="mb-1">
          <h6 className="mb-0 text-sm">Email</h6>
        </label>
        <input
          className="mb-4"
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
          type="password"
          name="password"
          placeholder="Enter password"
          required
          onChange={(e) => handleFormChange(e)}
          value={userInfo.password}
        />
      </div>
      <div className="row px-3 mb-4">
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            id="chk1"
            type="checkbox"
            name="chk"
            className="custom-control-input"
          />
        </div>
        <a href="#" className="ml-auto mb-0 text-sm mr-2">
          Forgot Password?
        </a>
      </div>
      <div className="row mb-3 px-3">
        <button
          type="submit"
          className="btn btn-blue text-center"
          onClick={handleClikLogin}
        >
          Login
        </button>
      </div>
      <div className="row mb-4 px-3">
        <small className="font-weight-bold">
          Don't have an account?{" "}
          <Link to="/register">
            <a className="text-danger ">Register</a>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default LoginForm;
