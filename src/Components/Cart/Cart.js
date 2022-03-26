import React, { useState } from 'react';
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import RandomProduct from '../RandomProduct/RandomProduct';

const Cart = ({products,clearCart,removeFromCart}) => {

    //state for random product
    const [random,setRandom] = useState([]);

    //event handler for random product
    const randomProduct = () =>{

        //condition check user select 4 item or not
        if(products.length>3 && products.length<5){
            const number = Math.floor(Math.random()*products.length);
            setRandom([products[number]]);
        }else{
            setRandom([]);
            alert('Please Select Any 4 Monitor')
        }
    }

    return (
        <div className='cart'>
            <h3>Selected Monitor</h3>
            {
                products.map(product => <CartItem key={product.id} removeFromCart={removeFromCart} product={product}></CartItem>)
            }
            <div className='cart-btn'>
            <button onClick={()=>randomProduct()} className='choose-one-btn'>Choose 1 For Me</button>
            <button className='choose-again-btn' onClick={()=>clearCart()}>Choose Again</button>
            {
                    random.map(random =><RandomProduct key={random.id} product={random}></RandomProduct>)
            }
            </div>
        </div>
    );
};

export default Cart;