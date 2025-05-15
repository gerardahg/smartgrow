'use client';
import React from 'react';

import Button from '@mui/material/Button';

import useUsers from '@/hooks/useUsers';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const RegisterComponent = () => {
  const { error, register, loading } = useUsers();

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        loading={loading}
        onClick={register}
        color={error ? 'error' : 'primary'}
      >
        Sign up
      </Button>

      {error && (
        <Box mt={1}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
    </>
  );
};

export default RegisterComponent;
