/** @jsx jsx */

import React from "react";
import { Button as ThemedButton, jsx } from "theme-ui";
import {Link} from "@modules/navigation";

const Button = ({
  to,
  href,
  variant,
  secondary,
  outline,
  disabled,
  children,
  inline,
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
      className="button"
      to={to || href}
      disabled={disabled}
      as={Link}
      variant={_variant}
      sx={{
        ...sx,
        p: "24px",
        pt: "8px",
        pb: "8px",
        mb: "24px",
        opacity: disabled ? "0.4" : "1",
        cursor: disabled ? "not-allowed" : "pointer",
        display: inline ? "inline-block" : "block",
        width: "max-content",
        "&:hover, &:hover > svg": {
          color: "onPrimary",
          transition: "all .15s ease",
        },
        "& .increase": { display: "none" },
        "& > *": { display: "inline-block", mb: "0 !important" }, //NOTE(Rejon): I use important here because we don't want child elements to dictate margins
        "& > svg": {
          verticalAlign: "middle",
          top: "-2px",
          width: "1.8rem",
          height: "auto",
          mr: "4px",
          position: "relative",
          "&:hover": { color: "onPrimary", transition: "all .15s ease" },
        },
      }}
      {...otherProps}
    >
      {children}
    </ThemedButton>
  );
};

export default Button;
