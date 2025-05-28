'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';

interface Props {
  children: React.ReactNode;
}

const AppBarComponent = ({ children }: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={(t) => ({
        bgcolor: t.palette.mode == 'light' ? 'white' : '',
        p: 1,
      })}
    >
      {children}
    </AppBar>
  );
};

export default AppBarComponent;
