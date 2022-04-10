import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import uniqid from "uniqid";
import { useParts } from "./PartsContext";
import { schemaPart } from "./schemaPart";

function PartsInput() {
  const {
    defPart,
    parts,
    setParts,
    setWrite,
    hardwareCategories,
    setHardwareCategories,
    setWriteCategory,
  } = useParts();
  const [formPart, setFormPart] = useState(defPart);
  const [errors, setErrors] = useState([]);
  const [errorsMsgs, setErrorMsgs] = useState({
    formPartName: [],
    formPartCategory: [],
    formPartDetails: [],
    formPartPrice: [],
  });
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormPart((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = schemaPart.validate(formPart, {
      abortEarly: false,
    });

    error !== undefined
      ? setErrors(error.details)
      : setErrorMsgs({
          formPartName: [],
          formPartCategory: [],
          formPartDetails: [],
          formPartPrice: [],
        });

    if (error === undefined) {
      let newPart = {
        id: uniqid(),
        ...formPart,
      };
      setParts([...parts, newPart]);
      setWrite(true);
      setFormPart(defPart);
    }
  };

  const handleAddCategory = () => {
    setHardwareCategories((prevCategories) => [...prevCategories, newCategory]);
    setWriteCategory(true);
    setShowAddCategory(false);
  };

  useEffect(() => {
    errors.length !== 0 &&
      setErrorMsgs({
        formPartName: errors.filter(
          (error) => error.context.key === "formPartName"
        ),
        formPartCategory: errors.filter(
          (error) => error.context.key === "formPartCategory"
        ),
        formPartDetails: errors.filter(
          (error) => error.context.key === "formPartDetails"
        ),
        formPartPrice: errors.filter(
          (error) => error.context.key === "formPartPrice"
        ),
      });
  }, [errors]);

  return (
    <>
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
              />
              {errorsMsgs.formPartName.length > 0 && (
                <div className="text-danger fs-6 text-start">
                  {errorsMsgs.formPartName[0].message}
                </div>
              )}
            </Form.Group>

            <Form.Group
              className="w-100 mb-3 mb-lg-0 position-relative"
              controlId="formPartCategory"
            >
              <Form.Label>
                Category
                <Button
                  size="sm"
                  variant="primary"
                  className="position-absolute end-0 top-0"
                  onClick={() => setShowAddCategory(true)}
                >
                  Add new
                </Button>
              </Form.Label>
              <Form.Select
                name="formPartCategory"
                value={formPart.formPartCategory}
                onChange={handleChange}
              >
                <option key="blankChoice" hidden value>
                  Select category
                </option>
                {hardwareCategories.map((category) => (
                  <option key={uniqid()}>{category}</option>
                ))}
              </Form.Select>
              {errorsMsgs.formPartCategory.length > 0 && (
                <div className="text-danger fs-6 text-start">
                  {errorsMsgs.formPartCategory[0].message}
                </div>
              )}
            </Form.Group>

            <Form.Group
              className="w-100 mb-3 mb-lg-0"
              controlId="formPartPrice"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                name="formPartPrice"
                value={formPart.formPartPrice}
                onChange={handleChange}
                placeholder="Enter part price"
              />

              {errorsMsgs.formPartPrice.length > 0 && (
                <div className="text-danger fs-6 text-start">
                  {errorsMsgs.formPartPrice[0].message}
                </div>
              )}
            </Form.Group>
          </div>

          <Form.Group className="w-100 mx-lg-3" controlId="formPartDetails">
            <Form.Label>Part Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              name="formPartDetails"
              value={formPart.formPartDetails}
              onChange={handleChange}
              placeholder="Please enter part details"
            />
            {errorsMsgs.formPartDetails.length > 0 && (
              <div className="text-danger fs-6 text-start">
                {errorsMsgs.formPartDetails[0].message}
              </div>
            )}
          </Form.Group>
        </div>

        <Button type="submit" variant="success" className="w-25">
          Add part
        </Button>
      </Form>

      {showAddCategory && (
        <Modal show={showAddCategory} onHide={() => setShowAddCategory(false)}>
          <Modal.Body className="d-flex flex-column">
            <Form onSubmit={() => handleAddCategory()}>
              <Form.Group
                className="w-100 mb-3 text-center"
                controlId="formNewCategory"
              >
                <Form.Label>Add NEW Part Category</Form.Label>
                <Form.Control
                  name="formNewCategory"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new part category"
                />
              </Form.Group>
            </Form>
            <Button type="submit">Add NEW Category</Button>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default PartsInput;
