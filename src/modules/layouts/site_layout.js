//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex
      as="main"
      sx={{
        maxWidth: "1364px",
        m: "0 auto",
        pl: 4,
        pr: 0,
        pt: ["90px", "90px", "unset"],
        position: "relative",
      }}
      className="content-boundary"
    >
      {children}
    </Flex>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
