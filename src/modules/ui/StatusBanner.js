
import React from 'react'
import { Box } from 'theme-ui'

//MDX composing 

const StatusBanner = ({status, color}) => {

	return (
		<Box>
			<Box p={2}>
			{status}
			</Box>
		</Box>
	)
}

export default StatusBanner;
