import React from 'react';
import hero from '../images/lemonade.png';

function Hero() {
  return (
    <div className='relative h-screen'>
      <div className='container mx-auto'>
        <div className='absolute text-white bottom-44 z-[500]'>
          <h1 className="absolute bottom-52 text-[3rem] font-bold shadow-text">Quench that thirst at</h1>
          <h1 id='heroLogo' className='text-[10rem] gradient-shadow-text'>Lemonista</h1>
          <p className="text-lg text-black">Quench your thirst with our refreshing lemonade!</p>
        </div>
      </div>
      <img className=' w-[100vw] h-[100vh] object-cover inset-0' src={hero} alt="Logo" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100"></div>
    </div>
  )
}

export default Hero;