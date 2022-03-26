
import React, { useEffect, useState } from 'react';
import { clearLS, deleteIdFromLS, getFromLS, setToLS } from '../../Utilities/localStorageManagement';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RandomProduct from '../RandomProduct/RandomProduct';
import './Shop.css'

const Shop = () => {
    const [products,setProucts] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [random,setRandom] = useState([]);


    useEffect(()=>{
        const storedProduct = getFromLS();
        const storedCart = [];
        for(const id in storedProduct){

            const existProduct = products.find(product => product.id === parseInt(id));
            if(existProduct){
                storedCart.push(existProduct)
            }
        }
        setCartItems([...cartItems,...storedCart])
        console.log('store',...storedCart);
    },[products])

    useEffect(
        ()=>{
            fetch('fakedata/data.json')
            .then(res => res.json())
            .then(data => setProucts(data))
        }
        ,[])

    const addToCart = (product) =>{
        const exist = cartItems.find(item=> item.id === product.id);

        if(exist){
            
            alert('Already Selected')
        }else{
            if(cartItems.length < 4){
                console.log(cartItems.length)
                const newCart = [...cartItems,product];
                setCartItems(newCart)
                setToLS(product.id)
            }else{
                alert('More Then 4 not allowed')
            }
        }
    }

    const randomProduct = () =>{
        if(cartItems.length){
            const number = Math.floor(Math.random()*cartItems.length);
            setRandom([cartItems[number]]);
        }else{
            alert('Cart is Empty')
        }
    }

    const clearCart = () =>{
        setCartItems([]);
        setRandom([]);
        clearLS();
        
    }

    const removeFromCart = (id) =>{
        const remainingProduct = cartItems.filter(item => item.id !== id)
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
                <Cart products={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} randomProduct={randomProduct}></Cart> 
                {
                    random.map(random =><RandomProduct key={random.id} product={random}></RandomProduct>)
                }
                </div>
      
            </div>
        </div>
    );
};

export default Shop;