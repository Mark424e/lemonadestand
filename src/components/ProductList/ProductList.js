import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import CSS file

function ProductList() {
    // State to store the list of products
    const [products, setProducts] = useState([]);

    // Effect hook to fetch data from the API
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemonade');
            setProducts(response.data.drinks); // Assuming the API returns an array of drinks
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
      <div className="product-list-container"> {/* Apply container class */}
          <h2>Product List</h2>
          <ul>
              {products.map((product) => (
                  <li key={product.idDrink} className="product-item"> {/* Apply item class */}
                      <img src={product.strDrinkThumb} alt={product.strDrink} />
                      <div className="product-details"> {/* Apply details class */}
                          <h3>{product.strDrink}</h3>
                          <p className='product-desc'>{product.strInstructions}</p>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default ProductList;
