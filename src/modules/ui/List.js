//** @jsx jsx */
import React from "react";
import { Box, Flex, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import Link from '@modules/utility/Link'

const List = ({ children }) => {
  const _Children = React.Children.toArray(children);
  console.log(_Children);

  return (
    <Box sx={{ mb: 4 }}>
      {_Children.map((child, index) => {
		if (child.props.mdxType === 'ul') {

			const ULChildren = React.Children.toArray(child.props.children);

			if (ULChildren[0].props.mdxType === 'li') {
				const LIChildren = React.Children.toArray(ULChildren[0].props.children);

				console.log(LIChildren)
				if (typeof(LIChildren[0]) === 'object') {
					const isLinkElement = (LIChildren[0].props.mdxType === 'a' || LIChildren[0].props.mdxType === 'Link' || LIChildren[0].props.children.props.mdxType === 'a' || LIChildren[0].props.children.props.mdxType === 'Link')
					
					const fetchLinkData = (LIChild) => {
						if (LIChild.props.mdxType === 'a' || LIChild.props.mdxType === 'Link') {
							return LIChild.props
						}
						else if (LIChild.props.children.props.mdxType === 'a' || LIChild.props.children.props.mdxType === 'Link') {
							return LIChild.props.children.props;
						}
					}
					
					if (isLinkElement) {
						const linkProps = fetchLinkData(LIChildren[0]);
						const linkChildren = LIChildren.slice(1); //Remove LIChildren[0] which would be our link.
						const isInternalLink = /^\/(?!\/)/.test(linkProps.to) ||  /^\/(?!\/)/.test(linkProps.href);
							return (
								<Link {...linkProps} hideExternalIcon key={`list-link-element${child.key}`} sx={{
										p: "10px 8px",
										minHeight: "60px",
										borderBottom: "1px solid",
										borderColor: "body-15",
										alignItems: "center",
										display: 'flex',
										':hover': {
											bg: 'successAlt' 
										},
										':active': {
											bg: 'primaryMuted'
										},
										':hover .list-internal-icon': {
											transform: "translate(4px, 0px)"
										},
										':hover .list-external-icon': {
											transform: "translate(3px,-3px)"
										},
										transition: 'all .16s ease-in-out',
										color: theme => `${theme.colors.headline} !important` //NOTE(Rejon): I use !important here to override the Link color styling.
									}}>
									<Flex
										sx={{
										flexGrow: 1,
										pr: 4,
										flexDirection: 'column',
										"& > *": {
											width: '100%'
										},
										"& > ul": { m: 0, p: 0, listStyleType: "none", width: "100%" },
										"& > ul > li, & > ul > li > a, & > ul > li > a:hover": {color: 'body', mt: 2},
										}}
									>
										{linkProps.children}
										{linkChildren}
									</Flex>
									<Icon name={!isInternalLink ? 'increase' : 'arrow_right'} size={4} sx={{position: 'relative',transition: 'all .16s ease-in-out', transform: "translate(0px, 0px)"}} className={isInternalLink ? "list-internal-icon" : "list-external-icon"} color="primary"/>
								</Link>
							)
					}	
				}
			}
		}

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
				  width: '100%'
			  },
              "& > ul": { m: 0, p: 0, listStyleType: "none", width: "100%" },
			  "& > ul > li, & > ul > li > a, & > ul > li > a:hover": {color: 'headline'},
              "& > ul > li > ul": { m: 0, mt: 2, p: 0, listStyleType: "none" },
			  "& > ul > li > ul > li": {color: 'body'}
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
