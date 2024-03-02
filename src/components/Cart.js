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
      <div className='fixed bottom-0 flex-col flex items-center right-0 w-full md:w-2/4 xl:w-1/3 h-2/3 md:h-full bg-gradient-to-tr from-primary/80 to-cyan-200/80 backdrop-blur px-10 z-[9999]'>
        <div className='w-full relative my-10'>
          <h1 className="text-white text-center text-2xl font-bold cursor-default">Cart</h1>
          <div>
            <button className="absolute top-0 right-0 px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded transform duration-300 ease-in-out hover:scale-110" onClick={toggle}>
            Close
            </button>
          </div>
        </div>
        <div className="overflow-y-auto w-full h-full text-black font-normal text-sm">
          <div className="flex flex-col w-[100%] gap-4 text-white">
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
        </div>
        <div className='w-full my-10 text-center'> 
        {
          cartItems.length > 0 ? (
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold mb-3 cursor-default text-white">Total: ${getCartTotal()}</h1>
            <button className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded transform duration-300 ease-in-out hover:scale-110" onClick={() => { clearCart() }}>
              Clear cart
            </button>
          </div>
          ) : (
          <h1 className="text-lg font-bold text-white">Your cart is empty</h1>
          )
        }
        </div>
      </div>
    )
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}
