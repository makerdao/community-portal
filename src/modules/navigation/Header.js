/** @jsx jsx */
import React, { useEffect, useState, useRef } from "react";

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
var scrollBeforeMenuOpen = 0; //<- Scroll position of window prior to 
var isShowingMenu = false; //<- For document  event listeners to know if the menu is being shown or not.

const Header = () => {
  const headerContainer = useRef(null);
  const { theme } = useThemeUI();
  const breakpoints = theme.breakpoints.slice(0, -1); //NOTE(Rejon): The last element of the break point array SHOULD be infinity.

  const [showMenu, setShowMenu] = useState(false);
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

  const onScroll = () => {
    if (headerContainer.current && !isShowingMenu) {
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

  const onMenuClick = (e) => {
    if (typeof window !== "undefined") {
      
      //Solution from: https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
      if (showMenu) { //We're hiding the menu. Remove the fixed styling, put scroll position back. 
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollBeforeMenuOpen);
      } 
      else { //We're showing the menu. Add fixed styling so the user doesn't scroll the window when in the menu.
        scrollBeforeMenuOpen = window.scrollY; 
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollBeforeMenuOpen}px`;
      }

      isShowingMenu = !showMenu;
      setShowMenu(!showMenu);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <Box
      as="header"
      ref={headerContainer}
      sx={{
        bg: "backgroundAlt",
        position: ["fixed", "fixed", "relative"],
        width: "100%",
        zIndex: "10",
        transition: "all .32s ease-in-out",
        transform: "translateY(0px)",
        top: 0,
        "&.hide-nav": {
          transform: "translateY(-190px)",
        },
      }}
    >
      <Flex
        sx={{
          maxWidth: "1364px",
          zIndex: 1, 
          position: 'relative',
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
          onClick={onMenuClick}
          name={showMenu ? 'close' : "menu"}
          sx={{
            p: showMenu ? '7px' : '0px', //NOTE(Rejon): Close and Menu have different viewbox sizes in the dai-ui spec.
            color: "onBackgroundAlt",
            cursor: "pointer",
            display: ["initial", "initial", "none"],
          }}
        />
      </Flex>
      <Box sx={{display: ['initial', 'initial', 'none']}}>
        <Box 
          className={showMenu ? 'visible' : ''} 
          sx={{
            bg: 'backgroundAlt', 
            right: '23px', 
            top: '25px', 
            position: 'fixed', 
            width: '100px', 
            height: '100px', 
            borderRadius:'10000px', 
            zIndex: 0, 
            transform: 'scale(0)', 
            transition: 'all .32s cubic-bezier(0.65, 0, 0.35, 1)', 
            '&.visible': {transform: 'scale(202)'}
          }}
        >
        </Box>
        <Box sx={{
          zIndex: 2, 
          position: 'fixed', 
          width: '100%', 
          height: 'calc(100vh - 90px)', 
          display: showMenu ? ['block', 'block', 'none'] : 'none'}}
        >
          Hi!
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
