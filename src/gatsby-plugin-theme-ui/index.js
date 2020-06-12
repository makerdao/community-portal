import React from "react";
import { Box, useThemeUI } from "theme-ui";
import maker from "@makerdao/dai-ui-theme-maker";
import { icons as themeIcons } from "@makerdao/dai-ui-icons";

export default {
  ...maker, //<- Your default theme.
  icons: {
    ...themeIcons,
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
  },
  styles: {
    ...maker.styles,
    a: {
      color: "#36aa9a",
      textDecoration: 'none'
    }
  },
  buttons: {
    primary: {
      borderRadius: "small",
      cursor: "pointer",
      outline: "none",
      fontFamily: "body",
      fontSize: 2,
      p: 3,
      py: 2,
      color: "onPrimary",
      fontWeight: "bold", 
      letterSpacing: "0.03em", 
      bg: "#36aa9a",
      "&:hover": {
        bg: "#48bbaf",
      },
      "&:active": {
        bg: "#309989",
      },
      "&:disabled": {
        bg: "#a3ddd7",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    primaryOutline: {
      variant: "buttons.primary",
      bg: "surface",
      color: "#309989",
      border: "1px solid",
      borderColor: "#309989",
      "&:hover": {
        bg: "successAlt",
      },
      "&:active": {
        bg: "#d9f7f2",
      },
      "&:disabled": {
        bg: "surface",
        pointerEvents: "none",
        cursor: "not-allowed",
        color: "#aaccc9",
        borderColor: "#aaccc9",
        opacity: 0.5,
      },
    },
    
    secondary: {
      variant: "buttons.primary",
      color: "textAlt",
      bg: "#291a41",
      "&:hover": {
        bg: "#534868",
      },
      "&:active": {
        bg: "#150332",
      },
      "&:disabled": {
        bg: "#a9a3b3",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    secondaryOutline: {
      variant: "buttons.primary",
      bg: "surface",
      color: "#291a41",
      border: "1px solid",
      borderColor: "#291a41",
      "&:hover": {
        bg: "#eae9ed",
      },
      "&:active": {
        bg: "#c9c5ce",
      },
      "&:disabled": {
        bg: "surface",
        pointerEvents: "none",
        cursor: "not-allowed",
        borderColor: "#a9a3b3",
        bg: "#a9a3b3",
        opacity: 0.5,
      },
    },
  },
}
