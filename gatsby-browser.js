/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 *
 * NOTE(Rejon): Anything that wraps the element passed in
 * the wrapElement method here will NOT receive ThemeUI context.
 */
import React from "react";
import { PageDataProvider } from "@modules/layouts/PageContext";

export const wrapPageElement = ({ element, props }) => (
  <PageDataProvider value={props}>{element}</PageDataProvider>
);
