/** @jsx jsx */
import { jsx } from "theme-ui";
import { AccordionNav } from "@theme-ui/sidenav";
import { useStaticQuery, graphql } from "gatsby";

const Sidenav = (props) => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          headings {
            depth
            value
          }
        }
      }
    }
  `);

  //console.log(data);

  return <div>Hi</div>;
};

export default Sidenav;
