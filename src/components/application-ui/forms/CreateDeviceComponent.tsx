'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useCreateDevice } from '@/hooks/useCreateDevice';

const CreateDeviceComponent = () => {
  const { isLoading, create } = useCreateDevice();
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'info' | 'error'>(
    'info'
  );
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await create();
      setMessage('Device successfully created');
      setSeverity('success');

      //Timeout para que de tiempo a ver la notificación de success
      setTimeout(() => {
        router.push('/my-devices');
      }, 1000);
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('An unknown error occurred');

      if (error.message === 'Failed to create devices: 500') {
        setMessage('Device reference already used');
      } else {
        setMessage(error.message);
      }

      setSeverity('error');
    } finally {
      setOpen(true);
    }
  };

  const t = useTranslations();
  return (
    <>
      <Button
        loading={isLoading}
        variant="contained"
        onClick={handleClick}
        startIcon={<AddIcon />}
      >
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
