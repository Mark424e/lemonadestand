import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import '../output.css';

import { CartContext } from '../context/cart';
import Cart from './Cart';

function ProductList() {
    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemonade');

            const productsWithPrices = response.data.drinks.map(product => ({
                ...product,
                price: calculatePrice(product)
            }));
            setProducts(productsWithPrices);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const calculatePrice = (product) => {
        return (Math.random() * (5 - 1) + 1).toFixed(2); // Random price between $1 and $5
    };

    // Effect hook to fetch data from the API
    useEffect(() => {
        fetchData();
    }, []);
    
    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const { cartItems, addToCart } = useContext(CartContext)
    
    const toggle = () => {
        setShowModal(!showModal)
    }

    return (
        <div className='container mx-auto'>
            
            {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            onClick={toggle}
            >Cart ({cartItems.length})</button>}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
                {products.map((product) => (
                <div className='bg-white p-3 rounded relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transform hover:scale-105 drop-shadow-lg' key={product.idDrink}>
                    <div className='relative group'>
                        <img className='w-full h-[500px] object-cover rounded' src={product.strDrinkThumb} alt={product.strDrink} />
                        <button className='absolute inset-0 w-[100%] bg-black bg-opacity-0 text-opacity-0 rounded text-white group-hover:bg-opacity-50 group-hover:text-opacity-100 flex justify-center items-center' onClick={() => addToCart(product)}>
                        <p className="transition duration-300 transform group-hover:-translate-y-1">Add to Cart</p>
                        </button>
                    </div>
                    
                    <div className='py-5'>
                        <h3 className='font-bold text-center'>{product.strDrink}</h3>
                        <p className='text-center'>Price: ${product.price}</p>
                    </div>
                </div>
              ))}
          </div>
          <Cart showModal={showModal} toggle={toggle} />
        </div>
        
    );
}

export default ProductList;
