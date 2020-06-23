/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx, Text, Box } from "theme-ui";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

import useTranslation from "@modules/utility/useTranslation";
import Link from "@modules/utility/Link";

const Breadcrumbs = ({ children }) => {
  let { pathname } = useLocation();
  const { locale, t } = useTranslation();

  const { allMdx } = useStaticQuery(graphql`
    query GetBreadcrumbsTitles {
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|example.mdx|index.mdx|404.mdx)/"
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
            }
          }
        }
      }
    }
  `);

  //Filter out all pages that aren't in our current locale.
  let edges = allMdx.edges.filter(
    ({ node }) => node.fileAbsolutePath.indexOf(`/${locale}/`) !== -1
  );

  //NOTE(Rejon): Remove trailing slash or we'll be missing an element.
  let pathDirs = pathname.replace(/\/+$/, "").split("/");
  pathDirs = pathDirs.slice(2, pathDirs.length); //We only need everything after the locale.

  //Using our MDX data, we need our breadcrumbs to be in the order they appear in our path.
  //We also need them to include their TRUE title and url.
  const BreadcrumbData = pathDirs.map((pathDir) => {
    //Find the page that has it's filename match our pathDir.
    const { node } = edges.find(
      ({ node }) =>
        pathDir ===
        node.fileAbsolutePath
          .replace(/(.mdx|\/index.mdx|.md)$/gm, "")
          .split("/")
          .pop()
    );

    //ie. ___currentDirectory/locale/path/to/file
    const slug = node.fileAbsolutePath.replace(/(.mdx|index.mdx|.md)$/gm, "");

    //ie. locale/path/to/file
    const url = slug.slice(slug.indexOf(`/${locale}/`), slug.length);

    //TRUE title rule (Frontmatter -> First H1 -> Filename from URL)
    const title =
      node.frontmatter.title ||
      (node.headings.length > 0 ? node.headings[0].value : null) ||
      url.split("/").slice(-2, -1)[0];

    return {
      ...node,
      url,
      title,
    };
  });

  return (
    <Box sx={{ mb: "8px" }}>
      <Link
        to={`/${locale}/`}
        sx={{ textDecoration: "none" }}
        partiallyActive={true}
        activeClassName={"active"}
      >
        {t("Home")}
      </Link>
      {" / "}
      {BreadcrumbData.map(({ title, url }, index) => {
        //If this is the last crumb, then just render its name.
        if (index === BreadcrumbData.length - 1) {
          return (
            <Text sx={{ display: "inline-block" }} key={`breadcrumb-${index}`}>
              {title}
            </Text>
          );
        }

        return (
          <Fragment key={`breadcrumb-${index}`}>
            <Link to={url} sx={{ textDecoration: "none" }}>
              {index >= 2 ? <>...</> : title}
            </Link>
            {` / `}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Breadcrumbs;
