import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
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
