//** @jsx jsx */

import React from "react";
import { jsx, Box } from "theme-ui";

const Code = ({ children }) => {
  return (
    <pre sx={{ display: "inline-block", width: "100%" }}>
      <Box
        as="code"
        sx={{
          color: "codeText",
          bg: "codeBG",
          fontSize: 3,
          fontFamily: "Roboto Mono",
          p: 1,
          px: 2,
          mt: 0,
          borderRadius: "4px",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </pre>
  );
};

export default Code;
