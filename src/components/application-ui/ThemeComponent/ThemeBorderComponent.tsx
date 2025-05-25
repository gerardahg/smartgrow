'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

import { RootState } from '@/store/store';
import { setBorder } from '@/store/slices/themeSlice';
import { useTranslations } from 'next-intl';

const ThemeBorderComponent = () => {
  const dispatch = useDispatch();
  const borderRadius = useSelector((state: RootState) => state.theme.border);
  const [slider, setSlider] = useState(borderRadius);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setBorder(slider));
    }, 300);

    return () => clearTimeout(timeout);
  }, [slider, dispatch]);

  const t = useTranslations();
  return (
    <Stack>
      <Typography variant="body1">{t('borderRadius')}</Typography>
      <Stack direction="row" className="gap-5 mt-3 items-center">
        <Typography variant="body2">4px</Typography>
        <Slider
          value={slider}
          size="small"
          valueLabelDisplay="auto"
          min={4}
          max={24}
          onChange={(e, v) => setSlider(v)}
        />
        <Typography variant="body2">24px</Typography>
      </Stack>
    </Stack>
  );
};

export default ThemeBorderComponent;
