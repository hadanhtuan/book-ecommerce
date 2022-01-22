import React from "react";
import "./css/LoginForm.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { register } from "./user/userAction";

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {isLoading, message, error } = useSelector(state => state.user)

  const [require, setRequire] = useState({
    confirmPw: "",
    checkbox: false,
  }); // check confirm password and checkbox filled
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    dispatch(register(userInfo, history));
  };
  return (
    <div className="col-lg-6">
      <div className="card2 card border-0 px-4 pb-4 mb-4">
        <h4>“A room without books is like a body without a soul.”</h4>
        <p>― Marcus Tullius Cicero</p>
      </div>
      <div className="row px-3 mb- mt-4">
        <h2 className="mb-0 mr-4 mt-2">Create Account</h2>
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
            className="mb-4"
            type="text"
            name="email"
            placeholder="Enter a valid email "
            onChange={(e) => handleFormChange(e)}
            value={userInfo.email}
            required
          />
        </div>
        <div className="row px-3">
          <label className="mb-1">
            <h6 className="mb-0 text-sm">Password</h6>
          </label>
          <input
            className="mb-4"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={(e) => handleFormChange(e)}
            value={userInfo.password}
          />
        </div>
        <div className="row px-3">
          <label className="mb-1">
            <h6 className="mb-0 text-sm">Confirm Password</h6>
          </label>
          <input
            className="mb-4"
            type="confirmpassword"
            name="confirmpassword"
            placeholder="Enter to confirm password"
            value={require.confirmPw}
            onChange={(e) =>
              setRequire({ ...require, confirmPw: e.target.value })
            }
            required
          />
        </div>
        <div className="row mb-3 px-3">
          <button
            type="submit"
            className="btn btn-blue text-center"
          >
            Create
          </button>
        </div>
      </form>
      <div className="col text-left">
        <div className="custom-control custom-checkbox">
          <input
            id="my-input"
            className="custom-control-input"
            type="checkbox"
            name="id1"
            value={require.checkbox}
            onClick={() => setRequire({ ...require, checkbox: true })}
            required
          />
          <label for="my-input" className="custom-control-label">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">I accept the Terms of Use & Privacy Policy</a>
          </label>
        </div>
      </div>
      <div className="row px-3">
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            id="chk1"
            type="checkbox"
            name="chk"
            className="custom-control-input"
          />
        </div>
      </div>
      <div className="row mb-4 px-3">
        <small className="font-weight-bold d-flex">
          Already have an account?
          <Link to="/login">
            <p className="text-danger ml-1">Sign in</p>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default RegisterForm;