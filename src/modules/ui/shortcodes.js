
import React from 'react'
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import Sidenav from "@modules/ui/Sidenav";
import StatusBanner from '@modules/ui/StatusBanner';
import Link from "@modules/utility/Link"
import {Image, Text, Divider, Button} from 'theme-ui'

export default {
	a: props => <Link to={props.href} {...props}/>,
	img: props => <Image {...props}/>,
	h1: props => <Text variant="h1" {...props}/>,
	h2: props => <Text variant="h2" {...props}/>,
	h3: props => <Text variant="h3" {...props}/>,
	h4: props => <Text variant="h4" {...props}/>,
	h5: props => <Text variant="h5" {...props}/>,
	thematicBreak: props => <Divider/>,
	p: props => <Text {...props}/>,
	Button,
	Breadcrumbs,
	StatusBanner,
	Sidenav 
}; 
