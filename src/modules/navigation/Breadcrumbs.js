/** @jsx jsx */
import React, { Fragment, useContext } from "react";
import { jsx, Text, Box } from "theme-ui";

import { NavigationContext } from "@modules/navigation/context";
import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization/";

const Breadcrumbs = ({ children }) => {
  const { breadcrumbData, pathDirs } = useContext(NavigationContext);
  const { locale, t, DEFAULT_LOCALE } = useTranslation();

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
      {pathDirs.map((p, index) => {
        const { title, url } = breadcrumbData.find((n) => n.part === p);

        //Render "Title (LOCALE)" if the breadcrumb is a fallback route to EN.
        //NOTE(Rejon): This is a super rare case where in-between files of a director don't
        //             overlap properly between the current locale and default locale.
        const isFallback =
          url.includes(`/${DEFAULT_LOCALE}/`) && DEFAULT_LOCALE !== locale;
        const fallbackString = isFallback
          ? ` (${t("Language", null, null, DEFAULT_LOCALE)})`
          : "";

        //If this is the last crumb, then just render its name.
        if (index === breadcrumbData.length - 1) {
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
