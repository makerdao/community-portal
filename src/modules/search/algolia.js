//NOTE(Rejon): This query is THE heart of what pages get indexed. 
//             Currently: All pages that aren't a header file, index file (of Topsections or site).
const pageQuery = `{
pages: allMdx(filter: {fileAbsolutePath: {regex: "/\/([\\\\w]{2})\/.*\/(?!index.mdx|header.mdx)/"}}) {
    edges {
      node {
		objectID: id
        headings(depth: h1) {
          value
        }
        fileAbsolutePath
        frontmatter {
          title
        }
		excerpt(pruneLength: 5000)
      }
   
    }
  }
}`

//This is the object that Algolia will receive and return for searches. 
//Results will be based on what's here. 
//EX: I search "Hi" and the title or exerpt have "Hi". They will be returned. 
const flatten = arr =>
  arr.map(({ node: { frontmatter, title, headings, fileAbsolutePath, ...rest } }) => {
    
    const splitPath = fileAbsolutePath.split('/'); 
    let fileName = splitPath.pop().replace(/(.mdx|.md)$/gm, '');

    //If the filename is index.mdx, use the name of it's directory instead.
    if (fileName === 'index') 
    {
      fileName = splitPath[splitPath.length - 1];
    }

    //Classic title rule.
    const _title = frontmatter.title || (headings[0] ? headings[0].value : null) || fileName;
    
    //URL that looks for the content folder and then strips down the url based on it's path.
    const url = fileAbsolutePath.slice(fileAbsolutePath.indexOf('/content/') + 8, fileAbsolutePath.length).replace(/(.mdx|index.mdx)$/gm, '');

    return  {
    ...frontmatter,
    title: _title,
    url,
    ...rest,
  }
  })
const settings = { attributesToSnippet: [`excerpt:20`], searchableAttributes: [`title`, `excerpt`] }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
]
module.exports = queries
