import React from 'react';
import { Box, Container, Typography, Paper, Grid, Stack } from '@mui/material';
import { TrendingUp, Sensors, CloudDone, Timeline } from '@mui/icons-material';
import ImageComponent from './UI/ImageComponent';

const ObjectiveSection = () => {
  const objectives = [
    {
      icon: <Sensors color="primary" />,
      title: 'Captura de datos ambientales',
      description:
        'Capturamos datos del ambiente en tiempo real a través de sensores integrados en el Arduino',
    },
    {
      icon: <TrendingUp color="primary" />,
      title: 'Almacenar datos',
      description:
        'Los almacenamos en una base de datos para visualizarlos en la aplicación web',
    },
    {
      icon: <Timeline color="primary" />,
      title: 'Visualizar datos',
      description:
        'En una aplicación web. Adaptable y accesible desde cualquier dispositivo, diseñada para ser intuitiva para todo tipo de usuario y personalizable',
    },
    {
      icon: <CloudDone color="primary" />,
      title: 'Analizar datos',
      description:
        'Permitir visualizar el historial de datos de la planta mediante gráficos interactivos que facilitan el análisis de su comportamiento a lo largo del tiempo',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100dvh' }}>
      <Typography
        variant="h2"
        textAlign="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: 550 }}
      >
        Objetivo
      </Typography>

      <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            fontWeight: 550,
            mb: 3,
            textAlign: 'center',
          }}
        >
          Objetivo Principal
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Desarrollar un sistema de monitoreo ambiental para plantas
              conectado con una aplicación web moderna desarrollada en Next.js
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              El sistema toma los datos de la planta por medio de sensores los
              cuales se encuentran conectados al Arduino, estas lecturas son
              enviadas a la base de datos del proyecto desde donde la página web
              las recupera para mostrarlas al usuario correspondiente.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageComponent
              src="/images/presentation/arduino.jpg"
              alt="arduino"
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ mb: 4, color: 'primary.main', fontWeight: 550 }}
        >
          Objetivos Específicos
        </Typography>

        <Grid container spacing={3}>
          {objectives.map((objective, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                elevation={2}
                sx={({ palette }) => ({
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 0 16px ${palette.primary.main}`,
                  },
                })}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ mr: 2, mt: 0.5 }}>{objective.icon}</Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{ fontWeight: 600, color: 'text.primary' }}
                    >
                      {objective.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                    >
                      {objective.description}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ObjectiveSection;
