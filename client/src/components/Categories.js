import React from 'react';
import CategoryItem from './CategoryItem';
import "./css/Categories.css"

const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
      cat: "women"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
      cat: "women"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
      cat: "men"
    },
];

const Categories = () => {
  return (
        <section id="sidebar" className="col-xs-12 col-md-2">

            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Categories</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>
                    <div className="form-group">  <a for="artisan">Fiction</a> </div>
                    <div className="form-group">  <a for="breakfast">Nonfiction</a> </div>
                    <div className="form-group">  <a for="healthy">eBooks & NOOK</a> </div>
                    <div className="form-group">  <a for="healthy">Teens & YA</a> </div>
                    <div className="form-group">  <a for="healthy">Kids</a> </div>
                </form>
            </div>
            
        </section>
  );
};

export default Categories;
