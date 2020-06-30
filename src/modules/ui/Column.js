//** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";

const Column = ({ children }) => {
  const _Children = React.Children.toArray(children);
  const containerStyles = {
    borderRadius: "4px",
    color: "body",
    p: 3,
    border: "1px solid",
    borderColor: "strokeFaded",
    "& > ul, & > ol, & > *:not(ul) > ul, & > *:not(ol) > ul": { p: 0, pl: 3 },
    "& > *:only-child, & >*:only-child > *": { m: 0 },
  };

  return (
    <Grid
      gap={"27px"}
      sx={{ mb: 4 }}
      columns={_Children.length > 1 ? [2, "1fr 1fr"] : [1, "1fr"]}
    >
      {_Children.map((child) => {
        const childChildren = React.Children.toArray(child.props.children);

        if (
          (child.props.mdxType === "ul" || child.props.mdxType === "ol") &&
          childChildren[0] &&
          childChildren[0].props.mdxType === "li"
        ) {
          const LIChild = childChildren[0];
          const LIChildren = React.Children.toArray(LIChild.props.children);

          const headerElement = LIChildren[0];
          const childElements = LIChildren.slice(1);

          return (
            <Box
              sx={{
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: "strokeFaded",
              }}
            >
              <Box
                className="headerElement"
                sx={{
                  color: "headline",
                  bg: "body-5",
                  padding: "8px 16px",
                  borderBottom: "1px solid",
                  borderColor: "strokeFaded",
                  "& > *:only-child, & > *:only-child > *": { m: 0 },
                }}
              >
                {headerElement}
              </Box>

              <Box
                sx={{
                  p: 3,
                  "& > *:only-child, & >*:only-child > *, & >ul>li > * > *:last-child": {
                    m: 0,
                  },
                  "& > ul > li > * > ul": {
                    listStyleType: "disc",
                    p: 0,
                    pl: 3,
                  },
                  "& > ul, & > ol": { p: 0, listStyleType: "none" },
                }}
              >
                {childElements}
              </Box>
            </Box>
          );
        }

        return <Box sx={containerStyles}>{child}</Box>;
      })}
    </Grid>
  );
};

export default Column;
