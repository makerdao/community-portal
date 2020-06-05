/** @jsx jsx */
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Callout = ( {emoji, message} ) => {
  return (
    <div
      sx = {{textTransform: "capitalize"}}
    >
      {message}
    </div>
  );
};

export default Callout;
