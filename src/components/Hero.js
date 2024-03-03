import React, { useState, useEffect } from 'react';
import hero from '../images/lemonade.png';
import logo from '../images/logo-rgb.svg'

function Hero() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This effect runs only once after the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div className='relative h-screen'>
      <div className='relative container mx-auto'>
        <div className={`absolute mx-auto left-0 right-0 lg:left-auto lg:right-auto text-white top-[30rem] z-[500] fade-container ${isVisible ? 'fade-visible' : ''}`}>
          <h1 className="text-3xl lg:text-[3rem] font-bold shadow-text text-center lg:text-start">Quench that thirst at</h1>
          <img className='drop-shadow-lg w-[60rem] h-auto' src={logo} alt='logo'/>    
          <div className='mt-16 text-lg text-gray-600 flex flex-col gap-4 text-justify'>
            <p>
              Indulge in the essence of summer with our handcrafted lemonades, freshly squeezed and bursting with vibrant flavors. At our lemonade stand, we blend the finest ingredients to create the perfect balance of sweet and tangy refreshment.
            </p>
            <p>
              Experience the zest of life in every sip as you explore our delightful range of lemonade flavors, from classic lemon to tantalizing twists like strawberry lemonade and mint-infused lemonade.
            </p>
            <p>
              Whether you're lounging poolside, hosting a backyard barbecue, or simply craving a cool, rejuvenating drink, our lemonades are the ultimate thirst-quenching companion for any occasion.
            </p>
            <p>
              Join us in celebrating the simple joy of lemonade and treat yourself to a taste of sunshine today!
            </p>
            <p>
              Refresh. Rejuvenate. Enjoy!
            </p>
          </div>
        </div>
      </div>
      <img className=' w-[100vw] h-[100vh] object-cover inset-0' src={hero} alt="Logo" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
    </div>
  )
}

export default Hero;