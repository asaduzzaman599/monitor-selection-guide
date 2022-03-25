import React from 'react';
import './Cart.css'
import CartItem from '../CartItem/CartItem';

const Cart = ({products,clearCart,randomProduct,removeFromCart}) => {
    return (
        <div className='cart-content'>
            <h3>Selected Monitor</h3>
            {
                products.map(product => <CartItem key={product.id} removeFromCart={removeFromCart} product={product}></CartItem>)
            }
            <div className='cart-btn'>
            <button onClick={()=>randomProduct()} className='choose-one-btn'>Choose One</button>
            <button className='choose-again-btn' onClick={()=>clearCart()}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;