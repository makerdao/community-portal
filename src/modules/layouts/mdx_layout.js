/** @jsx jsx */
import {Children, Fragment} from 'react';
import { Box, Flex, jsx } from "theme-ui";
import Sticky from "react-sticky-el";
import { useLocation } from "@reach/router";

import { LanguageSelector } from "@modules/localization";
import { Sidenav, Breadcrumbs } from "@modules/navigation";
import { StatusBanner } from "@modules/ui";
import { SEO } from "@modules/utility";


export default (props) => {
  const { children, pageContext, uri } = props;
  const {
    title,
    description,
    keywords,
    featuredImage,
    status,
    hideLanguageSelector,
    hideBreadcrumbs,
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
    const firstHeading = Children.toArray(children).find(
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

  const hasTopSection =
    currentTopSection !== undefined && currentTopSection !== "";

  const seo = {
    title: _pageTitle,
    description,
    keywords,
    featuredImage,
  };

  return (
    <Fragment>
      <Box sx={{width: ['100%', '100%', 'calc(100% - 234px)']}}>
      <SEO {...seo} />
      
      {status && (
        <Box sx={{ marginTop: hasTopSection ? 2 : 0 }}>
          <StatusBanner sticky {...statusProps} sx={{ width: "100%" }} />
        </Box>
      )}
      {(!hideBreadcrumbs || (hasTopSection && !hideLanguageSelector)) && (
        <Flex
          sx={{
            justifyContent: "space-between",
            position: "relative",
            alignItems: "flex-start",
            flexWrap: ["wrap", "wrap", "unset"],
            px: !hasTopSection ? [3, 3, 0] : 0,
          }}
        >
          {!hideBreadcrumbs && <Breadcrumbs />}
          
        </Flex>
      )}
      <Box>
        {children}
      </Box>
      </Box>
      {hasTopSection && !hideLanguageSelector && <LanguageSelector />}
    </Fragment>
  );
};
