'use client';

import Chip from '@mui/material/Chip';
import React from 'react';

const ChipComponent = () => {
  return (
    <Chip
      label="Innovative Monitoring Technology"
      sx={({ palette }) => ({
        mb: 3,
        background: `linear-gradient(45deg, ${palette.primary.main}, ${palette.secondary.main})`,
        color: 'white',
        fontWeight: 600,
      })}
    />
  );
};

export default ChipComponent;
