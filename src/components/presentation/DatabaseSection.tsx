import React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ImageComponent from './UI/ImageComponent';

const DatabaseSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Stack spacing={6}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 550,
            fontSize: { xs: '2rem', sm: '3.5rem' },
          }}
        >
          Base de datos
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight={550}
                color="primary"
              >
                Diagrama
              </Typography>
              <ImageComponent
                src="/images/presentation/diagram.png"
                alt="Diagrama lógico base datos"
              />
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography
                variant="h4"
                gutterBottom
                fontWeight={550}
                color="primary"
              >
                Modelo ORM
              </Typography>
              <ImageComponent
                src="/images/presentation/dbModel.png"
                alt="Modelo Prisma base de datos"
              />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default DatabaseSection;
