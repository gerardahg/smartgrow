'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';

interface Props {
  children: React.ReactNode;
}

const AppBarComponent = ({ children }: Props) => {
  return (
    <AppBar
      sx={(t) => ({
        background:
          t.palette.mode == 'light'
            ? `linear-gradient(45deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`
            : '',
        p: 1,
        boxShadow: 'none',
      })}
    >
      {children}
    </AppBar>
  );
};

export default AppBarComponent;
