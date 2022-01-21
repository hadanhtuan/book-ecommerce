import React from 'react';

const RegisterForm = () => {
  return (
    <div className="col-lg-6">
        <div className="card2 card border-0 px-4 pb-4 mb-4">
            <h4>“A room without books is like a body without a soul.”</h4>
            <p>― Marcus Tullius Cicero</p>
        </div>
            <div className="row px-3 mb-4">
                <h2 className="mb-0 mr-4 mt-2">Do it now!</h2>
            </div>
            <div className="row px-3">
            <label className="mb-1">
                <h6 className="mb-0 text-sm">Email Address</h6>
            </label>
            <input
                className="mb-4"
                type="text"
                name="email"
                placeholder="Enter a valid email address"
                required
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
            />
            </div>
            <div className="row px-3 mt-3">
            <label className="mb-1">
                <h6 className="mb-0 text-sm">Confirm password</h6>
            </label>
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
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
                <label for="chk1" className="custom-control-label text-sm">
                Remember me
                </label>
            </div>
            <a href="#" className="ml-auto mb-0 text-sm mr-2">
                Forgot Password?
            </a>
            </div>
            <div className="row mb-3 px-3">
            <button type="submit" className="btn btn-blue text-center">
                Register
            </button>
            </div>
            <div className="row mb-4 px-3">
            <small className="font-weight-bold">
                Already have an account? <a className="text-danger ">Login</a>
            </small>
        </div>
    </div>
  );
};

export default RegisterForm;
