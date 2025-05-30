'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import Notifications from '@mui/icons-material/Notifications';
import Timeline from '@mui/icons-material/Timeline';
import Memory from '@mui/icons-material/Memory';
import Dashboard from '@mui/icons-material/Dashboard';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FeatureComponent = () => {
  const t = useTranslations();

  const features = [
    {
      title: t('Real-time Monitoring'),
      description: t(
        'Continuous tracking of environmental conditions with instant updates'
      ),
      icon: <Timeline fontSize="large" />,
    },
    {
      title: t('Audio Alerts'),
      description: t(
        'Smart speaker notifications when conditions require attention'
      ),
      icon: <Notifications fontSize="large" />,
    },
    {
      title: t('Data Storage'),
      description: t(
        'All sensor data is automatically logged and stored for analysis'
      ),
      icon: <Memory fontSize="large" />,
    },
    {
      title: t('Dashboard View'),
      description: t(
        'Beautiful, intuitive interface to visualize all your data'
      ),
      icon: <Dashboard fontSize="large" />,
    },
  ];
  return (
    <Grid container spacing={4}>
      {features.map((feature) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={feature.title}>
          <Card
            sx={({ palette }) => ({
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: `0 0 32px ${palette.primary.main}`,
              },
            })}
          >
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', lineHeight: 1.5 }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureComponent;
