/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import {PageDataProvider} from "@modules/layouts/PageContext"


export const wrapPageElement = ({element, props}) => (
	<PageDataProvider value={props}>
		{element}
	</PageDataProvider>
)
