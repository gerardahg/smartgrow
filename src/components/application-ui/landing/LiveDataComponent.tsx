'use client';
import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CloudQueue from '@mui/icons-material/CloudQueue';
import Thermostat from '@mui/icons-material/Thermostat';
import Opacity from '@mui/icons-material/Opacity';
import WbSunny from '@mui/icons-material/WbSunny';

const sensors = [
  {
    name: 'Temperature',
    value: '24°C',
    icon: <Thermostat />,
    color: '#ff5722',
  },
  { name: 'Humidity', value: 'High', icon: <Opacity />, color: '#2196f3' },
  {
    name: 'Light Level',
    value: 'Bright',
    icon: <WbSunny />,
    color: '#ffc107',
  },
  {
    name: 'Rain Status',
    value: 'Dry',
    icon: <CloudQueue />,
    color: '#9c27b0',
  },
];

const LiveDataComponent = () => {
  const [currentSensor, setCurrentSensor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSensor((prev) => (prev + 1) % sensors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Paper elevation={1} sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Live Sensor Data
      </Typography>

      <Grid container spacing={2}>
        {sensors.map((sensor, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={sensor.name}>
            <Card
              sx={({ palette }) => ({
                background:
                  index === currentSensor
                    ? `linear-gradient(135deg, ${palette.primary.main}, ${palette.secondary.main})`
                    : `inherit`,
                transition: 'all 0.3s ease',
                transform: index === currentSensor ? 'scale(1.05)' : 'scale(1)',
              })}
              elevation={4}
            >
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Box sx={{ color: sensor.color, mb: 1 }}>{sensor.icon}</Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 1 }}
                >
                  {sensor.name}
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {sensor.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default LiveDataComponent;
