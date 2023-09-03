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
        <Modal.Title>결제 완료</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>결제가 완료되었습니다.</p>
        <p>3초 후 자동으로 페이지가 이동합니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentModal;
