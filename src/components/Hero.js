import React from 'react';
import hero from '../images/lemonade.png';

function Hero() {
  return (
    <div className='relative h-screen'>
      <div className='container mx-auto'>
        <div className='absolute left-0 right-0 lg:left-auto lg:right-auto text-white text-center lg:text-start bottom-44 z-[500]'>
          <h1 className="text-[3rem] font-bold shadow-text">Quench that thirst at</h1>
          <h1 id='heroLogo' className='text-[5rem] lg:text-[10rem] gradient-shadow-text'>Lemonista</h1>
          <p className="text-lg text-gray-700">Indulge in the essence of summer with our handcrafted lemonades, freshly squeezed and bursting with vibrant flavors. At our lemonade stand, we blend the finest ingredients to create the perfect balance of sweet and tangy refreshment.</p>
        </div>
      </div>
      <img className=' w-[100vw] h-[100vh] object-cover inset-0' src={hero} alt="Logo" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
    </div>
  )
}

export default Hero;