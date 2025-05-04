'use client';
import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useDevices } from '@/hooks/useDevices';
import { Device } from '@/types/device';
import SmartgrowComponent from '@/components/application-ui/plant-component/SmartgrowComponent';

export default function DevicesProvider() {
  const { devices, isLoading, error } = useDevices();

  if (isLoading) {
    return <Typography variant="body1">Loading devices...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        Error loading devices: {error.message}
      </Typography>
    );
  }

  if (!devices || devices.length === 0) {
    return (
      <Typography variant="body1">
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
            <SmartgrowComponent name={device.name} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
