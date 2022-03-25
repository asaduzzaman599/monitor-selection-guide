import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Cart = ({product}) => {
    const {name,image} =product
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p><FontAwesomeIcon icon={faTrashCan} /></p>
        </div>
    );
};

export default Cart;