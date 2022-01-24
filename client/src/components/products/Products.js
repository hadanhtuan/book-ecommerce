import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product";
import "../css/Products.css";

import { fetchAllBooks } from "./booksAction";
import { searchBooks } from "./booksSlice";


const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, error, message, searchBooksList, cbooks } = useSelector(
    (state) => state.books
  );


  return (
      <div id="products" className="col-xs-12 col-md-10">
          {message && error && (
                <div className={`alert alert-${error ? 'danger' : 'success'}`} role="alert">
                    {message}
                </div>
            )}
            
            {isLoading && (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )}
        
        <div className="container">
            <h1 className="mb-2">Danh sách các sách đang bán</h1>
            <hr  className="mb-2"/>
          <div className="row">
            {searchBooksList.length ? (searchBooksList.map((item) => (
                 <Product item={item} id={item._id} key={`${item._id}`} />
            )
              // <Product item={item} id={item._id} key={`${id}`} />
            )) : <div></div>}
          </div>
        </div>
      </div>
  );
};

export default Products;