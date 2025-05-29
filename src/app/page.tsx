import Link from 'next/link';
import {
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';

import TranslateComponent from '@/components/application-ui/forms/TranslateComponent';
import ThemeButtonComponent from '@/components/application-ui/ThemeComponent/ThemeButtonComponent';
import LiveDataComponent from '@/components/application-ui/landing/LiveDataComponent';
import ChipComponent from '@/components/application-ui/landing/ChipComponent';
import AppBarComponent from '@/components/application-ui/landing/AppBarComponent';
import FeatureComponent from '@/components/application-ui/landing/FeatureComponent';
import GradientButtonComponent from '@/components/application-ui/landing/GradientButtonComponent';
import SmartgrowLogoComponent from '@/components/SmartgrowLogoComponent';

export default function SmartGrowLanding() {
  return (
    <Box>
      {/* Barra de herramientas principal */}
      <AppBarComponent>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Link href={'/'}>
                <SmartgrowLogoComponent />
              </Link>
            </Box>

            <Stack direction="row">
              <TranslateComponent />

              <ThemeButtonComponent />
            </Stack>
          </Toolbar>
        </Container>
      </AppBarComponent>

      {/* Primera sección */}
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          mt: { xs: 12, md: 0 },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <ChipComponent />
            <Typography
              gutterBottom
              fontWeight={600}
              sx={{ fontSize: { xs: 32, md: 48 } }}
            >
              Intelligent Environmental Monitoring
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.5 }}
            >
              SmartGrow uses advanced sensor technology to monitor rain,
              humidity, temperature, and light levels in real-time. Receive
              instant audio alerts and explore trends over time with our
              intuitive, user-friendly dashboard.
            </Typography>
            <Link href="/sign-in">
              <GradientButtonComponent
                text="Get Started"
                icon={<ArrowForward />}
              />
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <LiveDataComponent />
          </Grid>
        </Grid>
      </Container>

      {/* Sección de 'features' */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom fontWeight={600}>
            Powerful Features
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Everything you need to monitor and analyze your environment
          </Typography>
        </Box>

        <FeatureComponent />
      </Container>

      {/* Sección de arduino */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Technical Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.5 }}
            >
              SmartGrow uses high-quality sensors and thoughtful design to give
              you accurate, real-time information about your environment. It's
              easy to use and helps you stay on top of changing conditions,
              whether you're indoors or outdoors.
            </Typography>

            <List>
              {[
                'Reliable environmental sensors',
                'Instant audio alerts',
                'Automatic data tracking',
                'Easy-to-use online dashboard',
              ].map((spec, index) => (
                <ListItem key={index}>
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

      {/* Sección final */}
      <Paper sx={{ py: 8, mt: 8, borderRadius: 0 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Start Monitoring?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
            Join the SmartGrow ecosystem and take control of your environment
          </Typography>
          <Link href="/sign-in">
            <GradientButtonComponent
              text="Get Started"
              icon={<ArrowForward />}
            />
          </Link>
        </Container>
      </Paper>
    </Box>
  );
}
