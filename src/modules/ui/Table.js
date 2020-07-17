/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Table = ({ children }) => (
  <table
    sx={{
      borderCollapse: "collapse",
      borderSpacing: "10px",
      fontFamily: "FT Base Trial",
      fontSize: "16px",
      textAlign: "center",
      "& td": {
        color: '#4D4968',
        border: "1px solid #D0D3D7",
        padding: "10px",
      },
      "& th": {
        color: '#291A42',
        fontStyle: 'normal',
        fontWeight: 600,
        border: "1px solid #D0D3D7",
        padding: "10px",
      },
    }}
  >
    {children}
  </table>
);

export default Table;
