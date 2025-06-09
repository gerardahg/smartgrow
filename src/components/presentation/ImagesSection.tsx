import Link from 'next/link';
import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import GradientButtonComponent from '../application-ui/landing/GradientButtonComponent';

const itemData = [
  {
    img: '/images/presentation/arduino.jpg',
    title: 'Arduino y maceta',
  },
  {
    img: '/images/presentation/temperature.png',
    title: 'Sensor de temperatura',
  },
  {
    img: '/images/presentation/pot2.png',
    title: 'Maceta de la planta 2',
  },
  {
    img: '/images/presentation/rain.png',
    title: 'Sensor de lluvia',
  },
  {
    img: '/images/presentation/light.png',
    title: 'Sensor de luz',
  },
  {
    img: '/images/presentation/pot1.png',
    title: 'Maceta de la planta 1',
  },
  {
    img: '/images/presentation/humidity.png',
    title: 'Sensor de humedad de la tierra',
  },
];

const ImagesSection = () => {
  return (
    <Container maxWidth="lg">
      <Divider sx={{ mb: 6 }} />
      <ImageList variant="masonry" cols={3} gap={3}>
        {itemData.map((item, i) => (
          <Tooltip title={item.title} key={i}>
            <ImageListItem>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Tooltip>
        ))}
      </ImageList>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 12 }}>
        <Link href="https://smartgrow.vercel.app">
          <GradientButtonComponent text={'Ir a SmartGrow'} />
        </Link>
      </Box>
    </Container>
  );
};

export default ImagesSection;
