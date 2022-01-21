import React from "react";
import Product from "./Product";
import "./css/Products.css";
import Categories from "./Categories";

const popularProducts = [
  {
    img: 'https://www.dtv-ebook.com/images/cover_1/chuyen-con-meo-va-con-chuot-ban-than-cua-no-luis-sepulveda.jpg'
  },
  {
    img: 'https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2'
  },
  {
    img: 'https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2'
  }
]

const Products = () => {
  return (
    <div className="col-xs-12 col-md-10">
      <div className="container">
        <div className="row">
          {popularProducts.map((item, id) => (
            <Product item={item} key={`${id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;