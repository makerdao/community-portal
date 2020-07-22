//** @jsx jsx */
import React from "react";
import { Box, Flex, Grid, jsx } from "theme-ui";

import { HexLuminanceCheck, colorToHex } from "@utils";
import defaultImage from "@images/section2.png";
import altImage from "@images/section1.png";
import { useTranslation } from "@modules/localization";

const Tout = ({ children, }) => {
  const { t } = useTranslation("Touts");

  const _Children = React.Children.toArray(children);
  const isGrid = _Children.length > 1;

  const ToutElement = ({children}) => (
    <Box
      sx={{
        backgroundColor: "surface",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "primary",
        mb: !isGrid ? '24px' : '',
        "& > *:only-child": {
          m: 0,
        },
        "& > *:last-child, & > * > *:last-child": {
          m: 0, //NOTE(Rejon): I use important here to override internal styles.
        },
        p: 4,
        "& h2": {
          mb: "12px",
        },
        "& p:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      {children}
    </Box>
  )

  if (isGrid) {
    return (
      <Grid
        columns={[[1, "1fr"],[2, "1fr 1fr"],[2, "1fr 1fr"]]}
        gap={"24px"}
        sx={{ gridAutoRows: "min-content", mb: "24px" }}
      >
        {_Children.map((child, index) => (
          <ToutElement key={`tout-child-${index}`} >
            {child}
          </ToutElement>
        ))}
      </Grid>
    );
  }

  return (
    <ToutElement>
      {children}
    </ToutElement>
  );
};

export default Tout;
