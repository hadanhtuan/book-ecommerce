import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";

import "./css/Categories.css";
import { fetchFilteredBooks } from "./products/booksSlice";

const Categories = () => {
  const [booksFilter, setBooksFilter] = useState([]);
  const baseUrl = "http://localhost:3000/api";
  const dispatch = useDispatch();

  const handleClickFilter = async (e) => {
    try {
      const category = e.target.innerText;
      const res = await axios.get(`${baseUrl}/book/filter/${category}`);

      if (res.data.error === false) {
        setBooksFilter(res.data.books);
        console.log("success");
      } else {
        setBooksFilter([]);
        console.log("failed");
      }
    } catch (error) {
      //   console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchFilteredBooks(booksFilter));
  }, [booksFilter]);

  //   }, [booksFilter]);

  const { books } = useSelector((state) => state.books);
  return (
    <section id="sidebar" className="col-xs-12 col-md-2 mt-4">
      <div className="py-2 border-bottom ml-3">
        <h6 className="font-weight-bold">Categories</h6>
        <div id="orange">
          <span className="fa fa-minus"></span>
        </div>
        <form>
          <div onClick={handleClickFilter} className="form-group  ">
            <a>Comic</a>
          </div>
          <div onClick={handleClickFilter} className="form-group">
            <a>Nonfiction</a>
          </div>
          <div onClick={handleClickFilter} className="form-group">
            <a>Dictionary</a>
          </div>
          <div onClick={handleClickFilter} className="form-group">
            <a>Novel</a>
          </div>
          <div onClick={handleClickFilter} className="form-group">
            <a>Science fiction</a>
          </div>
          <div onClick={handleClickFilter} className="form-group">
            <a>Thriller</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Categories;
