import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
} from '@mui/material';

import Security from '@mui/icons-material/Security';
import Api from '@mui/icons-material/Api';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import StarIcon from '@mui/icons-material/Star';
import RadarIcon from '@mui/icons-material/Radar';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Gauge } from '@mui/x-charts/Gauge';

const TestingSection = () => {
  const generalTests = [
    'Lectura de sensores (Arduino Uno R4 WiFi)',
    'Reproducción de audio (DFPlayer Mini)',
    'Comunicación con la web (Next.js backend en Vercel)',
    'Autenticación de usuarios (Login, register y logout)',
    'Visualización web (Next.js frontend)',
  ];

  const endpointTests = [
    {
      method: 'POST',
      endpoint: '/api/reading/[id]',
      description: 'Recepción de datos del Arduino',
    },
    {
      method: 'GET',
      endpoint: '/api/reading/[id]/avg',
      description: 'Obtención de datos históricos',
    },
    {
      method: 'GET',
      endpoint: '/api/reading/[id]/latest',
      description: 'Últimas lecturas de sensores',
    },
    {
      method: 'GET',
      endpoint: '/api/devices',
      description: 'Dispositivos del usuario',
    },
    {
      method: 'GET',
      endpoint: '/api/users/[id]',
      description: 'Autenticación de usuarios',
    },
  ];

  const testResults = [
    {
      category: 'Performance',
      icon: <SpeedIcon color="primary" />,
      value: 98,
    },
    {
      category: 'Accessibility',
      icon: <AccessibilityIcon color="primary" />,
      value: 98,
    },
    {
      category: 'Best Practices',
      icon: <StarIcon color="primary" />,
      value: 100,
    },
    {
      category: 'SEO',
      icon: <RadarIcon color="primary" />,
      value: 100,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ fontWeight: 550, fontSize: { xs: '2rem', sm: '3.5rem' } }}
        >
          Pruebas
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                height: '100%',
              }}
            >
              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: 'primary.main', fontWeight: 550, mb: 3 }}
                  >
                    <Security sx={{ mr: 2 }} />
                    Pruebas Generales
                  </Typography>
                  <Typography variant="body1">
                    Validación completa del sistema
                  </Typography>
                </Box>
                <List>
                  {generalTests.map((test, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <Card
                        variant="outlined"
                        sx={({ palette }) => ({
                          width: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: `0 0 16px ${palette.primary.main}`,
                            transform: 'translateX(+8px)',
                          },
                        })}
                      >
                        <CardContent>
                          <Stack direction="row" alignItems="center">
                            <ListItemIcon>
                              <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary={test} />
                          </Stack>
                        </CardContent>
                      </Card>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: 550, mb: 3 }}
              >
                <Api sx={{ mr: 2 }} />
                Pruebas de Endpoints
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Validación de todos los endpoints de la API
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {endpointTests.map((endpoint, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={({ palette }) => ({
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 0 16px ${palette.primary.main}`,
                        transform: 'translateX(+8px)',
                      },
                    })}
                  >
                    <CardContent>
                      <Stack direction="row" alignItems="center" mb={1}>
                        <Chip
                          label={endpoint.method}
                          size="small"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 550,
                            mr: 2,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            flexGrow: 1,
                          }}
                        >
                          {endpoint.endpoint}
                        </Typography>
                        <CheckCircle color="success" />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {endpoint.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 550,
              textAlign: 'center',
            }}
          >
            Prueba de Rendimiento
          </Typography>

          <Grid container spacing={3}>
            {testResults.map((result, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={({ palette }) => ({
                    p: 3,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 0 16px ${palette.primary.main}`,
                    },
                  })}
                  variant="outlined"
                >
                  <CardContent>
                    <Stack alignItems="center">
                      <Box sx={{ mb: 1 }}>{result.icon}</Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 550 }}
                      >
                        {result.category}
                      </Typography>
                      <Gauge width={100} height={100} value={result.value} />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>
    </Container>
  );
};

export default TestingSection;
