'use client';
import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import SmartgrowComponent from '@/components/application-ui/plant-component/SmartgrowComponent';
import { useDevices } from '@/hooks/useDevices';
import { Device } from '@/types/device';

export default function DevicesProvider() {
  const { devices, isLoading, error, refetch } = useDevices();

  // This callback will be passed to each SmartgrowComponent to handle device deletion
  const handleDeviceDelete = useCallback(
    (deviceId: number) => {
      // Refetch the devices list after a successful deletion
      setTimeout(() => {
        refetch();
      }, 1500); // Small delay to ensure the API has processed the deletion
    },
    [refetch]
  );

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        variant="body1"
        color="error"
        sx={{ textAlign: 'center', my: 4 }}
      >
        Error loading devices: {error.message}
      </Typography>
    );
  }

  if (!devices || devices.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
        No devices found. Add your first device!
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        justifyContent: {
          xs: 'center',
          md: 'space-evenly',
          lg: 'space-between',
        },
      }}
    >
      {devices.map((device: Device) => (
        <Grid key={device.id} sx={{ width: '100%', maxWidth: 300 }}>
          <Paper elevation={3}>
            <SmartgrowComponent
              name={device.name}
              id={device.id}
              onDeviceDelete={() => handleDeviceDelete(device.id)}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
