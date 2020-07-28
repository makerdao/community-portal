import React, { createContext, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { globalHistory } from "@reach/router"

import { useTranslation } from "@modules/localization/";
import calculateTreeData from "@modules/navigation/calculateTreeData";
import { UrlConverter, getLocaleFromPath } from "@utils";

export const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be within a NavigationProvider');
  }

  return context; 
}

const NavigationProvider = ({ children }) => {
  const { pathname } = globalHistory.location;
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

  const { allMdx } = useStaticQuery(graphql`
    query getNavigationData {
      # Regex for all files that are NOT config files
      allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
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
  `);
  const urlDropEndSlash = pathname.replace(/^\/|\/$/g, "").split("/");

  let pathDirs = urlDropEndSlash.slice(1);

  const urlNoLocale = pathDirs.join("/");

  //NOTE(Rejon): Must be in the shape that React Select expects for it's options.
  const languageSelectorData = allMdx.edges
    .filter(({ node }) => {
      //Drop the end slash, remove the locale, compare the string
      //TODO(Rejon): This works for now, but can probably be optimized with a Regex solution.
      const nodeURL = UrlConverter(node)
        .replace(/^\/|\/$/g, "")
        .split("/")
        .slice(1)
        .join("/");

      return (
        nodeURL === urlNoLocale &&
        getLocaleFromPath(node.fileAbsolutePath) !== locale
      );
    })
    .map(({ node }) => ({
      value: UrlConverter(node),
      label: t(
        "Language",
        null,
        null,
        getLocaleFromPath(node.fileAbsolutePath)
      ),
    }));

  const { sidenavData, breadcrumbData } = calculateTreeData(
    allMdx.edges,
    pathDirs[0],
    DEFAULT_LOCALE,
    locale,
    pathDirs
  );

  return (
    <NavigationContext.Provider
      value={{
        sidenavData: sidenavData || null,
        breadcrumbData: breadcrumbData || null,
        pathDirs: pathDirs || null,
        languageSelectorData: languageSelectorData || null,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
