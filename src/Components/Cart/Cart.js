import React from 'react';
import './Cart.css'
import CartItem from '../CartItem/CartItem';

const Cart = ({products,clearCart}) => {
    return (
        <div >
            {
                products.map(product => <CartItem key={product.key} product={product}></CartItem>)
            }
            <div>
                
            <button>Choose One</button>
            <button onClick={()=>clearCart()}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;