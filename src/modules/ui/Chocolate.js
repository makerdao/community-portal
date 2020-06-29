/** @jsx jsx */
import React from "react";
import { jsx, Box, Grid } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Chocolate = ({ children, iconSize = "52px" }) => {
  const _Children = React.Children.toArray(children); // convert children to array

  // grid column values
  const minBoxSize = 100;

  return (
    <Grid
      gap="58px"
      columns={`minmax(${minBoxSize}px, 1fr) minmax(${minBoxSize}px, 1fr) minmax(${minBoxSize}px, 1fr)`}
      sx={{'& > * > svg:first-child': {width: '52px', height: '52px'}}}
    >
      {children}
    </Grid>
  )
};

export default Chocolate;
