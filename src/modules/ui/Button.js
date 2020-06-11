/** @jsx jsx */

import React from 'react'
import { Button as ThemedButton} from 'theme-ui'
import { jsx, ThemeProvider } from "theme-ui";
import theme from "@src/gatsby-plugin-theme-ui/index.js";
import Link from "@modules/utility/Link";

const Button = ({children, to, icon, primary, secondary, primaryOutline, secondaryOutline }) => {
  let variantStr;
  if (primary) {
    variantStr = 'primary';
  } else if (secondary) {
    variantStr = 'secondary';
  } else if (primaryOutline) {
    variantStr = 'primaryOutline';
  } else if (secondaryOutline) {
    variantStr = 'secondaryOutline';
  }

  return(
    <ThemeProvider theme={theme}>
      <ThemedButton variant={variantStr ? variantStr : 'primary'}>
        <Link to={to} icon={icon}>
          {children}
        </Link>
      </ThemedButton>
    </ThemeProvider>
  );
};

export default Button;
