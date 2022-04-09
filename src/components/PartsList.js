import React, { useEffect } from "react";
import { useParts } from "./PartsContext";
import { Button, Table } from "react-bootstrap";

function PartsList() {
  const { deletePart, parts, setParts } = useParts();

  if (parts === null || parts === undefined) return null;
  return (
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
            <td>
              <Button size="sm" onClick={() => deletePart(part.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            Total: {parts.length} {parts.length === 1 ? "item" : "items"}
          </td>
          <td colSpan={2} className="text-end">
            Total price:
          </td>
          <td>
            {parts.reduce(
              (agg, part) => parseFloat(part.formPartPrice) + agg,
              0
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PartsList;
