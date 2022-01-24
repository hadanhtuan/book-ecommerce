import React from "react";
import "./css/LoginForm.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { register } from "./auth/authAction";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [passwordLength, setPasswordLength] = useState(false);
  const [containsNumbers, setContainsNumbers] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isEqualPassword, setIsEqualPassword] = useState(false);
  const { isLoading, message, error } = useSelector((state) => state.auth);

  const [require, setRequire] = useState({
    confirmPw: "",
    checkbox: false,
  }); // check confirm password and checkbox filled
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // check Number
  const checkForNumbers = (string) => {
    var matches = string.match(/\d+/g);

    setContainsNumbers(matches != null ? true : false);
  };

  // check for upper case
  const checkForUpperCase = (string) => {
    var matches = string.match(/[A-Z]/);

    setIsUpperCase(matches != null ? true : false);
  };

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setRequire({ ...require, confirmPw: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    if (passwordLength && containsNumbers && isUpperCase && isEqualPassword) {
      e.preventDefault();
      console.log("submit", userInfo);
      console.log("cf", require.confirmPw);

      dispatch(register(userInfo, history));
    } else {
      e.preventDefault();

      alert("Vui lòng nhập mật khẩu ít nhất có 8 kí tự và chứa 1 chữ in Hoa");
    }
  };
  useEffect(() => {
    console.log(" ");
    checkForNumbers(userInfo.password);
    checkForUpperCase(userInfo.password);
    setPasswordLength(userInfo.password.length > 7 ? true : false);
    if (require.confirmPw && userInfo.password === require.confirmPw) {
      setIsEqualPassword(true);
    } else {
      setIsEqualPassword(false);
    }
    console.log("confirm", isEqualPassword);
    console.log("confirmpw", require.confirmPw);
    console.log("password", userInfo.password);
    console.log("contain number", containsNumbers);
    console.log("upperCase", isUpperCase);
  }, [userInfo.password, require.confirmPw]);

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
        <div
          className={`alert alert-${error ? "danger" : "success"}`}
          role="alert"
        >
          {message}
        </div>
      )}

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
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
            onChange={(e) => handleEmailChange(e)}
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
            onChange={(e) => handlePasswordChange(e)}
            value={userInfo.password}
            required
          />
        </div>
        <PasswordStrengthMeter password={userInfo.password} />
        <div className="row px-3">
          <label className="mb-1">
            <h6 className="mb-0 text-sm">Confirm Password</h6>
          </label>
          <input
            className="mb-4"
            type="password"
            name="confirmpassword"
            placeholder="Enter to confirm password"
            onChange={(e) => handleConfirmPasswordChange(e)}
            value={require.confirmPw}
            required
          />
        </div>
        <div className="row mb-3 px-3">
          <button type="submit" className="btn btn-blue text-center">
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
            <Link
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              I accept the Terms of Use & Privacy Policy
            </Link>
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
