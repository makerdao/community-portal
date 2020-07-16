//** @jsx jsx */
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { jsx, ThemeProvider } from "theme-ui";

import Layout from "@modules/layouts/site_layout";
import { TranslationProvider } from "@modules/localization";
import shortcodes from "@modules/ui/shortcodes";
import { ThemeUIConfig } from "@modules/utility";

//Load our Primsjs css and Fonts 
import "@modules/layouts/global.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

export const wrapRootElement = ({ element }) => (
  <ThemeProvider {...ThemeUIConfig}>
    <MDXProvider components={shortcodes}>
      <TranslationProvider>{element}</TranslationProvider>
    </MDXProvider>
  </ThemeProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
