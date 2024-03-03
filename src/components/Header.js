import React, { useContext, useState, useEffect } from 'react';
import '../output.css';

import { CartContext } from '../context/cart';
import BurgerMenu from './BurgerMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo-grayscale.svg'

function Header({ toggleModal }) {
  const {  getTotalItems } = useContext(CartContext)
  
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [blur, setBlur] = useState('');
  const [shadow, setShadow] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Change background color after scrolling below a certain amount
      if (scrollPosition > 500) {
        setBgColor('bg-gradient-to-tr from-primary/70 to-cyan-200/70');
        setBlur('backdrop-blur');
        setShadow('shadow-lg');
      } else {
        setBgColor('bg-transparent');
        setBlur('');
        setShadow('');
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  
  return (
    <header id='header' className={`fixed top-0 mx-auto right-0 left-0 w-[95vw] rounded-full text-white m-5 font-bold ${bgColor} ${blur} ${shadow} transform transition-colors duration-300 ease-in-out z-[1000]`}>
      <div className='container mx-auto py-8 px-10 lg:px-0'>
        <div className="flex justify-between items-center">
          <a className='transform duration-300 ease-in-out hover:scale-110' href='index.js'>
            <img className='w-28 h-auto' src={logo} alt='logo'/>    
          </a>

          {/* Burger menu component */}
          <BurgerMenu toggleModal={toggleModal} getTotalItems={getTotalItems} />

          <ul className='lg:flex items-center gap-5 hidden'>
            <li className='transform duration-300 ease-in-out hover:scale-110'><a className='outline outline-1 outline-white  py-3 px-4 rounded-full' href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className='transform duration-300 ease-in-out hover:scale-110'><a className='outline outline-1 outline-white  py-3 px-4 rounded-full' href='https://github.com/Mark424e/lemonadestand' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
            <li className='transform duration-300 ease-in-out hover:scale-110'><a className='bg-gray-200/10 transform duration-300 ease-in-out hover:bg-white hover:text-primary  py-3 px-4 rounded-full' href='./index.js'>About</a></li>
            <li className='transform duration-300 ease-in-out hover:scale-110'><a className='bg-gray-200/10 transform duration-300 ease-in-out hover:bg-white hover:text-primary py-3 px-4 rounded-full' href='index.js'>Contact</a></li>
            <li className='transform duration-300 ease-in-out hover:scale-110'>
              <button onClick={toggleModal}>
                <FontAwesomeIcon icon={faShoppingCart} /> ({getTotalItems()})
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
