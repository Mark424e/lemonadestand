import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../context/cart'

import '../output.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Cart ({showModal, toggle}) {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  return (
    showModal && (
      <div className="flex-col flex items-center fixed bottom-0 left-0 w-full h-3/4 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur p-10 text-black font-normal text-sm">
        <h1 className="text-white text-2xl font-bold mb-10 cursor-default">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded transform duration-300 ease-in-out hover:scale-110"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col w-[100%] px-10 gap-4 text-white">
          {cartItems.map((item) => (
            <div className="transition rounded duration-300 ease-in-out hover:bg-white/30 hover:text-white transform flex justify-between items-center" key={item.id}>
              <div className="flex gap-4 items-center">
                <img src={item.strDrinkThumb} alt={item.strDrink} className="rounded-md h-24" />
                <div className="flex flex-col cursor-default">
                  <h1 className="text-lg font-bold">{item.strDrink}</h1>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
              <button
                  className="mx-3 px-4 py-2 bg-white text-black text-xs font-bold rounded hover:bg-gray-200 focus:outline-none"
                  onClick={() => {
                    removeFromCart(item)
                  }}
                ><FontAwesomeIcon icon={faMinus} /></button>
                <p className='font-bold text-xl cursor-default'>{item.quantity}</p>
                <button
                  className="mx-3 px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded hover:bg-gray-200 focus:outline-none"
                  onClick={() => {
                    addToCart(item)
                  }}
                ><FontAwesomeIcon icon={faPlus} /></button>

              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center mt-10 absolute bottom-14">
          <h1 className="text-lg font-bold mb-3 cursor-default text-white">Total: ${getCartTotal()}</h1>
          <button
            className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded transform duration-300 ease-in-out hover:scale-110"
            onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <h1 className="text-lg font-bold text-white">Your cart is empty</h1>
          )
        }
      </div>
    )
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}
