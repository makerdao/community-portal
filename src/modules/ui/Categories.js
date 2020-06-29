/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

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

  const gridString = 'auto '.repeat(columns - 1) + 'auto';
  const grid2String = columns2 ? 'auto '.repeat(columns2 - 1) + 'auto' : '';

  const childrenJSX = children.map((child, ind) => (
    <div
      sx={{
        width,
        position: 'relative',
        background: '#FFFFFF',
        border: '1px solid rgba(41, 26, 66, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '4px',
        minHeight: '260px',
        '& .statusBanner': {
          width: '50%',
          position: 'absolute',
          right: '10px',
          top: '10px'
        },
        '& .statusBanner ~ .statusBanner': {
          position: 'relative',
          width: '50%',
          right: 0,
          top: 0
        }
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
    justifyContent: 'center'
  };

  return (
    <>
      <div
        sx={{
          ...containerStyles,
          gridTemplateColumns: gridString,
          gridTemplateRows: gridString
        }}
      >
        {childrenJSX.slice(0, lengthChildren - columns2)}
      </div>
      {columns2 && (
        <div
          sx={{
            ...containerStyles,
            gridTemplateColumns: grid2String,
            gridTemplateRows: grid2String
          }}
        >
          {childrenJSX.slice(lengthChildren - columns2)}
        </div>
      )}
    </>
  );
};

export default Categories;
