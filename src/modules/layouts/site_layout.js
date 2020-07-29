/** @jsx jsx */
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";

import { Header, Footer, Sidenav } from "@modules/navigation";

const Layout = ({ children, pageContext, uri, ...props }) => {
  const hasTopSection = uri.split('/').length >= 3;
  
  return (
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
        {(pageContext.frontmatter && !pageContext.frontmatter.hideSidenav &&
          hasTopSection)
          &&
          <Sticky
            boundaryElement=".content-boundary"
            sx={{
              width: "20%",
              minWidth: "260px",
              display: ["none", "none", "initial"],
            }}
            dontUpdateHolderHeightWhenSticky={true}
            style={{ position: "relative" }}
            hideOnBoundaryHit={false}
          >
            <Sidenav />
          </Sticky>
        }
        <Flex sx={{ flexGrow: 1, flexDirection: "column" }}>
          <article
            sx={{
              pl: hasTopSection ? [4, 4, "64px"] : 0,
              mt: hasTopSection ? [4, 4, "59px"] : 0,
              pb: 4,
              pr: hasTopSection ? 4 : 0,
            }}
          >
          {children}
          </article>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
