import React,{useEffect, useState} from "react";
import "../css/Cart.css";
import Navbar from "../../components/Navbar";
import { getUserOrdered } from "../../pages/user-ordered/orderedAction"
import { useDispatch, useSelector } from "react-redux";
import UserItem from "./UserItem"


const User = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserOrdered())
  }, [])
  const { isLoading, error, message, ordered, totalPrice } = useSelector((state) => state.ordered)
  
  
  return (
    <div>
      <Navbar />
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
        
      <div className="container px-4 py-5 mx-auto w-90">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <h4 className="heading">Đã mua</h4>
          </div>
          <div className="col-7">
            <div className="row text-right">
              <div className="col-4">
                <h6 className="mt-2">Loại sách</h6>
              </div>
              <div className="col-4">
                <h6 className="mt-2">Số lượng</h6>
              </div>
              <div className="col-4">
                <h6 className="mt-2">Giá tiền</h6>
              </div>
            </div>
          </div>
        </div>
        { ordered &&
          (ordered.map((item) => (
            <UserItem item={item} key={item._id} />
          )))
        }
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="row d-flex flex-row-reverse">
                <div className="col-lg-4 mt-2">
                  
                  <div
                    className="row d-flex justify-content-between px-4"
                    id="tax"
                  >
                    <p className="mb-1 text-left">Tổng cộng</p>
                    <h6 className="mb-1 text-right">{totalPrice} đ</h6>
                  </div>{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
