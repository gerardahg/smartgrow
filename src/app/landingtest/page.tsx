'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Speed,
  WbSunny,
  Opacity,
  Thermostat,
  CloudQueue,
  Notifications,
  Dashboard,
  Memory,
  Timeline,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import TranslateComponent from '@/components/application-ui/forms/TranslateComponent';
import ThemeButtonComponent from '@/components/application-ui/ThemeComponent/ThemeButtonComponent';

export default function SmartGrowLanding() {
  const [currentSensor, setCurrentSensor] = useState(0);

  const sensors = [
    {
      name: 'Temperature',
      value: '24°C',
      icon: <Thermostat />,
      color: '#ff5722',
    },
    { name: 'Humidity', value: '65%', icon: <Opacity />, color: '#2196f3' },
    {
      name: 'Light Level',
      value: '350 lux',
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

  const features = [
    {
      title: 'Real-time Monitoring',
      description:
        'Continuous tracking of environmental conditions with instant updates',
      icon: <Timeline sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Audio Alerts',
      description:
        'Smart speaker notifications when conditions require attention',
      icon: <Notifications sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Data Storage',
      description:
        'All sensor data is automatically logged and stored for analysis',
      icon: <Memory sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Dashboard View',
      description: 'Beautiful, intuitive interface to visualize all your data',
      icon: <Dashboard sx={{ fontSize: 40 }} />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSensor((prev) => (prev + 1) % sensors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar
              sx={({ palette }) => ({
                mr: 2,
                background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
                color: 'white',
              })}
            >
              <Speed />
            </Avatar>
            <Typography variant="h5" fontWeight={700}>
              SmartGrow
            </Typography>
          </Box>

          <TranslateComponent />
          <ThemeButtonComponent />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Chip
                label="Arduino Powered"
                sx={({ palette }) => ({
                  mb: 3,
                  background: `linear-gradient(45deg, ${palette.primary.main}, ${palette.secondary.main})`,
                  color: 'white',
                  fontWeight: 600,
                })}
              />
              <Typography sx={{ mb: 3, fontSize: { xs: 32, md: 48 } }}>
                Intelligent Environmental Monitoring
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}
              >
                SmartGrow combines Arduino technology with smart sensors to
                monitor rain, humidity, temperature, and light levels in
                real-time. Get instant audio alerts and track historical data
                through our beautiful dashboard.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={({ palette }) => ({
                    background: `linear-gradient(45deg, ${palette.primary.main}, ${palette.secondary.main})`,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: `0 0 32px ${palette.primary.main}`,
                  })}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
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
                        transform:
                          index === currentSensor ? 'scale(1.05)' : 'scale(1)',
                      })}
                      elevation={4}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 2 }}>
                        <Box sx={{ color: sensor.color, mb: 1 }}>
                          {sensor.icon}
                        </Box>
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
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom fontWeight={600}>
            Powerful Features
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Everything you need to monitor and analyze your environment
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
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
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'grey.400', lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technical Specs */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Technical Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}
            >
              Built with precision Arduino components and cutting-edge sensors,
              SmartGrow delivers laboratory-grade accuracy in an easy-to-use
              package. Our system processes thousands of data points to give you
              the most reliable environmental insights.
            </Typography>

            <List>
              {[
                'Arduino-based microcontroller system',
                'High-precision environmental sensors',
                'Real-time audio alert system',
                'Automated data logging and storage',
                'Web-based dashboard interface',
              ].map((spec, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary={spec} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Paper sx={{ py: 8, mt: 8, borderRadius: 0 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Start Monitoring?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'grey.400' }}>
            Join the SmartGrow ecosystem and take control of your environment
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={(theme) => ({
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              boxShadow: `0 0 32px ${theme.palette.primary.main}`,
            })}
          >
            Access Dashboard
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'grey.500' }}>
            No setup required • Real-time data • Free to use
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
}
