import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import useTranslation from "@modules/utility/useTranslation";

//This page doesn't exist and solely acts as a reroute for language.
const IndexPage = () => {
  const navigate = useNavigate();
  const { locale } = useTranslation();

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
  useEffect(() => {
    //Get list of locales from content directory top level folder paths.
    const locales = allDirectory.nodes.map((n) =>
      n.absolutePath.split("/").pop()
    );
    let initialLocale = locale;
    //Check if the locale is in local storage.
    const localeSetting = localStorage.getItem("locale");

    //If it is and it exists in the content directory, we've got a valid locale.
    if (localeSetting && locales.indexOf(localeSetting) !== -1) {
      initialLocale = localeSetting;
    }

    //Check browser settings for current language.
    const [browserSetting] = navigator.language.split("-");

    //If it is and it exists in the content directory, we've got a valid locale.
    if (locales.indexOf(browserSetting) !== -1) {
      initialLocale = browserSetting;
    }

    //Replace current route with locale based index.
    navigate(`/${initialLocale}/`, { replace: true });
  }, [allDirectory.nodes, locale, navigate]);

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
};

export default IndexPage;
