import React from 'react';
import hero from '../images/lemonade.png';

function Hero() {
  return (
    <div>
      <div className='relative h-screen'>
        <img className=' w-[100vw] h-[100vh] object-cover inset-0' src={hero} alt="Logo" />;
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
      </div>
    </div>
  )
}

export default Hero;