import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  TrendingUp,
  Notifications,
  SmartToy,
  CloudSync,
  Upgrade,
} from '@mui/icons-material';

const ImprovementsSection = () => {
  const futureImprovements = [
    {
      title: 'Aviso al télefono',
      description: 'Notificaciones automáticas por situaciones especiales',
      icon: <Notifications color="primary" />,
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Predicción de condiciones y recomendaciones automáticas',
      icon: <SmartToy color="primary" />,
    },
    {
      title: 'Solicitar en vez de recibir',
      description:
        'Solicitar ver el status en ese momento en vez de esperar por el dispositivo',
      icon: <CloudSync color="primary" />,
    },
    {
      title: 'Analytics Avanzados',
      description: 'Reportes detallados',
      icon: <TrendingUp color="primary" />,
    },
    {
      title: 'Escalar',
      description: 'Soporte para gran cantidad de usuarios y dispositivos',
      icon: <Upgrade color="primary" />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ mb: 6, fontWeight: 550 }}
      >
        Mejoras
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {futureImprovements.map((improvement, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Card
              sx={({ palette }) => ({
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 0 16px ${palette.primary.main}`,
                },
              })}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {improvement.icon}
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 550 }}>
                    {improvement.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {improvement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImprovementsSection;
