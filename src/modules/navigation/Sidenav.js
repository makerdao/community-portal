/** @jsx jsx */
import React, { useContext } from "react";
import { jsx, Box } from "theme-ui";
import { useLocation } from "@reach/router";

import { NavigationContext } from "@modules/navigation/context";
import Sidenav_Node from "@modules/navigation/Sidenav_Node";

const Sidenav = (props) => {
  const { sidenavData } = useContext(NavigationContext);
  const { pathname } = useLocation();

  return (
    <Box
      as="aside"
      sx={{
        flexGrow: 0,
        position: "relative",
        maxHeight: "1012px",
        height: "calc(100vh)",
        pt: "54px",
        pl: "8px",
        pb: "90px",
        pr: "31px",
        borderRight: "1px solid",
        borderColor: "muted",
      }}
    >
      <ul sx={{ m: 0, p: 0, listStyleType: "none" }}>
        {sidenavData.items[0].items.map((item, index) => (
          <Sidenav_Node
            key={`${item.url}-${index}`}
            currentPath={pathname}
            {...item}
          />
        ))}
      </ul>
    </Box>
  );
};

export default Sidenav;
