'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { Tooltip, useTheme } from '@mui/material';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

import useAllReadings from '@/hooks/useAllReadings';

interface Props {
  reference: string;
}

const ChartComponent = ({ reference }: Props) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const theme = useTheme();
  const paletteColor = theme.palette.primary.main;

  const { isLoading, error, reading } = useAllReadings(reference);

  const chartData = reading
    ? {
        dates: reading.map((item) =>
          new Date(item.date).toLocaleDateString('en-GB')
        ),
        temperature: reading.map((item) => item.avgTemperature),
        humidity: reading.map(
          (item) => 1000 - Math.min(item.avgHumidity, 1000)
        ),
        light: reading.map((item) => Math.min(item.avgLight, 1000)),
      }
    : null;
  return (
    <>
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          right: 8,
          top: 40,
        }}
        onClick={() => setOpen(true)}
      >
        <BarChartIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            width: { xs: '100dvw', sm: '100%' },
            minHeight: { xs: '100dvh', sm: 'auto' },
            margin: { xs: 0, sm: 'auto' },
            borderRadius: { xs: 0, sm: 4 },
          },
          /**Scroll bar */
          '& ::-webkit-scrollbar': {
            width: '8px',
          },
          '& ::-webkit-scrollbar-track': {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.grey[800]
                : theme.palette.grey[200],
            borderRadius: '4px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.grey[600]
                : theme.palette.grey[400],
            borderRadius: '4px',
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{ p: 2, gap: 1, display: 'flex', alignItems: 'center' }}
        >
          <KeyOutlinedIcon />
          {reference}

          <Divider orientation="vertical" />

          <Tooltip title={t('statTitle')} placement="right">
            <InfoOutlineIcon />
          </Tooltip>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Paper elevation={1} sx={{ p: 1, width: '100%', borderRadius: 0 }}>
            {/**Datos cargando */}
            {isLoading && (
              <Stack sx={{ p: 4 }}>
                <CircularProgress />
              </Stack>
            )}

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error.message}
              </Alert>
            )}

            {chartData && (
              <Stack spacing={3} divider={<Divider />}>
                <Paper elevation={0} sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {t('temperature')} (°C)
                  </Typography>
                  <LineChart
                    xAxis={[
                      {
                        data: chartData.dates,
                        scaleType: 'point',
                      },
                    ]}
                    series={[
                      {
                        data: chartData.temperature,
                        color: paletteColor,
                      },
                    ]}
                    height={500}
                  />
                </Paper>

                <Paper elevation={0} sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {t('humidity')} (0: {t('low')}, 1000: {t('high')})
                  </Typography>
                  <LineChart
                    xAxis={[
                      {
                        data: chartData.dates,
                        scaleType: 'point',
                      },
                    ]}
                    series={[
                      {
                        data: chartData.humidity,
                        color: paletteColor,
                      },
                    ]}
                    height={500}
                  />
                </Paper>

                <Paper elevation={0} sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {t('light')} (0: {t('low')}, 1000: {t('high')})
                  </Typography>
                  <LineChart
                    xAxis={[
                      {
                        data: chartData.dates,
                        scaleType: 'point',
                      },
                    ]}
                    series={[
                      {
                        data: chartData.light,
                        color: paletteColor,
                      },
                    ]}
                    height={500}
                  />
                </Paper>
              </Stack>
            )}
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChartComponent;
