import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './RandomProduct.css'
const RandomProduct = ({product}) => {
    const {name,image} = product 
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maybe It will be best for you.</Modal.Title>
          
        </Modal.Header>
        <Modal.Body  className='random-product'>
        <img src={image} alt="" />
        <h3>{name}</h3>
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