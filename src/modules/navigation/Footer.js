//** */ @jsx jsx */
import React from "react";
import {Flex, Box, jsx} from 'theme-ui';
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {useTranslation} from "@modules/localization";
import Shortcodes from "@modules/ui/shortcodes";

const Footer = () => {
  const { locale, DEFAULT_LOCALE } = useTranslation();

  const {footerFiles} = useStaticQuery(graphql`
    query FooterQuery {
      #Get header.mdx files from only the top level locale folders. (ie. /content/en/header.mdx)
      footerFiles: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/([^/]+)/?/(footer.mdx)$/" }
        }
      ) {
        nodes {
          fileAbsolutePath
          body
        }
      }
    }
  `)

  const footerConfigLinks = DEFAULT_LOCALE !== locale ? footerFiles.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${locale}/`)
  ) : [];

  //Default locale fallback
  const defaultLocaleFooterLinks = footerFiles.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${DEFAULT_LOCALE}/`)
  )

  const footerLinks = footerConfigLinks && footerConfigLinks.length !== 0 ? footerConfigLinks.body : (defaultLocaleFooterLinks ? defaultLocaleFooterLinks.body : null);

  return (<Flex as="footer" sx={{
      p: 4,
      py: '3rem', 
      maxWidth: '1364px', 
      margin: 'auto',
      '& > * > ul': {
        m: 0, 
        p: 0, 
        color: 'headline',
        listStyleType: 'none',
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: 'auto',
        gridAutoFlow: 'column',
            flex: 1,
        '& > li:not(:last-of-type)': {
          mr: '5%',
        },
        '& > li': {
          fontWeight: 'bold',
          fontSize: '0.88rem',
          '& > ul': {
            mt: '0.7rem',
            fontSize: '1rem',
            p: 0, 
            
            listStyleType: 'none',
            '& li:not(:last-of-type)': {
              mb: '10px'
            },
            '& a': {
              color: 'body',
              fontWeight: 'normal',
              '& svg': {
                display: 'none'
              }
            }
          }
        }
      },
      }}>
    {footerLinks && <Box sx={{flex: 1}}>
      <MDXProvider components={Shortcodes}>
        <MDXRenderer>{footerLinks}</MDXRenderer>
      </MDXProvider>
    </Box>}
    {/* <a href="javascript:gaOptout();">Deactivate Google Analytics</a> */}
  </Flex>);
};

export default Footer;
