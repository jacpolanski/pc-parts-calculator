import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import uniqid from "uniqid";
import { useParts } from "./PartsContext";

function PartsInput() {
  const { defPart, parts, setParts } = useParts();
  const [formPart, setFormPart] = useState(defPart);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormPart((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formPart) {
      setError(false);
      let newPart = {
        id: uniqid(),
        ...formPart,
      };
      setParts([newPart, ...parts]);
      setFormPart(defPart);
    } else {
      setError(true);
      setFormPart(defPart);
    }
  };

  useEffect(() => {
    const parts = JSON.parse(localStorage.getItem("parts"));
    if (parts) {
      setParts(parts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("parts", JSON.stringify(parts));
  }, [parts]);

  return (
    <Form className="p-3 text-center" onSubmit={handleSubmit}>
      <div className="mb-3 d-lg-flex">
        <div className="d-flex flex-column justify-content-between w-100">
          <Form.Group className="w-100 mb-3 mb-lg-0" controlId="formPartName">
            <Form.Label>Part Name</Form.Label>
            <Form.Control
              name="formPartName"
              value={formPart.formPartName}
              onChange={handleChange}
              placeholder="Please enter part name"
              required
            />
          </Form.Group>

          <Form.Group
            className="w-100 mb-3 mb-lg-0 d-none"
            controlId="formNewCategory"
          >
            <Form.Label>Add NEW Part Category</Form.Label>
            <Form.Control
              name="formNewCategory"
              value={formPart.formPartName}
              onChange={() => null}
              placeholder="Enter new part category"
            />
          </Form.Group>

          <Form.Group
            className="w-100 mb-3 mb-lg-0"
            controlId="formPartCategory"
          >
            <Form.Label>Add Part Category</Form.Label>
            <Form.Select
              name="formPartCategory"
              value={formPart.formPartCategory}
              onChange={handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="w-100 mb-3 mb-lg-0" controlId="formPartPrice">
            <Form.Label>Add Part Price</Form.Label>
            <Form.Control
              name="formPartPrice"
              value={formPart.formPartPrice}
              onChange={handleChange}
              placeholder="Enter part price"
              required
            />
          </Form.Group>
        </div>

        <Form.Group className="w-100 mx-lg-3" controlId="formPartDetails">
          <Form.Label>Part Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="formPartDetails"
            value={formPart.formPartDetails}
            onChange={handleChange}
            placeholder="Please enter part details"
          />
        </Form.Group>
      </div>

      <Button variant="primary" type="submit" className="w-25">
        Add part
      </Button>
    </Form>
  );
}

export default PartsInput;
