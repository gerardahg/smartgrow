'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import SettingsButton from './SettingsButton';

interface Props {
  name: string;
  id: number;
  onDeviceDelete?: () => void;
}

const SmartgrowComponent = ({ name, id, onDeviceDelete }: Props) => {
  const [deviceName, setDeviceName] = useState(name);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleNameUpdate = (newName: string) => {
    setDeviceName(newName);
    setNotification({
      open: true,
      message: 'Device name updated successfully!',
      severity: 'success',
    });
  };

  const handleDeviceDelete = () => {
    setNotification({
      open: true,
      message: 'Device deleted successfully!',
      severity: 'success',
    });

    // Use setTimeout to allow the notification to be seen before removing the component
    setTimeout(() => {
      if (onDeviceDelete) {
        onDeviceDelete();
      }
    }, 1500);
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        padding: 2,
        width: '100%',
        maxWidth: 300,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 0.5 }}>
          {deviceName}
        </Typography>
        <Image src="/images/plant.png" width={128} height={128} alt="Plant" />
        <Button variant="contained" size="small" startIcon={<InfoIcon />}>
          Status
        </Button>
      </Box>
      <SettingsButton
        id={id}
        name={deviceName}
        onNameUpdate={handleNameUpdate}
        onDeviceDelete={handleDeviceDelete}
      />

      <Snackbar
        open={notification.open}
        autoHideDuration={5000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SmartgrowComponent;
