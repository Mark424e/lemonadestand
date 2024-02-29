import React, { useContext, useState } from 'react';
import '../output.css';
import { CartContext } from '../context/cart';



function Header() {

  const [showModal, setShowModal] = useState(false)
  const { cartItems } = useContext(CartContext)
  
  const toggle = () => {
      setShowModal(!showModal)
  }

  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-10'>
      <div className='container mx-auto py-8'>
        <div className="flex justify-between items-center">
          <a className='uppercase font-bold' href='index.js'>Lemonade Stand</a>
          <ul className='flex items-center gap-5'>
            <li className=''><a href='./index.js'>About</a></li>
            <li className='nav-item'><a href='index.js'>Contact</a></li>
            <li>
              {!showModal && <button className='px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border'
              onClick={toggle}
              >Cart ({cartItems.length})</button>}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
