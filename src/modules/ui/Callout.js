/** @jsx jsx */
import React from "react";
import { jsx, Box } from 'theme-ui';
import { Icon } from "@makerdao/dai-ui-icons";

const Callout = ({icon, secondary, warning, children}) => {
  return(
      <Box
        p={1}
        sx={{
          display: 'flex',
          padding: '1em',
          margin: '1em',
          borderRadius: 'medium',
          bg: secondary ? '#fdefd9' : '#eff0f2',
          border: secondary ? '1px solid #f5b13d': 'none',
        }}
      > 
      { icon ? 
        <Box 
          p={1} 
          sx= {{
            display: 'flex',
            flexBasis: '5%',
            minWidth: "3em",
            justifyContent: 'center',
          }}>
            <Icon name={typeof(icon) === "string" ? icon : 'warning'} sx={{size: '3em'}}/>
        </Box> 
      : ''}
        <Box p={1} sx= {{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {children}
        </Box>
      </Box>
  );
}

export default Callout;
