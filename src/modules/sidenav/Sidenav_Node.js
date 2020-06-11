/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { Icon, jsx } from "theme-ui";

const Sidenav_Node = ({
  setCollapsed,
  collapsed,
  url,
  title,
  items,
  ...otherProps
}) => {
  const { pathname } = useLocation();

  const hasChildren = items.length !== 0;

  //NOTE(Rejon): Regex check for subdirectory recursion.
  const urlRegex = new RegExp(`\/${otherProps.slugPart}\/`);
  const active = pathname === url || urlRegex.test(pathname);

  const isCollapsed = collapsed[url];
  const collapse = () => {
    if (!hasChildren) {
      return;
    }
    setCollapsed(url);
  };

  return (
    <li
      sx={{
        color: active ? "primary" : "body",
        fontWeight: active ? "bold" : "body",
      }}
    >
      {title && (
        <Link to={url} onClick={collapse}>
          {title}
        </Link>
      )}

      {!isCollapsed && hasChildren && (
        <ul>
          {items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${item.index}`}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidenav_Node;
