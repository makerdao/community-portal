/** @jsx jsx */
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { jsx, Test } from "theme-ui";
import { useLocation } from "@reach/router"

import {usePage} from '@modules/layouts/PageContext'
import Link from "@modules/utility/Link";

const Breadcrumbs = ({ children, pageContext }) => {
  let {pathname} = useLocation();
  const {locale} = usePage();
  pathname = pathname.replace(/\/+$/, ""); //Remove trailing slashes
  

  let currentPath = pathname;
  let fileName = pathname.split("/").splice(0,2); //NOTE(Rejon): Remove the first element, it'll always be an empty string.
  fileName.splice(0,2);

  return (
    <>
      <div>
        {pathname !== `/${locale}` && <><Link to={`/${locale}`}>Home</Link>{' /'}</>} 
        {fileName.map((pathName, index) => {
          currentPath += pathName + "/";
          let output = pathName;

          //Link to the page
          if (index !== fileName.length - 1) {
            return (
              <>
                {" "}
                <Link to={currentPath} sx={{ textTransform: "capitalize" }}>
                  {index >= 2 ? "..." : pathName}
                </Link>{" "}
                /{" "}
              </>
            );
          }

          return (
            <span
              sx={{ textTransform: "capitalize" }}
              key={`document-path-${index}`}
            >
              {" "}
              {pathName}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
