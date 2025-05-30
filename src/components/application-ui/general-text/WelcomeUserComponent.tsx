'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Typography from '@mui/material/Typography';

const WelcomeUser = () => {
  const t = useTranslations();
  const { data } = useSession();
  return (
    <Typography sx={{ fontSize: { xs: 40, sm: 48 } }} gutterBottom>
      {t('welcome')}, {data?.user?.name || 'User'}
    </Typography>
  );
};

export default WelcomeUser;
