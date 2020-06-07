//NOTE(Rejon): This context provider exists to pass context of page related props like locale, ect.

import React, { createContext, useContext, useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router"

export const PageDataContext = createContext();

export const usePage = () => {
  const context = useContext(PageDataContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageDataProvider");
  }

  return context;
};

const PageDataProvider = ({ children, value }) => {
  let {pathname} = useLocation();
  pathname = pathname.replace(/\/+$/, ""); //Remove trailing slashes

  const { allDirectory } = useStaticQuery(graphql`
    query getDefaultLocale {
      allDirectory(
        filter: { absolutePath: { regex: "/\/content\/([\\\\w{2}])[^/]$/" } }  
      ) {
        nodes {
          absolutePath
        }
      }
    }
  `);

  const locales = allDirectory.nodes.map((n) => n.absolutePath.split("/").pop());
  //NOTE(Rejon): This defaultLocale const may seem redundant, but it's ensure the site doesn't reload twice on mount.
  const defaultLocale = localStorage.getItem('locale') || navigator.language.split('-') || locales[0];
  const [locale, setLocale] = useState(defaultLocale);
  
  //Update local storage if it doesn't match app state.
  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale])

  //Update app locale if our url locale route has changed. 
  useEffect(() => {
    const uriSplit = pathname.split('/'); //uri will be (/locale/path/to/file). We need the locale part.
    //NOTE(Rejon): Index 1 of the uriSplit should be the locale, but in the case it's not we check.
    if (typeof uriSplit[1] === 'string' && locales.indexOf(uriSplit[1]) !== -1 && locale !== uriSplit[1] && uriSplit[1] !== '') {
      setLocale(uriSplit[1]);
      localStorage.setItem('locale', uriSplit[1]);
    }
  }, [pathname, locale, locales])

  return (
    <PageDataContext.Provider
      value={{
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
