'use client';

import Chip from '@mui/material/Chip';
import React from 'react';
import { useTranslations } from 'next-intl';

const ChipComponent = () => {
  const t = useTranslations();
  return (
    <Chip
      label={t('Innovative Monitoring Technology')}
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
