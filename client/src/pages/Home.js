import React,{useDebugValue, useEffect} from "react";
import Categories from "../components/cbook/Categories";
import Navbar from "../components/Navbar";
import { fetchAllBooks } from "../components/products/booksAction";
import Products from "../components/products/Products";
import Slider from "../components/Slider";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllBooks);
  }, []);

  return (
    <div>
      <Navbar />
      <Slider />
      <div className="row mt-4">
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Home;
