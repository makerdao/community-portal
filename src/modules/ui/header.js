/** @jsx jsx */
import Link  from "@modules/utility/Link";
import PropTypes from "prop-types";
import React from "react";
import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import {Sidenav} from '@theme-ui/sidenav'

const Header = () => {
  const { site, allMdx } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      allMdx(filter: {fileAbsolutePath: {regex: "/\/content\/([^\/]+)\/?\/(header.mdx)$/"}}) {
        nodes {
          fileAbsolutePath
          headings(depth: h1) {
            value
            depth
          }
        }
      }
    }

  `);

  console.log("Header",allMdx)

  

  const siteTitle = site.siteMetadata.title;

  return (
    <header sx={{ marginBottom: "1.45rem" }}>

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
