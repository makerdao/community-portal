	/** @jsx jsx */
import React from "react";
import { jsx, Box, Flex } from 'theme-ui';
import { Icon } from "@makerdao/dai-ui-icons";

const Callout = ({icon, secondary, warning, children}) => {
  return(
      <Flex
        p={3}
        sx={{
          mb: '24px', 
          mt: '24px',
          borderRadius: 'medium',
          bg: secondary ? 'calloutSecondary' : 'callout',
          border: secondary ? '1px solid': 'none',
          borderColor: secondary ? 'calloutSecondaryBorder' : 'initial'
        }}
      > 
      { icon && <Icon name={typeof(icon) === "string" ? icon : 'warning'} sx={{minWidth: '32px', minHeight: '32px', mr:'10px'}}/>}
        <Flex sx= {{
          flexDirection: 'column',
          justifyContent: 'center',
          '& > *:first-child': {
            mt: 0
          }
        }}>
          {children}
        </Flex>
      </Flex>
  );
}

export default Callout;
