import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import Cart from '../components/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const CheckoutPage = ({ showModal, toggleModal }) => {
  const { cartItems, getCartTotal, addToCart, removeFromCart } = useContext(CartContext)
  
  const ProductionCost = 4.99;

  const totalProfit = cartItems.reduce((total, item) => {
    const itemProfit = item.price - ProductionCost;
    return total + itemProfit * item.quantity;
  }, 0);

  const formattedTotalProfit = totalProfit.toFixed(2);

  const lemonsUsed = cartItems.reduce((total, item) => {
    const lemonsPerItem = 1.5;
    return total + lemonsPerItem * item.quantity;
  }, 0);

    return (
      <>
        <div className='container pt-28 min-h-[100vh] h-fit mx-auto text-gray-800 mb-10'>
          <div className='flex-col flex items-center w-full'>

          <div className='w-full relative my-10'>
            <h1 className="text-center text-2xl font-bold cursor-default">Checkout</h1>
          </div>
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className="text-sm w-full lg:w-[30rem]">
              <div className="flex flex-col w-[100%] gap-4">
                {cartItems.map((item) => (
                  <div className="flex gap-5 bg-white p-7 rounded shadow-lg justify-between items-center" key={item.id}>

                    <div className="flex gap-4 items-center">
                      <img src={item.strDrinkThumb} alt={item.strDrink} className="rounded-md h-24" />
                      <div className="flex flex-col cursor-default">
                        <h1 className="text-lg font-bold">{item.strDrink}</h1>
                        <p>Price: ${item.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                    <button
                      className="mx-3 px-4 py-2 bg-primary text-white text-xs font-bold rounded hover:bg-cyan-800 focus:outline-none"
                      onClick={() => {
                        removeFromCart(item)
                      }}
                    ><FontAwesomeIcon icon={faMinus} /></button>
                    <p className='font-bold text-xl cursor-default'>{item.quantity}</p>
                    <button
                      className="mx-3 px-4 py-2 bg-primary text-white text-xs font-bold rounded hover:bg-cyan-800 focus:outline-none"
                      onClick={() => {
                        addToCart(item)
                      }}
                    ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" text-sm bg-white shadow-lg p-7 rounded w-full lg:w-[20rem] h-fit">
              <div className="flex flex-col gap-4">
                {
                cartItems.length > 0 && (
                <div className="flex flex-col text-lg font-bold cursor-default">
                  <h1>Review Order Details</h1>
                  <div className='my-5'>
                    <div className='font-normal flex justify-between text-sm text-gray-400'>
                      <h1>Profit: </h1>
                      <h1>${formattedTotalProfit}</h1>
                    </div>
                    <div className='font-normal flex justify-between text-sm text-gray-400'>
                      <h1>Lemons Used: </h1>
                      <h1>{lemonsUsed}</h1>
                    </div>
                    <div className='flex justify-between'>
                      <h1>Total: </h1>
                      <h1 className='font-normal'>${getCartTotal()}</h1>
                    </div>
                  </div>
                  <button className='bg-primary text-white hover:bg-cyan-800 rounded font-normal py-1'>Checkout</button>
                </div>
                )
              }
              </div>
            </div>
          </div>
          </div>

          <Cart showModal={showModal} toggle={toggleModal} />

        </div>
      </>
    );
};
