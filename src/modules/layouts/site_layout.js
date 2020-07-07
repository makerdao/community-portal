//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { Flex, jsx } from "theme-ui";

import {Header, Footer} from "@modules/navigation";
import {shortcodes} from "@modules/ui";
import {TranslationProvider} from '@modules/localization'

import "./prismjs.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

const Layout = ({ children }) => (
  <TranslationProvider>
    <Header />
    <Flex
      as="main"
      sx={{
        maxWidth: "1364px",
        m: "0 auto",
        mt: "10px",
        pl: 4,
        pr: 0,
        position: "relative",
      }}
      className="content-boundary"
    >
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Flex>
    <Footer />
  </TranslationProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
