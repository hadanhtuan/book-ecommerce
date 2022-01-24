import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import Navbar from "../../components/Navbar";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderBooks } from "./orderAction";


const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, message, error } = useSelector((state) => state.order)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('cartItems')))

  const handleOrder = async (e) => {
      if(!localStorage.getItem('accessToken')){
          history.push('/login')
      }

      const totalPrice = items.reduce((sum, {quantity, price}) => {
        return sum + (quantity*price)
      }, 0)
      const booksOrderList = items.map(item => {
        return { _id: item._id, quantity: item.quantity }
      })

      dispatch(orderBooks(booksOrderList, totalPrice))

     
      localStorage.setItem('cartItems', JSON.stringify([]))
      history.push('/');
        
  }

  console.log(isAuthenticated)

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
            <h4 className="heading">Giỏ Hàng</h4>
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
        {
          items.map((item) => (
            <CartItem item={item} setItems={setItems} key={item._id} />
          ))
        }
        
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="row">
                <div className="col-lg-3 radio-group">
                  <div className="row d-flex px-3 radio">
                    {" "}
                    <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" />
                    <p className="my-auto">Thẻ tín dụng</p>
                  </div>
                  <div className="row d-flex px-3 radio gray">
                    {" "}
                    <img className="pay" src="https://i.imgur.com/OdxcctP.jpg" />
                    <p className="my-auto">Thẻ ghi nợ</p>
                  </div>
                  <div className="row d-flex px-3 radio gray mb-3">
                    {" "}
                    <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" />
                    <p className="my-auto">PayPal</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row px-2">
                    <div className="form-group col-md-6">
                      {" "}
                      <label className="form-control-label">
                      Tên tài khoản
                      </label>{" "}
                      <input
                        type="text"
                        id="cname"
                        name="cname"
                        placeholder="Johnny Doe"
                      />{" "}
                    </div>
                    <div className="form-group col-md-6">
                      {" "}
                      <label className="form-control-label">
                      Số tài khoản
                      </label>{" "}
                      <input
                        type="text"
                        id="cnum"
                        name="cnum"
                        placeholder="1111 2222 3333 4444"
                      />{" "}
                    </div>
                  </div>
                  <div className="row px-2">
                    <div className="form-group col-md-6">
                      {" "}
                      <label className="form-control-label">
                        Ngày hết hạn
                      </label>{" "}
                      <input
                        type="text"
                        id="exp"
                        name="exp"
                        placeholder="MM/YYYY"
                      />{" "}
                    </div>
                    <div className="form-group col-md-6">
                      {" "}
                      <label className="form-control-label">CVV</label>{" "}
                      <input type="text" id="cvv" name="cvv" placeholder="***" />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-2">
                  <div className="row d-flex justify-content-between px-4">
                    <p className="mb-1 text-left">Tổng cộng</p>
                    <h6 className="mb-1 text-right">{
                      items.reduce((sum, {quantity, price}) => {
                          return sum + (quantity*price)
                      }, 0)
                    } đ</h6>
                  </div>
                  {/* <div className="row d-flex justify-content-between px-4">
                    <p className="mb-1 text-left">Shipping</p>
                    <h6 className="mb-1 text-right">$2.99</h6>
                  </div> */}
                  <div
                    className="row d-flex justify-content-between px-4"
                    id="tax"
                  >
                    {/* <p className="mb-1 text-left">Total (tax included)</p>
                    <h6 className="mb-1 text-right">$26.48</h6> */}
                  </div>{" "}
                  <button className="btn-block btn-blue" data-toggle="modal" data-target="#confirmOrdersCenter">
                    {" "}
                    <span>
                      {" "}
                      <span id="checkout">Thanh toán</span>{" "}
                      {/* <span id="check-amt">
                      {
                        items.reduce((sum, {quantity, price}) => {
                            return sum + (quantity*price)
                        }, 0)
                      } đ
                      </span>{" "} */}
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="confirmOrdersCenter" tabIndex="-1" role="dialog" aria-labelledby="confirmOrdersCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmOrdersLongTitle">Xác nhận mua hàng</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Bạn có thật sự muốn mua hàng
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Không</button>
              <button type="button" class="btn btn-primary" onClick={handleOrder} data-dismiss="modal">Đồng ý</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;