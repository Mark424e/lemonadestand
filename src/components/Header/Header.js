import React from 'react';
import './Header.css'; // Import CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header id='header'>
      <div className='header-container'>
        <a id='logo' href='index.js'>Lemonade Stand</a>
        <ul className='nav-list'>
          <li className='nav-item'><a href='./index.js'>About</a></li>
          <li className='nav-item'><a href='index.js'>Contact</a></li>
          <li><a id='checkout' href='index.js'><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
