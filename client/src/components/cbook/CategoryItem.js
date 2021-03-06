import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CategoryItem = ({ item, id }) => {

  
  const history = useHistory();

  const [itemSelected, setItemSelected] = useState(item)
  
  const handleAddToCart = () => {

        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
      
        var cartItem = cartItems.find(cartItem => cartItem._id === itemSelected._id);
      
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          cartItems.push({...itemSelected, 'quantity': 1})
        }
      
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
  }

  const [dataBook, setDataBook] = useState("");

  const [idBook, setIdBook] = useState(id);

  const handleClickBook = async () => {
    const baseUrl = "http://localhost:3000/api";
    const res = await axios.get(`${baseUrl}/book/${idBook}`);
    console.log(res.data.book);
    if (res.data.error === false) {
      history.push({
        pathname: `/book/${idBook}`,
        state: { inforBook: res.data.book },
      });
    }
  };

  return (
      <div className="col-xs-12 col-md-6">
        <div className="product-content product-wrap clearfix cursor-pointer">
          <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image w-4"> 
                  <img   cursor-pointer onClick={handleClickBook} src={item.coverImage} alt="194x228" width={194} height={228} className="img-responsive card-img-top"/>                  
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                    <h5 className="name">
                      <Link to="#"  cursor-pointer onClick={handleClickBook}>
                        {item.title} <span cursor-pointer onClick={handleClickBook} >{item.category}</span >
                      </Link>
                    </h5>
                    <p className="price-container">
                      <span>{item.price} ??</span>
                    </p>
                    <span className="tag1"></span> 
                </div>
                
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12"> 
                      <button onClick={() => {setItemSelected(item); handleAddToCart()}} className="btn btn-success">Th??m v??o gi??? h??ng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>      
  );
};

export default CategoryItem;