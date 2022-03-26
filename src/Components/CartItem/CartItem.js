import React from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({product,removeFromCart}) => {
    //distructuring
    const {name,image,id} = product
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p onClick={()=>removeFromCart(id)}><FontAwesomeIcon icon={faTrashCan} /></p>
        </div>
    );
};

export default CartItem;