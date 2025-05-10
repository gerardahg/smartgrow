'use client';
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import useReadings from '@/hooks/useReadings';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

interface Props {
  reference: string;
}

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Card
    sx={{
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'divider',
      minWidth: 300,
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);

const ReadingsComponent = ({ reference }: Props) => {
  console.log(`ReadingsComponent: ${reference}`);
  const { error, isLoading, readings } = useReadings(reference);

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

  if (!readings || readings.length == 0) {
    return (
      <Container>
        <Typography variant="body1" sx={{ textAlign: 'center', my: 4 }}>
          No readings registered yet
        </Typography>
      </Container>
    );
  }

  const reading = readings[readings.length - 1];

  return (
    <Container>
      <Stack sx={{ textAlign: 'center' }} divider={<Divider />} spacing={2}>
        <Typography variant="body1">Last Reading</Typography>

        <Typography variant="body2">
          temperature: {reading.temperature}
        </Typography>
        <Typography variant="body2">humidity: {reading.humidity}</Typography>
        <Typography variant="body2">light: {reading.light}</Typography>
        <Typography variant="body2">
          rain: {reading.rain ? 'True' : 'False'}
        </Typography>
      </Stack>
    </Container>
  );
};

export default ReadingsComponent;
