'use client';
import React, { useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grow from '@mui/material/Grow';

import SmartgrowComponent from '@/components/application-ui/plant-component/SmartgrowComponent';
import { useDevices } from '@/hooks/useDevices';
import { Device } from '@/lib/types/device';

export default function DevicesGrid() {
  const { devices, isLoading, error, refetch } = useDevices();

  const handleDeviceDelete = useCallback(() => {
    setTimeout(() => {
      refetch();
    }, 1500);
  }, [refetch]);

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
      sx={{ justifyContent: { md: 'flex-start', sm: 'center', xs: 'center' } }}
    >
      {devices.map((device: Device) => (
        <Grid key={device.reference} sx={{ width: '100%', maxWidth: 300 }}>
          <Grow in={true}>
            <Paper
              sx={{
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <SmartgrowComponent
                name={device.name}
                reference={device.reference}
                onDeviceDelete={() => handleDeviceDelete()}
              />
            </Paper>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
}
