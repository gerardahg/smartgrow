'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@mui/material/Button';

import { useCreateDevice } from '@/hooks/useCreateDevice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CreateDeviceComponent = () => {
  const { isLoading, create } = useCreateDevice();
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'info' | 'error'>(
    'info'
  );
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    try {
      await create();
      setMessage('Device successfully created');
      setSeverity('success');
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('An unknown error occurred');

      if (error.message === 'Failed to create devices: 500') {
        setMessage('Device reference already used');
      } else {
        setMessage('Unexpected error, please try again.');
      }

      setSeverity('error');
    } finally {
      setOpen(true);
    }
  };

  const t = useTranslations();
  return (
    <>
      <Button loading={isLoading} variant="contained" onClick={handleClick}>
        {t('addDevice')}
      </Button>
      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateDeviceComponent;
