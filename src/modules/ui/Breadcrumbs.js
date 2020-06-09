/** @jsx jsx */
import React, {Fragment} from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx, Text } from "theme-ui";
import { useLocation } from "@reach/router"

import {usePage} from '@modules/layouts/PageContext'
import Link from "@modules/utility/Link";

const Breadcrumbs = ({ children, pageContext }) => {
  let {pathname} = useLocation();
  const {locale} = usePage();
  pathname = pathname.replace(/\/+$/, ""); //Remove trailing slashes
  
  let currentPath = pathname;
  let fileName = pathname.split("/"); //NOTE(Rejon): Remove the first element, it'll always be an empty string.
  fileName.splice(0,2);

  return (
    <>
      <div>
        {pathname !== `/${locale}/` && <><Link to={`/${locale}/`} sx={{textDecoration: 'none'}} partiallyActive={true} activeClassName={'active'}>Home</Link>{' /'}</>} 
        {fileName.map((pathName, index) => {
          currentPath += pathName + "/";
          let output = pathName;

          //Link to the page
          if (index !== fileName.length - 1) {
            return (
              <Fragment key={`document-path-${index}`}>
                {" "}
                <Link to={currentPath} className="active" sx={{ textTransform: "capitalize", textDecoration: 'none' }}>
                  {index >= 2 ? "..." : pathName}
                </Link>{" "}
                /{" "}
              </Fragment>
            );
          }

          return (
            <Text
              sx={{ textTransform: "capitalize", display: 'inline-block' }}
              key={`document-path-${index}`}
            >
              {" "}
              {pathName}
            </Text>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
