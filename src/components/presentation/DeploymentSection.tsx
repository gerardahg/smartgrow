import Link from 'next/link';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CloudDone, Storage, Launch, CheckCircle } from '@mui/icons-material';

const DeploymentSection = () => {
  const deploymentDetails = [
    {
      service: 'Vercel',
      type: 'Frontend & API',
      description: 'Aplicacion Next.js',
      icon: <Launch color="primary" />,
      url: 'https://vercel.com',
      features: [
        'Despliegue automático',
        'Maneja ENV',
        'Intuitivo',
        'Fácil de usar',
      ],
    },
    {
      service: 'Railway',
      type: 'Base de Datos',
      description: 'Base de datos MySQL en la nube',
      icon: <Storage color="primary" />,
      url: 'https://railway.com',
      features: [
        'Backups automáticos',
        'Escalabilidad',
        'Monitoreo 24/7',
        'Capa gratuita',
      ],
    },
  ];

  const deploymentProcess = [
    'Desarrollo local',
    'Buildear el proyecto (yarn)',
    'Arreglar errores',
    'Commit y push a repositorio (deploy automático en Vercel)',
    'Arreglar errores en logs de deployment de vercel',
    'Verificar la aplicación',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h2"
        sx={{
          mb: 6,
          textAlign: 'center',
          fontWeight: 550,
          fontSize: { xs: '2rem', sm: '3.5rem' },
        }}
      >
        Despliegue
      </Typography>

      <Paper elevation={1} sx={{ p: 4, mb: 6 }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ color: 'primary.main', fontWeight: 600, mb: 4 }}
        >
          Estructura de Deployment
        </Typography>
        <Grid container spacing={4}>
          {deploymentDetails.map((deployment, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                elevation={2}
                sx={({ palette }) => ({
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: `0 0 16px ${palette.primary.main}`,
                    transform: 'translateY(-8px)',
                  },
                })}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {deployment.icon}
                    <Box sx={{ ml: 2, flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight={550}>
                        {deployment.service}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {deployment.type}
                      </Typography>
                    </Box>
                    <Chip
                      label="Activo"
                      color="success"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {deployment.description}
                  </Typography>
                  <Link href={deployment.url} target="_blank">
                    <Typography
                      variant="body2"
                      sx={{
                        bgcolor: 'grey.100',
                        color: 'black',
                        px: 1,
                        py: 1,
                        borderRadius: 1,
                        mb: 2,
                      }}
                    >
                      {deployment.url}
                    </Typography>
                  </Link>
                  <List>
                    {deployment.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <CheckCircle color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.875rem',
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 550, mb: 3 }}
            >
              Proceso de Deployment
            </Typography>
            <List>
              {deploymentProcess.map((step, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemIcon>
                    <Typography>{index + 1}</Typography>
                  </ListItemIcon>
                  <ListItemText primary={step} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <CloudDone sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 550, mb: 2 }}
            >
              Sistema en Producción
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              El sistema completo está desplegado y funcionando en producción.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Launch />}
              sx={{ fontWeight: 550 }}
              href="https://smartgrow.vercel.app"
              target="_blank"
            >
              Ver Aplicación en Vivo
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeploymentSection;
