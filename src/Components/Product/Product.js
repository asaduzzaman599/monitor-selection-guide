import React from 'react';
import './Product.css'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product}) => {
    console.log(product)
    const {name,image,price} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p><b>Price: </b>{price}BDT</p>
            <button>ADD TO CART <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;