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
  let width = 480;
  let columns = 2;
  if (lengthChildren === 3 || lengthChildren > 4) {
    width = 361;
    columns = 3;
  } else if (lengthChildren === 1) {
    columns = 1;
  }

  console.log({ lengthChildren, width, columns });

  const boxStyle = { borderStyle: 'solid' };
  const childrenJSX = children.map((child, ind) => (
    <div style={boxStyle} key={ind} bg="muted">
      Box
    </div>
  ));
  return (
    <Grid columns={[columns, '1fr 1fr 1fr']}>
      {childrenJSX}
    </Grid>
  );
};

export default Categories;
