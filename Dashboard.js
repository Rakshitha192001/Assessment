import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import './Dashboard.css'
import { setSortCriteria,setCategoryFilter } from "../redux/actions";



const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const [products, setProducts] = useState([]);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const dispatch = useDispatch();
  const sortingCriteria = useSelector(state => state.sortingCriteria);
  const data = useSelector(state => state.data);
  
  const filteredData = data
    //  .filter(item => item.category === selectedCategory)
    //.sort((a, b) => a.Price - b.Price);

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const handleSortChange = () => {
    dispatch(setSortCriteria());
  };
  


  return (
    <>
    <div>

      <h1>`Hello abcd`</h1>

        <input type='dropdown'></input>

         <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} />
        <button>Search</button>
        {categories.map((category)=> (
            <option key={category} value={category}>{category}</option>
        ))} 
        <button>Search</button>
         <button onClick={handleSortChange}>Sort by price</button>  

        <ul>
        {filteredData.map((product) => (
         
          <li key={product.id}>
            {product.name} - Rate: {product.price}
          </li>
        
        ))
        }
      
      </ul> 
      
      
      {products.map((product,index) => (
        <span key={index} className='card'>
          <p>Title:{product.title}</p>
          <p>Price:{product.price}</p>
          <img src={product.image} />
      
           {/* <button>Add to cart</button> */}
       
        </span>
         ))}
        </div>  
    </>

    
  );
};

export default Dashboard;


