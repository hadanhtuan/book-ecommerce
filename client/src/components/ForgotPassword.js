import React from 'react';

const ForgetPassword = () => {
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
        <div className="row mb-3 px-3">
        <button type="submit" className="btn btn-blue text-center">
            Send email
        </button>
        </div>
        <div className="row mb-4 px-3">
        <small className="font-weight-bold">
            Remeber password? <a className="text-danger ">Login</a>
        </small>
        </div>
    </div>
  );
};

export default ForgetPassword;
