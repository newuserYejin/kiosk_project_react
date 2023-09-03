import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './payment_msg.module.css'
function PaymentModal() {
  const [showModal, setShowModal] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
   
    navigation('/ordernum');
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment completed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The payment has been completed.</p>
        <p>The page will automatically move after 3 seconds.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentModal;
