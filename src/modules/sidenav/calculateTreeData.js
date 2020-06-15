//This is an algorithm that does a number of things:
// - Takes mdx edge data and constructs usable sidenav objects.
// - Creates sidenav objects for default language (en), and our current locale.
//     - NOTE: If our default is our current, no merging is needed.
// - Merge overlaps defaultLocaleFiles with currentLocaleFiles to ensure complete tree.
// - Reduces mergedTree items into usable sidenav object for rendering with sub directories.

//NOTE(Rejon): Parts of this solution was pulled from Hasura's gatsby-gitbook-starter.
//             specifically the sidenav reducer. https://github.com/hasura/gatsby-gitbook-starter/blob/master/src/components/sidebar/tree.js
export default (edges, currentTopSection, DEFAULT_LOCALE = 'en', currentLocale = 'en') => {
  //Generates a an object with {title[String], slug[String]}
  //by using the filePath and title requirments of an MDX node.
  const makeSidenavObjects = (edges, _locale) => {
    //Filter through edges for only files in our currentTopSection.
    //Do NOT include index file for the currentTopSection.
    return edges
      .filter(
        ({ node }) =>
          node.fileAbsolutePath.indexOf(`/${_locale}/${currentTopSection}/`) !==
            -1 &&
          node.fileAbsolutePath.indexOf(
            `/${_locale}/${currentTopSection}/index.mdx`
          ) === -1 
          
      )
      .flatMap(({ node: { headings, frontmatter, fileAbsolutePath } }) => {
        //Remove index.mdx, .mdx, and trailing slashes from the end of the slug.
        const slug = fileAbsolutePath
          .slice(
            fileAbsolutePath.indexOf(`/${_locale}/`),
            fileAbsolutePath.length
          )
          .replace(/(.mdx|index.mdx|.md)$/gm, "")
          .replace(/\/$/, "");
        const rawSlug = slug.replace(/^\/([\w]{2})\//, "/");

        const slugPart = slug.split("/").slice(-1)[0]
        //Use frontmatter title, first heading, or file name from slug.
        const title = frontmatter.title ||
          (headings.length > 0 ? headings[0].value : null) ||
          slugPart;

        return { title, slug, rawSlug, slugPart, order: frontmatter.order};
      });
  };

  //Default locale files transformed.
  const defaultLocaleFiles = makeSidenavObjects(edges, DEFAULT_LOCALE);
  //Current locale files transformed.
  //NOTE(Rejon): If our default locale is our current locale, set this
  //             as an empty array so we can skip the map overlap.
  //BE AWARE(Rejon): This array gets edited in the mergedLocaleFiles map.
  const currentLocaleFiles =
    DEFAULT_LOCALE !== currentLocale
      ? makeSidenavObjects(edges, currentLocale)
      : [];

  

  //Overlap merge our defaultLocaleFiles with our currentLocaleFiles
  const mergedLocaleFiles =
    currentLocaleFiles.length <= 0
      ? defaultLocaleFiles
      : defaultLocaleFiles
          .map((file) => {
            //See if this file in the default, exists in the localized directory.
            const findLocalizedFile = currentLocaleFiles.find((el, index) => {
              const fileMatch = el.rawSlug === file.rawSlug;

              //We found the localized file in our default locale files.
              //Remove it from our current locale files it'll be merged in.
              if (fileMatch) {
                currentLocaleFiles.splice(index, 1);
              }

              //Return the localized file.
              return fileMatch;
            });

            //If we found a localized file to merge overlap, then return IT.
            if (findLocalizedFile !== null && findLocalizedFile !== undefined) {
              return findLocalizedFile;
            }

            //No localized file found, keep current defaultLocale file.
            return file;
          })
          .concat(currentLocaleFiles); //Concat the rest of the locale files AFTER it's been spliced.

  //Reduce all of our mergedLocaleFiles into a object structure that closely resembles our final sidenav.
  return mergedLocaleFiles.reduce(
    (
      accu,
      { title, slug, rawSlug, slugPart, order }
    ) => {
      const parts = rawSlug.split('/');

      let { items: prevItems } = accu;

      const slicedParts = parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ slugPart }) => slugPart == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { slugPart: part, items: [] };
          prevItems.push(tmp);
        }

        //NOTE(Rejon): We sort at the top level here. 
        prevItems = tmp.items.sort((a,b) => {
        if (a.order === null && b.order !== null) {return 1;}
        else if (a.order !== null && b.order === null) {return -1;}

        if (a.order === null && b.order === null) {
          if (a.title === b.title) return 0;
          return a.title.localeCompare(b.title)
        }

        if (a.order === b.order) {
          if (a.title === b.title) return 0;
          return a.title.localeCompare(b.title)
        }

        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0; 
      });
      
      }

      const slicedLength = parts.length - 1;

      const existingItem = prevItems.find(({ slugPart }) => slugPart === parts[slicedLength]);
 
      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
        existingItem.order = order;
      } else {
        prevItems.push({
          slugPart: parts[slicedLength],
          url: slug,
          items: [],
          title,
          order
        });

        //NOTE(Rejon): We MUST sort prevItems again for the case of recursive depth ordering
        prevItems.sort((a,b) => {
          if (a.order === null && b.order !== null) {return 1;}
          else if (a.order !== null && b.order === null) {return -1;}

          if (a.order === null && b.order === null) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title)
          }

          if (a.order === b.order) {
            if (a.title === b.title) return 0;
            return a.title.localeCompare(b.title)
          }

          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          return 0; 
        });
      }

      return accu;
    },
    { items: [] }
  );
};
