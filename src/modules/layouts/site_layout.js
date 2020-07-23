//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";
import NavigationProvider from "@modules/navigation/context";

const Layout = ({ children }) => (
  <NavigationProvider>
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Header />
      <Flex
        as="main"
        sx={{
          maxWidth: "1364px",
          flex: "1 0 auto",
          width: "100%",
          m: "0 auto",
          pr: 0,
          pt: ["90px", "90px", "unset"],
          position: "relative",
        }}
        className="content-boundary"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  </NavigationProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
