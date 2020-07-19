/** @jsx jsx */
import React from "react";
import { Link } from "@modules/navigation";

import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Sidenav_Node = ({
  url,
  title,
  items,
  parentActive,
  currentPath,
  ...otherProps
}) => {
  const hasChildren = items.length !== 0;

  //URL fallback for directories that have children, but don't have an index file.
  if (!url && hasChildren) {
    url = items[0].url;
  }

  //Regex check for subdirectory recursion.
  const active =
    currentPath === url || currentPath.includes(otherProps.slugPart);
  const fontWeight = active ? "bold" : null || parentActive ? "500" : "text";

  return (
    <li
      sx={{
        color: active ? "primary" : "text",
        mb: "32px",
        position: "relative",
        pr: 3,
      }}
    >
      {title && (
        <Link
          to={url}
          partiallyActive={active}
          activeClassName={active ? "active" : " "}
          sx={{
            color: active ? "primary" : "text",
            fontWeight,
            "&:hover > svg": {
              transform: active
                ? "translate(0, -50%) rotate(0deg)"
                : "translate(0, -50%) rotate(90deg)",
              transition: "all .1s ease",
            },
          }}
        >
          {title}

          {hasChildren && (
            <Icon
              name={active ? "chevron_down" : "chevron_right"}
              sx={{
                position: "absolute",
                right: 0,
                top: !active ? "50%" : ".8em",
                transform: "translate(0, -50%) rotate(0deg)",
                transformOrigin: "center",
                transition: "all .1s ease",
              }}
            />
          )}
        </Link>
      )}

      {active && hasChildren && (
        <ul
          sx={{
            m: 0,
            mt: "24px",
            ml: "16px",
            pl: 0,
            listStyleType: "none",
          }}
        >
          {items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${item.index}`}
              parentActive={active}
              currentPath={currentPath}
              {...item}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidenav_Node;
