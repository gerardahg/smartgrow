'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import TranslateIcon from '@mui/icons-material/Translate';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { setUserLocale, getUserLocale } from '@/i18n/locale';

const TranslateComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>();
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const changeLanguage = (lng: 'en' | 'es') => {
    setAnchorEl(null);
    setUserLocale(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    const fetchLanguage = async () => {
      const currentLanguage = await getUserLocale();
      setLanguage(currentLanguage);
    };
    fetchLanguage();
  }, []);

  const currentLng = language == 'en' ? 'English' : 'Español';
  const currentlngSrc =
    language == 'en'
      ? '/images/country-flags/united-states-of-america.png'
      : '/images/country-flags/spain.png';

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ color: 'white', pr: { xs: 0, sm: 'auto' } }}
      >
        {!smallScreen && (
          <>
            <TranslateIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {currentLng}
            </Typography>
          </>
        )}
        {smallScreen && (
          <>
            <Image
              width={24}
              height={24}
              src={currentlngSrc}
              alt={currentLng}
            />
            <ExpandMoreIcon />
          </>
        )}
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Stack sx={{ p: 1, minWidth: 160 }} spacing={1}>
          <Button
            fullWidth
            startIcon={
              <Image
                width={24}
                height={24}
                src="/images/country-flags/united-states-of-america.png"
                alt="english"
              />
            }
            onClick={() => changeLanguage('en')}
            variant={language == 'en' ? 'contained' : 'outlined'}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: 'text.primary',
            }}
          >
            English
          </Button>

          <Button
            fullWidth
            startIcon={
              <Image
                width={24}
                height={24}
                src="/images/country-flags/spain.png"
                alt="español"
              />
            }
            onClick={() => changeLanguage('es')}
            variant={language == 'es' ? 'contained' : 'outlined'}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: 'text.primary',
            }}
          >
            Español
          </Button>
        </Stack>
      </Popover>
    </>
  );
};

export default TranslateComponent;
