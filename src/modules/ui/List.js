//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "@modules/navigation";

const ListElement = ({ children, ...props }) => (
  <Flex
    sx={{
      p: "10px 8px",
      pt: "23px",
      minHeight: "60px",
      borderTop: "1px solid",
      borderColor: "muted",
      flexDirection: "column",
      alignItems: "flex-start",
      "& > * > *:only-child, & > * > *nth-child(1)": {
        fontWeight: "normal",
        fontSize: 3,
        color: "text",
        lineHeight: "normal",
      },
      "& > * > *:only-child": {
        mb: 0,
      },
      "& > * > *:not(:only-child)nth-child(1)": {
        mb: "8px",
      },
      "& > * > *:not(nth-child(1))": {
        fontWeight: "normal",
        fontSize: "14px",
        color: "textMuted",
      },
    }}
  >
    {children}
  </Flex>
);

const AdvancedListElement = ({
  childData: { heading, _children },
  linkData,
  index,
}) => {
  const ListEl = ({ children }) => (
    <ListElement sx={{ flexDirection: children ? "row" : "" }}>
      {children ? (
        <Flex sx={{ flexDirection: "row" }}>
          {children}
          <Flex
            className="content-container"
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              "& > *:only-child, & > *nth-child(1)": {
                fontWeight: "normal",
                fontSize: 3,
                color: "text",
                lineHeight: "normal",
              },
              "& > *:not(nth-child(1))": {
                fontWeight: "normal",
                fontSize: "14px",
                color: "textMuted",
              },
            }}
          >
            {heading && (
              <Box
                sx={{
                  m: 0,
                  "& > *": { m: 0, mb: "8px", lineHeight: "normal" },
                }}
              >
                {heading}
              </Box>
            )}
            <Box>{_children}</Box>
          </Flex>
        </Flex>
      ) : (
        <>
          {heading && (
            <Box
              sx={{ m: 0, "& > *": { m: 0, mb: "8px", lineHeight: "normal" } }}
            >
              heading
            </Box>
          )}
          <Box>{_children}</Box>
        </>
      )}
    </ListElement>
  );

  if (linkData) {
    delete linkData.children;

    return (
      <Link
        hideExternalIcon
        {...linkData}
        sx={{
          "& > *": {
            width: "100%",
            "&:hover": { bg: "primaryMuted" },
            transition: "all .1s ease",
          },
        }}
      >
        <ListEl>
          <Icon name={"increase"} size={3} sx={{ mr: "29px", ml: "5px" }} />
        </ListEl>
      </Link>
    );
  }

  return ListEl;
};

const List = ({ children }) => {
  const _Children = React.Children.toArray(children);

  //Logic check for rendering a link element vs a list element.
  const childListLinkRenderCheck = (child, index) => {
    if (
      child.props &&
      (child.props.mdxType === "Box" ||
        child.props.mdxType === "Link" ||
        child.props.mdxType === "a")
    ) {
      const boxChildren = React.Children.toArray(child.props.children);
      const isLink =
        child.props.mdxType === "Link" || child.props.mdxType === "a";
      const childData = {};

      const linkData = isLink ? { ...child.props } : null; //If this element is a Link grab it's href.

      if (boxChildren.length > 1) {
        childData.heading = boxChildren[0]; //<- First child is heading
        childData._children = boxChildren.slice(1, boxChildren.length); //<- Render other children as sub content
      } else if (boxChildren.length === 1) {
        childData._children = boxChildren[0];
      }

      const advancedElementProps = { childData, linkData, index };

      return (
        <AdvancedListElement
          key={`list-element-${index}`}
          {...advancedElementProps}
        />
      );
    }

    return <ListElement key={`list-element-${index}`}>{child}</ListElement>;
  };

  return (
    <Box sx={{ mb: 4 }}>
      {_Children.map((child, index) => childListLinkRenderCheck(child, index))}
    </Box>
  );
};

export default List;
