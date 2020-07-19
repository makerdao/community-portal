/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Table = ({ children }) => (
  <table
    sx={{
      borderCollapse: "collapse",
      fontSize: 3,
      textAlign: "center",
      "& td": {
        color: 'textMuted',
        border: '1px solid',
        borderColor: 'muted',
        padding: "10px",
      },
      "& th": {
        color: 'text',
        fontStyle: 'normal',
        fontWeight: 600,
        border: '1px solid',
        borderColor: 'muted',
        padding: "10px",
      },
    }}
  >
    {children}
  </table>
);

export default Table;
