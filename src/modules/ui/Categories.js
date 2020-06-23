/** @jsx jsx */
import React, { Fragment } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Grid } from 'theme-ui';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import useTranslation from '@modules/utility/useTranslation';
import Link from '@modules/utility/Link';

const Categories = ({ children }) => {
  const lengthChildren = children.length;
  // let width = 480;
  let columnString = '1fr 1fr';
  let columns = 2;
  if (lengthChildren === 3 || lengthChildren > 4) {
    columnString = '1fr 1fr 1fr';
    columns = 3;
  } else if (lengthChildren === 1) {
    columnString = '1fr';
    columns = 1;
  }

  const boxStyle = { borderStyle: 'solid' };
  const childrenJSX = children.map((child, ind) => (
    <div style={boxStyle} key={ind} bg="muted">
      Box
    </div>
  ));
  return <Grid columns={[columns, columnString]}>{childrenJSX}</Grid>;
};

export default Categories;
