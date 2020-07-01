//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";

const Checklist = ({ children }) => {
  const _Children = React.Children.toArray(children);

  return (
    <Flex
      as="ul"
      sx={{
        listStyleType: "none",
        p: "32px",
        mb: "24px",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "strokeFaded",
        bg: "background",
        borderRadius: "4px",
      }}
    >
      {_Children.map((child, index) => (
        <Flex
          as="li"
          sx={{ mb: "24px", color: "body", "&:last-of-type": { mb: 0 } }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              bg: "background",
              borderRadius: "4px",
              border: "1px solid",
              borderColor: "body",
              mr: "14px",
            }}
          ></Box>
          <Box
            sx={{ flex: 1, "& > *:only-child, & > *:only-child > *": { m: 0 } }}
          >
            {child}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Checklist;
