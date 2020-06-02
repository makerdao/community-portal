//NOTE(Rejon): This context provider exists soley to pass down localtion and pageContext to non page components.

import React, { createContext, useContext, useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

export const PageDataContext = createContext();

export const usePage = () => {
  const context = useContext(PageDataContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageDataProvider");
  }

  return context;
};

const PageDataProvider = ({ children, value }) => {
  const { allDirectory } = useStaticQuery(graphql`
    query getDefaultLocale {
      allDirectory(
        filter: { absolutePath: { regex: "//content/([^/]+)[^/]$/" } }
      ) {
        nodes {
          absolutePath
        }
      }
    }
  `);

  const locales = allDirectory.nodes.map((n) => n.absolutePath.split("/").pop());
  const [locale, setLocale] = useState(locales[0]);

  const { location, pageContext, uri } = value;
  
  //Update local storage if it doesn't match app state.
  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale])

  //Update app locale if our url locale route has changed. 
  useEffect(() => {
    const uriSplit = uri.split('/'); //uri will be (/locale/path/to/file). We need the locale part.

    //NOTE(Rejon): Index 1 of the uriSplit should be the locale, but in the case it's not we check.
    if (typeof uriSplit[1] === 'string' && locales.indexOf(uriSplit[1]) && locale !== uriSplit[1] && uriSplit[1] !== '') {
      setLocale(uriSplit[1]);
    }
  }, [uri, locale, locales])

  return (
    <PageDataContext.Provider
      value={{
        location,
        pageContext,
        uri,
        setLocale,
        locale
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

export default PageDataContext;
export { PageDataProvider };
