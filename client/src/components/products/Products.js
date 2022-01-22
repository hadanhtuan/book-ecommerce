import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "../css/Products.css";

import { fetchAllBooks } from "./booksAction";
import {
  bookRemainingSelector,
  booksSelector,
} from "../filters/FilterSelector";

const Products = () => {
  const dispatch = useDispatch();

  // const { isLoading, error, message, books } = useSelector(
  //   (state) => state.books
  // );

  const { isLoading, error, message } = useSelector((state) => state.books);
  const books = useSelector(booksSelector);
  // const books = [
  //   {
  //     id: uuidv4(),
  //     title: "MEO MEO MEO MEO MEO",
  //     price: "300.000d",
  //     category: "aaaaaaaaaaaa",
  //     description: "Nguyen con meo",
  //     coverImage:
  //       "https://www.dtv-ebook.com/images/cover_1/chuyen-con-meo-va-con-chuot-ban-than-cua-no-luis-sepulveda.jpg",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "MEO MEO MEO MEO MEO",
  //     price: "300.000d",
  //     category: "aaaaaaaaaaaa",
  //     description: "Nguyen con meo",
  //     coverImage:
  //       "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "MEO MEO MEO MEO MEO",
  //     price: "300.000d",
  //     category: "aaaaaaaaaaaa",
  //     description: "Nguyen con meo",
  //     coverImage:
  //       "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
  //   },
  // ];

  // const books = useSelector(bookRemainingSelector);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <div className="col-xs-12 col-md-10">
      {message && (
        <div
          className={`alert alert-${error ? "danger" : "success"}`}
          role="alert"
        >
          {message}
        </div>
      )}

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
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
