import React from 'react';
import { useState } from 'react';

const UserItem = ({item}) => {

  return (
    <div className="row d-flex justify-content-center border-top">
        <div className="col-5">
        <div className="row d-flex">
            <div className="book">
            {" "}
            <img
                src={item.book.coverImage}
                className="book-img"
            />{" "}
            </div>
            <div className="my-auto flex-column d-flex pad-left">
            <h6 className="mob-text">{item.book.title}</h6>
            </div>
        </div>
        </div>
        <div className="my-auto col-7">
        <div className="row text-right">
            <div className="col-4">
            <p className="mob-text">{item.book.category}</p>
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
                    <p className="btn mb-0" id="cnt2">
                        {item.quantity}
                    </p>
            </div>
            </div>
                <div className="col-4">
                <h6 className="mob-text">{item.book.price*item.quantity} đ</h6>
            </div>
        </div>
        </div>
    </div>
  );
};

export default UserItem;
