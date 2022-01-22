import React from "react";
import "./css/LoginForm.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { axiosInstance, getAccessToken } from "../api/baseAPI";
import { login } from "./user/apiCall";
const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const handleClickCreate = async (e) => {
    if (
      userInfo.email == "" ||
      userInfo.password == "" ||
      require.confirmPw == "" ||
      require.checkbox === false
    ) {
      alert("Please fill out all field");
    } else {
      try {
        console.log(userInfo);
        const res = await axiosInstance.post("auth/register", userInfo);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
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
            <span>I accept the Terms of Use & Privacy Policy</span>
          </label>
        </div>
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
      </div>
      <div className="row mb-3 px-3">
        <button
          type="submit"
          className="btn btn-blue text-center"
          onClick={handleClickCreate}
        >
          Create
        </button>
      </div>
      <div className="row mb-4 px-3 ">
        <small className="font-weight-bold d-flex">
          Already have an account?
          <Link to="/login">
            <p className="text-danger ml-1 ">Sing in</p>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default RegisterForm;
