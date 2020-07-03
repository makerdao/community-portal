//** @jsx jsx */
import React from "react";
import { Box, jsx } from "theme-ui";

const Aligner = ({ children, center, right, bottom, yCenter, xCenter, sx }) => {
  const xAlignment = () => {
    if (right) {
      return { m: "0 0 auto auto !important" };
    } else if (xCenter || center) {
      return { m: "auto !important" };
    }
  };

  const yAlignment = () => {
    if (bottom) {
      return {
        top: "100%",
        transform: "translateY(-100%)",
        position: "relative",
      };
    } else if (yCenter || center) {
      return {
        top: "50%",
        transform: "translateY(-50%)",
        position: "relative",
      };
    }
  };

  return (
    <Box
      className="aligner"
      sx={{
        mb: "1rem",
        "& > *:not(.gatsby-resp-image-wrapper)": { ...yAlignment() },
        "& > * > .gatsby-resp-image-wrapper": { ...xAlignment() },
        "& > .gatsby-resp-image-wrapper": { ...xAlignment(), ...yAlignment() },
        position: "relative",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Aligner;
