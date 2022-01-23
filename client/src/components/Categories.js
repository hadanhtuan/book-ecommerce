import React from 'react';
import CategoryItem from './CategoryItem';
import "./css/Categories.css"

const Categories = () => {
  return (
        <section id="sidebar" className="col-xs-12 col-md-2 mt-4">
            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Categories</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>           
                    <div className="form-group">  <a >Comic</a> </div>
                    <div className="form-group">  <a >Nonfiction</a> </div>
                    <div className="form-group">  <a >Dictionary</a> </div>
                    <div className="form-group">  <a >Novel</a> </div>
                    <div className="form-group">  <a >Science fiction</a> </div>
                    <div className="form-group">  <a >Thriller</a> </div>
                </form>
            </div>
            
        </section>
  );
};

export default Categories;
