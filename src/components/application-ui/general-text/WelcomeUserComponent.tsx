'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

import Typography from '@mui/material/Typography';

const WelcomeUser = () => {
  const { data: session } = useSession();
  return (
    <Typography variant="h3">
      Welcome, {session?.user?.name || 'User'}
    </Typography>
  );
};

export default WelcomeUser;
