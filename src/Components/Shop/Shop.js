import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProucts] = useState([]);
    useEffect(
        ()=>{
            fetch('fakedata/data.json')
            .then(res => res.json())
            .then(data => setProucts(data))
        }
        ,[]
    )
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;