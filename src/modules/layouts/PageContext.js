//NOTE(Rejon): This context provider exists to pass context of page related props like locale, ect.

import React, { createContext, useContext, useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

export const PageDataContext = createContext();

export const usePage = () => {
  const context = useContext(PageDataContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageDataProvider");
  }

  return context;
};

const PageDataProvider = ({ children, value }) => {
  let { pathname } = useLocation();
  pathname = pathname.replace(/\/+$/, ""); //Remove trailing slashes

  //NOTE(Rejon):This query gets our locales by using the path.
  //            It also pulls down all UI or other JSON to be used for any frontend
  //            UI elements.
  // TLDR: Gets our locales from the content folder. Pulls down our UI jsons.
  // Sidenote(Rejon): This approach to locale for UI is ugly, but I don't want to unnecessarily add i18n
  //                  for unnecessary bloat and friction.
  const { allDirectory, ...internalLocale } = useStaticQuery(graphql`
    query getDefaultLocale {
      allDirectory(
        filter: { absolutePath: { regex: "//content/([\\\\w{2}])[^/]$/" } }
      ) {
        nodes {
          absolutePath
        }
      }

      #IMPORT t() translated UI JSON here.
      #ENSURE that locale key matches locales of the content directory.
      en: allEnJson {
        edges {
          node {
            UI {
              Search
              No_Results
              Home
            }
          }
        }
      }

      #IMPORT t() translated UI JSON here.
      #ENSURE that locale key matches locales of the content directory.
      es: allEsJson {
        edges {
          node {
            UI {
              Search
              No_Results
              Home
            }
          }
        }
      }

      #IMPORT t() translated UI JSON you want here
      #ENSURE that locale key matches locales of the content directory.
      #EXAMPLE
      # fr: allFrJson {
      #   nodes {
      #     UI {
      #       No_Results
      #       Search
      #     }
      #   }
      # }
    }
  `);

  const locales = allDirectory.nodes.map((n) =>
    n.absolutePath.split("/").pop()
  );
  //NOTE(Rejon): This defaultLocale const may seem redundant, but it's ensure the site doesn't reload twice on mount.
  const defaultLocale = "en";
  const [locale, setLocale] = useState(defaultLocale);
  const [lunr, setLunr] = useState(null);

  //NOTE(Rejon): The object we get from the query is digusting.
  //This is so we can access our locale strings with ease.
  const localeStrings = Object.assign(
    {},
    ...Object.keys(internalLocale).map((key) => {
      let newObj = {};
      newObj[key] = internalLocale[key].edges[0].node.UI;
      return newObj;
    })
  );

  //Update local storage if it doesn't match app state.
  useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  //Update app locale if our url locale route has changed.
  useEffect(() => {
    const uriSplit = pathname.split("/"); //uri will be (/locale/path/to/file). We need the locale part.
    //NOTE(Rejon): Index 1 of the uriSplit should be the locale, but in the case it's not we check.
    if (
      typeof uriSplit[1] === "string" &&
      locales.indexOf(uriSplit[1]) !== -1 &&
      locale !== uriSplit[1] &&
      uriSplit[1] !== ""
    ) {
      setLocale(uriSplit[1]);
      localStorage.setItem("locale", uriSplit[1]);
    }
  }, [pathname, locale, locales]);

  useEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => setLunr(lunr));
    }
  }, [])

  return (
    <PageDataContext.Provider
      value={{
        setLocale,
        locale,
        localeStrings,
        DEFAULT_LOCALE_STRINGS: localeStrings["en"],
        lunr
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

export default PageDataContext;
export { PageDataProvider };
