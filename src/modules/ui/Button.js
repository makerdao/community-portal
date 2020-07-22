/** @jsx jsx */

import React from "react";
import { Button as ThemedButton, jsx } from "theme-ui";
import { Link } from "@modules/navigation";

const Button = ({
  to,
  href,
  variant,
  secondary,
  outline,
  small,
  disabled,
  children,
  inline,
  test,
  sx,
  ...otherProps
}) => {
  //NOTE(Rejon): This may seem outlandish, but we do this to ensure content creators write LESS code.
  //ie. We write this so they write
  //  <Button primary outline />
  // Instead of
  // <Button variant="primaryOutline" />
  let _variant = `${
    variant || secondary
      ? "secondary"
      : outline
        ? "outline"
        : "primary"
  }${small ? "Small": ""}`;
  console.log(_variant); 
  console.log(disabled);
  return (
    <ThemedButton
      className="button"
      to={to || href}
      disabled={disabled}
      as={Link}
      variant={_variant}
      sx={{
        ...sx,
        // small button sizing/spacing
        padding: small ? "8px 24px" : "16px 32px",
        fontSize: small ? "10px" : "16px",
        letterSpacing: small ? "1px" : null,
        textTransform: small ? "uppercase": null,
        lineHeight: small ? "12px" : "19px",
        //display: inline ? "inline-block" : "block",
        "& > *": { display: "inline-block", mb: "0 !important" }, //NOTE(Rejon): I use important here because we don't want child elements to dictate margins
      }}
      {...otherProps}
    >
      {children}
    </ThemedButton>
  );
};
/*
        opacity: disabled ? "0.4" : "1",
        cursor: disabled ? "not-allowed" : "pointer",
        width: "max-content",
*/
export default Button;
