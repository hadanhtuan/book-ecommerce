import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
const Product = ({ item, id }) => {
  const history = useHistory();
  const [dataBook, setDataBook] = useState("");
  const [idBook, setIdBook] = useState(id);
  const handleClickBook = async () => {
    const baseUrl = "http://localhost:3000/api";
    const res = await axios.get(`${baseUrl}/book/${idBook}`);
    console.log(res.data.book);
    if (res.data.error === false) {
      history.push({
        pathname: `/book/${idBook}`,
        state: { inforBook: res.data.book },
      });
    }
  };
  return (
    <div className="col-xs-12 col-md-6">
      <div
        className="product-content product-wrap clearfix cursor-pointer"
        onClick={handleClickBook}
      >
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="product-image w-4">
              <img
                src={item.coverImage}
                alt="194x228"
                className="img-responsive card-img-top"
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="product-deatil">
              <h5 className="name">
                <a href="#">
                  {item.title} <span>{item.category}</span>
                </a>
              </h5>
              <p className="price-container">
                <span>{item.price}đ</span>
              </p>
              <span className="tag1"></span>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="product-info smart-form">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <a href="#" className="btn btn-success">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
