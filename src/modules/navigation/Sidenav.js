/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { StaticQuery, graphql } from "gatsby";
import { Box } from "theme-ui";

import {useTranslation} from "@modules/localization";
import Tree from "@modules/navigation/Sidenav_Tree";


const Sidenav = (props) => {
  const { locale } = useTranslation();

  return (
    <StaticQuery
      query={graphql`
        query GetSidenavMDX {
          # Regex for all files that are NOT header.mdx OR index.mdx
          allMdx(
            filter: {
              fileAbsolutePath: {
                regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|footer.mdx|404.mdx|.js|.json)/"
              }
            }
          ) {
            edges {
              node {
                headings(depth: h1) {
                  value
                }
                fileAbsolutePath
                frontmatter {
                  title
                  order
                }
              }
            }
          }
        }
      `}
      render={({ allMdx, sidenavs }) => (
        <Box
          as="aside"
          sx={{
            flexGrow: 0,
            position: "relative",
            maxHeight: "1012px",
            height: "calc(100vh - 139px)",
            pt: "54px",
            pl: "8px",
            pr: "31px",
            boxShadow: (theme) =>
              `inset -1px 0px 0px ${theme.colors.strokeFaded};`,
          }}
        >
          <ul sx={{ m: 0, p: 0, listStyleType: "none" }}>
            <Tree edges={allMdx.edges} locale={locale} />
          </ul>
        </Box>
      )}
    />
  );
};

export default Sidenav;
