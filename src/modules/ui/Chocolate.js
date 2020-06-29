/** @jsx jsx */
import React from "react";
import { jsx, Box, Grid } from "theme-ui";

const Chocolate = ({ children }) => {
  const _Children = React.Children.toArray(children); // convert children to array

  // grid column values
  let maxBoxSize = 245;
  let minBoxSize = 100;

  // default grid sx prop
  let containerStyle = {
      columnGap: "32px",
      gridTemplateColumns: `minmax(${minBoxSize}px, ${maxBoxSize}px) minmax(${minBoxSize}px, ${maxBoxSize}px) minmax(${minBoxSize}px, ${maxBoxSize}px)`
  };

  // the number of children on the last row, if not full
  let leftovers = _Children.length % 3;

  if (_Children.length === 1) {
    leftovers = 0; // to prevent empty box from being added to last row
  } else if (_Children.length === 4 || _Children.length === 2) {
    leftovers = 0; // to prevent empty box from being added to last row
    containerStyle = {
      columnGap: "32px",
      gridTemplateColumns: `minmax(${minBoxSize}px, ${maxBoxSize}px) minmax(${minBoxSize}px, ${maxBoxSize}px)` // two columns special case
    };
  }

  // if the last row only has one item, create an empty box to its left so the leftover box can be centered
  if (leftovers === 1) {
    _Children.splice(-1,0,
      <Box 
        sx = {{
          mb: "16px",
          mr: "16px"
        }} 
      />
    );
  };

  return (
    <Grid
      sx={containerStyle}
    >
      {_Children.map((child, index) => {
          return (
            <Box 
              key = {index}
              sx = {{
                mb: "16px",
                mr: "16px"
              }} 
            >
              {child}
            </Box>
          );
        }
      )}
    </Grid>
  )
};

export default Chocolate;
