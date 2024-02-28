import React from 'react';

function Cart({ cartItems, removeFromCart }) {
    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <div className="cart-item">
                            <span>{item.name} - ${item.price}</span>
                            <span>Quantity: {item.quantity}</span>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="total">
                Total Price: ${totalPrice.toFixed(2)}
            </div>
        </div>
    );
}

export default Cart;
