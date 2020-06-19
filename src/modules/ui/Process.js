//** @jsx jsx */
import React from "react";
import { Flex, Box, jsx } from "theme-ui";

const Process = ({ children }) => {
  const _Children = React.Children.toArray(children);

  return (
    <Box sx={{ mt: "34px", mb: "34px" }}>
      {_Children.map((child, index) => {
        return (
          <Flex>
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                width: "40px",
                minWidth: "40px",
                height: "40px",
                minHeight: "40px",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary",
                color: "primary",
                textAlign: "center",
                backgroundColor: "background",
              }}
            >
              {`${index + 1}`}
            </Box>
            <Box
              sx={{
                mt: "4px",
                ml: "16px",
                mb: "16px",
                borderBottom: "1px solid",
                borderColor: "body-15",
                width: "100%",
                pb: "24px",
                "& > *:only-child": { m: 0 },
              }}
            >
              {child}
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Process;
