import React, { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import {useTranslation} from "@modules/localization";
import { getInitialLocale } from "@utils";

//This page doesn't exist and solely acts as a reroute for language.
const IndexPage = () => {
  const navigate = useNavigate();
  const { DEFAULT_LOCALE } = useTranslation();

  //Run a query to get top level directories in the content folder.
  //ie. /content/en/  /content/es ect...
  const { allDirectory } = useStaticQuery(graphql`
    query getLocalePaths {
      allDirectory(
        filter: { absolutePath: { regex: "//content/([^/]+)[^/]$/" } }
      ) {
        nodes {
          absolutePath
        }
      }
    }
  `);

  //Navigate to locale index page. /en /es /de /fr ect...
  useLayoutEffect(() => {
    //Get list of locales from content directory top level folder paths.
    const locales = allDirectory.nodes.map((n) =>
      n.absolutePath.split("/").pop()
    );

    let initialLocale = getInitialLocale(locales, DEFAULT_LOCALE);

    //Replace current route with locale based index.
    navigate(`/${initialLocale}/`, { replace: true });
  }, [allDirectory.nodes, DEFAULT_LOCALE, navigate]);

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
};

export default IndexPage;
