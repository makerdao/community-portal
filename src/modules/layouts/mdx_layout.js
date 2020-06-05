import React from "react";
import SEO from "@modules/utility/seo";
import Sidenav from "@modules/ui/Sidenav";
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import {Button} from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby";

const DefaultLayout = (props) => {
  const { children, pageContext, uri } = props;
  const {
    title,
    author,
    date,
    description,
    keywords,
    hideSideNav,
    featuredImage
  } = pageContext.frontmatter;
  
  //For the sake of SEO we may want the page title to be based on the first h1 in our MDX file. 
  //if no title is specified in the metadata. 
  const getFirstHeading = () => {
	  //NOTE(Rejon): The children of layouts provided are MDX components!
	  //Find the first mdx child that's an H1
	  const firstHeading = React.Children.toArray(children).find(c => c.props.mdxType === 'h1');

	  //If we have an h1 in our file return it.
	  if (firstHeading !== undefined) {
		  return firstHeading.props.children;
	  }
	  
	  return undefined; 
  }

  //SEO page title priority is: frontmatter title -> First H1 in mdx -> Filename fallback from uri
  //NOTE(Rejon): If the page is an index of a directory, the uri split will be the name of the directory. ie. /en/bounties -> bounties
  const _pageTitle = title || getFirstHeading() || uri.split("/").pop()

  return (
    <>
      <SEO title={_pageTitle} description={description} keywords={keywords} />
      <Sidenav />
      <Breadcrumbs />
      <article>{children}</article>
    </>
  );
};

export default DefaultLayout;
