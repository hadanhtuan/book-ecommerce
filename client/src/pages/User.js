import React from "react";
import "./css/Cart.css";
import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-4 py-5 mx-auto w-90">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <h4 className="heading">Đã mua</h4>
          </div>
          <div className="col-7">
            <div className="row text-right">
              <div className="col-4">
                <h6 className="mt-2">Format</h6>
              </div>
              <div className="col-4">
                <h6 className="mt-2">Quantity</h6>
              </div>
              <div className="col-4">
                <h6 className="mt-2">Price</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center border-top">
          <div className="col-5">
            <div className="row d-flex">
              <div className="book">
                {" "}
                <img
                  src="https://i.imgur.com/2DsA49b.jpg"
                  className="book-img"
                />{" "}
              </div>
              <div className="my-auto flex-column d-flex pad-left">
                <h6 className="mob-text">Thinking, Fast and Slow</h6>
                <p className="mob-text">Daniel Kahneman</p>
              </div>
            </div>
          </div>
          <div className="my-auto col-7">
            <div className="row text-right">
              <div className="col-4">
                <p className="mob-text">Digital</p>
              </div>
              <div className="col-4">
                <div className="row d-flex justify-content-end px-3">
                  <p className="mb-0" id="cnt1">
                    1
                  </p>
                </div>
              </div>
              <div className="col-4">
                <h6 className="mob-text">$9.99</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center border-top">
          <div className="col-5">
            <div className="row d-flex">
              <div className="book">
                {" "}
                <img
                  src="https://i.imgur.com/Oj1iQUX.jpg"
                  className="book-img"
                />{" "}
              </div>
              <div className="my-auto flex-column d-flex pad-left">
                <h6 className="mob-text">
                  Homo Deus: A Brief
                  <br />
                  History of Tomorrow
                </h6>
                <p className="mob-text">Yuval Noah Harari</p>
              </div>
            </div>
          </div>
          <div className="my-auto col-7">
            <div className="row text-right">
              <div className="col-4">
                <p className="mob-text">Paperback</p>
              </div>
              <div className="col-4">
                <div className="row d-flex justify-content-end px-3">
                  <p className="mb-0" id="cnt2">
                    1
                  </p>      
                </div>
              </div>
              <div className="col-4">
                <h6 className="mob-text">$13.50</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="row d-flex flex-row-reverse">
                <div className="col-lg-4 mt-2">
                  <div className="row d-flex justify-content-between px-4">
                    <p className="mb-1 text-left">Subtotal</p>
                    <h6 className="mb-1 text-right">$23.49</h6>
                  </div>
                  <div className="row d-flex justify-content-between px-4">
                    <p className="mb-1 text-left">Shipping</p>
                    <h6 className="mb-1 text-right">$2.99</h6>
                  </div>
                  <div
                    className="row d-flex justify-content-between px-4"
                    id="tax"
                  >
                    <p className="mb-1 text-left">Total (tax included)</p>
                    <h6 className="mb-1 text-right">$26.48</h6>
                  </div>{" "}
                  <button className="btn-block btn-blue">
                    {" "}
                    <span>
                      {" "}
                      <span id="checkout">Checkout</span>{" "}
                      <span id="check-amt">$26.48</span>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
