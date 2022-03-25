import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProucts] = useState([]);
    const [cartItems,setCartItems] = useState([]);


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
            console.log(cartItems,product)
            }else{
                alert('More Then 4 not allowed')
            }
        }
    }

    const clearCart = () =>{
        setCartItems([]);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart products={cartItems} clearCart={clearCart}></Cart> 
            
            </div>
        </div>
    );
};

export default Shop;