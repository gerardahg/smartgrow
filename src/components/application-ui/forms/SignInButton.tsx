'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';

const handleSignIn = async () => {
  await signIn('google', {
    callbackUrl: '/my-devices',
  });
};

const SignIn = () => {
  const t = useTranslations();

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={handleSignIn}
      startIcon={<GoogleIcon />}
    >
      <Typography sx={{ textTransform: 'none' }}>{t('google')}</Typography>
    </Button>
  );
};

export default SignIn;
