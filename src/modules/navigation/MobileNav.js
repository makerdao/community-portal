//** @jsx jsx */
import React, { useState, useContext } from "react";
import { Box, Flex, Text, jsx, useColorMode } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { useLocation } from "@reach/router";

import { Link, SidenavNode } from "@modules/navigation";
import { useTranslation } from "@modules/localization";
import { NavigationContext } from "@modules/navigation/context";

const MobileNav = ({ headerLinks, onLinkClick }) => {
  const { sidenavData, pathDirs } = useContext(NavigationContext);
  const { locale, t } = useTranslation();
  const { pathname } = useLocation();

  //If there's sidenav data we're on a page with a topSection
  //If the sidenav data's top section matches our current url path section
  //AND if the sidenav for this top section has items render inside the submenu.
  //Else render the main menu
  const renderSubmenuInitial =
    sidenavData.items[0] !== undefined &&
    sidenavData.items[0].slugPart === pathDirs[0] &&
    sidenavData.items[0].items.length > 0;

  const [showMainMenu, setShowMainMenu] = useState(
    renderSubmenuInitial === false
  );

  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box
      sx={{
        height: "calc(100vh - 90px)",
        overflow: "auto",
        zIndex: 1,
        position: "fixed",
        width: "100%",
        pt: "30px",
      }}
    >
      {showMainMenu && (
        <Box sx={{ pb: "30px" }}>
          <Flex
            sx={{
              flexDirection: "column",
              fontSize: ["5vw", "5vw", null],
              mb: "33px",
            }}
          >
            <Link
              to={`/${locale}/`}
              variant="nav"
              onClick={onLinkClick}
              sx={{
                textDecoration: "none",
                color: "onBackgroundAlt",
                py: "2vh",
                px: "30px",
              }}
            >
              <Text>{t("Home")}</Text>
            </Link>
            {headerLinks.map(({ url, title }, index) => {
              //If we rendered the submenu initially AND we're still in the top section
              //we need to render a box that will act as a button instead of a Link.
              //That way when we click it, it opens the menu instead of going to the
              //destination.
              if (renderSubmenuInitial && sidenavData.items[0] !== undefined) {
                let urlDirs = url.replace(/\/+$/, "").split("/");
                urlDirs = urlDirs.slice(2, urlDirs.length);

                if (urlDirs[0] === sidenavData.items[0].slugPart) {
                  return (
                    <Box
                      sx={{
                        py: "2vh",
                        px: "30px",
                        textDecoration: "none",
                        color: "onBackgroundAlt",
                        position: "relative",
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "none",
                          color: "primary",
                        },
                      }}
                      onClick={() => setShowMainMenu(false)}
                      key={`mobile-nav-header-link-${index}`}
                    >
                      {title}
                      <Icon
                        name={
                          /^\/(?!\/)/.test(url) ? "chevron_right" : "increase"
                        }
                        size={"3.9vw"}
                        sx={{
                          position: "absolute",
                          right: 4,
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </Box>
                  );
                }
              }

              return (
                <Link
                  to={url}
                  sx={{
                    py: "2vh",
                    textDecoration: "none",
                    color: "onBackgroundAlt",
                    position: "relative",
                    px: "30px",
                    "&:hover": {
                      textDecoration: "none",
                    },
                  }}
                  onClick={onLinkClick}
                  key={`mobile-nav-header-link-${index}`}
                  hideExternalIcon
                >
                  {title}
                  <Icon
                    name={/^\/(?!\/)/.test(url) ? "chevron_right" : "increase"}
                    size={"3.9vw"}
                    sx={{
                      position: "absolute",
                      right: 4,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </Link>
              );
            })}
          </Flex>

          <Flex
            sx={{
              flexDirection: "row",
              px: "30px",
            }}
          >
            <Icon
              size={"9vw"}
              name={"sun"}
              sx={{
                borderRadius: "100%",
                p: "2px",
                bg: colorMode !== "default" ? "transparent" : "primary",
                color: colorMode !== "default" ? "onBackgroundAlt" : "text",
                mr: "30px",
                minWidth: "32px",
                minHeight: "32px",
                cursor: "pointer",
                "&:hover": {
                  bg: colorMode !== "default" ? "background" : "",
                },
              }}
              onClick={(e) => {
                if (colorMode !== "default") {
                  setColorMode("default");
                }
              }}
            />

            <Icon
              size={"9vw"}
              name={"moon"}
              sx={{
                borderRadius: "100%",
                p: "2px",
                bg: colorMode !== "dark" ? "transparent" : "primary",
                color: colorMode !== "dark" ? "onBackgroundAlt" : "background",
                minWidth: "32px",
                minHeight: "32px",
                cursor: "pointer",
                "&:hover": {
                  bg: colorMode !== "dark" ? "surfaceDark" : "",
                },
              }}
              onClick={(e) => {
                if (colorMode !== "dark") {
                  setColorMode("dark");
                }
              }}
            />
          </Flex>
        </Box>
      )}
      {!showMainMenu && (
        <Box>
          <Flex
            sx={{
              color: "primary",
              px: "30px",
              pt: "7px",
              pb: "37px",
              borderBottom: "1px solid",
              borderColor: "surfaceDark",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setShowMainMenu(true)}
          >
            <Icon name="chevron_left" />
            <Text
              variant="caps"
              sx={{
                color: "primary",
                fontSize: "3vw",
                display: "inline-block",
                ml: 2,
              }}
            >
              {t("Back_To_Main_Menu")}
            </Text>
          </Flex>
          {sidenavData && sidenavData.items[0] && (
            <Box sx={{ overflow: "auto", maxHeight: "80vh", pb: "10vh" }}>
              {sidenavData.items[0].slugPart && (
                <Link
                  onClick={onLinkClick}
                  sx={{
                    pb: "2vh",
                    fontSize: "5vw",
                    textDecoration: "none",
                    px: "30px",
                    color: "primary",
                    display: "block",
                    mb: 3,
                    pt: "calc(2vh + 6px)",
                    "&:hover": {
                      textDecoration: "none",
                    },
                  }}
                  to={`/${locale}/${sidenavData.items[0].slugPart}/`}
                >
                  {sidenavData.items[0].title}
                </Link>
              )}

              <ul
                sx={{
                  m: 0,
                  p: 0,
                  listStyleType: "none",
                  "& li > a": {
                    color: "onBackgroundAlt",
                    py: "2vh",
                    fontSize: "5vw",
                    textDecoration: "none",
                    position: "relative",
                    px: "30px",
                    "& > svg": {
                      width: "3.9vw",
                      height: "3.9vw",
                    },
                    "&:hover": {
                      textDecoration: "none",
                    },
                  },
                }}
              >
                {sidenavData.items[0].items.map((item, index) => (
                  <SidenavNode
                    key={`${item.url}-${index}`}
                    currentPath={pathname}
                    onClick={onLinkClick}
                    {...item}
                  />
                ))}
              </ul>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default MobileNav;
