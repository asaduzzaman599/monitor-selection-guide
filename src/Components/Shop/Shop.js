import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RandomProduct from '../RandomProduct/RandomProduct';
import './Shop.css'

const Shop = () => {
    const [products,setProucts] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [random,setRandom] = useState({});


    useEffect(
        ()=>{
            fetch('fakedata/data.json')
            .then(res => res.json())
            .then(data => setProucts(data))
        }
        ,[]
    )

    const addToCart = (product) =>{
        const exist = cartItems.find(item=> item.id === product.id);

        if(exist){
            console.log("not",product)
        }else{
            if(cartItems.length < 4){
                console.log(cartItems.length)
                const newCart = [...cartItems,product];
                setCartItems(newCart)
            }else{
                alert('More Then 4 not allowed')
            }
        }
    }

    const randomProduct = () =>{
        const number = Math.floor(Math.random()*cartItems.length);
        setRandom(cartItems[number]);
        setCartItems([]);
    }

    const clearCart = () =>{
        setCartItems([]);
        setRandom({});
        
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
            {
                <RandomProduct product={random}></RandomProduct>
            }
            <Cart products={cartItems} clearCart={clearCart} randomProduct={randomProduct}></Cart> 
            
            </div>
        </div>
    );
};

export default Shop;