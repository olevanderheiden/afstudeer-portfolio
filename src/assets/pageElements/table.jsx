import React from "react";
import "../../index.css";

// Table component to display data in a tabular format
// It takes headers, rows, and a renderRow function as props
//This component is relatively simple because it needs to allow for a lot of flexibility in the way the data is displayed
//Therefore this is mostly left to the page that uses this component
const Table = ({ headers, rows, renderRow }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>{renderRow(row)}</React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
