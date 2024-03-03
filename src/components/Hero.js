import React, { useState, useEffect } from 'react';
import hero from '../images/lemonade.png';
import logo from '../images/logo-rgb.svg'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToProductList = () => {
    const productListElement = document.getElementById('productList');
    if (productListElement) {
      productListElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative h-screen cursor-default'>
      <div className='relative container mx-auto'>
        <div className={`absolute mx-auto left-0 right-0 xl:left-auto xl:right-auto text-white top-[46rem] xl:top-[19rem] z-[500] fade-container ${isVisible ? 'fade-visible' : ''}`}>
          <h1 className="text-3xl lg:text-[2.5rem] font-bold drop-shadow-md text-center xl:text-start">Quench your thirst at</h1>
          <img className='my-10 drop-shadow-lg mx-auto xl:mx-0 left-0 right-0 xl:left-auto xl:right-auto w-[40%] h-auto' src={logo} alt='logo'/>    
          <div className='text-lg xl:w-[40%] text-gray-800 flex flex-col gap-4 text-justify'>
            <p>
              Experience the zest of life in every sip as you explore our delightful range of lemonade flavors, from classic lemon to tantalizing twists like strawberry lemonade and alchohol-infused lemonade.
            </p>
            <p className='font-bold'>
              Refresh. Rejuvenate. Enjoy!
            </p>
          </div>
          <div className='animate-bounce mt-8 hidden xl:block'>
            <button className="bg-gradient-to-tr from-orange-400 to-yellow-500 text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out" onClick={handleScrollToProductList}>
              <FontAwesomeIcon className='text-4xl' icon={faArrowDown} />
            </button>
          </div>
        </div>
      </div>
      <img className=' w-[100vw] h-[100vh] object-cover inset-0' src={hero} alt="Logo" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
    </div>
  )
}

export default Hero;