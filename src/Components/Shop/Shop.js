
import React, { useEffect, useState } from 'react';
import { clearLS, deleteIdFromLS, getFromLS, setToLS } from '../../Utilities/localStorageManagement';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    //state for set product data cart item
    const [products,setProucts] = useState([]);
    const [cartItems,setCartItems] = useState([]);


    //use effect for load products data
    useEffect(
        ()=>{
            fetch('fakedata/data.json')
            .then(res => res.json())
            .then(data => setProucts(data));
        }
        ,[])

        
    //use effect for load stored local storege cart item on load products
    useEffect(()=>{
        const storedProduct = getFromLS();
        const storedCart = [];
        for(const id in storedProduct){

            const existProduct = products.find(product => product.id === parseInt(id));
            if(existProduct){
                storedCart.push(existProduct)
            }
        }
        setCartItems([...storedCart])
    },[products]);

    //button handler to add product in cart
    const addToCart = (product) =>{
        const exist = cartItems.find(item=> item.id === product.id);

        //condition check already added or not
        if(exist){
            
            alert('Already Selected')
        }else{

             //condition check add product length not more then 4
            if(cartItems.length < 4){

                const newCart = [...cartItems,product];

                //set state with new data
                setCartItems(newCart);

                //set in local storage
                setToLS(product.id);
            }else{

                alert('More Than 4 not allowed');
            }
        }
    }

    //clear cart
    const clearCart = () =>{
        //set state
        setCartItems([]);
        //clear local storage
        clearLS();
        
    }

    //remove product from cart 
    const removeFromCart = (id) =>{
        const remainingProduct = cartItems.filter(item => item.id !== id)

        //remove product from state and local storage
        setCartItems([...remainingProduct])
        deleteIdFromLS(id);
    }
    return (
        <div className='shop-container'>
            
            <div className="product-container">
                {
                    products.map(product=> <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
            
                <div className='cart-content'>
                <Cart products={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} ></Cart> 
               
                </div>
      
            </div>
        </div>
    );
};

export default Shop;