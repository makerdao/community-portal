/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx, Text, Box } from "theme-ui";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

import {useTranslation} from "@modules/localization/";
import {Link} from "@modules/navigation";
import { titleCase } from "@utils";

const Breadcrumbs = ({ children }) => {
  let { pathname } = useLocation();
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  const { allMdx } = useStaticQuery(graphql`
    query GetBreadcrumbsTitles {
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|footer.mdx|example.mdx|index.mdx|404.mdx)/"
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

  //NOTE(Rejon): Remove trailing slash or we'll be missing an element.
  let pathDirs = pathname.replace(/\/+$/, "").split("/");
  pathDirs = pathDirs.slice(2, pathDirs.length); //We only need everything after the locale.

  //Filter out all pages that aren't in our current locale AND aren't part of our current path directory.
  const edges =
    DEFAULT_LOCALE !== locale
      ? allMdx.edges.filter(
          ({ node }) =>
            node.fileAbsolutePath.indexOf(`/${locale}/`) !== -1 &&
            pathDirs.some((item) => {
              return node.fileAbsolutePath.includes(item);
            })
        )
      : [];

  let defaultLocaleEdges = allMdx.edges.filter(
    ({ node }) =>
      node.fileAbsolutePath.indexOf(`/${DEFAULT_LOCALE}/`) !== -1 &&
      pathDirs.some((item) => node.fileAbsolutePath.includes(item))
  );

  let editableEdges = edges; //<- So we don't directly edit the edges array as we traverse it.

  const mergedEdges =
    edges.length <= 0
      ? defaultLocaleEdges
      : defaultLocaleEdges
          .map((edge) => {
            const rawSlug = edge.node.fileAbsolutePath
              .slice(
                edge.node.fileAbsolutePath.indexOf(`/${DEFAULT_LOCALE}/`),
                edge.node.fileAbsolutePath.length
              )
              .replace(/(.mdx|index.mdx|.md)$/gm, "")
              .replace(/^\/([\w]{2})\//, "/");

            const localizedMatch = edges.find((el, index) => {
              const locRawSlug = el.node.fileAbsolutePath
                .slice(
                  el.node.fileAbsolutePath.indexOf(`/${locale}/`),
                  el.node.fileAbsolutePath.length
                )
                .replace(/(.mdx|index.mdx|.md)$/gm, "")
                .replace(/^\/([\w]{2})\//, "/");

              const match = locRawSlug === rawSlug;

              if (match) {
                editableEdges.splice(index, 1);
              }

              return match;
            });

            if (localizedMatch !== null && localizedMatch !== undefined) {
              return localizedMatch;
            }
            edge.node = { ...edge.node, rawSlug };

            return edge;
          })
          .concat(editableEdges);

  //Using our MDX data, we need our breadcrumbs to be in the order they appear in our path.
  //We also need them to include their TRUE title and url.
  const BreadcrumbData = pathDirs.map((pathDir) => {
    //Find the page that has it's filename match our pathDir.
    const _edge = mergedEdges.find(
      (e) =>
        e.node &&
        pathDir ===
          e.node.fileAbsolutePath
            .replace(/(.mdx|\/index.mdx|.md)$/gm, "")
            .split("/")
            .pop()
    );

    //In the case we're in a directory that DOESNT have a file with a path,
    // just return the path name with NO link.
    if (!_edge) {
      return {
        title: titleCase(pathDir.replace(/-|_|\./g, " ")),
      };
    }

    const { node } = _edge;

    const isFallback =
      node.fileAbsolutePath.includes(`/${DEFAULT_LOCALE}/`) &&
      DEFAULT_LOCALE !== locale;

    //ie. ___currentDirectory/locale/path/to/file
    const dirSlug = node.fileAbsolutePath.replace(
      /(.mdx|index.mdx|.md)$/gm,
      ""
    );

    //ie. locale/path/to/file
    const url = dirSlug.slice(
      dirSlug.indexOf(`/${isFallback ? DEFAULT_LOCALE : locale}/`),
      dirSlug.length
    );

    //TRUE title rule (Frontmatter -> First H1 -> Filename from URL)
    const title =
      node.frontmatter.title ||
      (node.headings.length > 0 ? node.headings[0].value : null) ||
      url.split("/").slice(-2, -1)[0];

    return {
      ...node,
      url,
      title,
      isFallback,
    };
  });

  return (
    <Box>
      <Link
        to={`/${locale}/`}
        sx={{ textDecoration: "none" }}
        partiallyActive={true}
        activeClassName={"active"}
      >
        {t("Home")}
      </Link>
      {" / "}
      {BreadcrumbData.map(({ title, url, isFallback }, index) => {
        const fallbackString = isFallback
          ? ` (${t("Language", null, null, DEFAULT_LOCALE)})`
          : "";
        //If this is the last crumb, then just render its name.
        if (index === BreadcrumbData.length - 1) {
          return (
            <Text sx={{ display: "inline-block" }} key={`breadcrumb-${index}`}>
              {`${title}${fallbackString}`}
            </Text>
          );
        }

        return (
          <Fragment key={`breadcrumb-${index}`}>
            {url ? (
              <Link to={url} sx={{ textDecoration: "none" }}>
                {index >= 2 ? (
                  <>{`...${fallbackString}`}</>
                ) : (
                  `${title}${fallbackString}`
                )}
              </Link>
            ) : (
              <>
                {index >= 2 ? (
                  <>{`...${fallbackString}`}</>
                ) : (
                  `${title}${fallbackString}`
                )}
              </>
            )}
            {` / `}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Breadcrumbs;
