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
    <Link to={to} disabled={disabled}>
      <ThemedButton
        variant={_variant}
        sx={{
          ...sx,
          p: "24px",
          pt: "12px",
          pb: "12px",
          opacity: disabled ? "0.4" : "1",
          cursor: disabled ? "not-allowed" : "pointer",
          "&:hover": { transition: "all .15s ease" },
        }}
        {...otherProps}
      >
        {children}
      </ThemedButton>
    </Link>
  );
};

export default Button;
