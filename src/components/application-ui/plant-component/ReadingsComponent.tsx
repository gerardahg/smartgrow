'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import useReadings from '@/hooks/useReadings';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import { Raining, Clear } from './rain-clear/WeatherComponent';

interface Props {
  reference: string;
}

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Card
    sx={{
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'divider',
      minWidth: { xs: 250, sm: 300, md: 300 },
      overflowY: 'auto',
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);

const ReadingsComponent = ({ reference }: Props) => {
  const { error, isLoading, reading } = useReadings(reference);
  const t = useTranslations();

  if (isLoading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography
          variant="body1"
          color="error"
          sx={{ textAlign: 'center', my: 4 }}
        >
          Error loading readings: {error.message}
        </Typography>
      </Container>
    );
  }

  if (!reading) {
    return (
      <Container>
        <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
          No readings registered yet
        </Typography>
      </Container>
    );
  }

  const temperature = (reading.temperature / 40) * 100;
  const humidity = ((1000 - reading.humidity) / 1000) * 100;
  const light = (reading.light / 1000) * 100;

  return (
    <Container>
      <Stack divider={<Divider />} spacing={2} sx={{ pr: 1 }}>
        <Box>
          <Typography gutterBottom>
            {t('temperature')}: {`${reading.temperature}°C`}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2">0°C</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress
                sx={{ height: 10, borderRadius: 5 }}
                value={temperature}
                variant="determinate"
              />
            </Box>
            <Typography variant="body2">40°C</Typography>
          </Stack>
        </Box>
        <Box>
          <Typography gutterBottom>{t('humidity')}</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2">{t('low')}</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress
                sx={{ height: 10, borderRadius: 5 }}
                value={humidity}
                variant="determinate"
              />
            </Box>
            <Typography variant="body2">{t('high')}</Typography>
          </Stack>
        </Box>
        <Box>
          <Typography gutterBottom>{t('light')}</Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2">{t('low')}</Typography>
            <Box sx={{ width: '100%' }}>
              <LinearProgress
                sx={{ height: 10, borderRadius: 5 }}
                value={light}
                variant="determinate"
              />
            </Box>
            <Typography variant="body2">{t('high')}</Typography>
          </Stack>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="center"
        >
          {reading.rain && <Raining />}
          {!reading.rain && <Clear />}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ReadingsComponent;
