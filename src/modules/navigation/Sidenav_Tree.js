import React, { useState } from "react";

import { useLocation } from "@reach/router";

import calculateTreeData from "@modules/navigation/calculateTreeData";
import {useTranslation} from '@modules/localization'
import Sidenav_Node from "@modules/navigation/Sidenav_Node";

const Tree = ({ edges, locale }) => {
  const { pathname } = useLocation();
  const {DEFAULT_LOCALE} = useTranslation();
  const path = pathname.split("/");

  const currentTopSection = path[2];
  const [treeData] = useState(() => {
    const { items } = calculateTreeData(
      edges,
      currentTopSection,
      DEFAULT_LOCALE,
      locale
    );

    return { items: items[0] ? items[0].items : [], locale };
  });

  return (
    <>
      {treeData.items.map((item, index) => (
        <Sidenav_Node key={`${item.url}-${index}`} {...item} />
      ))}
    </>
  );
};

export default Tree;
