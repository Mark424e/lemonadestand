import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import '../output.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartContext } from '../context/cart';
import Cart from './Cart';

function ProductList({ showModal, toggleModal }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon');

                const productsWithPrices = response.data.drinks.map(product => ({
                    ...product,
                    price: generateRandomPrice(),
                }));
                setProducts(productsWithPrices);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    const generateRandomPrice = () => {
        const randomDollar = Math.floor(Math.random() * (19 - 8 + 1)) + 8;
        const randomCents = Math.random() < 0.5 ? 49 : 99;
        return `${randomDollar}.${randomCents}`;
    };

    const { addToCart } = useContext(CartContext)
    const [products, setProducts] = useState([])

    const handleAddToCart = (product) => {
        addToCart({ ...product, id: product.idDrink });
        toast.success('Item added to cart', {
            position: 'bottom-right',
        });  
    };
    
    const sortByLowestPrice = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };
    
    const sortByHighestPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    };

    const sortByName = () => {
        const sortedProducts = [...products].sort((a, b) => a.strDrink.localeCompare(b.strDrink));
        setProducts(sortedProducts);
    };

    return (
        <div id="productList" className='container mx-auto mt-[10rem] lg:mt-36'>
            
            <div className="flex justify-start my-4">
                <label>
                    <select>
                    <option className="mx-2" onClick={sortByName}>Sort by Name (A - Z)</option>
                    <option className="mx-2" onClick={sortByLowestPrice}>Sort by Price (Low - High)</option>
                    <option className="mx-2" onClick={sortByHighestPrice}>Sort by Price (High - Low)</option>
                    </select>
                </label>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
                {products.map((product) => (
                <div className='bg-white rounded relative transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 drop-shadow-lg' key={product.idDrink}>
                    <div className='relative group'>
                        <img className='w-full h-[500px] object-cover rounded' src={product.strDrinkThumb} alt={product.strDrink} />
                        <button className='absolute inset-0 w-[100%] bg-black bg-opacity-0 text-opacity-0 rounded text-white group-hover:bg-opacity-50 group-hover:text-opacity-100 flex justify-center items-center' onClick={() => handleAddToCart(product)}>
                            <div>
                                <p className="transition duration-300 transform group-hover:-translate-y-1 font-bold animate-bounce absolute left-0 right-0">Add to Cart</p>
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
