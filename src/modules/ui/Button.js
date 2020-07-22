/** @jsx jsx */

import React from "react";
import { Button as ThemedButton, jsx } from "theme-ui";
import { Link } from "@modules/navigation";
import { Icon } from "@makerdao/dai-ui-icons";

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

  const internal = (/^\/(?!\/)/.test(href) || /^\/(?!\/)/.test(to));

  return (
    <Link to={to || href} disabled={disabled} isButton={true} hideExternalIcon={true}>
      <ThemedButton
        className="button"
        disabled={disabled}
        variant={_variant}
        sx={{
          ...sx,
          // small button sizing/spacing
          padding: small ? "8px 24px" : "16px 32px",
          fontSize: small ? "10px" : "16px",
          letterSpacing: small ? "1px" : null,
          textTransform: small ? "uppercase": null,
          lineHeight: small ? "12px" : "19px",
          //display: inline ? "inline-block" : "block", //NOTE(Isaac) enabling this breaks link styling
          "& > *": { display: "inline-block", mb: "0 !important" }, //NOTE(Rejon): I use important here because we don't want child elements to dictate margins
        }}
        {...otherProps}
      >
        {!internal && !small && (
          <Icon
            name="increase"
            className="increase"
            sx={{ top: "2px", position: "relative", ml: "2px", mr: ".5em" }}
          />
        )}
        {children}
      </ThemedButton>
    </Link>
  );
};
export default Button;
