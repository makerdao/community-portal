//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import {Link} from "@modules/navigation";

const List = ({ children }) => {
  const _Children = React.Children.toArray(children);

  //What to render if a list element is a Link element.
  const renderLink = ({ listChild, _children, key, siblings }) => {
    const siblingArray = siblings ? React.Children.toArray(siblings) : [];
    //Depending on whether the child is an actual Link or is a UL/LI with a Link
    //we have to access it's props differently.
    const fetchLinkData = (LIChild) => {
      if (LIChild.props.mdxType === "a" || LIChild.props.mdxType === "Link") {
        return LIChild.props;
      } else if (
        LIChild.props.children.props.mdxType === "a" ||
        LIChild.props.children.props.mdxType === "Link"
      ) {
        return LIChild.props.children.props;
      }
    };

    const linkProps = fetchLinkData(listChild);

    //NOTE(Rejon): The only inconsistency I've seen for MDX is sometimes it gives href and sometimes it gives us the "to" prop.
    const isInternalLink =
      /^\/(?!\/)/.test(linkProps.to) || /^\/(?!\/)/.test(linkProps.href);

    return (
      <>
        <Link
          {...linkProps}
          hideExternalIcon
          key={`list-link-element${key}`}
          sx={{
            p: "10px 8px",
            minHeight: "60px",
            borderBottom: "1px solid",
            borderColor: "body-15",
            alignItems: "center",
            display: "flex",
            ":hover": {
              bg: "successAlt",
            },
            ":active": {
              bg: "primaryMuted",
            },
            ":hover .list-internal-icon": {
              transform: "translate(4px, 0px)",
            },
            ":hover .list-external-icon": {
              transform: "translate(3px,-3px)",
            },
            transition: "all .16s ease-in-out",
            color: (theme) => `${theme.colors.headline} !important`, //NOTE(Rejon): I use !important here to override the Link color styling.
          }}
        >
          <Flex
            sx={{
              flexGrow: 1,
              pr: 4,
              flexDirection: "column",
              "& > *": {
                width: "100%",
              },
              "& > ul": {
                m: 0,
                p: 0,
                listStyleType: "none",
                width: "100%",
              },
              "& > ul > li, & > ul > li > a, & > ul > li > a:hover": {
                color: "body",
                mt: 2,
              },
            }}
          >
            {linkProps.children}
            {_children}
          </Flex>
          <Icon
            name={!isInternalLink ? "increase" : "arrow_right"}
            size={4}
            sx={{
              position: "relative",
              transition: "all .16s ease-in-out",
              transform: "translate(0px, 0px)",
            }}
            className={
              isInternalLink ? "list-internal-icon" : "list-external-icon"
            }
            color="primary"
          />
        </Link>
        {siblingArray.map((sibling, index) =>
          childListLinkRenderCheck(sibling, `sibling-element-${index}`)
        )}
      </>
    );
  };

  const renderListElement = (child, key) => (
    <Flex
      key={key || ""}
      sx={{
        p: "10px 8px",
        minHeight: "60px",
        borderBottom: "1px solid",
        borderColor: "body-15",
        alignItems: "center",
        "& > *:only-child": {
          margin: typeof child === "string" ? 0 : "initial",
        },
        "& > *": {
          width: "100%",
        },
        "& > li:only-child, & > li:only-child > *, & > *:only-child, & > *:only-child > *": {
          m: 0,
        },
        "& > ul, & > ol, & > li": {
          m: 0,
          p: 0,
          listStyleType: "none",
          width: "100%",
        },
        "& > ul > li, & > ul > li > a, & > ul > li > a:hover, & > ol > li, & > ol > li > a, & > ol > li > a:hover": {
          color: "headline",
        },
        "& > ul > li > ul, & > ol > li > ul, & > ul > li > ol, & > ol > li > ol": {
          m: 0,
          mt: 2,
          p: 0,
          listStyleType: "none",
        },
        "& > ul > li > ul > li, & > ol > li > ol > li, & > ol > li > ul > li, & > ul > li > ol > li": {
          color: "body",
        },
      }}
      key={`list-element-${child.key}`}
    >
      {child}
    </Flex>
  );

  //Logic check for rendering a link element vs a list element.
  const childListLinkRenderCheck = (child, index) => {
    if (
      child.props &&
      (child.props.mdxType === "ul" ||
      child.props.mdxType === "ol" ||
      child.props.mdxType === "li")
    ) {
      //Check if we've got a list container
      const ULChildren = React.Children.toArray(child.props.children);

      if (ULChildren.length > 0 && typeof ULChildren[0] === "object") {
        //Check if the list container has child and that the first child is an object.
        const LIChildren = React.Children.toArray(ULChildren[0].props.children);

        if (LIChildren.length > 0 && typeof LIChildren[0] === "object") {
          //Check if the LIchildren of the ul list element has children and it's first element is an object.
          let linkChild = LIChildren[0];

          //Check if the link child, which SHOULD be the first element is
          //an anchor link or a Link component.
          //NOTE(Rejon): This consistency comes from the Markdown Spec.
          let isLinkElement =
            linkChild &&
            (linkChild.props.mdxType === "a" ||
              linkChild.props.mdxType === "Link");

          //If the element isn't a link element, but we have a linkChild
          //we should also check ITS children.
          //NOTE(Rejon): This is because of weird MD spacing and containerizing of content
          //             into random divs. We can't predict this so we check if ITS inner
          //             content is a link or not.
          if (!isLinkElement && linkChild) {
            linkChild = React.Children.toArray(linkChild)[0];

            isLinkElement =
              linkChild &&
              (linkChild.props.mdxType === "a" ||
                linkChild.props.mdxType === "Link");
          }

          //We've got a link element. Render it like one!
          if (isLinkElement) {
            return renderLink({
              listChild: linkChild,
              _children: LIChildren.slice(1),
              key: child.key,
              siblings: ULChildren.slice(1),
            });
          }
        }
      }
    }

    return renderListElement(child);
  };

  return (
    <Box sx={{ mb: 4 }}>
      {_Children.map((child, index) => childListLinkRenderCheck(child, index))}
    </Box>
  );
};

export default List;
