//** @jsx jsx */
import React, { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";

import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Accordion = ({ children, defaultOpen, openIcon, closeIcon }) => {
  const [expanded, setExpanded] = useState(defaultOpen ? true : false);

  const _Children = React.Children.toArray(children);
  const Header = _Children.splice(0, 1);

  const OpenIcon = openIcon || "plus";
  const CloseIcon = closeIcon || "minus";

  return (
    <Box
      sx={{
        fontFamily: "FT Base Trial",
        fontSize: "20px",
        borderBottom: "1px solid",
        borderColor: "muted",
        backgroundColor: "background",
        padding: "24px 12px",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Box sx={{ "& > *:only-child": { m: 0 } }}>{Header}</Box>
        {!expanded ? (
          <Icon
            name={expanded ? CloseIcon : OpenIcon}
            color={"text"}
            size={3}
          />
        ) : (
          <Box
            sx={{
              fontSize: "3rem",
              width: "32px",
              height: "32px",
              textAlign: "center",
              lineHeight: "32px",
            }}
          >
            <Icon name={CloseIcon} color="text" size={3} />
          </Box>
        )}
      </Flex>
      <SmoothCollapse
        eagerRender={true}
        allowOverflowWhenOpen={true}
        expanded={expanded}
      >
        <Box sx={{ pt: "16px", fontSize: "16px", color: "textMuted", "& > *:only-child": { m: 0 } }}>
          {_Children}
        </Box>
      </SmoothCollapse>
    </Box>
  );
};

export default Accordion;
