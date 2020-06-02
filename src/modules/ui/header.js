/** @jsx jsx */
import Link  from "@modules/utility/Link";
import PropTypes from "prop-types";
import React from "react";
import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const { site, allDirectory } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata.title;

  return (
    <header sx={{ marginBottom: "1.45rem" }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "center",
        }}
      >
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
