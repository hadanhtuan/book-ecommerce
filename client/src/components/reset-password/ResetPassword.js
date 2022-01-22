import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./passwordAction";
import { Link, useParams } from "react-router-dom";

const passVerificationError = {
	isLenthy: false,
	hasUpper: false,
	hasLower: false,
	hasNumber: false,
	hasSpclChr: false,
	confirmPass: false,
};

const ForgetPassword = () => {
    const { resetToken } = useParams();
    const dispatch = useDispatch();

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(passVerificationError);

	const { isLoading, error, message, email } = useSelector(
		state => state.password
	);

	const handleOnChange = e => {
		const { name, value } = e.target;

		if (name === "password") {
		    setPassword(value);
			const isLenthy = value.length > 8;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSpclChr = /[@,#,$,%,&]/.test(value);

			setPasswordError({
				...passwordError,
				isLenthy,
				hasUpper,
				hasLower,
				hasNumber,
				hasSpclChr,
			});
		}

		if (name === "confirmPassword") {
            setConfirmPassword(value);
			setPasswordError({
				...passwordError,
				confirmPass: password === value,
			});
		}
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		const formData = {
			resetToken,
			password
		};
		dispatch(updatePassword(formData));
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
            <form onSubmit={handleOnSubmit}>
                <div className="row px-3">
                    <label className="mb-1">
                        <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                        class="form-control"
                        type="password"
                        name="password"
                        value={password}
						onChange={handleOnChange}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="row px-3 mt-3">
                    <label className="mb-1">
                        <h6 className="mb-0 text-sm">Confirm password</h6>
                    </label>
                    <input
                        class="form-control"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
						onChange={handleOnChange}
                        placeholder="Confirm password"
                        required
                    />
                </div>
                <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                        Reset password
                    </button>
                </div>
            </form>
            <div className="row mb-4 px-3">
                <div className="col-xs-12 col-md-6">
                    <small className="font-weight-bold">
                        Remeber password? <a className="text-danger ">Login</a>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
