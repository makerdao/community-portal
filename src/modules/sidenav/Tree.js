import React, {useState, useLayoutEffect} from 'react';

import {useLocation} from '@reach/router'
import calculateTreeData from '@modules/sidenav/calculateTreeData';

import Sidenav_Node from '@modules/sidenav/Sidenav_Node';

const Tree = ({edges, locale}) => {

  const {pathname} = useLocation();
  const path = pathname.split('/');
  const DEFAULT_LOCALE = "en";
  const currentTopSection = path[2];
  const [treeData, updateTreeData] = useState(() => {
	  const {items} = calculateTreeData(edges, currentTopSection, DEFAULT_LOCALE, locale);
	  return {items, locale}
  });

  const defaultCollapsed = {};
  
  treeData.items.forEach(item => {
	  defaultCollapsed[item.url] = false; 
  });

  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = url => {
	  setCollapsed({
		  ...collapsed,
		  [url]: !collapsed[url]
	  })
  };

  //NOTE(Rejon): This is here, in the case we click a link that is not our locale, we should reconstruct the sidebar. 
  //			 While this may seem like forcing a re-render, this is a necessary evil, to ensure the sidebar is ALWAYS correct.
  useLayoutEffect(() => {
	  if (treeData.locale !== locale) {
		  const {items} = calculateTreeData(edges, currentTopSection, DEFAULT_LOCALE, locale);

		  updateTreeData({
			  locale, 
			  items
		  })
	  }
  }, [locale])

  return (<>
	{treeData.items.map((item,index) => (
		<Sidenav_Node key={`${item.url}-${index}`} 
					  setCollapsed={toggle} 
					  collapsed={collapsed} 
					  {...item}
		/>
	))}
  </>)
}

export default Tree
