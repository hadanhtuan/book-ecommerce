import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product";
import "../css/Products.css";

import { fetchAllBooks } from "./booksAction";



const Products = () => {
  const dispatch = useDispatch();

  const { isLoading, error, message, books } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);



  return (

      <div className="col-xs-12 col-md-10">
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
        
        <div className="container">
          <div className="row">
            {books.map((item, id) => (
              <Product item={item} key={`${id}`} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Products;