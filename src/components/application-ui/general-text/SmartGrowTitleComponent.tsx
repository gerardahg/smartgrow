'use client';
import React from 'react';

import Typography from '@mui/material/Typography';

const SmartGrowTitleComponent = () => {
  //padding right: si no ponemos el padding no se colorea el titulo entero, se corta la letra final por la mitad
  return (
    <Typography
      variant="h3"
      sx={({ palette }) => ({
        fontStyle: 'italic',
        fontWeight: 600,
        color: 'transparent',
        background: `linear-gradient(45deg, ${palette.primary.main}, ${palette.secondary.main})`,
        backgroundClip: 'text',
        fontSize: 45,
        pr: 1,
        pl: 1,
      })}
      gutterBottom
    >
      SmartGrow
    </Typography>
  );
};

export default SmartGrowTitleComponent;
