import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
  return (
    <div>
        <Link to={`products/${item.cat}`}>
          <img src={item.img} />
          <div>
              <h1>{item.title}</h1>
              <button>SHOW NOW</button>
          </div>
        
        </Link>
    </div>
  );
};

export default CategoryItem;
