/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Table = ({
  children,
}) => (
  <table
    sx={{
      borderCollapse: "collapse",
      borderSpacing: "5px",
      "& td": {
        border: "1px solid black",
        padding: "5px",
        textAlign: "left",
      },
      "tr:nth-child(even)": {
        backgroundColor: "#f6f8fa",
      },
      "& th": {
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
      },
    }}
  >
    {children}
  </table>
);

export default Table;
