import React, { useEffect, useState } from 'react';
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
            if(cartItems.length < 5){
                const newCart = [...cartItems,product];
                setCartItems(newCart)
            console.log(cartItems,product)
            }else{
                alert('More Then 4 not allowed')
            }
        }
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;