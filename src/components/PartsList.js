import React, { useState } from "react";
import { useParts } from "./PartsContext";
import { Button, Modal, Spinner, Table } from "react-bootstrap";

function PartsList() {
  const { deletePart, parts } = useParts();
  const [show, setShow] = useState(false);
  const [partForModal, setPartForModal] = useState();

  const handleShow = (id) => {
    const partForModal = parts.filter((part) => part.id === id);
    partForModal && setPartForModal(partForModal);
    setShow(true);
  };

  if (parts === null || parts === undefined)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  return (
    <>
      <Table
        striped
        bordered
        hover
        responsive
        size="sm"
        className="my-3 text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Part Name</th>
            <th>Part Category</th>
            <th>Part Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part, i) => (
            <tr key={part.id}>
              <td>{i + 1}</td>
              <td>{part.formPartName}</td>
              <td>{part.formPartCategory}</td>
              <td>{part.formPartPrice}</td>
              <td className="d-flex flex-wrap justify-content-center justify-content-lg-evenly align-items-center">
                <Button
                  size="sm"
                  variant="info"
                  className="m-1"
                  onClick={() => handleShow(part.id)}
                >
                  Details
                </Button>
                <Button
                  size="sm"
                  variant="warning"
                  className="m-1"
                  onClick={() => deletePart(part.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-0">
              {parts.length} {parts.length === 1 ? "item" : "items"}
            </td>
            <td colSpan={2} className="text-end border-0">
              Total price:
            </td>
            <td className="border-0">
              {parts
                .reduce((agg, part) => parseFloat(part.formPartPrice) + agg, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </Table>
      {show && (
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
      )}
    </>
  );
}

export default PartsList;
