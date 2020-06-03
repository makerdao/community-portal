
import React from 'react'
import Breadcrumbs from "@modules/ui/Breadcrumbs";
import Sidenav from "@modules/ui/Sidenav";
import StatusBanner from '@modules/ui/StatusBanner';
import Link from "@modules/utility/Link"

export default { Breadcrumbs, StatusBanner, Sidenav, a: props => <Link to={props.href} {...props}/> }; 
