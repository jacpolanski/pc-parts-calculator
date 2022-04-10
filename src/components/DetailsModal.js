import React from "react";
import { Modal } from "react-bootstrap";

function DetailsModal({ partForModal, show, setShow }) {
  return (
    <Modal show={show} fullscreen="md-down" onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{partForModal[0].formPartName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Part category:</strong> {partForModal[0].formPartCategory}
        </p>
        <p>
          <strong>Description:</strong> {partForModal[0].formPartDetails}
        </p>
        <p>
          <strong>Price:</strong> {partForModal[0].formPartPrice}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default DetailsModal;
