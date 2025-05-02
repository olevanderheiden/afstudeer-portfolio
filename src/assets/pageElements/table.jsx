import React from "react";
import "../../index.css";

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
