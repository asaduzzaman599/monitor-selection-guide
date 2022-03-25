import React from 'react';

const RandomProduct = ({product}) => {
    console.log(product.id) 
    const {name,image} = product 
    return (
        <div>
            <img src={image||''} alt="" />
            <p>{name||''}</p> 
        </div>
    );
};

export default RandomProduct;