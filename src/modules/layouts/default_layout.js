import React from 'react'
import SEO from '@modules/utility/seo';

export default (props) => {
	const {children, pageContext, uri} = props; 
	const {title, author, date, description, keywords} = pageContext.frontmatter; 

	let fileName = uri.split('/'); //NOTE(Rejon): Remove the first element, it'll always be an empty string. 

	//NOTE(Rejon): If no title is provided in the metadata then we use the file name, which matches the path of the file!
	const _pageTitle = title ? title : fileName[fileName.length-1];

	return (
		<>
			<SEO title={_pageTitle} description={description} keywords={keywords} />
			<article>
				{children}
			</article>
		</>
	)
}
