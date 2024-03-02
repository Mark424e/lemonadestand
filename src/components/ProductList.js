import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import '../output.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from '../context/cart';
import Cart from './Cart';

function ProductList({ showModal, toggleModal }) {
    // Function to fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon');

                const productsWithPrices = response.data.drinks.map(product => ({
                    ...product,
                    price: 4.99
                }));
                setProducts(productsWithPrices);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    const { addToCart } = useContext(CartContext)
    const [products, setProducts] = useState([])
    
    const handleAddToCart = (product) => {
        addToCart({ ...product, id: product.idDrink }); // Include the ID with the product
        toast.success('Item added to cart', {
            position: 'bottom-right',
        }); // Trigger a success toast
        
    };

    return (
        <div className='container mx-auto'>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
                {products.map((product) => (
                <div className='bg-white rounded relative transition duration-300 ease-in-out hover:bg-gradient-to-tr from-primary to-cyan-200 hover:text-white transform hover:scale-105 drop-shadow-lg' key={product.idDrink}>
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

          <Cart showModal={showModal} toggle={toggleModal} />
        </div>
        
    );
}

export default ProductList;
