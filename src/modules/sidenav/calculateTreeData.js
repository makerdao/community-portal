//This is an algorithm that does a number of things:
// - Takes mdx edge data and constructs usable sidenav objects.
// - Creates sidenav objects for default language (en), and our current locale.
//     - NOTE: If our default is our current, no merging is needed.
// - Merge overlaps defaultLocaleFiles with currentLocaleFiles to ensure complete tree.
// - Reduces mergedTree items into usable sidenav object for rendering with sub directories.

//NOTE(Rejon): Parts of this solution was pulled from Hasura's gatsby-gitbook-starter.
//             specifically the sidenav reducer. https://github.com/hasura/gatsby-gitbook-starter/blob/master/src/components/sidebar/tree.js
export default (edges, currentTopSection, DEFAULT_LOCALE, currentLocale) => {
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
        //Use frontmatter title, first heading, or file name from slug.
        const title =
          frontmatter.title ||
          (headings.length > 0 ? headings[0].value : null) ||
          slug.split("/").pop();

        return { title, slug, rawSlug };
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
    (accu, { title, slug, rawSlug }) => {
      const parts = slug.split("/");
      const slicedParts = parts.slice(3, parts.length); //Drop the empty string, locale, and currentTopSection, from the beginning of the array.
      let { items: prevItems } = accu;

      for (const part of slicedParts) {
        let tmp =
          prevItems && prevItems.find(({ slugPart }) => slugPart === part);

        if (tmp) {
          //We've got previous items from our accu
          if (!tmp.items) {
            //Doesn't have items, give it a blank array.
            tmp.items = [];
          }

          prevItems = tmp.items; //Set prevItems to tmp.items.
        } else {
          //We don't have a previous item from our accu. This is a top level directory.
          tmp = { slugPart: part, title, url: slug, items: [] };
          prevItems.push(tmp);
        }
      }

      //Sort all prevItems by alphabetical order.
      prevItems = prevItems.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

      const sliceLength = parts.length - 1;
      const existingItem = prevItems.find(
        ({ slugPart }) => slugPart === parts[sliceLength]
      );
      const test = prevItems;

      if (existingItem) {
        //Set existing item data
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        //No existing item, push this as a new prevItem.
        prevItems.push({
          slugPart: parts[sliceLength],
          url: slug,
          items: [],
          title,
        });
      }

      return accu;
    },
    { items: [] }
  );
};
