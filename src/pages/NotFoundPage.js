import React from 'react';
import logo from '../images/logo-grayscale.svg'
import Cart from '../components/Cart';

export const NotFoundPage = ({ showModal, toggleModal }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-primary text-white">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
          <img className='my-8' src={logo} alt='logo'/>    
          <p className="text-sm mt-4">Return to <a href="/" className="underline">Home</a></p>
        </div>
      </div>
      <Cart showModal={showModal} toggle={toggleModal} />
    </>
  );
};