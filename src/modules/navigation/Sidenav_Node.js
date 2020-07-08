/** @jsx jsx */
import React from "react";
import {Link} from "@modules/navigation";
import { useLocation } from "@reach/router";
import { jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const Sidenav_Node = ({ url, title, items, parentActive, ...otherProps }) => {
  const { pathname } = useLocation();

  const hasChildren = items.length !== 0;

  if (!url && hasChildren) {
    url = items[0].url;
  }

  //NOTE(Rejon): Regex check for subdirectory recursion.
  const urlRegex = new RegExp(`/${otherProps.slugPart}/`);
  const active = pathname === url || urlRegex.test(pathname);

  const fontWeight = active ? "bold" : null || parentActive ? "500" : "body";

  return (
    <li
      sx={{
        color: active ? "primary" : "headline",
        fontWeight: active ? "bold" : "body",
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
            color: active ? "primary" : "body",
            fontWeight,
            "&:hover > svg": {
              transform: active
                ? "translate(0, -50%) rotate(0deg)"
                : "translate(0, -50%) rotate(90deg)",
              transition: "all .164s ease",
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
                transition: "all .164s ease",
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
              {...item}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidenav_Node;
