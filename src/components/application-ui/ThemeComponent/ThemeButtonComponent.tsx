'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PaletteIcon from '@mui/icons-material/Palette';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import ThemeCustom from './ThemeComponent';

interface Props {
  color?: string;
}

const ThemeButtonComponent = ({ color }: Props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const t = useTranslations();
  return (
    <>
      <IconButton
        sx={{ color: color ? color : 'white' }}
        onClick={() => setOpen(true)}
      >
        <PaletteIcon />
        {!smallScreen && (
          <Typography variant="body2" sx={{ ml: 1 }}>
            {t('theme')}
          </Typography>
        )}
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <IconButton
          sx={{ position: 'absolute', top: 17, right: 4 }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <ThemeCustom />
      </Drawer>
    </>
  );
};

export default ThemeButtonComponent;
