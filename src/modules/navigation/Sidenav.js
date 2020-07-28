/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useLocation } from "@reach/router";

import { useNavigation } from "@modules/navigation/context";
import Sidenav_Node from "@modules/navigation/Sidenav_Node";

const Sidenav = (props) => {
  const { sidenavData } = useNavigation()
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
        pl: 3,
        pr: 2,
        pb: "90px",
        borderRight: "1px solid",
        borderColor: "muted",
      }}
    >
      {sidenavData && sidenavData.items[0] && (
        <ul sx={{ m: 0, p: 0, listStyleType: "none" }}>
          {sidenavData.items[0].items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${index}`}
              currentPath={pathname}
              {...item}
            />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Sidenav;
