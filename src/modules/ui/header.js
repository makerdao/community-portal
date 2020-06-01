/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {jsx} from 'theme-ui'
import { Icon } from "@makerdao/dai-ui-icons";
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {site, allDirectory} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      allDirectory(filter: {absolutePath: {regex: "/\/content\/([^\/]+)[^\/]$/"}}) {
        nodes {
          absolutePath
        }
      }
    }
  `)


  const headerLinks = allDirectory.nodes.map(n => {
      const directoryPath = n.absolutePath.split("/");
      let urlPath = directoryPath[directoryPath.length-1];
      let linkLabel = urlPath.replace(/_|-|\./g, ' ');

      return (<Link to={urlPath} sx={{textTransform: 'capitalize', mr: 2}}><p>{linkLabel}</p></Link>)
  });

  const siteTitle =site.siteMetadata.title;

  return (
    <header sx={{bg: 'primary', marginBottom: '1.45rem'}}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          'alignItems': 'center'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          {headerLinks}
        </div>
      </div>
    </header>
  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
