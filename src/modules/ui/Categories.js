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
  let columnString = '1fr 1fr';
  let columns = 2;
  let width = '480px';
  if (lengthChildren === 3 || lengthChildren > 4) {
    width = '361px';
    columnString = '1fr 1fr 1fr';
    columns = 3;
  } else if (lengthChildren === 1) {
    columnString = '1fr';
    columns = 1;
  }

  const boxStyle = {
    // width,
    height: '260px',
    background: '#FFFFFF',
    border: '1px solid rgba(41, 26, 66, 0.1)',
    boxSizing: 'border-box',
    borderRadius: '4px'
  };

  const childrenJSX = children.map((child, ind) => (
    <div style={boxStyle} key={ind} bg="muted">
      <div style={{ padding: '37px' }}>{child}</div>
    </div>
  ));
  return <Grid columns={[columns, columnString]}>{childrenJSX}</Grid>;
};

export default Categories;
