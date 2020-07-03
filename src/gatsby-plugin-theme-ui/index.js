import maker from "@makerdao/dai-ui-theme-maker";
import { icons as themeIcons } from "@makerdao/dai-ui-icons";
import { icons as brandingIcons } from "@makerdao/dai-ui-icons-branding";
import prismPreset from "./prismPreset";

export default {
  ...maker, //<- Your default theme.
  icons: {
    ...themeIcons,
    ...brandingIcons,
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
    body: "#53546A",
    background: "#FFFFFF",
    "body-15": "rgba(83, 84, 106, 0.15)",
    "body-5": "rgba(83, 84, 106, 0.05)",
    "body-5-pure": "#eff0f2",
    "body-40": "rgba(83, 84, 106, 0.4)",
    "body-01": "rgba(83, 84, 106, 0.1)",
    strokeFaded: "rgba(41, 26, 66, 0.1)",
    statusBG: "#F9F9F9",
    statusColor: "#666666",
    callout: "#f4f4f7",
    calloutSecondary: "#fdefd9",
    calloutSecondaryBorder: "#F5B13D",
    codeBG: "#002D59",
    codeText: "#FFFFFF",
    headline: "#291A42",
    accordionBG: "#fcfcfc",
  },
  styles: {
    ...maker.styles,
    a: {
      color: "#36aa9a",
      textDecoration: "none",
    },
    Link: {
      color: "#36aa9a",
    },
    pre: {
      ...prismPreset,
    },
    code: {
      ...prismPreset,
    },
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
        opacity: 0.5,
      },
    },
  },
};
