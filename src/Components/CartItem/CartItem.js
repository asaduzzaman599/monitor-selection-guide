import React from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({product}) => {
    const {name,image} = product
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p><FontAwesomeIcon icon={faTrashCan} /></p>
        </div>
    );
};

export default CartItem;