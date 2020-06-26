//** @jsx jsx */
import React from 'react';
import {Box, jsx} from 'theme-ui';

const ColumnCompare = ({children}) => {
	const _Children = React.Children.toArray(children);
	
	return (
		<Box>
			Column compare 
		</Box>
	)
}

export default ColumnCompare;
