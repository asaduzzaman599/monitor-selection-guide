import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './RandomProduct.css'
const RandomProduct = ({product}) => {
    
    //distructuring
    const {name,image} = product 
    
    // state for modal 
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maybe It will be best for you.</Modal.Title>
          
        </Modal.Header>
        <Modal.Body  className='random-product'>
        <img src={image} alt="" />
        <h4>{name}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RandomProduct;