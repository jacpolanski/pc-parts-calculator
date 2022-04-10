import React, { useState } from "react";
import { useParts } from "./PartsContext";
import { Button, Form, Spinner, Table } from "react-bootstrap";
import DetailsModal from "./DetailsModal";
import uniqid from "uniqid";

function PartsList() {
  const { deletePart, parts, hardwareCategories } = useParts();
  const [show, setShow] = useState(false);
  const [partForModal, setPartForModal] = useState();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Category");

  const handleShow = (id) => {
    const partForModal = parts.filter((part) => part.id === id);
    partForModal && setPartForModal(partForModal);
    setShow(true);
  };
  const sortByFunction = (a, b) => {
    if (sortBy === "Category")
      return a.formPartCategory > b.formPartCategory
        ? 1
        : b.formPartCategory > a.formPartCategory
        ? -1
        : 0;
    if (sortBy === "Name")
      return a.formPartName > b.formPartName
        ? 1
        : b.formPartName > a.formPartName
        ? -1
        : 0;
    if (sortBy === "Price") return a.formPartPrice - b.formPartPrice;
  };

  if (parts === null || parts === undefined)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  return (
    <>
      <Form className="d-flex justify-content-end">
        <Form.Group className="w-25 mx-3" controlId="formPartCategory">
          <Form.Label className="fs-6">Show Category</Form.Label>
          <Form.Select
            size="sm"
            name="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option key="All">All</option>
            {hardwareCategories.map((category) => (
              <option key={uniqid()}>{category}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="w-25 mx-3" controlId="formPartCategory">
          <Form.Label className="fs-6">Sort by</Form.Label>
          <Form.Select
            size="sm"
            name="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Name</option>
            <option className={categoryFilter !== "All" && "d-none"}>
              Category
            </option>
            <option>Price</option>
          </Form.Select>
        </Form.Group>
      </Form>

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
          {parts
            .filter((part) =>
              categoryFilter !== "All"
                ? part.formPartCategory === categoryFilter
                : part
            )
            .sort((a, b) => sortByFunction(a, b))
            .map((part, i) => (
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
              {
                parts.filter((part) =>
                  categoryFilter !== "All"
                    ? part.formPartCategory === categoryFilter
                    : part
                ).length
              }{" "}
              {parts.filter((part) =>
                categoryFilter !== "All"
                  ? part.formPartCategory === categoryFilter
                  : part
              ).length === 1
                ? "item"
                : "items"}
            </td>
            <td colSpan={2} className="text-end border-0">
              Total price:
            </td>
            <td className="border-0">
              {parts
                .filter((part) =>
                  categoryFilter !== "All"
                    ? part.formPartCategory === categoryFilter
                    : part
                )
                .reduce((agg, part) => parseFloat(part.formPartPrice) + agg, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </Table>
      {show && (
        <DetailsModal
          partForModal={partForModal}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
}

export default PartsList;
