import React from "react";
import { merge } from "theme-ui";
import Prism from "@theme-ui/prism";
import maker from "@makerdao/dai-ui-theme-maker";
import { icons as themeIcons } from "@makerdao/dai-ui-icons";
import { icons as brandingIcons } from "@makerdao/dai-ui-icons-branding";
const components = { pre: (props) => props.children, code: Prism,
};

const prismPreset = {
  color: "background", backgroundColor: "codeBG",
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
    lightbulb: {
      path: (
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12V11.0004C14.2144 10.0882 15 8.63582 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 8.63582 5.78555 10.0882 7 11.0004V12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12ZM7 15C7 14.4477 7.44772 14 8 14H10H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C7.44772 16 7 15.5523 7 15Z" fill="currentColor"/>
        </g>
      ),
      viewBox: "0 0 20 20"
    },
    minus: {
      path: (
        <g>
          <path d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" fill="currentColor"/>
        </g>
      ),
      viewBox: "0 0 20 20"
    },
    moon: {
      path: (
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.28169 13.032C5.28246 14.5482 9.03909 14.0528 11.5459 11.546C14.0528 9.03911 14.5481 5.28247 13.032 2.28171C13.771 2.65508 14.4641 3.15043 15.0815 3.76778C18.2057 6.89197 18.2057 11.9573 15.0815 15.0815C11.9573 18.2057 6.89196 18.2057 3.76777 15.0815C3.15042 14.4641 2.65506 13.771 2.28169 13.032Z" fill="currentColor"/>
        </g>
      ),
      viewBox: "0 0 20 20"
    },
    sun: {
      path: (
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5C10.5523 5 11 4.55228 11 4V3ZM5.70712 4.70712C5.3166 4.3166 4.68343 4.3166 4.29291 4.70712C3.90239 5.09765 3.90239 5.73081 4.29291 6.12134L5.00002 6.82844C5.39054 7.21897 6.02371 7.21897 6.41423 6.82844C6.80476 6.43792 6.80476 5.80476 6.41423 5.41423L5.70712 4.70712ZM15.1213 6.82844L15.8284 6.12134C16.219 5.73081 16.219 5.09765 15.8284 4.70712C15.4379 4.3166 14.8047 4.3166 14.4142 4.70712L13.7071 5.41423C13.3166 5.80476 13.3166 6.43792 13.7071 6.82844C14.0976 7.21897 14.7308 7.21897 15.1213 6.82844ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9H3ZM16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H16ZM5.70711 15.4142L6.41421 14.7071C6.80474 14.3166 6.80474 13.6834 6.41421 13.2929C6.02369 12.9024 5.39052 12.9024 5 13.2929L4.29289 14C3.90237 14.3905 3.90237 15.0237 4.29289 15.4142C4.68342 15.8047 5.31658 15.8047 5.70711 15.4142ZM14.7071 13.7071C14.3166 13.3166 13.6834 13.3166 13.2929 13.7071C12.9024 14.0976 12.9024 14.7308 13.2929 15.1213L14 15.8284C14.3905 16.219 15.0237 16.219 15.4142 15.8284C15.8047 15.4379 15.8047 14.8047 15.4142 14.4142L14.7071 13.7071ZM11 16C11 15.4477 10.5523 15 10 15C9.44772 15 9 15.4477 9 16V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V16ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="currentColor"/>
        </g>
      ),
      viewBox: "0 0 20 20"
    },
    github: {
      path: (
        <g transform="matrix(4.16667,0,0,4.16667,67.8667,132.933)">
            <path d="M0,-31.904C-8.995,-31.904 -16.288,-24.611 -16.288,-15.614C-16.288,-8.417 -11.621,-2.312 -5.148,-0.157C-4.333,-0.008 -4.036,-0.511 -4.036,-0.943C-4.036,-1.329 -4.05,-2.354 -4.058,-3.713C-8.589,-2.729 -9.545,-5.897 -9.545,-5.897C-10.286,-7.778 -11.354,-8.279 -11.354,-8.279C-12.833,-9.29 -11.242,-9.27 -11.242,-9.27C-9.607,-9.154 -8.747,-7.591 -8.747,-7.591C-7.294,-5.102 -4.934,-5.821 -4.006,-6.237C-3.858,-7.29 -3.438,-8.008 -2.972,-8.415C-6.589,-8.826 -10.392,-10.224 -10.392,-16.466C-10.392,-18.244 -9.757,-19.698 -8.715,-20.837C-8.883,-21.249 -9.442,-22.905 -8.556,-25.148C-8.556,-25.148 -7.188,-25.586 -4.076,-23.478C-2.777,-23.839 -1.383,-24.02 0.002,-24.026C1.385,-24.02 2.779,-23.839 4.08,-23.478C7.19,-25.586 8.555,-25.148 8.555,-25.148C9.444,-22.905 8.885,-21.249 8.717,-20.837C9.761,-19.698 10.392,-18.244 10.392,-16.466C10.392,-10.208 6.583,-8.831 2.954,-8.428C3.539,-7.925 4.06,-6.931 4.06,-5.411C4.06,-3.234 4.04,-1.477 4.04,-0.943C4.04,-0.507 4.333,0 5.16,-0.159C11.628,-2.318 16.291,-8.419 16.291,-15.614C16.291,-24.611 8.997,-31.904 0,-31.904" fill="currentColor"/>
        </g>
      ),
      viewBox: "0 0 136 133"
    }
  }, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
    primary: "#5AE2CA",
    primaryEmphasis: "#68FEE3",
    primaryAlt: "#1AAA9B",
    primaryMuted: "#E7FCFA",
    secondary: "#FFBA44",
    secondaryEmphasis: "#FFE1A8",
    secondaryAlt: "#FBA615",
    secondaryMuted: "#FFF3DD",
    background: "#FFFFFF",
    backgroundDark: "#291A42",
    surface: "#E7FCFA",
    surfaceDark: "#4D4968",
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
      dark: {
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
        warning: "#FFBA44",
        warningAlt: "#FBA615",
        success: "#68FEE3",
        successAlt: "#A6FFEF",
        statusBG: "#291A42",
        statusColor: "#FFFFFF",
        codeBG: "#00585E",
      },
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
    raised: "0px 2px 15px rgba(35, 21, 54, 0.15)",
    float: "0px 2px 10px rgba(35, 21, 54, 0.05)",
  },
  radii: {
    ...maker.radii,
    round: "32px",
  },
  fonts: {
    ...maker.fonts,
    body: "FT Base, system-ui, Arial, sans-serif",
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
      cursor: "pointer",
      outline: "none",
      fontFamily: "body",
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
        color: "text",
        transition: ".1s ease",
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
      borderRadius: "round",
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
      bg: "red",
      borderRadius: "round",
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

export default { theme: merge(prismPreset, theme), components };
