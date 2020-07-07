/** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";
import { useLocation } from "@reach/router";

import {SEO} from "@modules/utility";
import {LanguageSelector} from "@modules/localization";
import {Sidenav, Breadcrumbs} from "@modules/navigation";
import {StatusBanner} from "@modules/ui";

export default (props) => {
  const { children, pageContext, uri } = props;

  const {
    title,
    description,
    keywords,
    featuredImage,
    status,
    hideLanguageSelector,
    hideSidenav,
  } = pageContext.frontmatter;

  const statusProps =
    typeof status === "object"
      ? { children: status.text, ...status }
      : { children: status };

  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentTopSection = path[2];

  //For the sake of SEO we may want the page title to be based on the first h1 in our MDX file.
  //if no title is specified in the metadata.
  const getFirstHeading = () => {
    //NOTE(Rejon): The children of layouts provided are MDX components!
    //Find the first mdx child that's an H1
    const firstHeading = React.Children.toArray(children).find(
      (c) => c.props.mdxType === "h1"
    );

    //If we have an h1 in our file return it.
    if (firstHeading !== undefined) {
      return firstHeading.props.children;
    }

    return undefined;
  };

  //SEO page title priority is: frontmatter title -> First H1 in mdx -> Filename fallback from uri
  //NOTE(Rejon): If the page is an index of a directory, the uri split will be the name of the directory. ie. /en/bounties -> bounties
  const _pageTitle = title || getFirstHeading() || uri.split("/").pop();

  return (
    <>
      <SEO
        title={_pageTitle}
        description={description}
        keywords={keywords}
        featuredImage={featuredImage}
      />
      {currentTopSection !== undefined &&
        currentTopSection !== "" &&
        !hideSidenav && (
          <Sticky
            boundaryElement=".content-boundary"
            sx={{ width: "20%", minWidth: "260px" }}
            dontUpdateHolderHeightWhenSticky={true}
            style={{ position: "relative" }}
            hideOnBoundaryHit={false}
          >
            <Sidenav />
          </Sticky>
        )}

      <Flex sx={{ flexGrow: 1, flexDirection: "column", width: "80%" }}>
        {status && (
          <StatusBanner
            sticky
            {...statusProps}
            sx={{ width: "100%" }}
            hideSpacer
          />
        )}
        <article
          sx={{
            pl:
              currentTopSection !== undefined && currentTopSection !== ""
                ? "64px"
                : 0,
            mt:
              currentTopSection !== undefined && currentTopSection !== ""
                ? "74px"
                : 0,
            pr: 4,
          }}
        >
          <Flex
            sx={{
              justifyContent: "space-between",
              position: "relative",
              mb: "28px",
              alignItems: "center",
            }}
          >
            <Breadcrumbs sx={{ flexGrow: 1 }} />
            {currentTopSection !== undefined &&
              currentTopSection !== "" &&
              !hideLanguageSelector && <LanguageSelector />}
          </Flex>
          <Box
            sx={
              currentTopSection !== undefined &&
              currentTopSection !== "" &&
              !hideSidenav
                ? {
                    "& > *:first-child, & > *:nth-child(2)": {
                      maxWidth: "calc(100% - 211px)",
                    },
                    "& > *:nth-child(2)": { mb: "32px" },
                  }
                : {}
            }
          >
            {children}
          </Box>
        </article>
      </Flex>
    </>
  );
};
