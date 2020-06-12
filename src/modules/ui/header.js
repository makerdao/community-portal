/** @jsx jsx */
import React from "react";

import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"

import {usePage} from '@modules/layouts/PageContext'
import Shortcodes from '@modules/ui/shortcodes'

const Header = () => {
  const {locale} = usePage();

  const { site, allMdx } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      #Get header.mdx files from only the top level locale folders. (ie. /content/en/header.mdx)
      allMdx(filter: {fileAbsolutePath: {regex: "/\/content\/([^\/]+)\/?\/(header.mdx)$/"}}) {
        nodes {
          fileAbsolutePath
          body
        }
      }
    }
  `);

  //allMDX will return all header.mdx files at top level locale folders. 
  //Find only the one we need for our current locale and use it's body in the MDX renderer below.
  const localePathRegex = new RegExp(`/(${locale})/`)
  const localizedHeader = allMdx.nodes.find(n => localePathRegex.test(n.fileAbsolutePath))

  const siteTitle = site.siteMetadata.title;

  return (
    <header sx={{ marginBottom: "1.45rem", '& a.external-link > svg': {display: 'none'} }}>
      Header Header
      <MDXProvider components={Shortcodes}>
        <MDXRenderer>
          {localizedHeader.body}
        </MDXRenderer>
      </MDXProvider>
    </header>
  );
};

export default Header;
