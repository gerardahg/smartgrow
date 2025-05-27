'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Typography from '@mui/material/Typography';

const WelcomeUser = () => {
  const t = useTranslations();
  const { data: session } = useSession();
  return (
    <Typography variant="h3" gutterBottom>
      {t('welcome')}, {session?.user?.name || 'User'}
    </Typography>
  );
};

export default WelcomeUser;
