import React from "react";

import {SEO} from "@modules/utility";
import { Box, Flex, Text, jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { navigate } from "@reach/router"
import Button from "@modules/ui/Button";
import Link from "@modules/navigation/Link";

import { useTranslation } from "@modules/localization";
import Shortcodes from "@modules/ui/shortcodes";

const browser = typeof window !== "undefined" && window; //<- This is to stop 404 flashes on route fallbacks.

const NotFoundPage = () => {
  const { locale, t } = useTranslation();
  //NOTE(Rejon): I could do a gatsby-node and programmatically create these pages.
  //             But there's a chance that a missing 404 in the content folder will break the app.
  //             I'll take the L.
  const { allMdx: nodes } = useStaticQuery(graphql`
    query Get404Pages { allMdx(
        filter: { fileAbsolutePath: { regex: "//([\\\\w]{2})/404.mdx$/" } }
      ) {
        nodes {
          headings(depth: h1) {
            value
          }
          fileAbsolutePath
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (!browser) {
    return <></>;
  }

  const page = nodes.nodes.find(
    ({ fileAbsolutePath }) => fileAbsolutePath.indexOf(`/${locale}/`) !== -1
  );
  //Use the Title Rule. Else just use a hardcoded value.
  const _title =
    page !== undefined && page !== null
      ? page.frontmatter.title ||
        (page.headings.length > 0 ? page.headings[0].value : null) ||
        "404"
      : "404";

  if (page) {
    return (
      <>
      <SEO title={_title} />
      <Flex sx={{ flexGrow: 1, flexDirection: "column", p: "5%", width: "100%" }}>
        <Box>
          <MDXProvider components={Shortcodes}>
            <MDXRenderer>{page.body}</MDXRenderer>
            <Button 
              to={"https://github.com/makerdao/community-portal/issues"} 
              sx={{
                display: "inline-block", 
                mt: "5px"
              }}
            >
              {t("Bug_Report")}
            </Button> 
            <Link 
              onClick={() => {
                navigate(-1);
              }} 
              disabled={true} 
              hideExternalIcon={true}
              sx={{ 
                fontWeight: "bold", 
                display:"inline-block", 
                ml: "15px"
              }}
            >
              {t("Go_Back")}
            </Link>
          </MDXProvider>
        </Box>  
      </Flex>
      </>
    );
  }

  return (
    <>
      <SEO title="404" />
      <Flex sx={{ flexGrow: 1, flexDirection: "column", p: "5%", width: "100%" }}>
        <Box>
          <Box sx={{fontSize:"1.5em"}}>
            <Text sx={{fontSize:"2em", mt: "1em", mb: ".75em"}}>404</Text>
            <Box sx={{mt:"1em", mb:"1em"}}>
              Uh oh, the page you're looking for doesn't exist.
              <br/><br/> 
              Think something's broken on our end?
            </Box>
          </Box>
          <Button 
            to={"https://github.com/makerdao/community-portal/issues"} 
            sx={{
              display: "inline-block", 
              mt: "5px"
            }}
          >
            {t("Bug_Report")}
          </Button> 
          <Link 
            onClick={() => {
              navigate(-1);
            }} 
            disabled={true} 
            hideExternalIcon={true}
            sx={{ 
              fontWeight: "bold", 
              display:"inline-block", 
              ml: "15px"
            }}
          >
            {t("Go_Back")}
          </Link>
        </Box>  
      </Flex>
    </>
  );
};

export default NotFoundPage;
