import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ImageComponent from './UI/ImageComponent';

const OrganizationSection = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight={550}
          fontSize={{ xs: '2rem', sm: '3.5rem' }}
        >
          Organización
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: '550',
              color: 'primary.main',
              mb: 3,
            }}
          >
            Diagrama de Gantt
          </Typography>
          <ImageComponent
            src="/images/presentation/gantt.png"
            alt="diagrama de gantt"
          />
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: '550',
              color: 'primary.main',
              mb: 3,
            }}
          >
            Metodología de Desarrollo
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 6 }}>
                Para el desarrollo del proyecto se ha utilizado la metodología
                en espiral, ya que combina la estructura del modelo en cascada
                con iteraciones continuas que permiten mejorar y corregir sobre
                la marcha. Esta metodología resulta especialmente útil en
                proyectos con componentes interdependientes y con un grado de
                incertidumbre técnica, como en este caso que combina hardware,
                software embebido, desarrollo web y base de datos.
              </Typography>
              <Typography>
                Funciona en ciclos o espirales, y cada ciclo incluye:
                Planteamiento, Análisis, Evaluación y Desarrollo. Con cada
                vuelta, se mejora y amplía el sistema, reduciendo riesgos
                progresivamente.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ImageComponent
                src="/images/presentation/spiral.jpg"
                alt="Metodo en espiral"
              />
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Container>
  );
};

export default OrganizationSection;
