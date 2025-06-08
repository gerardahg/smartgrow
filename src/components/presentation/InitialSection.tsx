import Image from 'next/image';

import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

const pros = [
  {
    name: 'Carlos',
    lastName: 'Granda Carpena',
    link: 'https://www.linkedin.com/in/carlos-granda-carpena-3803a5188/',
  },
  {
    name: 'Gerardo',
    lastName: 'Hernández Gomes',
    link: 'https://www.linkedin.com/in/gerardo-hernandez-3b1296312/',
  },
];

const InitialSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="h3"
                gutterBottom
                fontWeight={550}
                sx={{ fontWeight: 550, fontSize: { xs: '2rem', sm: '3.5rem' } }}
              >
                SmartGrow
              </Typography>
              <Image
                width={64}
                height={64}
                src="/images/plant.png"
                alt="SmartGrow Logo"
              />
            </Stack>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.secondary' }}
            >
              IES Enrique Tierno Galvan
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Proyecto fin de grado | Desarrollo de Aplicaciones Web
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={1} sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ textAlign: 'center', mb: 3 }}>
                Equipo Programador
              </Typography>
              <Grid container spacing={2}>
                {pros.map((item, index) => (
                  <Grid size={6} key={index}>
                    {/*target _blank: Redirecciona a una nueva tab en vez de reemplazar la misma página */}
                    <Link href={item.link} target="_blank">
                      <Paper
                        elevation={2}
                        sx={({ palette }) => ({
                          height: '100%',
                          p: 2,
                          textAlign: 'center',
                          '&:hover': {
                            transform: 'translatey(-8px)',
                            boxShadow: `0 0 16px ${palette.primary.main}`,
                          },
                          transition: 'all 0.3s ease',
                        })}
                      >
                        <Box sx={{ mb: 1 }}>
                          <PersonIcon fontSize="large" />
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {item.lastName}
                        </Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InitialSection;
