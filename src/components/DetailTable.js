import React from "react";

import DetailBody from "./DetailBody";

import "../styles/DetailTable.css";

// map and display table function
function DetailTable({ headings, users, sortHandler }) {
  return (
    <div className="table">
      <table id="table" className="table">
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    sortHandler(name.toLowerCase());
                  }}
                >
                  {name}
                  <span></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DetailBody users={users} />
      </table>
    </div>
  );
}

export default DetailTable;
