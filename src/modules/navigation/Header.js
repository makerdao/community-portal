/** @jsx jsx */
import React, { useEffect, useRef } from "react";

import { jsx, Text, Box, Flex, useColorMode, useThemeUI } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import throttle from "lodash.throttle";

import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization";
import Search from "@modules/search";
import { UrlConverter, TitleConverter } from "@utils";

var lastScroll = 0; //<- Last scroll top of window. Defined outside because we don't want to re-render for scrolling.
var delta = 5; //<- Rate of change in scroll needed to hide the header.

const Header = () => {
  const headerContainer = useRef(null);
  const { theme } = useThemeUI();
  const breakpoints = theme.breakpoints.slice(0, -1); //NOTE(Rejon): The last element of the break point array SHOULD be infinity.

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
        <Link to={url} key={`header-link-${index}`} hideExternalIcon>
          {title}
        </Link>
      );
    });

  const headerConfigLinks = headerConfigFiles.nodes
    .find((n) => n.fileAbsolutePath.includes(`/${locale}/`))
    .internal.content.trim()
    .split("\n")
    .map((l, index) => {
      const url = l.match(/\(([^)]+)\)/)[1];
      const title = l.match(/\[([^)]+)\]/)[1];

      return (
        <Link to={url} key={`header-config-link-${index}`} hideExternalIcon>
          {title}
        </Link>
      );
    });

  //TODO(Rejon): THROTTLE THIS
  const onScroll = () => {
    if (headerContainer.current) {
      const inMobileRange = breakpoints.some(
        (n) => window.innerWidth <= parseInt(n)
      );

      if (inMobileRange) {
        const headerHeight = headerContainer.current.offsetHeight;
        const currentScroll = window.scrollY;

        //Scroll must be more than the delta.
        if (Math.abs(lastScroll - currentScroll) <= delta) return;

        //If you scroll down AND our scroll top is greater than our header,
        //hide it.
        if (currentScroll > lastScroll && currentScroll > headerHeight) {
          headerContainer.current.classList.add("hide-nav");
        } else {
          //We've scrolled up OR our scrollTop is less than the header.
          headerContainer.current.classList.remove("hide-nav");
        }

        lastScroll = currentScroll;
      } else {
        //Render the header as normal without the "show/hide logic"
        headerContainer.current.classList.remove("hide-nav");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", throttle(onScroll, 300));

      return () => {
        window.removeEventListener("scroll", throttle(onScroll, 300));
      };
    }
  }, []);

  return (
    <Box
      as="header"
      ref={headerContainer}
      sx={{
        bg: "backgroundAlt",
        position: ["fixed", "fixed", "unset"],
        width: "100%",
        zIndex: "1",
        transition: "all .32s ease-in-out",
        transform: "translateY(0px)",
        "&.hide-nav": {
          transform: "translateY(-190px)",
        },
      }}
    >
      <Flex
        sx={{
          maxWidth: "1364px",
          margin: "auto",
          p: "22px",
          py: "19px",
          alignItems: "center",
          "& a": { color: "onBackgroundAlt", textDecoration: "none" },
          "& a.external-link > svg": { display: "none" },
          "& a:hover": {
            textDecoration: "none",
          },
          "& > ul": {
            p: 0,
            m: 0,
            listStyleType: "none",
            display: "inline-flex",
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
            width: "52px",
            height: "52px",
          }}
        >
          <Icon name="maker" color="primary" size={"52px"} />
        </Link>
        <Flex
          sx={{
            display: ["none", "none", "flex"],
            flex: "auto",
            ml: 3,
            alignItems: "center",
            justifyContent: "center",
            "& > a": { fontSize: "16px", p: 2, textAlign: "center" },
            "& > a:not(:last-child)": { mr: "3%" },
          }}
        >
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
            width: ["100%", "100%", "auto"],
            ml: "1rem",
            alignItems: "center",
            color: "onBackgroundAlt",
            flexDirection: "row",
          }}
        >
          <Search
            collapse
            sx={{
              width: "100%",
              minWidth: "270px",
              mr: ["1rem", "1rem", "1vw"],

              fontFamily: "body",
              display: "inline-block",
              fontSize: "15px",
            }}
          />

          <Icon
            size={"32px"}
            name={"sun"}
            sx={{
              borderRadius: "100%",
              display: ["none", "none", "inline-block"],
              p: "2px",
              bg: colorMode !== "default" ? "transparent" : "primary",
              color: colorMode !== "default" ? "onBackgroundAlt" : "text",
              mr: "21px",
              minWidth: "32px",
              minHeight: "32px",
              cursor: "pointer",
              "&:hover": {
                bg: colorMode !== "default" ? "background" : "",
              },
            }}
            onClick={(e) => {
              if (colorMode !== "default") {
                setColorMode("default");
              }
            }}
          />

          <Icon
            size={"32px"}
            name={"moon"}
            sx={{
              borderRadius: "100%",
              display: ["none", "none", "inline-block"],
              p: "2px",
              bg: colorMode !== "dark" ? "transparent" : "primary",
              color: colorMode !== "dark" ? "onBackgroundAlt" : "background",
              minWidth: "32px",
              minHeight: "32px",
              cursor: "pointer",
              "&:hover": {
                bg: colorMode !== "dark" ? "surfaceDark" : "",
              },
            }}
            onClick={(e) => {
              if (colorMode !== "dark") {
                setColorMode("dark");
              }
            }}
          />
        </Flex>

        <Icon
          size={"39px"}
          onClick={(e) => {
            console.log("ok");
          }}
          name={"menu"}
          sx={{
            color: "onBackgroundAlt",
            cursor: "pointer",
            display: ["initial", "initial", "none"],
          }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
