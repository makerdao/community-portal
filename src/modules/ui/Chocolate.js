/** @jsx jsx */
import React from "react";
import { jsx, Box, Grid } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Chocolate = ({ children }) => {
  const _Children = React.Children.toArray(children);
  
  let leftovers = _Children.slice(Math.max(_Children.length - (_Children.length % 3), 1));

  console.log(`children length: ${_Children.length}`);

  let containerStyle;
  let leftoversStyle;

  if (_Children.length === 1) {
    leftovers = [];
    containerStyle = {
      gridTemplateColumns: "1fr"
    };
  } else if (_Children.length === 4 || _Children.length === 2) {
    leftovers = [];
    containerStyle = {
      gridTemplateColumns: "1fr 1fr",
      justifyItems: "center"
    };
  } else {
    containerStyle = {
      justifyItems: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
    };
  }

  if (leftovers.length === 1) {
    leftoversStyle = {
      justifyItems: "center",
      gridTemplateColumns: "1fr"
    };
  } else if (leftovers.length === 2)  {
    leftoversStyle = {
      justifyItems: "center",
      gridTemplateColumns: "1fr 1fr"
    };
  }

  return (
    <>
    <Grid
      sx={containerStyle}
    >
        {_Children.map((child, index) => {
        if (leftovers.length === 0 || index <  _Children.length - (_Children.length % 3)) {
          return (
            <Box 
              sx = {{
                mb: "16px",
                maxWidth: "245px",
              }} 
            >
              {child}
            </Box>
          );
        }
      })}
    </Grid>
      {leftovers.length > 0  &&
    <Grid sx={leftoversStyle}>
      {leftovers.map((child, index) => {
        return (
          <Box 
            sx = {{
              mb: "16px",
              maxWidth: "245px"
            }}
          >
            {child}
          </Box>
        );
      })}
    </Grid>
        }
    </>
  );
};

export default Chocolate;
