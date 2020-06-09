/** @jsx jsx */
import React from 'react';
import { jsx } from "theme-ui";
import { StaticQuery, graphql } from 'gatsby';

import {useLocation} from '@reach/router'
import {usePage} from '@modules/layouts/PageContext';
import Tree from '@modules/sidenav/Tree'
import {Box} from 'theme-ui'

const Sidenav = (props) => {
  const {locale} = usePage();
  const {pathname} = useLocation();
  const path = pathname.split('/');
  const currentTopSection = path[2];

  //Don't render the sidenav if there's no top section.
  if (currentTopSection === undefined) {return <></>;}

  return (
    <StaticQuery
      query={graphql`
        query GetSidenavMDX {
          # Regex for all files that are NOT header.mdx OR index.mdx
          allMdx(filter: {fileAbsolutePath: {regex: "/\/([\\\\w]{2})\/(?!header.mdx|index.mdx)/"}}) {
            edges {
              node {
                headings(depth: h1) {
                  value
                }
                fileAbsolutePath
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={({allMdx}) => (
        <Box>
          <ul>
            <Tree edges={allMdx.edges} locale={locale} />
          </ul>
        </Box>
      )}
    />
    
  );
};

export default Sidenav;
