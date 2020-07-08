/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Table = ({
  children,
}) => {
  return (
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
          backgroundColor: "#f2f2f2",
        },
        "& th": {
          border: "1px solid black",
          padding: "20px",
          fontSize: "18px",
          textAlign: "center",
        },
      }}
    >
      {children}
    </table>
  );
};

export default Table;
