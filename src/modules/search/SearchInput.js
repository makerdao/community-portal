import React from 'react';
import {connectSearchBox} from 'react-instantsearch-dom'

import {Box, Input, jsx} from 'theme-ui'

export default connectSearchBox(({refine, ...rest}) => (
	<Box as="form" onSubmit={e => e.preventDefault()}>
		<Input 	name="search" 
				id="search"  
				type="text" 
				aria-label="Search"
				placeholder="Search"
				onChange={e => refine(e.target.value)}
				{...rest}
				 />
	</Box>
))
