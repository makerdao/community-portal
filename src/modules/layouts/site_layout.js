/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";

import Header from "../ui/header";

import { PageDataProvider } from "@modules/layouts/PageContext";
import Shortcodes from "@modules/ui/shortcodes";

const Layout = ({ children }) => (
  <PageDataProvider>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>
        <MDXProvider components={Shortcodes}>{children}</MDXProvider>
      </main>
      <footer>Footer Goes Here</footer>
    </div>
  </PageDataProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
