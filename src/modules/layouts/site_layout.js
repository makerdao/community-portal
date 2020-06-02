/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { MDXProvider } from "@mdx-js/react";
import Header from "../ui/header";
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import Sidenav from "@modules/ui/Sidenav";
import StatusBanner from '@modules/ui/StatusBanner';

const shortcodes = { Breadcrumbs, StatusBanner, Sidebar };

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          and <a href="https://github.com/makerdao/dai-ui">Dai-Ui</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
