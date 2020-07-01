/** @jsx jsx */
import React from "react";

import { jsx, Text, Flex } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Link from "@modules/utility/Link";
import useTranslation from "@modules/utility/useTranslation";
import Shortcodes from "@modules/utility/shortcodes";
import Search from "@modules/search";
import { UrlConverter, TitleConverter } from "@utils";

const Header = () => {
  const { locale, t } = useTranslation();


  const { headerFiles, headerConfigFiles } = useStaticQuery(graphql`
    query SiteTitleQuery {
      #Get files that have header/headerOrder frontmatter
      headerFiles: allMdx(filter: { frontmatter: { header: { in: true } } }) {
        edges {
          node {
            frontmatter {
              title
              header
              headerOrder
            }
            fileAbsolutePath
            headings(depth: h1) {
              value
            }
          }
        }
      }

      #Get header.mdx files from only the top level locale folders. (ie. /content/en/header.mdx)
      headerConfigFiles: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/([^/]+)/?/(header.mdx)$/" }
        }
      ) {
        nodes {
          fileAbsolutePath
          body
        }
      }
    }
  `);

  //allMDX will return all header.mdx files at top level locale folders.
  //Find only the one we need for our current locale and use it's body in the MDX renderer below.
  const HeaderLinks = headerFiles.edges
    .filter(({ node }) => node.fileAbsolutePath.includes(`/${locale}/`))
    .sort((a, b) => {
      const aNode = {
        ...a.node,
        title: TitleConverter(a.node),
        headerOrder: a.node.frontmatter.headerOrder,
      };

      const bNode = {
        ...b.node,
        title: TitleConverter(b.node),
        headerOrder: b.node.frontmatter.headerOrder,
      };

      if (aNode.headerOrder === null && bNode.headerOrder !== null) {
        return 1;
      } else if (aNode.headerOrder !== null && bNode.headerOrder === null) {
        return -1;
      }

      if (aNode.headerOrder === null && bNode.headerOrder === null) {
        if (aNode.headerOrder === null && bNode.headerOrder === null) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title.localeCompare(bNode.title);
        }

        if (aNode.headerOrder === bNode.headerOrder) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title.localeCompare(bNode.title);
        }

        if (aNode.headerOrder < bNode.headerOrder) return -1;
        if (aNode.headerOrder > bNode.headerOrder) return 1;
        return 0;
      }

      return 0;
    })
    .map(({ node }, index) => {
      const title = TitleConverter(node);
      const url = UrlConverter(node);

      return (
        <Link to={url} key={`header-link-${index}`}>
          {title}
        </Link>
      );
    });

  const headerConfigLinks = headerConfigFiles.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${locale}/`)
  ).body;

  return (
    <Flex
      as="header"
      sx={{
        marginBottom: "1.45rem",
        p: 4,
        maxWidth: "1364px",
        margin: "auto",
        "& a": { color: "inherit" },
        "& a.external-link > svg": { display: "none" },
        "& a:not(:first-of-type)": {
          display: "inline-flex",
          alignItems: "center",
          p: 0,
          mr: "40px",
          textDecoration: "none",
        },
        "& > ul": {
          display: "inline-flex",
          alignItems: "center",
          p: 0,
          m: 0,
          listStyleType: "none",
        },
        "& > ul > li": {
          mr: "40px",
        },
        "& > ul > li > a": {
          textDecoration: "none",
        },
      }}
    >
      <Link
        to={`/${locale}/`}
        variant="nav"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          marginRight: "40px",
        }}
      >
        <Icon
          name="maker"
          color="text"
          sx={{
            width: "39px",
            height: "100%",
            mr: 2,
          }}
        />
        <Text>{t("Home")}</Text>
      </Link>
      {HeaderLinks}
      <MDXProvider components={Shortcodes}>
        <MDXRenderer>{headerConfigLinks}</MDXRenderer>
      </MDXProvider>
      <Search
        collapse
        sx={{
          ml: "auto",
          mr: 0,
          width: "100%",
          maxWidth: "347px",
        }}
      />
    </Flex>
  );
};

export default Header;
