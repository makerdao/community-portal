
export default (edges, currentTopSection, DEFAULT_LOCALE, currentLocale) => {
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

	const defaultLocaleFiles = makeSidenavObjects(edges, DEFAULT_LOCALE);
	const currentLocaleFiles = DEFAULT_LOCALE !== currentLocale ? makeSidenavObjects(edges, locale) : [];

	const mergedLocaleFiles = currentLocaleFiles.length <= 0 ? 
										defaultLocaleFiles 
										: 
										defaultLocaleFiles.map((file) => {
											const findLocalizedFile = currentLocaleFiles.find((el, index) => {
												const fileMatch = el.rawSlug === file.rawSlug

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

	return mergedTree.reduce(
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
}
