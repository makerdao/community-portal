//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import Link from "@modules/utility/Link";

const List = ({ children }) => {
  const _Children = React.Children.toArray(children);

  //What to render if a list element is a Link element.
  const renderLink = (listChild, children, key) => {
	  		  //Depending on whether the child is an actual Link or is a UL/LI with a Link 
			  //we have to access it's props differently.
              const fetchLinkData = (LIChild) => {
                if (
                  LIChild.props.mdxType === "a" ||
                  LIChild.props.mdxType === "Link"
                ) {
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
                  /^\/(?!\/)/.test(linkProps.to) ||
                  /^\/(?!\/)/.test(linkProps.href);
                return (
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
                      {children}
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
                        isInternalLink
                          ? "list-internal-icon"
                          : "list-external-icon"
                      }
                      color="primary"
                    />
                  </Link>
                );
              }

  return (
    <Box sx={{ mb: 4 }}>
      {_Children.map((child, index) => {
		  console.log(child)
		//Check if the child is confirmed to be a UL or OL
        if (child.props.mdxType === "ul" || child.props.mdxType === "ol") {
          const ULChildren = React.Children.toArray(child.props.children);
		
		  //Check if the FIRST child of the ULChildren is an LI element.
		  //NOTE(Rejon): This should ALWAYS be the case!
          if (ULChildren[0].props.mdxType === "li") {
            const LIChildren = React.Children.toArray(
              ULChildren[0].props.children
            );
			
			//Check if the FIRST child of the LI element is an "object"
			//NOTE(Rejon): If it is then we know we've got a react component.
            if (typeof LIChildren[0] === "object") {
				const isLinkElement =
					LIChildren[0].props.mdxType === "a" ||
					LIChildren[0].props.mdxType === "Link" || //<- If we're using a Link component, this will be it's component name we provided in shortcodes.js.
					LIChildren[0].props.children.props.mdxType === "a" || //<- NOTE(Rejon): There are some cases MDX will translate an element with complex subchildren as another UL or LI, we want the children of THAT element. 
					LIChildren[0].props.children.props.mdxType === "Link";
				
				//If the element we have meets our criteria (above) for a Link List Element then we can render it as so.
				if (isLinkElement) {
					return renderLink(LIChildren[0],LIChildren.slice(1), child.key); //NOTE(Rejon): We slice off the first child, because we don't want to render the link twice.
				}
            }
          }
        }

		//Render the regular old list element.
        return (
          <Flex
            sx={{
              p: "10px 8px",
              minHeight: "60px",
              borderBottom: "1px solid",
              borderColor: "body-15",
              alignItems: "center",
              "& > *:only-child": {
                margin:
                  typeof child.props.children === "string" ? 0 : "initial",
              },
              "& > *": {
                width: "100%",
              },
              "& > ul, & > ol": { m: 0, p: 0, listStyleType: "none", width: "100%" },
              "& > ul > li, & > ul > li > a, & > ul > li > a:hover, & > ol > li, & > ol > li > a, & > ol > li > a:hover": {
                color: "headline",
              },
              "& > ul > li > ul, & > ol > li > ul, & > ul > li > ol, & > ol > li > ol": { m: 0, mt: 2, p: 0, listStyleType: "none" },
              "& > ul > li > ul > li, & > ol > li > ol > li, & > ol > li > ul > li, & > ul > li > ol > li": { color: "body" },
            }}
            key={`list-element${child.key}`}
          >
            {child}
          </Flex>
        );
      })}
    </Box>
  );
};

export default List;
