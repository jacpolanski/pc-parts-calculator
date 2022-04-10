import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useParts } from "./PartsContext";
import { Table } from "react-bootstrap";
import uniqid from "uniqid";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoriesChart() {
  const { hardwareCategories, parts } = useParts();

  const generateRGBA = (a) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgba = "rgb(" + r + "," + g + "," + b + "," + a + ")";
    return rgba;
  };

  const chartBackgroundColors = hardwareCategories.map((category) =>
    generateRGBA(0.2)
  );
  const chartBorderColors = chartBackgroundColors.map((color) =>
    color.replace(/[^,]+(?=\))/, "1.0")
  );

  const hardwareCategoriesSums = hardwareCategories.map((category) =>
    parts
      .filter((part) => part.formPartCategory === category)
      .reduce((agg, part) => parseFloat(part.formPartPrice) + agg, 0)
      .toFixed(2)
  );

  const data = {
    labels: hardwareCategories,
    datasets: [
      {
        label: "# $ for total category",
        data: hardwareCategoriesSums,
        backgroundColor: chartBackgroundColors,
        borderColor: chartBorderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Doughnut data={data} style={{ maxWidth: 500, maxHeight: 500 }} />
      <div className="w-50">
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
              <th>Category</th>
              <th>Category sum</th>
            </tr>
          </thead>
          <tbody>
            {hardwareCategories.map((category, i) => (
              <tr key={uniqid()}>
                <td>{category}</td>
                <td>{hardwareCategoriesSums[i]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL:</td>
              <td>
                {hardwareCategoriesSums
                  .reduce((agg, sum) => parseFloat(sum) + agg, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
}

export default CategoriesChart;
