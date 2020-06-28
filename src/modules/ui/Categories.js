/** @jsx jsx */
import React, { Fragment } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx } from 'theme-ui';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import useTranslation from '@modules/utility/useTranslation';
import Link from '@modules/utility/Link';

const Categories = ({ children }) => {
  const lengthChildren = children.length;
  let columns = 1;
  let columns2 = 0;

  let width = '480px';
  if (lengthChildren === 3 || lengthChildren > 4) {
    width = '361px';
    columns = 3;
    columns2 = lengthChildren % 3;
  } else if (lengthChildren === 4) {
    columns = 2;
    columns2 = 2;
  }

  const columnString = 'auto '.repeat(columns - 1) + 'auto';
  const column2String = columns2 ? 'auto '.repeat(columns2 - 1) + 'auto' : '';

  const childrenJSX = children.map((child, ind) => (
    <div
      sx={{
        width,
        height: '260px',
        background: '#FFFFFF',
        border: '1px solid rgba(41, 26, 66, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '4px'
      }}
      key={ind}
      bg="muted"
    >
      <div sx={{ padding: '37px' }}>{child}</div>
    </div>
  ));

  const containerStyles = {
    display: 'grid',
    gridGap: '10px',
    marginTop: '10px',
    justifyContent: 'center'
  };

  return (
    <>
      <div
        sx={{
          ...containerStyles,
          gridTemplateColumns: columnString
        }}
      >
        {childrenJSX.slice(0, lengthChildren - columns2)}
      </div>
      {columns2 && (
        <div
          sx={{
            ...containerStyles,
            gridTemplateColumns: column2String
          }}
        >
          {childrenJSX.slice(lengthChildren - columns2)}
        </div>
      )}
    </>
  );
};

export default Categories;
