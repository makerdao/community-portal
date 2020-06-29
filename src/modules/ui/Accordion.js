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
        borderBottom: "1px solid",
        borderColor: "body-15",
        backgroundColor: "accordionBG",
        padding: "12px 16px",
        mb: "16px",
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
        {/* TODO(Rejon): This Icon set up is ultra temporary. It's only because DAI-UI does not inlcude a minus icon in their icon pack.
								 Replace the Icon when they add it in. 
				 */}
        {!expanded ? (
          <Icon
            name={expanded ? CloseIcon : OpenIcon}
            color={"headline"}
            size={4}
          />
        ) : (
          <Box
            sx={{
              fontSize: "3rem",
              width: "32px",
              height: "32px",
              textAlign: "center",
              lineHeight: "32px",
              fontWeight: "bold",
            }}
          >
            {/* TEMPORARY UNTIL MINUS ICON ADDED TO DAI-UI */}
            {CloseIcon !== "minus" ? (
              <Icon name={CloseIcon} color={"headline"} size={4} />
            ) : (
              <>{"-"}</>
            )}
          </Box>
        )}
      </Flex>
      <SmoothCollapse
        eagerRender={true}
        allowOverflowWhenOpen={true}
        expanded={expanded}
      >
        <Box sx={{ pt: "16px", color: "body", "& > *:only-child": { m: 0 } }}>
          {_Children}
        </Box>
      </SmoothCollapse>
    </Box>
  );
};

export default Accordion;
