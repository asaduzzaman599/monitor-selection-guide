import React from 'react';
import './Product.css'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,addToCart}) => {
    const {name,image,price} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <p>Price: {price} BDT</p>
            <button onClick={()=>addToCart(product)}>ADD TO CART <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;