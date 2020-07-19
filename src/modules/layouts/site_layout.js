//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";
import NavigationProvider from '@modules/navigation/context';

const Layout = ({ children }) => (
  <NavigationProvider>
    <Header />
    <Flex
      as="main"
      sx={{
        maxWidth: "1364px",
        m: "0 auto",
        pl: ["0", "0", 4],
        pr: 0,
        pt: ["90px", "90px", "unset"],
        position: "relative",
      }}
      className="content-boundary"
    >
      {children}
    </Flex>
    <Footer />
  </NavigationProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
