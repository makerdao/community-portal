/** @jsx jsx */
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import useTranslation from "@modules/utility/useTranslation";
import { jsx, Link as ThemeLink } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

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
  ...other
}) => {
  const { locale } = useTranslation();

  // Tailor the following test to your environment.
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const hasLocale = /^\/([\w]{2})\//.test(to);

    //If it doesn't have the locale specified use the current locale.
    //NOTE(Réjon): While I could also check if it has a locale and if it exists,
    //             I think it could mess with the expectations of how links work.
    //             If an invalid locale is passed, then it should go to a 404 page, unless the team specifies otherwise.
    //NOTE(Rejon): There's no slash in this string because CCs will write the md with a starting slash.
    if (!hasLocale) {
      to = `/${locale}${to}`;
    }

    return (
      <GatsbyLink
        to={!disabled ? to : ""}
        sx={{ pointerEvents: disabled ? "none" : "initial" }}
        activeClassName={
          activeClassName || (to !== `/${locale}/` ? "active" : null)
        }
        partiallyActive={
          partiallyActive || (to !== `/${locale}/` ? true : null)
        }
        sx={{
          color: "primary",
          textDecoration: "none",
          transition: "all .1s ease",
          "&.active": {
            color: "primary",
          },
          "&:hover": {
            color: "primary",
          },
          "&:hover > svg": {
            color: "primary",
          },
        }}
        {...other}
      >
        {/*add space as workaround for svg padding resizing issue*/}
        {icon && (
          <>{` ${(<Icon name={icon} sx={{ verticalAlign: "middle" }} />)}`}</>
        )}
        {children}
      </GatsbyLink>
    );
  }

  return (
    <ThemeLink
      href={!disabled ? to : ""}
      sx={{
        pointerEvents: disabled ? "none" : "initial",
        transition: "all .1s ease",
        color: 'primary',
        "&.active": {
            color: "primary",
          },
          "&:hover": {
            color: "primary",
          },
          "&:hover > svg": {
            color: "primary",
        },
      }}
      className="external-link"
      {...other}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {icon && (
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
      <Icon name="increase" className="increase" sx={{ top: "2px", position: "relative", ml:"2px" }} />
    </ThemeLink>
  );
};
export default Link;
