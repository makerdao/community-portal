//** @jsx jsx */
import React from "react";
import Select, { components } from "react-select";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation, useNavigate } from "@reach/router";
import { Box, jsx, Text, useThemeUI } from "theme-ui";

import { UrlConverter } from "@utils";
import {Link} from "@modules/navigation";
import {useTranslation} from "@modules/localization";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const LanguageSelector = () => {
  const { theme } = useThemeUI();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { locale, t, allLocales } = useTranslation();
  const pathStripRGX = new RegExp(`/${locale}/|/$`, "g");

  let pathnameStripped = pathname.replace(pathStripRGX, "");

  const { languagePages } = useStaticQuery(graphql`
    query GetLanguagePages {
      languagePages: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|footer.mdx|example.mdx|index.mdx|404.mdx)/"
          }
        }
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `);

  //Check against our current path with an optional trailing slash (for index pages)
  const pageLocaleRegex = new RegExp(
    `(/([\\w]{2})/${pathnameStripped})((/w+)+|/?)$`,
    "gm"
  );

  const existingLanguages = languagePages.edges
    .filter(({ node }) => {
      //Clean up the file path to drop file names and endings.
      //NOTE(Rejon): Our Regex fails if this doesn't pass!
      const pathWithoutFile = node.fileAbsolutePath
        .replace(/(.mdx|index.mdx|.md)$/gm, "")
        .replace(/\/$/, "");

      return (
        pageLocaleRegex.test(pathWithoutFile) &&
        !node.fileAbsolutePath.includes(`/${locale}/`)
      );
    })
    .map(({ node }) => {
      const value = UrlConverter(node);
      const _locale = node.fileAbsolutePath
        .slice(
          node.fileAbsolutePath.indexOf("/content/") + 8,
          node.fileAbsolutePath.indexOf("/content/") + 11
        )
        .replace(/^\//g, "");

      const label = t("Language", null, null, _locale);

      return {
        value,
        label,
      };
    });

  const onChange = ({value, label}) => {
    //Update local storage on switch
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", value.split("/")[1]);
    }

    //Google Analytics Tracking
    trackCustomEvent({
      category: "Language Selector",
      action: `Switch Page to ${label}`,
      label: `From Page: ${pathname} (${locale}) |  To Page: ${value} (${value.split("/")[1]})`
    });

    navigate(value);
  };

  const MenuList = (props) => {
    return (
      <>
        <components.MenuList {...props}>{props.children}</components.MenuList>
        <Box
          sx={{
            position: "relative",
            p: 2,
            pl: "12px",
            pr: "12px",
            "::before": {
              content: '""',
              height: "1px",
              width: "90%",
              position: "relative",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(rgba(83, 84, 106, 0.15), transparent)",
            },
          }}
        >
          <Text>{t("Need_Another_Language")}</Text>
          <Link to="/work_with_us/translations">{t("Translations")}</Link>
        </Box>
      </>
    );
  };

  //If we have existing languages or we're swapping, show the select.
  if (existingLanguages.length > 0) {
    //Override select component theme with our theme since it's not connected to theme-ui
    const uiSelectTheme = {
      primary: theme.colors.primary,
      primary75: theme.colors.success,
      primary50: theme.colors.primaryMuted,
      primary25: theme.colors.successAlt,
      danger: theme.colors.bear,
      dangerLight: theme.colors.bearAlt,
    };

    return (
      <>
        <Select
          sx={{ width: "262px" }}
          theme={(selectTheme) => ({
            ...selectTheme,
            fontFamily: theme.fonts.body,
            colors: { ...selectTheme.colors, ...uiSelectTheme },
          })}
          components={{ MenuList }}
          options={existingLanguages}
          onChange={onChange}
          aria-label={t("Page_Language_Selector")}
          value={{
            value: pathname,
            label: t("Language"),
          }}
        />
      </>
    );
  }

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "body",
        borderRadius: "4px",
        bg: "surface",
        position: "absolute",
        right: 0,
        top: 0,
      }}
    >
      <Text>{t("Available_Languages")}</Text>

      <Text sx={{ mb: 2, letterSpacing: ".7rem" }}>
        {allLocales
          .filter((loc) => loc !== locale)
          .map((loc) => t("Flag", null, null, loc))}
      </Text>

      <Text>{t("Need_Another_Language")}</Text>
      <Link to="/work_with_us/translations">{t("Join_translation_team")}</Link>
    </Box>
  );
};

export default LanguageSelector;
