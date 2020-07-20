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
  onClick,
  ...otherProps
}) => {
  const hasChildren = items.length !== 0;

  //URL fallback for directories that have children, but don't have an index file.
  if (!url && hasChildren) {
    url = items[0].url;
  }

  //Check if element is active or not based on current path.
  const active =
    currentPath === url || currentPath.includes(otherProps.slugPart);
  const fontWeight = [
    active ? "bold" : null,
    active ? "bold" : null,
    active ? "bold" : null || parentActive ? "500" : "text",
  ];

  return (
    <li
      sx={{
        color: active ? "primary" : "text",
        position: "relative",
        "&:not(:last-of-type)": {
          mb: "14px",
        },
      }}
    >
      {title && (
        <Link
          to={url}
          partiallyActive={active}
          activeClassName={active ? "active" : " "}
          onClick={onClick}
          sx={{
            color: active ? "primary" : "text",
            fontWeight,
            py: "6px",
            display: "block",
            "&:hover ": {
              textDecoration: "none",
              "& > svg": {
                transform: active
                  ? "translate(0, -50%) rotate(0deg)"
                  : "translate(0, -50%) rotate(90deg)",
                transition: "all .1s ease",
              },
            },
          }}
        >
          {title}

          {hasChildren && (
            <Icon
              name={active ? "chevron_down" : "chevron_right"}
              sx={{
                position: "absolute",
                right: "31px",
                top: [
                  "calc(1.5em)",
                  "calc(1.5em)",
                  !active ? "50%" : "calc(.8em + 6px)",
                ],
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
            ml: "16px",
            mt: "6px",
            pl: 0,
            pr: "31px",
            listStyleType: "none",
          }}
        >
          {items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${item.index}`}
              parentActive={active}
              onClick={onClick}
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
