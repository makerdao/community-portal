import React from "react";
import {merge} from 'theme-ui';
import Prism from "@theme-ui/prism";
import maker from "@makerdao/dai-ui-theme-maker";
import { icons as themeIcons } from "@makerdao/dai-ui-icons";
import { icons as brandingIcons } from "@makerdao/dai-ui-icons-branding";

const components = {
  pre: (props) => props.children,
  code: Prism,
};

const prismPreset = {
  color: "background",
  backgroundColor: "codeBG",
  ".selector, .attr-name, .string, .char, .builtin, .inserted": {
    color: "primaryEmphasis",
  },
  // comments and characters like <, =>, (), etc
  ".prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
    color: "background",
  },
  ".comment": {
    fontStyle: "italic",
    color: "primaryMuted",
  },
  // class names, functions and numbers
  ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .maybe-class-name, .regex, .important, .variable": {
    color: "secondary",
  },

  // keywords like const, return
  ".atrule, .attr-value, .keyword": {
    color: "primaryEmphasis",
  },

  fontSize: 3,
  fontFamily: "Roboto Mono",
  overflow: "auto",
  p: 3,
  pt: 0,
  mt: 0,
  borderRadius: "4px",
};


const theme = {
  ...maker, //<- Your default theme.
  icons: {
    ...themeIcons,
    ...brandingIcons,
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
    primary: "#5AE2CA",
    primaryEmphasis: "#68FEE3",
    primaryAlt: "#1AAA9B", 
    primaryMuted: "#E7FCFA",
    secondary: "#FFBA44",
    secondaryEmphasis: "#FFE1A8",
    secondaryAlt: '#FBA615',
    secondaryMuted: "#FFF3DD",
    background: "#FFFFFF",
    backgroundDark:'#291A42',
    surface: "#E7FCFA",
    surfaceDark: '#4D4968',
    muted: "#D0D3D7",
    mutedAlt: "#90969C",
    error: "#FF6948",
    success: "#5AE2CA",
    successAlt: "#68FEE3",
    notice: "#FF78F2",
    noticeAlt: "#F2B9FF",
    warning: "#FFBA44",
    warningAlt: "#FFBA44",
    text: "#291A42",
    textMuted: "#4D4968",
    strawberry: "#FF78F2",
    bubblegum: "#F2B9FF",
    grape: "#9B9FFF",
    lemon: "#F3FF64",
    modes: {
      galaxy: {
        primary: "#68FEE3",
        primaryEmphasis: "#A6FFEF",
        primaryMuted: "#00585E",
        secondary: "#F2B9FF",
        secondaryEmphasis: "#FF78F2",
        secondaryMuted: "#94008E",
        text: "#FFFFFF",
        textMuted: "#E1DFEC",
        background: "#291A42",
        surface: "#4D4968",
        statusBG: "#291A42",
        statusColor: "#FFFFFF",
        codeBG: "#00585E"
      }
    },

    statusBG: "#291A42",
    statusColor: "#FFFFFF",

    callout: "#f4f4f7",
    calloutSecondary: "#fdefd9",
    calloutSecondaryBorder: "#F5B13D",

    codeBG: "#4D4968",
    codeText: "#FFFFFF",

   
    accordionBG: "#fcfcfc", //<-- What should this be?
    transDash_bodyColor: "#333",
    transDash_headlineColor: "#291A42",
    transDash_makerOrange: "#F5B13D",
    transDash_pieBG: "hsl(152, 45%, 94%)",
    transDash_radialOrangeBG: "rgba(245, 177, 61, 0.3)",
    transDash_radialTealBG: "rgba(28, 172, 156, 0.6)",
    transDash_regionBG:
      "linear-gradient(rgb(248, 237, 216), rgb(244, 227, 194))",
  },
  shadows: {
    type1: "0px 1px 2px rgba(90, 90, 90, 0.06)",
    type2: "0px 1px 2px rgba(90, 90, 90, 0.06)"
  },
  radii: {
    ...maker.radii,
    round: '32px'
  },
  fonts: {
    ...maker.fonts,
    transparencyDashboard: 'system-ui,"Helvetica Neue",sans-serif',
  },
  styles: {
    ...maker.styles,
    a: {
      color: "primary",
      textDecoration: "none",
    },
    Link: {
      color: "primary",
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
      fontFamily: "text",
      fontSize: 2,
      borderRadius: "round",
      p: 3,
      py: 2,
      color: "text",
      fontWeight: "bold",
      letterSpacing: "0.03em",
      bg: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryEmphasis",
      },
      "&:disabled": {
        bg: "primaryMuted",
        color: "muted",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    outline: {
      variant: "buttons.primary",
      bg: "background",
      color: "text",
      border: "1px solid",
      borderColor: "text",
      borderRadius: 'round',
      "&:hover": {
        bg: "primaryMuted",
      },
      "&:active": {
        bg: "#primaryMuted",
      },
      "&:disabled": {
        bg: "surface",
        pointerEvents: "none",
        cursor: "not-allowed",
        color: "muted",
        borderColor: "muted",
        opacity: 0.5,
      },
    },

    secondary: {
      variant: "buttons.primary",
      color: "textAlt",
      bg: "#291a41",
      borderRadius: 'round',
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

  },
};

export default {theme: merge(prismPreset, theme), components};
