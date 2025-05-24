'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Avatar from '@mui/material/Avatar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { RootState } from '@/store/store';
import { setMode } from '@/store/slices/themeSlice';

const ThemeModeComponent = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Stack direction="row" className="justify-between items-center">
      <Typography variant="body1">Theme Mode</Typography>
      <RadioGroup
        row
        value={mode}
        onChange={(e) => dispatch(setMode(e.target.value))}
        className="gap-1"
      >
        <FormControlLabel
          value="light"
          control={<Radio className="!hidden" />}
          label={
            <Avatar
              sx={{
                backgroundColor: 'background.paper',
                border: '2px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'transparent',
                '&.Mui-checked': {
                  borderColor: 'primary.main',
                },
              }}
              variant="rounded"
            >
              <LightModeIcon className="!fill-yellow-500" />
            </Avatar>
          }
        />
        <FormControlLabel
          value="dark"
          control={<Radio className="!hidden" />}
          label={
            <Avatar
              variant="rounded"
              sx={{
                border: '2px solid',
                borderColor: (theme) =>
                  theme.palette.mode !== 'light'
                    ? 'primary.main'
                    : 'transparent',
                '&.Mui-checked': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <DarkModeIcon />
            </Avatar>
          }
        />
      </RadioGroup>
    </Stack>
  );
};

export default ThemeModeComponent;
