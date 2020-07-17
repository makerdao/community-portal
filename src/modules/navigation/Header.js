/** @jsx jsx */
import React from "react";

import { jsx, Text, Box, Flex, useColorMode } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization";
import Search from "@modules/search";
import { UrlConverter, TitleConverter } from "@utils";

const Header = () => {
  const { locale, DEFAULT_LOCALE, t } = useTranslation();
  const [colorMode, setColorMode] = useColorMode();

  const { headerFiles, headerConfigFiles } = useStaticQuery(graphql`
    query HeaderQuery {
      #Get files that have header/headerOrder frontmatter
      headerFiles: allMdx(
        filter: {
          frontmatter: { header: { in: true } }
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|example.mdx|index.mdx|404.mdx|footer.mdx)/"
          }
        }
      ) {
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
          internal {
            content
          }
        }
      }
    }
  `);

  const edges =
    DEFAULT_LOCALE !== locale
      ? headerFiles.edges.filter(({ node }) =>
          node.fileAbsolutePath.includes(`/${locale}/`)
        )
      : [];

  const defaultLocaleEdges = headerFiles.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes(`/${DEFAULT_LOCALE}/`)
  );

  const headerLinkEdges = edges.length !== 0 ? edges : defaultLocaleEdges;

  //allMDX will return all header.mdx files at top level locale folders.
  //Find only the one we need for our current locale and use it's body in the MDX renderer below.
  const HeaderLinks = headerLinkEdges
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
  ).internal.content.trim().split('\n').map((l,index) => {
    const url = l.match(/\(([^)]+)\)/)[1];
    const title = l.match(/\[([^)]+)\]/)[1];
   
    return (
        <Link to={url} key={`header-config-link-${index}`}>
          {title}
        </Link>
      );
  });

  return (
    <Box
      as="header"
      sx={{
        bg: "backgroundAlt",
      }}
    >
      <Flex
        sx={{
          maxWidth: "1364px",
          margin: "auto",
          p: '22px',
          py:'19px',
          alignItems: 'center',
          "& a": { color: "onBackgroundAlt", textDecoration: "none" },
          "& a.external-link > svg": { display: "none" },
          "& a:hover": {
            textDecoration: "none",
          },
          "& > ul": {
            p: 0,
            m: 0,
            listStyleType: "none",
            display: 'inline-flex'
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
            textDecoration: "none",
            color: "onBackgroundAlt",
            width: '52px',
            height: '52px'
          }}
        >
        <Icon
            name="maker"
            color="primary"
            size={'52px'}
          />
        </Link>
        <Flex sx={{flex: '1 1 auto', justifyContent: 'center', '& > a': {fontSize: '16px', p: 2}, '& > a:not(:last-child)': {mr: 5}}}>
        <Link
          to={`/${locale}/`}
          variant="nav"
          sx={{ 
            textDecoration: "none",
            color: "onBackgroundAlt",
          }}
        >
          
          <Text>{t("Home")}</Text>
        </Link>
        {HeaderLinks}
        {headerConfigLinks}
        {/* <MDXRenderer>{headerConfigLinks}</MDXRenderer> */}
        </Flex>
        <Flex
          sx={{
            display: "inlineBlock",
            alignItems: "center",
            color: 'onBackgroundAlt',
            width: '36%',
            flexDirection: 'row'
          }}
          
        >
        <Search
          collapse
          sx={{
            width: "100%",
            maxWidth: "337px",
            minWidth: '250px',
            mr: '25px',
            flex: '1 1 auto',
            fontFamily: 'body',
            display: 'inline-block',
            fontSize: '15px'
          }}
        />

        <Icon size={'32px'} name={"sun"} sx={{borderRadius: '100%', p: '2px', bg: colorMode !== 'default' ? 'transparent' : 'primary', color: colorMode !== 'default' ? 'onBackground' : 'text', mr: '21px', minWidth: '32px', minHeight: '32px', cursor: 'pointer', '&:hover': {bg: colorMode !== 'default' ?  'background' : ''}}} onClick={(e) => {
            if (colorMode !== 'default') {
              setColorMode("default");
            }
          }}/>

          <Icon size={'32px'} name={"moon"} sx={{borderRadius: '100%', p: '2px', bg: colorMode !== 'dark' ? 'transparent' : 'primary', color: colorMode !== 'dark' ? 'onBackgroundAlt' : 'background', minWidth: '32px', minHeight: '32px', cursor: 'pointer', '&:hover': {bg: colorMode !== 'dark' ? 'surfaceDark' : ''}}} onClick={(e) => {
            if (colorMode !== 'dark') {
              setColorMode("dark");
            }
          }}/>
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
