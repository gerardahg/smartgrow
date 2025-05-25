import React from 'react';
import { useTranslations } from 'next-intl';

import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export const Clear = () => {
  const t = useTranslations();

  return (
    <Stack direction="row" spacing={1}>
      <SunnyIcon sx={{ color: '#fbc02d' }} />
      <Typography>{t('clear')}</Typography>
    </Stack>
  );
};

export const Raining = () => {
  const t = useTranslations();

  return (
    <Stack direction="row" spacing={1}>
      <CloudySnowingIcon sx={{ color: '#616161' }} />
      <Typography>{t('raining')}</Typography>
    </Stack>
  );
};
