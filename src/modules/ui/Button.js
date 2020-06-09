/** @jsx jsx */

import React from 'react'
import { Button as ThemedButton} from 'theme-ui'
import { jsx, ThemeProvider } from "theme-ui";
import { default as theme } from "@src/gatsby-plugin-theme-ui/index.js";
import Link from "@modules/utility/Link";

const Button = (props) => {
  console.log(`
    variant=${props.variant}
    to=${props.to}
    link=${Link}
  `);
  return(
    <ThemeProvider theme={theme}>
      <Link to={props.to}>
        <ThemedButton variant={props.variant ? props.variant : 'primary'}>
          {props.children}
        </ThemedButton>
      </Link>
    </ThemeProvider>
  );
};

export default Button;
