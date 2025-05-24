'use client';
import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import PaletteIcon from '@mui/icons-material/Palette';
import Drawer from '@mui/material/Drawer';

import ThemeCustom from './ThemeComponent';

const ThemeButtonComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton sx={{ color: 'white' }} onClick={() => setOpen(true)}>
        <PaletteIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <ThemeCustom />
      </Drawer>
    </>
  );
};

export default ThemeButtonComponent;
