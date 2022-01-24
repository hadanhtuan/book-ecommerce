import React from 'react';

const CartItem = ({item, setItems}) => {

    const increseQuantity = () => {
        var cartItems = JSON.parse(localStorage.getItem('cartItems'))

        var cartItem = cartItems.find(thatItem => thatItem._id === item._id)

        cartItem.quantity += 1

        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        setItems(JSON.parse(localStorage.getItem('cartItems')))
    }


    const decreseQuantity = () => {
        var cartItems = JSON.parse(localStorage.getItem('cartItems'))

        var cartItem = cartItems.find(thatItem => thatItem._id === item._id)
        if(cartItem.quantity > 0){
            cartItem.quantity -= 1
        }

        if(cartItem.quantity == 0) {
            cartItems = cartItems.filter((item) => (
                item._id !== cartItem._id
            ))
        }
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        setItems(JSON.parse(localStorage.getItem('cartItems')))

    }

  return (
    <div className="row d-flex justify-content-center border-top">
        <div className="col-5">
        <div className="row d-flex">
            <div className="book">
            {" "}
            <img
                src={`${item.coverImage}`}
                className="book-img"
            />{" "}
            </div>
            <div className="my-auto flex-column d-flex pad-left">
            <h6 className="mob-text">{item.title}</h6>
            <p className="mob-text">Daniel Kahneman</p>
            </div>
        </div>
        </div>
        <div className="my-auto col-7">
        <div className="row text-right">
            <div className="col-4">
            <p className="mob-text">{item.category}</p>
            </div>
            <div className="col-4">
            <div className="row d-flex justify-content-end px-3">
                {/*<p className="mb-0" id="cnt1">
                1
                </p>
                <div className="d-flex flex-column plus-minus">
                {" "}
                <span className="vsm-text plus">+</span>{" "}
                <span className="vsm-text minus">-</span>{" "}
                </div>
                */}
                <button className=" btn " onClick={decreseQuantity}><i className="fa fa-minus"></i></button>
                    <p className="btn mb-0" id="cnt2">
                        {item.quantity}
                    </p>
                <button className="btn " onClick={increseQuantity}><i className="fa fa-plus"></i></button>
            </div>
            </div>
            <div className="col-4">
            <h6 className="mob-text">{item.price*item.quantity} đ</h6>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CartItem;
