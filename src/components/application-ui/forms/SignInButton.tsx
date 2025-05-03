'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';

const handleSignIn = async () => {
  const result = await signIn('google', {
    callbackUrl: '/my-devices',
  });
};

const SignIn = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={handleSignIn}
      startIcon={<GoogleIcon />}
    >
      <Typography sx={{ textTransform: 'none' }}>
        Sign in with Google
      </Typography>
    </Button>
  );
};

export default SignIn;
