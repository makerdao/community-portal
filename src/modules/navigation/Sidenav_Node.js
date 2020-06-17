/** @jsx jsx */
import React from "react";
import Link from '@modules/utility/Link'
import { useLocation } from "@reach/router";
import { Icon, jsx } from "theme-ui";

const Sidenav_Node = ({
  url,
  title,
  items,
  parentActive,
  ...otherProps
}) => {
  const { pathname } = useLocation();

  const hasChildren = items.length !== 0;

  //NOTE(Rejon): Regex check for subdirectory recursion.
  const urlRegex = new RegExp(`\/${otherProps.slugPart}\/`);
  const active = pathname === url || urlRegex.test(pathname);

  const fontWeight = active ? 'bold' : null || parentActive ? '500' : 'body';

  return (
    <li
      sx={{
        color: active ? "primary" : "headline",
        fontWeight: active ? "bold" : "body",
        mb: '32px'
      }}
    >
      {title && (
        <Link to={url} partiallyActive={active} activeClassName={active ? 'active' : ' '}       sx={{
        color: active ? "primary" : "body",
        fontWeight}}>
          {title}
        </Link>
      )}

      {(active && hasChildren) && (
        <ul sx={{m: 0, mt:'24px', ml: '16px', pl: 0, maxWidth: '140px', listStyleType: 'none'}}>
          {items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${item.index}`}
              parentActive={active}
              {...item}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidenav_Node;
