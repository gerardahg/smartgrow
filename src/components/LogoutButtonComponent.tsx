'use client';

import React, { useState } from 'react';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LogoutButtonComponent = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    signOut({ callbackUrl: '/sign-in' });
  };

  const t = useTranslations();
  return (
    <>
      <IconButton
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{ color: 'white' }}
      >
        <AccountCircleIcon />
        {!smallScreen && (
          <Typography variant="body2" sx={{ ml: 1 }}>
            {t('myAccount')}
          </Typography>
        )}
      </IconButton>
      <Menu open={open} onClose={() => setAnchor(null)} anchorEl={anchor}>
        <MenuItem
          onClick={() => {
            setAnchor(null);
            handleLogout();
          }}
        >
          {t('logout')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LogoutButtonComponent;
