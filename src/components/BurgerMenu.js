import React, { useState } from 'react';
import '../output.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function BurgerMenu({ toggleModal, getTotalItems }) {
  // State to manage the visibility of the burger menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the burger menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center gap-5 lg:hidden relative">
      <li className='list-none'>
        <button onClick={toggleModal}>
          <FontAwesomeIcon icon={faShoppingCart} /> ({getTotalItems()})
        </button>
      </li>
      <div className='w-[16px] flex justify-end'>
        <FontAwesomeIcon className='cursor-pointer' icon={showMenu ? faTimes : faBars} onClick={toggleMenu} />
      </div>

      {showMenu && (
        <div className="burger-menu absolute right-0 top-10 text-primary bg-gray-100 p-5 rounded w-40">
          <ul className='flex flex-col items-end gap-5 font-bold'>

            <li><a href='./index.js'>About</a></li>
            <li><a href='index.js'>Contact</a></li>
            <ul className='flex gap-3 text-2xl'>
              <li><a href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href='https://github.com/Mark424e/lemonadestand' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
