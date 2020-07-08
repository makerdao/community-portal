/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Table = ({
  children,
  iconSize = "52px",
  minBoxSize = "100px",
  gapSize = "58px",
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
        // '& tr > td:first-of-type': { border: "1px solid black", padding: "5px", textAlign: 'left' },
        // '& tr > td:last-of-type': { border: "1px solid black", padding: "5px", textAlign: 'right' },
        "tr:nth-child(even)": {
          backgroundColor: "#f2f2f2",
        },
        "& th": {
          border: "1px solid black",
          padding: "20px",
          fontSize: "14px",
          textAlign: "center",
        },
      }}
    >
      {children}
    </table>
  );
};

export default Table;
