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
        <div className="product-list-container">
            <div className='product-list-rows'>
                {products.map((product) => (
                <div key={product.idDrink} className="product-item">
                    <img className='product-img' src={product.strDrinkThumb} alt={product.strDrink} />
                    <button class="overlay-button">
                        <p class="button-text">Add to Cart!</p>
                    </button>
                    <div className="product-details">
                        <h3 className='product-title'>{product.strDrink}</h3>
                    </div>
                </div>
              ))}
          </div>
      </div>
  );
}

export default ProductList;
