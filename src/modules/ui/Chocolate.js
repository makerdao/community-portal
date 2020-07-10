/** @jsx jsx */
import React from "react";
import { jsx, Grid } from "theme-ui";

const Chocolate = ({
  children,
  iconSize = "52px",
  minBoxSize = "100px",
  gapSize = "58px",
}) => (
  <Grid
    gap={gapSize}
    columns={`minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr)`}
    sx={{ "& > * > svg:first-of-type": { width: iconSize, height: iconSize } }}
  >
    {children}
  </Grid>
);

export default Chocolate;
