'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { z } from 'zod';

import { RootState } from '@/store/store';

const schema = z.object({
  email: z.string().email(),
});

const ManualSignInComponent = () => {
  const { email, password } = useSelector(
    (state: RootState) => state.credential
  );
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        setError('Email and password are required');
        return;
      }

      const isEmail = schema.safeParse({ email });
      if (!isEmail.success) {
        setError('Invalid email format');
        return;
      }

      setError(null);

      {
        /*Por defecto redirecciona, lo evitamos y lo hacemos manualmente*/
      }
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        setError('Invalid credentials');
        return;
      }

      window.location.href = '/my-devices';
    } finally {
      setLoading(false);
    }
  };

  const t = useTranslations();
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        onClick={handleSignIn}
        color={error ? 'error' : 'primary'}
        loading={loading}
      >
        {t('signIn')}
      </Button>
      {error && (
        <Box sx={{ mt: 1 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </>
  );
};

export default ManualSignInComponent;
