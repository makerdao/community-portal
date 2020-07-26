//** @jsx jsx */
import React from "react";
import { jsx, InitializeColorMode } from "theme-ui";

export { wrapRootElement } from "./gatsby-browser";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
