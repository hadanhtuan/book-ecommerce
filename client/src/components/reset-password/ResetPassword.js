import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { updatePassword } from "./passwordAction";
import PasswordStrengthMeter from "../PasswordStrengthMeter";


const ForgetPassword = () => {
    const { resetToken } = useParams();

    const dispatch = useDispatch();

	const history = useHistory();
    const [passwordLength, setPasswordLength] = useState(false);
    const [containsNumbers, setContainsNumbers] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isEqualPassword, setIsEqualPassword] = useState(false);
    const { isLoading, message, error } = useSelector((state) => state.password);


    const [require, setRequire] = useState({
        confirmPw: "",
        checkbox: false,
    }); // check confirm password and checkbox filled
    const [userInfo, setUserInfo] = useState({
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
    
    const handlePasswordChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      };
    
      const handleConfirmPasswordChange = (e) => {
        setRequire({ ...require, confirmPw: e.target.value });
      };

	const handleOnSubmit = e => {
		
        if (passwordLength && containsNumbers && isUpperCase && isEqualPassword) {
            e.preventDefault();

            const formData = {
                resetToken,
                password: userInfo.password
            };

		    dispatch(updatePassword(formData));

          } else {
            e.preventDefault();
      
            alert("Vui lòng nhập mật khẩu ít nhất có 8 kí tự và chứa 1 chữ in Hoa và mật khẩu phải bằng mật khẩu xác nhận");
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
            <form onSubmit={handleOnSubmit}>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Mật khẩu</h6>
                </label>
                <input
                    className="mb-4"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu..."
                    onChange={(e) => handlePasswordChange(e)}
                    value={userInfo.password}
                    required
                />
                </div>
                <PasswordStrengthMeter password={userInfo.password} />
                <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Nhập lại mật khẩu</h6>
                </label>
                <input
                    className="mb-4"
                    type="password"
                    name="confirmpassword"
                    placeholder="Nhập lại mật khẩu..."
                    onChange={(e) => handleConfirmPasswordChange(e)}
                    value={require.confirmPw}
                    required
                />
                </div>
                <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                        Cập nhật lại mật khẩu
                    </button>
                </div>
            </form>
            <div className="row mb-4 px-3">
                <div className="col-xs-12 col-md-6">
                    <small className="font-weight-bold">
                        Đã nhớ mật khẩu? <Link to='/login' className="text-danger ">Login</Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
