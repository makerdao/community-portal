import React from "react";
import { Box } from "theme-ui";
import {HexLuminanceCheck, colorToHex} from '@utils';

const StatusBanner = ({ warning, error, notice, color, sticky, children, ...otherProps }) => {
  const variant = (error ? 'bear' : null) || (warning ? 'warning' : null) || (notice ? 'notice' : null) || 'primary';

  //Check if the color of the BG (for sticky), passes our luminance test. 
  //If it returns true, it's light, so we use a DARK text color.
  //Else use a LIGHT text color.
  const luminCheck = (_color, _variant) => {
    const hexColor = _color.slice(_color.indexOf("#"), _color.length - 1);

    return HexLuminanceCheck(colorToHex(hexColor)) && _variant !== 'primary' ? 'text' : 'onPrimary';
  }

  if (sticky) {
    //If a  custom color is passed in, set it's text color if it passes the luminance test.
    const copyColor = !color ? theme => luminCheck(theme.colors[variant], variant) : luminCheck(color, variant);

    return (
      <Box sx={{
      p: '21px',
      pl: '40px',
      pr: '40px',
      position: 'sticky',
      overflow: 'hidden',
      color: copyColor,
      bg: color || variant,
      '& > *:last-child': {
        mb: 0
      },
      '& a': {
        textDecoration: 'underline',
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
      mb: '21px'
    }}>
      {children}
    </Box>
    )
  }

  return (
    <Box sx={{
      p: '12px',
      pl: '31px',
      pr: '31px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: theme => `inset 0px 0 0 1px ${theme.colors.secondaryMuted}`,
      borderRadius: '4px',

      '& > *:last-child': {
        mb: 0
      },
      '::before': {
        content: '""',
        bg: color || variant,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '7px',
        height: '100%'
      },
      mb: '12px'
    }}>
      {children}
    </Box>
  );
};

export default StatusBanner;
