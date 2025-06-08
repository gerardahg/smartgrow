import Link from 'next/link';
import Image from 'next/image';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import { Storage, Security, Language, Api } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GridViewIcon from '@mui/icons-material/GridView';
import MemoryIcon from '@mui/icons-material/Memory';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CodeIcon from '@mui/icons-material/Code';
import MoveDownIcon from '@mui/icons-material/MoveDown';

const architecture = [
  {
    title: 'Registro y autenticación',
    description: 'Empleando NextAuth.js',
    items: ['OAuth 2.0', 'JSON Web Token', 'Cookies', 'Google Provider'],
  },
  {
    title: 'Visualización de dispositivos personales',
    description:
      'Ver la lista de tus plantas y su estado actual (humedad, luz...)',
    items: [
      'Crear, editar y eliminar dispositivos',
      'Buscar y filtrar lista de dispositivos',
      'Observar la humedad de la tierra, temperatura, luz que recibe, y lluvia',
    ],
  },
  {
    title: 'Personalización',
    description: 'Empleando MUI, next-intl y redux',
    items: [
      'Cambiar tematica de colores',
      'Ciclar entre modo oscuro y claro',
      'Cambiar el idioma de la página',
      'Personalizar partes especifcas del UI',
    ],
  },
  {
    title: 'Estadísticas',
    description: 'Histórico de plantas empleando MUI charts',
    items: [
      'Gráficos interactivos',
      'Históricos de lecturas en plantas',
      'Ver las medias de las lecturas que tuvo la planta en cada día',
    ],
  },
  {
    title: 'Notificaciones a voz',
    description: 'Empleando DFPlayer Mini',
    items: [
      'Altavoz conectado al DFPlayer',
      'Advertencias por cambios relevantes',
      'Avisos cuando las lecturas superan ciertos límites',
    ],
  },
];

const StructureSection = () => {
  const technologies = [
    {
      category: 'Next.js',
      icon: <DeveloperModeIcon color="primary" />,
      items: ['React', 'TypeScript', 'NextAuth.js', 'Next-intl', 'App Router'],
      link: 'https://nextjs.org/',
    },
    {
      category: 'Backend y Base de datos',
      icon: <Storage color="primary" />,
      items: [
        'Prisma ORM',
        'MySQL',
        'Railway',
        'API Routes',
        'bcrypt',
        'zod',
        'dbeaver',
      ],
      link: 'https://www.prisma.io/',
    },
    {
      category: 'Autenticación',
      icon: <Security color="primary" />,
      items: ['NextAuth.js', 'JWT', 'Cookies', 'OAuth', 'Google'],
      link: 'https://next-auth.js.org/',
    },
    {
      category: 'Arduino R4 WiFi',
      icon: <MemoryIcon color="primary" />,
      items: [
        'Sensor de luz (TEMT6000)',
        'Sensor de humedad del suelo',
        'Sensor de temperatura y humedad (DHT11)',
        'Sensor de gotas de lluvia',
        'DFPlayer Mini (reproductor de audio)',
      ],
      link: 'https://store.arduino.cc/products/uno-r4-wifi',
    },
    {
      category: 'Internacionalización',
      icon: <Language color="primary" />,
      items: ['Next-intl', 'Múltiples idiomas', 'Cookies'],
      link: 'https://next-intl.dev/',
    },
    {
      category: 'Despliegue',
      icon: <Api color="primary" />,
      items: ['Vercel', 'Railway MySQL', 'Sincronizado con repositorio GitHub'],
      link: 'https://vercel.com',
    },
    {
      category: 'Control de versiones',
      icon: <GitHubIcon color="primary" />,
      items: ['Github', 'Git'],
      link: 'https://github.com/gerardahg/smartgrow',
    },
    {
      category: 'Material UI',
      icon: <GridViewIcon color="primary" />,
      items: [
        'Libreria React',
        'Responsive',
        'Accesible',
        'Componentes listos para usar',
        'Diseño Material Design de Google',
        'MUI Charts',
        'Bien documentada y popular',
      ],
      link: 'https://mui.com/material-ui/getting-started/',
    },
    {
      category: 'Entorno de Desarrollo',
      icon: <CodeIcon color="primary" />,
      items: [
        'Visual Studio Code',
        'ESLint',
        'Prettier',
        'Yarn (Gestor de paquetes)',
      ],
      link: 'https://code.visualstudio.com/',
    },
    {
      category: 'Estado de variables',
      icon: <MoveDownIcon color="primary" />,
      items: ['Redux', 'Redux Persist'],
      link: 'https://redux.js.org/',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        textAlign="center"
        gutterBottom
        sx={{
          mb: 5,
          fontWeight: 550,
          fontSize: { xs: '2rem', sm: '3.5rem' },
        }}
      >
        Estructura y Funcionamiento
      </Typography>

      <Paper sx={{ p: 4, mb: 6 }}>
        <Image
          src="/images/presentation/structure.png"
          alt="smartgrow estructura"
          width={2000}
          height={2000}
        />
      </Paper>

      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={550}
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '3.5rem' },
          }}
        >
          Funcionalidades de usuario
        </Typography>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {architecture.map((layer, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography
                  variant="h6"
                  component="h4"
                  gutterBottom
                  sx={{ fontWeight: 550 }}
                >
                  {layer.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {layer.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {layer.items.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Typography
        variant="h2"
        textAlign="center"
        sx={{ my: 6, fontWeight: 550, fontSize: { xs: '2rem', sm: '3.5rem' } }}
      >
        Tecnologías Utilizadas
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {technologies.map((tech, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Link href={tech.link} target="_blank">
              <Paper
                sx={({ palette }) => ({
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 0 25px ${palette.primary.main}`,
                  },
                })}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  {tech.icon}
                  <Typography variant="h6" fontWeight={550}>
                    {tech.category}
                  </Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {tech.items.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StructureSection;
