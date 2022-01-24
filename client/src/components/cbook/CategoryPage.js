import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "../css/Products.css";
import CategoryItem from './CategoryItem';
import { useParams } from "react-router-dom";
import Navbar from '../Navbar';


import { fetchCBooks } from "./cbookAction";

const CategoryPage = ({item}) => {
  const { category } = useParams()

  const { isLoading , error, message, cbooks } = useSelector(state => state.cbooks)

  const dispatch = useDispatch();

  
  
  useEffect(() => {
    dispatch(fetchCBooks(category))
  }, [])

  return (
    <div>
            <Navbar />
              
            <div id="products" className="col-xs-12 col-md-10">
                {message && (
                  <div className={`alert alert-${error ? 'danger' : 'success'}`} role="alert">
                    {message}
                      </div>
                  )}
                  
                  {isLoading && (
                    <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                      </div>
                  )}
              <h1>{`${category}`}</h1>
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
                <div className="row">
                  {cbooks.length ? (cbooks.map((item) => (
                      <CategoryItem item={item} id={item._id} key={`${item._id}`} />
                  ))) : <div></div>}
                </div>
              </div>
            </div>
    </div>
  );
};

export default CategoryPage;
