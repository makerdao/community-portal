/** @jsx jsx */
import React from "react";
import { jsx, Box, Flex } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Chocolate = ({ children }) => {
  const _Children = React.Children.toArray(children);

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
      }}
    >
      {_Children.map((child, index) => {
        return (
          <Flex
              sx={{
                mb: "16px",
                width: "33%",
                maxWidth: "245px",
                //pb: "24px",
                //"& > *:only-child": { m: 0 },
              }}
            >
              {child}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Chocolate;
