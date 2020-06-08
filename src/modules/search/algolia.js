const pageQuery = `{
pages: allMdx(filter: {fileAbsolutePath: {regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx)/"}}) {
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

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
]
module.exports = queries
