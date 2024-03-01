import React from 'react';
import hero from '../images/lemonade.png';

function Hero() {
  return (
    <div className='mt-[88px]'>
      <div>
        <img className=' w-[100vw] h-[calc(100vh-88px)] object-cover' src={hero} alt="Logo" />;
      </div>
    </div>
  )
}

export default Hero;