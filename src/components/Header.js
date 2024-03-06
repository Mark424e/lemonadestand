import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { CartContext } from '../context/cart';
import BurgerMenu from './BurgerMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo-grayscale.svg'

const Header = ({ toggleModal }) => {
  const {  getTotalItems } = useContext(CartContext)
  
  return (
    <>
      <header id='header' className={`fixed top-0 mx-auto right-0 left-0 w-[95vw] rounded-full text-white m-5 font-bold bg-cyan-800/50 backdrop-blur shadow-lg transform transition-colors duration-300 ease-in-out z-[1000]`}>
        <div className='container mx-auto py-8 px-10 lg:px-0'>
          <div className="flex justify-between items-center">
            <Link to="/" className='transform duration-300 ease-in-out hover:scale-110'>
              <img className='w-28 h-auto' src={logo} alt='logo'/>    
            </Link>

            <BurgerMenu toggleModal={toggleModal} getTotalItems={getTotalItems} />

            <ul className='lg:flex items-center gap-5 hidden'>
              <li className='transform duration-300 ease-in-out hover:scale-110'><a className='outline outline-1 outline-white  py-3 px-4 rounded-full' href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className='transform duration-300 ease-in-out hover:scale-110'><a className='outline outline-1 outline-white  py-3 px-4 rounded-full' href='https://github.com/Mark424e/lemonadestand' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
              <li className='transform duration-300 ease-in-out hover:scale-110'>
                <Link to="*" className='bg-gray-200/10 transform duration-300 ease-in-out hover:bg-white hover:text-primary  py-3 px-4 rounded-full'>
                  About
                </Link>
              </li>
              <li className='transform duration-300 ease-in-out hover:scale-110'>
              <Link to="*" className='bg-gray-200/10 transform duration-300 ease-in-out hover:bg-white hover:text-primary  py-3 px-4 rounded-full'>
                  Contact
                </Link>
              </li>
              <li className='transform duration-300 ease-in-out hover:scale-110'>
                <button onClick={toggleModal}>
                  <FontAwesomeIcon icon={faShoppingCart} /> ({getTotalItems()})
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
