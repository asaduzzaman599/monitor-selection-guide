import React from 'react';
import './RandomProduct.css'
const RandomProduct = ({product}) => {
    const {name,image} = product 
    return (
        <div className='random-product'>
            <img src={image||''} alt="" />
            <p>{name||''}</p> 
        </div>
    );
};

export default RandomProduct;