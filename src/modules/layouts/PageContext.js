//NOTE(Rejon): This context provider exists to pass context of page related props like locale, lunr, ect.
//TODO: Start moving away from using the context api. It is becoming less useful as we come up with better solutions. 
import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";
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
              Language
              Search
              No_Results
              Home
              Page_Language_Selector
              Flag
              Available_Languages
              Need_Another_Language
              Join_translation_team
              Translations
              Touts {
                alt_defaultImage
                alt_altImage
              }
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
              Language
              Search
              No_Results
              Home
              Page_Language_Selector
              Flag
              Available_Languages
              Need_Another_Language
              Join_translation_team
              Translations
              Touts {
                alt_defaultImage
                alt_altImage
              }
            }
          }
        }
      }

      fr: allFrJson {
        edges {
          node {
            UI {
              Language
              Search
              No_Results
              Home
              Page_Language_Selector
              Flag
              Available_Languages
              Need_Another_Language
              Join_translation_team
              Translations
              Touts {
                alt_defaultImage
                alt_altImage
              }
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
      #       NOTE: Rejon for every single new key you add you MUST update all other locales.
      #             Just copy the schema from the GraphiQL tool at localhost:8000/__graphql
      #     }
      #   }
      # }
    }
  `);

  //NOTE(Rejon): Find a way to pull these down without the need for context api state management.
  const locales = allDirectory.nodes.map((n) =>
    n.absolutePath.split("/").pop()
  );

  const [lunr, setLunr] = useState(null); //TODO(Rejon): Will be removed with LUNR search changes.

  //TODO(Rejon): Find a better way to get localeStrings from UI.jsons loaded into useTranslation. 
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


  //TODO(Rejon): Will be removed with LUNR search changes. 
  //LUNR becomes available only via the window.
  //To make it easier for our app to access it we just set it in our app context.
  useLayoutEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then((lunr) => setLunr(lunr));
    }
  }, []);

  return (
    <PageDataContext.Provider
      value={{
        allLocales: locales,
        localeStrings,
        lunr,
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

export default PageDataContext;
export { PageDataProvider };
