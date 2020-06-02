/** @jsx jsx */
import React from 'react'
import { Box, jsx } from 'theme-ui'

//MDX composing 

const StatusBanner = ({status, color}) => {

	return (
		<Box>
			<div sx={{
				p: 4,
				borderRadius: '50%',
				bg: 'red'
			}}>Hello</div>
			<Box p={2}>
			{status}
			</Box>
		</Box>
	)
}

export default StatusBanner;
