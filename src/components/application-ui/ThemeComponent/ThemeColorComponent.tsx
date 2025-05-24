'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

import { RootState } from '@/store/store';
import colors from '@/theme/colors';
import { setTheme } from '@/store/slices/themeSlice';

const { theme1, theme2, theme3, theme4, theme5 } = colors;

const ThemeColorComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const colorOptions = [
    {
      id: 1,
      primary: theme1.primary.main,
      secondary: theme1.secondary.main,
    },
    {
      id: 2,
      primary: theme2.primary.main,
      secondary: theme2.secondary.main,
    },
    {
      id: 3,
      primary: theme3.primary.main,
      secondary: theme3.secondary.main,
    },
    {
      id: 4,
      primary: theme4.primary.main,
      secondary: theme4.secondary.main,
    },
    {
      id: 5,
      primary: theme5.primary.main,
      secondary: theme5.secondary.main,
    },
  ];
  return (
    <>
      <Typography variant="body1" className="!mb-3">
        Preset Color
      </Typography>
      <RadioGroup
        value={theme}
        onChange={(e) => dispatch(setTheme(Number(e.target.value)))}
      >
        <Grid container alignItems="center" justifyContent="center">
          {colorOptions.map((tempColor) => (
            <FormControlLabel
              key={tempColor.id}
              control={<Radio className="!hidden" />}
              value={tempColor.id}
              label={
                <Grid>
                  <Avatar
                    sx={{
                      background: `linear-gradient(135deg, ${tempColor.primary} 50%, ${tempColor.secondary} 50%)`,
                      cursor: 'pointer',
                      opacity: tempColor.id != theme ? 0.6 : 1,
                    }}
                  >
                    {tempColor.id == theme ? (
                      <CheckIcon className="!fill-white" />
                    ) : (
                      ' '
                    )}
                  </Avatar>
                </Grid>
              }
            />
          ))}
        </Grid>
      </RadioGroup>
    </>
  );
};

export default ThemeColorComponent;
