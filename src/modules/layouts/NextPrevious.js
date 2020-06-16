import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const NextPrevious = () => {

	const {mdx} = useStaticQuery(graphql`
		query NextPreviousData {
			mdx {
				id
				fileAbsolutePath
			}
		}
	`)

	console.log(mdx);

	return (
		<>
			NextPrevious
		</>
	);
}

export default NextPrevious; 
