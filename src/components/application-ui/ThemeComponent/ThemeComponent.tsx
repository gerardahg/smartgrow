import React from 'react';

import PaletteIcon from '@mui/icons-material/Palette';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import ThemeMode from './ThemeModeComponent';
import ThemeColor from './ThemeColorComponent';
import ThemeBorder from './ThemeBorderComponent';

const ThemeComponent = () => {
  return (
    <>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Stack divider={<Divider sx={{ mt: 2, mb: 2 }} />}>
            <Stack direction="row" spacing={2} className="items-center">
              <Avatar sx={{ backgroundColor: 'primary.main', color: 'white' }}>
                <PaletteIcon />
              </Avatar>
              <Typography variant="h6">Theme customization</Typography>
            </Stack>

            <ThemeMode />

            <ThemeColor />

            <ThemeBorder />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ThemeComponent;
