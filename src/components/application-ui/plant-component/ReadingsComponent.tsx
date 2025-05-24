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
import Slider from '@mui/material/Slider';

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

  const raining = reading.rain ? 1 : 0;
  const sliderSx = {
    '& .MuiSlider-thumb': {
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
    },
  };

  return (
    <Container>
      <Stack divider={<Divider />} spacing={2} sx={{ pr: 1 }}>
        <Box>
          <Typography>temperature</Typography>
          <Slider
            value={reading.temperature}
            size="small"
            min={0}
            max={40}
            valueLabelDisplay="auto"
            sx={sliderSx}
          />
        </Box>
        <Box>
          <Typography>humidity</Typography>
          <Slider
            size="small"
            value={reading.humidity}
            min={0}
            max={1000}
            valueLabelDisplay="auto"
            sx={sliderSx}
          />
        </Box>
        <Box>
          <Typography>light</Typography>
          <Slider
            size="small"
            value={reading.light}
            min={0}
            max={1000}
            valueLabelDisplay="auto"
            sx={sliderSx}
          />
        </Box>
        <Box>
          <Typography>rain</Typography>
          <Slider size="small" value={raining} min={0} max={1} sx={sliderSx} />
        </Box>
      </Stack>
    </Container>
  );
};

export default ReadingsComponent;
