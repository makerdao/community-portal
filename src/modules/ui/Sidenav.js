/** @jsx jsx */
import { jsx } from "theme-ui";
import { AccordionNav } from "@theme-ui/sidenav";
import { useStaticQuery, graphql } from "gatsby";

const Sidenav = (props) => {
  const {allMdx: edges} = useStaticQuery(graphql`
    {
      allMdx(filter: {fileAbsolutePath: {regex: "/.*(?<!header.mdx)$/"}}) {
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

  console.log(edges);
  //TODO(Rejon): I left off on building the sidenav Tree. We're thinking solution 2, so maybe I can hold off until friday and just implement a basic solution for now. 
  //const hrefSlug = fileAbsolutePath.indexOf()
  const title = frontmatter.title || headings[0] || fileAbsolutePath.split("/").pop().replace(".mdx", ""); 

  return <div>Hi</div>;
};

export default Sidenav;
