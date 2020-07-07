/** @jsx jsx */
import React from "react";

import { Link as GatsbyLink } from "gatsby";
import {useTranslation} from "@modules/localization";
import { jsx, Link as ThemeLink } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  icon,
  activeClassName,
  partiallyActive,
  disabled,
  hideExternalIcon,
  originalType,
  mdxType,
  href,
  gaProps,
  ...other
}) => {
  const { locale } = useTranslation();
  let linkHref = to || href;

  // Tailor the following test to your environment.
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(linkHref);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const hasLocale = /^\/([\w]{2})\//.test(linkHref);

    //If it doesn't have the locale specified use the current locale.
    //NOTE(Réjon): While I could also check if it has a locale and if it exists,
    //             I think it could mess with the expectations of how links work.
    //             If an invalid locale is passed, then it should go to a 404 page, unless the team specifies otherwise.
    //NOTE(Rejon): There's no slash in this string because CCs will write the md with a starting slash.
    if (!hasLocale && linkHref) {
      linkHref = `/${locale}${linkHref}`;
    }

    return (
      <GatsbyLink
        to={!disabled ? linkHref : ""}
        activeClassName={
          activeClassName || (linkHref !== `/${locale}/` ? "active" : null)
        }
        partiallyActive={
          partiallyActive || (linkHref !== `/${locale}/` ? true : null)
        }
        onClick={e => {
          const eventProps = Object.assign({
            category: "Internal Link",
            action: 'Click',
            label: linkHref
          }, gaProps);

          trackCustomEvent(eventProps);
        }}
        sx={{
          color: !linkHref ? "bear" : "primary",
          textDecoration: !linkHref ? "line-through" : "none",
          textShadow: (theme) =>
            !linkHref
              ? `0px 0px 10px ${theme.colors.bear}, 1px 1px 5px ${theme.colors.warning}`
              : "none",
          border: !linkHref ? "4px dashed red" : "",
          cursor: !linkHref ? "not-allowed" : "pointer",
          pointerEvents: disabled ? "none" : "initial",
          transition: "all .1s ease",
          "&.active": {
            color: !linkHref ? "bear" : "primary",
          },
          "&:hover": {
            color: !linkHref ? "bear" : "primary",
          },
          "&:hover > svg": {
            color: !linkHref ? "bear" : "primary",
          },
          "& > *": {
            display: "inline-block",
          },
        }}
        {...other}
      >
        {/*add space as workaround for svg padding resizing issue*/}
        {icon && linkHref && (
          <>{` ${(
            <Icon
              name={icon}
              size={"2rem"}
              sx={{
                verticalAlign: "middle",
                top: "-2px",
                position: "relative",
              }}
            />
          )}`}</>
        )}
        {children}
      </GatsbyLink>
    );
  }

  ///HTTPS/HTTP checks
  //Ensure ALL links are HTTPS
  const hasHTTP = /^(http|https):\/\//i.test(linkHref);

  if (!hasHTTP) {
    linkHref = `https://${linkHref}`;
  } else if (!/^(https)?:\/\//i.test(linkHref)) {
    linkHref = linkHref.replace(/^http?:\/\//, "https://");
  }

  return (
    <ThemeLink
      href={!disabled ? linkHref : ""}
      as={OutboundLink}
      eventCategory={gaProps ? gaProps['category'] : null}
      eventAction={gaProps ? gaProps['action'] : null}
      eventLabel={gaProps ? gaProps['label'] : null}
      eventValue={gaProps ? gaProps['value'] : null}
      sx={{
        pointerEvents: disabled ? "none" : "initial",
        transition: "all .1s ease",
        textDecoration: !linkHref ? "line-through " : "none",
        textShadow: (theme) =>
          !linkHref
            ? `0px 0px 10px ${theme.colors.bear}, 1px 1px 5px ${theme.colors.warning}`
            : "none",
        border: !linkHref ? "4px dashed red" : "",
        color: !linkHref ? "bear" : "primary",
        "&.active,": {
          color: !linkHref ? "bear" : "primary",
        },
        "&:hover": {
          color: !linkHref ? "bear" : "primary",
        },
        "&:hover > svg": {
          color: !linkHref ? "bear" : "primary",
        },
        "& > *": {
          display: "inline-block",
        },
      }}
      className="external-link"
      {...other}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {icon && linkHref && (
        <>
          {` `}
          <Icon
            name={icon}
            size={"2rem"}
            sx={{ verticalAlign: "middle", top: "-2px", position: "relative" }}
          />
        </>
      )}
      {children}
      {!hideExternalIcon && (
        <Icon
          name="increase"
          className="increase"
          sx={{ top: "2px", position: "relative", ml: "2px" }}
        />
      )}
    </ThemeLink>
  );
};
export default Link;
