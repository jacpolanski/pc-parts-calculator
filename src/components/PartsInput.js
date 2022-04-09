import React from "react";
import { Button, Form } from "react-bootstrap";

function PartsInput() {
  return (
    <Form className="p-3 mb-5">
      <div className="mb-3 d-lg-flex">
        <div className="d-flex flex-column justify-content-between w-100">
          <Form.Group className="w-100" controlId="formPartName">
            <Form.Label>Part Name</Form.Label>
            <Form.Control placeholder="Please enter part name" required />
          </Form.Group>

          <Form.Group className="w-100 d-none" controlId="formNewCategory">
            <Form.Label>Add NEW Part Category</Form.Label>
            <Form.Control placeholder="Enter new part category" />
          </Form.Group>

          <Form.Group className="w-100" controlId="formPartCategory">
            <Form.Label>Add Part Category</Form.Label>
            <Form.Select>
              <option>Default select</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="w-100" controlId="formPartPrice">
            <Form.Label>Add Part Price</Form.Label>
            <Form.Control placeholder="Enter part price" />
          </Form.Group>
        </div>

        <Form.Group className="w-100 mx-lg-3" controlId="formPartDetails">
          <Form.Label>Part Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Please enter part details"
          />
        </Form.Group>
      </div>

      <Button variant="primary" type="submit">
        Add part
      </Button>
    </Form>
  );
}

export default PartsInput;
