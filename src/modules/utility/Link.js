/** @jsx jsx */
import React from 'react'
import { Link as GatsbyLink } from "gatsby"
import { usePage } from '@modules/layouts/PageContext'
import { jsx, Link as ThemeLink } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, icon, activeClassName, partiallyActive, disabled, ...other }) => {
  const {locale} = usePage();
  
  // Tailor the following test to your environment.
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const hasLocale = /^\/([\w]{2})\//.test(to);

    //If it doesn't have the locale specified use the current locale.
    //NOTE(Rejon): While I could also check if it has a locale and if it exists,
    //             I think it could mess with the expectations of how links work. 
    //             If an invalid locale is passed, then it should go to a 404 page, unless the team specifies otherwise. 
    if (!hasLocale) {
      to = `/${locale}${to}`;
    }

    return (
        <GatsbyLink
          to={!disabled ? to : ''}
          sx={{pointerEvents: disabled ? 'none' : 'initial'}} 
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          sx={{
          color: "primary",
          textDecoration: 'none',
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
          {icon && <>{` ${<Icon name={icon} sx={{verticalAlign: 'middle'}}/>}`}</>}
          {children}
        </GatsbyLink>
    )
  }
  return (
      <ThemeLink 
        href={!disabled ? to : ''}
        sx={{pointerEvents: disabled ? 'none' : 'initial'}}
        className="external-link"
        {...other}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {icon && <>{` ${<Icon name={icon} sx={{verticalAlign: 'middle'}}/>}`}</>}
        {children}
        <Icon name='increase' sx={{top: '2px', position: 'relative'}}/>
      </ThemeLink>
  )
}
export default Link
