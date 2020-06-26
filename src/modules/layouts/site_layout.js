//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { Flex, jsx } from "theme-ui";
import "@modules/utility/prismjs.css";

import Header from "@modules/navigation/Header";
import Footer from '@modules/navigation/Footer';

import { PageDataProvider } from "@modules/layouts/PageContext";
import Shortcodes from "@modules/utility/shortcodes";

const Layout = ({ children }) => (
  <PageDataProvider>
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
      <MDXProvider components={Shortcodes}>{children}</MDXProvider>
    </Flex>
    <Footer/>
  </PageDataProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
