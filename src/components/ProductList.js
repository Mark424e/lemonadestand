import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import '../output.css';

import { CartContext } from '../context/cart';
import Cart from './Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ProductList() {
    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemonade');

            const productsWithPrices = response.data.drinks.map(product => ({
                ...product,
                price: 4.99
            }));
            setProducts(productsWithPrices);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Effect hook to fetch data from the API
    useEffect(() => {
        fetchData();
    }, []);
    
    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const { addToCart, getTotalItems } = useContext(CartContext)
    
    const handleAddToCart = (product) => {
        addToCart({ ...product, id: product.idDrink }); // Include the ID with the product
    };

    const toggle = () => {
        setShowModal(!showModal)
    }
    
    return (
        <div className='container mx-auto mt-36'>

            {!showModal && <button className='fixed z-[1000] right-12 bottom-56 px-4 py-2 h-24 w-24 bg-purple-500 shadow-lg  text-white text-xl font-bold uppercase rounded-full transform duration-300 ease-in-out hover:bg-purple-600 hover:scale-110'
            onClick={toggle}
            ><FontAwesomeIcon icon={faShoppingCart} /> ({getTotalItems()})</button>}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'>
                {products.map((product) => (
                <div className='bg-white rounded relative transition duration-300 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transform hover:scale-105 drop-shadow-lg' key={product.idDrink}>
                    <div className='relative group'>
                        <img className='w-full h-[500px] object-cover rounded' src={product.strDrinkThumb} alt={product.strDrink} />
                        <button className='absolute inset-0 w-[100%] bg-black bg-opacity-0 text-opacity-0 rounded text-white group-hover:bg-opacity-50 group-hover:text-opacity-100 flex justify-center items-center' onClick={() => handleAddToCart(product)}>
                            <div>
                                <p className='px-3'>{product.strInstructions}</p>
                                <p className="transition duration-300 transform group-hover:-translate-y-1 font-bold animate-bounce absolute left-0 right-0 bottom-4">Add to Cart</p>
                            </div>
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
