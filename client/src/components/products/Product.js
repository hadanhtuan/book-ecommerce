import React from "react";
import { useHistory } from "react-router-dom";

const Product = ({ item }) => {
  const history = useHistory();
  const handleClickDetail = (item) => {
    console.log("id", item.id);
    history.push(`/book/${item.id}`);
  };

  return (
    <div className="col-xs-12 col-md-6">
      <div className="product-content product-wrap clearfix">
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
                  <a
                    href="#"
                    onClick={() => handleClickDetail(item)}
                    className="btn btn-success"
                  >
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
