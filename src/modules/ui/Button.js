/** @jsx jsx */

import React from "react";
import { Button as ThemedButton, jsx } from "theme-ui";
import Link from "@modules/utility/Link";

const Button = ({
  to,
  variant,
  secondary,
  outline,
  disabled,
  children,
  sx,
  ...otherProps
}) => {
  //NOTE(Rejon): This may seem outlandish, but we do this to ensure content creators write LESS code.
  //ie. We write this so they write
  //  <Button primary outline />
  // Instead of
  // <Button variant="primaryOutline" />
  let _variant = `${variant || secondary ? "secondary" : null || "primary"}${
    outline ? "Outline" : ""
  }`;

  return (
      <ThemedButton
        to={to} 
        disabled={disabled}
        as={Link}
        variant={_variant}
        sx={{
          ...sx,
          p: "24px",
          pt: "12px",
          pb: "12px",
          mb: '24px',
          opacity: disabled ? "0.4" : "1",
          cursor: disabled ? "not-allowed" : "pointer",
          "&:hover": { color: 'onPrimary', transition: "all .15s ease" },
          '& .increase' : {display: 'none'}
        }}
        {...otherProps}
      >
        {children}
      </ThemedButton>
  );
};

export default Button;
