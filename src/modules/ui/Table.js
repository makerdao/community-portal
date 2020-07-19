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
        color: 'textMuted',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'muted',
        padding: "10px",
      },
      "& th": {
        color: 'text',
        fontStyle: 'normal',
        fontWeight: 600,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'muted',
        padding: "10px",
      },
    }}
  >
    {children}
  </table>
);

export default Table;
