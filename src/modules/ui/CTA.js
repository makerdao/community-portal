import React from 'react'
import {Card} from 'theme-ui'
import { MDXRenderer } from "gatsby-plugin-mdx";

const CTA = ({children, ...otherProps}) => (
	<Card {...otherProps} sx={{p: '24px', borderColor: 'primary', bg: 'successAlt'}}>
		{children}
	</Card>
)

export default CTA;
