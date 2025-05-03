'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

import SmartgrowComponent from '@/components/application-ui/plant-component/SmartgrowComponent';

const placeholders = [
  'Mi Planta',
  'p2',
  'p3',
  'p4',
  'p5',
  'p6',
  'p7',
  'p8',
  'p9',
  'p10',
];

const MyDevices = () => {
  const { data: session } = useSession();
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3">
        Welcome, {session?.user?.name || 'User'}
      </Typography>
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        My devices
      </Typography>
      <Link href="/my-devices/add-device">
        <Button
          variant="contained"
          sx={{ textTransform: 'none' }}
          startIcon={<AddIcon />}
        >
          Add Device
        </Button>
      </Link>
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
          marginTop: 4,
        }}
      >
        {placeholders.map((placeholder) => (
          <Grid key={placeholder} sx={{ width: '100%', maxWidth: 300 }}>
            <Paper elevation={3}>
              <SmartgrowComponent name={placeholder} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyDevices;
