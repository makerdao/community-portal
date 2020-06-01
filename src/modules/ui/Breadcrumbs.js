/** @jsx jsx */
import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx";
import {Link} from 'gatsby'
import {jsx} from 'theme-ui'

import {usePage} from '@modules/layouts/PageContext';

const Breadcrumbs = ({children, pageContext}) => {
	const {uri, } = usePage();

	let currentPath = "/";
	let fileName = uri.split('/'); //NOTE(Rejon): Remove the first element, it'll always be an empty string. 
	fileName.shift();

	return (
		<>
			<div>
				{uri !== '/' && <Link to="/">Home</Link> } /  
				{
					fileName.map((pathName, index) => {
						currentPath += pathName + "/"; 
						let output = pathName; 

						//Link to the page 
						if (index !== fileName.length-1) {
							return (<> <Link to={currentPath} sx={{textTransform: 'capitalize'}}>{index >= 2 ? "..." : pathName}</Link> / </>);
						}

						return <span sx={{textTransform: 'capitalize'}} key={`document-path-${index}`}> {pathName}</span>;
					})
				}
			</div>
		</>
	)
}

export default Breadcrumbs
