//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";

const List = ({ children }) => {
  const _Children = React.Children.toArray(children);
  console.log(_Children);

  return (
    <Box sx={{ mb: 4 }}>
      {_Children.map((child, index) => {
        return (
          <Flex
            sx={{
              p: "10px 8px",
              minHeight: "60px",
              borderBottom: "1px solid",
              borderColor: "body-15",
              alignItems: "center",
              "& > pre": { width: "100%" },
              "& > *:only-child": {
                margin:
                  typeof child.props.children === "string" ? 0 : "initial",
              },
              "& > ul": { m: 0, p: 0, listStyleType: "none", width: "100%" },
              "& > ul > li > ul": { m: 0, p: 0, listStyleType: "none" },
            }}
            key={`list-element${child.key}`}
          >
            {child}
          </Flex>
        );
      })}
    </Box>
  );
};

export default List;
