/** @jsx jsx */
import React from 'react'
import { Link as GatsbyLink } from "gatsby"
import theme from "@src/gatsby-plugin-theme-ui/index.js";
import { Icon } from "@makerdao/dai-ui-icons";
import { jsx, Link as ThemeLink } from 'theme-ui'
import useTranslation from '@modules/utility/useTranslation'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, icon, target, isButton=false, activeClassName, partiallyActive, variant, ...other }) => {
  const {locale} = useTranslation();
  
  // Tailor the following test to your environment.
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
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
        to={to}
        sx={isButton ? {
          color: "inherit",
            textDecoration: 'none',
            '&.active': {
              color: 'inherit',
            },
            '&:hover': {
              color: 'inherit'
            },
            '&:hover > svg': {
              color: 'inherit'
            }
        } : theme.styles.a}
        activeClassName={activeClassName || (to !== `/${locale}/` ? 'active' : null)}
        partiallyActive={partiallyActive || (to !== `/${locale}/` ? true : null)}
        {...other}
      >
          {<Icon name={icon} sx={{verticalAlign: 'middle'}}/>}
          {icon ? '\u00A0': ''} {/*add space as workaround for svg padding resizing issue*/}
          {children}
      </GatsbyLink>
    )
  }

  return (
    <ThemeLink 
      href={to}
      target={target}
        sx={isButton ? {
          color: "inherit",
            textDecoration: 'none',
            '&.active': {
              color: 'inherit',
            },
            '&:hover': {
              color: 'inherit'
            },
            '&:hover > svg': {
              color: 'inherit'
            }
        } : theme.styles.a}
      
      variant="nav" {...other}
    >
      <Icon name={icon} sx={{verticalAlign: 'middle'}}/>
      {icon ? '\u00A0': ''}
      {children}
      <Icon name='increase' sx={{paddingRight: '1'}}/>
    </ThemeLink>
  )
}
export default Link
