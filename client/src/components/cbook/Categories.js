import React, { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Categories.css";

const Categories = () => {
    const [booksFilter, setBooksFilter] = useState([]);
    const dispatch = useDispatch();



  return (
        <section id="sidebar" className="col-xs-12 col-md-2 mt-4">
            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Thể loại</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>           
                    <div className="form-group">  <Link to='/filter/Comic' >Comic</Link> </div>
                    <div className="form-group">  <Link to='/filter/Nonfiction' >Nonfiction</Link> </div>
                    <div className="form-group">  <Link to='/filter/Thriller' >Thriller</Link> </div>
                    <div className="form-group">  <Link to='/filter/Novel' >Novel</Link> </div>
                    <div className="form-group">  <Link to='/filter/Science' >Science</Link> </div>
                    <div className="form-group">  <Link to='/filter/Detective' >Detective</Link> </div>
                </form>
            </div>
            
        </section>
  );
};

export default Categories;
