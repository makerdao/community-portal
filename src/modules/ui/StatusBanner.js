//** @jsx jsx */
import React from "react";
import { Box, jsx } from "theme-ui";
import { HexLuminanceCheck, colorToHex } from "@utils";
import Sticky from "react-sticky-el";

const StatusBanner = ({
  warning,
  bear,
  notice,
  color,
  sticky,
  children,
  tab,
  hideSpacer,
  ...otherProps
}) => {
  const variant =
    (bear ? "bear" : null) ||
    (warning ? "warning" : null) ||
    (notice ? "notice" : null) ||
    "primary";

  //Check if the color of the BG (for sticky), passes our luminance test.
  //If it returns true, it's light, so we use a DARK text color.
  //Else use a LIGHT text color.
  const luminCheck = (_color, _variant) => {
    //The _color that comes in is from theme-ui below. It passes var(--theme-ui-color-variable, #000000);.
    //We just strip out the hex color.
    const hexColor = _color.slice(_color.indexOf("#"), _color.length - 1);

    return HexLuminanceCheck(colorToHex(hexColor)) && _variant !== "primary"
      ? "text"
      : "onPrimary";
  };

  if (sticky) {
    //If a  custom color is passed in, set it's text color if it passes the luminance test.
    const copyColor = !color
      ? (theme) => luminCheck(theme.colors[variant], variant)
      : luminCheck(color, variant);

    return (
      <Sticky
        className="statusBanner"
        dontUpdateHolderHeightWhenSticky={true}
        sx={{ "& > *": { zIndex: "100" }, width: "100%" }}
      >
        <Box
          sx={{
            p: "21px",
            pl: "40px",
            pr: "40px",
            position: "sticky",
            overflow: "hidden",
            color: copyColor,
            bg: color || variant,
            "& > *:last-child": {
              mb: 0,
            },
            "& a": {
              textDecoration: "underline",
              color: copyColor,
              "&.active": {
                color: copyColor,
              },
              "&:hover": {
                color: copyColor,
              },
              "&:hover > svg": {
                color: copyColor,
              },
            },
          }}
        >
          {children}
        </Box>
        {/* NOTE(Rejon): Sticky acts weird when applying ANY margin. This spacer is here to keep the peace. */}
        {!hideSpacer && <div className="spacer" sx={{ height: "24px" }}></div>}
      </Sticky>
    );
  }

  if (tab) {
    return (
      <Box
        className="statusBanner"
        sx={{
          padding: "12px 31px",
          pr: 3,
          position: "relative",
          overflow: "hidden",
          boxShadow: (theme) =>
            `inset 0px 0 0 1px ${theme.colors.secondaryMuted}`,
          borderRadius: "4px",

          "& > *:last-child": {
            mb: 0,
          },
          "::before": {
            content: '""',
            bg: color || variant,
            position: "absolute",
            top: 0,
            left: 0,
            width: "7px",
            height: "100%",
          },
          mb: "12px",
          width: "100%",
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      className="statusBanner"
      sx={{
        padding: "10px 36px",
        pr: 3,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "statusBG",
        borderRadius: "100000px",
        color: "statusColor",
        fontSize: "13px",
        letterSpace: "0.3px",
        "::before": {
          content: '""',
          bg: color || variant,
          position: "absolute",
          top: "50%",
          left: "16px",
          transform: "translateY(-50%)",
          borderRadius: "100%",
          width: "8px",
          height: "8px",
        },
        "& > *:last-child": {
          mb: 0,
        },
        mb: "12px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default StatusBanner;
