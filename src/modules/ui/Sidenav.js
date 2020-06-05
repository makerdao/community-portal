/** @jsx jsx */
import { jsx } from "theme-ui";
import { AccordionNav } from "@theme-ui/sidenav";
import { useStaticQuery, graphql } from "gatsby";
import {useLocation} from '@reach/router'
import deepmerge from 'deepmerge'

import {usePage} from '@modules/layouts/PageContext';

const Sidenav = (props) => {
  const {locale} = usePage();
  const {pathname} = useLocation();
  let path = pathname.split('/');

  const DEFAULT_LOCALE = "en";
  const currentTopSection = path[2];

  const {allMdx} = useStaticQuery(graphql`
    {
      # Regex for all files that are NOT header.mdx OR index.mdx
      allMdx(filter: {fileAbsolutePath: {regex: "/\/([\\\\w]{2})\/(?!header.mdx|index.mdx)/"}}) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  //Don't render the sidenav if there's no top section.
  if (currentTopSection === undefined) {return null;}

  //Generates a an object with {title[String], slug[String]}
  //by using the filePath and title requirments of an MDX node. 
  const makeSidenavObjects = (edges, _locale) => {
            //Filter through edges for only files in our currentTopSection.
            //Do NOT include index file for the currentTopSection.
    return edges.filter(({node}) => node.fileAbsolutePath.indexOf(`/${_locale}/${currentTopSection}/`) !== -1 && node.fileAbsolutePath.indexOf(`/${_locale}/${currentTopSection}/index.mdx`) === -1).flatMap(({node: {headings, frontmatter, fileAbsolutePath}}) => { 
                //Remove index.mdx, .mdx, and trailing slashes from the end of the slug.
                const slug = fileAbsolutePath.slice(fileAbsolutePath.indexOf(`/${_locale}/`),fileAbsolutePath.length).replace(/(.mdx|index.mdx)$/gm,'').replace(/\/$/, "");
                const rawSlug = slug.replace(/^\/([\w]{2})\//, '/');
                //Use frontmatter title, first heading, or file name from slug.
                const title = frontmatter.title || (headings.length > 0 ? headings[0].value : null) || slug.split('/').pop();
            
                return { title, slug, rawSlug }
              })
  }

  const defaultLocaleFiles = makeSidenavObjects(allMdx.edges, DEFAULT_LOCALE); //Get default sidenav
  
  //NOTE(Rejon): This is a let on purpose. We're going to splice it down for the merged tree. 
  let currentLocaleFiles = DEFAULT_LOCALE !== locale ? makeSidenavObjects(allMdx.edges, locale) : []; //Get current locale sidenav

  //Merge them, replace all defaultLocaleFiles with currentLocaleFile if it exists. 
  const mergedTree = currentLocaleFiles.length <= 0 ? defaultLocaleFiles  : defaultLocaleFiles.map((file) => {
                            const findLocalizedFile = currentLocaleFiles.find((el, index) => {
                                const fileMatch =el.rawSlug === file.rawSlug

                                if (fileMatch) 
                                {
                                  currentLocaleFiles.splice(index, 1);
                                }

                                return fileMatch;
                              });
                            if (findLocalizedFile !== null && findLocalizedFile !== undefined) {
                              return findLocalizedFile;
                            }

                            return file;
                          }).concat(currentLocaleFiles)

  const tree = mergedTree.reduce(
   (accu, 
    {
      title, 
      slug, 
      rawSlug
    }
  ) => {
    const parts = slug.split('/');
    const slicedParts = parts.slice(3, parts.length) //Drop the empty string from the beginning of the array.
    let {items: prevItems} = accu;
    
    for (const part of slicedParts) {
      let tmp = prevItems && prevItems.find(({slugPart}) => slugPart === part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }

        prevItems = tmp.items;
      } else {
        tmp = {slugPart: part, title, url: slug, items: []};
        prevItems.push(tmp)
        
      }
    }

    //Sort by alphabetical order. 
    prevItems = prevItems.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });

    const slicedLength = parts.length - 1;
    const existingItem = prevItems.find(({slugPart}) => slugPart === parts[slicedLength]);

    if (existingItem) {
      existingItem.url = slug; 
      existingItem.title = title;
    }
    else {
      prevItems.push({
        slugPart: parts[slicedLength],
        url: slug,
        items: [],
        title
      })
    }

    return accu;
  },
  {items: []})



  console.log(tree)
  //TODO(Rejon): I left off on building the sidenav Tree. We're thinking solution 2, so maybe I can hold off until friday and just implement a basic solution for now. 
  //const hrefSlug = fileAbsolutePath.indexOf()
  //const title = frontmatter.title || headings[0] || fileAbsolutePath.split("/").pop().replace(".mdx", ""); 

  return <div>Hi</div>;
};

export default Sidenav;
