/** @jsx jsx */
import React from "react";

import PropTypes from "prop-types";
import { jsx, Text, Flex } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"

import Link from '@modules/utility/Link'
import {usePage} from '@modules/layouts/PageContext'
import Shortcodes from '@modules/ui/shortcodes'
import Search from '@modules/search'

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `SearchHit_Page` },
];

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

  return (
    <Flex as="header" sx={{ marginBottom: "1.45rem",
    p:4,
    maxWidth: '1364px',
    margin: 'auto',
          '& > ul': {
            display: 'inline-flex',
            alignItems: 'center',
            p: 0, 
            m: 0, 
            listStyleType: 'none',
          },
          '& > ul > li': {
            mr: '40px'
          },
          '& > ul > li > a': {
              textDecoration: 'none'
          } }}>
      <Link to={`/${locale}/`} sx={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        marginRight: '40px'
      }}>
        <Icon name="maker" color="text" sx={{
          width: '39px',
          height: '100%',
          mr: 2
        }}/><Text>Home</Text>
      </Link>
      <MDXProvider components={Shortcodes} >
        <MDXRenderer >
          {localizedHeader.body}
        </MDXRenderer>
      </MDXProvider>
      <Search collapse indices={searchIndices} sx={{
        ml: 'auto',
        mr: 0,
        width: '100%',
        maxWidth: '347px'
      }}/>
    </Flex>
  );
};

export default Header;
