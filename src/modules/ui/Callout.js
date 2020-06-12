/** @jsx jsx */
import React from "react";
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx, ThemeProvider, Text, Flex, Box } from 'theme-ui';
import { Icon } from "@makerdao/dai-ui-icons";
import Shortcodes from '@modules/ui/shortcodes';
import theme from "@src/gatsby-plugin-theme-ui/index.js";

const Callout = ({secondary, icon, children}) => {
  console.log(`
    secondary: ${typeof(secondary)}
    icon: ${typeof(icon)}
    children: ${typeof(children)}
  `);
  return(
    <ThemeProvider theme={theme}>        
      <Flex
        sx={{
          bg: secondary ? '#fdefd9' : '#eff0f2',
          borderRadius: 'medium',
          border: secondary ? '1px solid #f5b13d': 'none',
          padding: '1em',
          margin: '1em'
        }}
      > 
        <Box p={1} sx= {{
          display: 'flex',
          flexBasis: '7%',
          justifyContent: 'center',
          verticalAlign: 'middle'
          }}>
          <Icon name={icon} sx={{}}/>
        </Box>
        <Box p={1} sx={{
          
        }}>
          {children}
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default Callout;
