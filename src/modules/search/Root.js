import React from 'react';

export default function Root ({children, ...otherProps}) {
	return (
		<div className="root-test" {...otherProps}>
			{children}
		</div>
	)
}
