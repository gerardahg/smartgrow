import Link from 'next/link';
import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import NavButtonComponent from '@/components/NavButtonComponent';
import ThemeButton from '@/components/application-ui/ThemeComponent/ThemeButtonComponent';
import TranslateComponent from '@/components/application-ui/forms/TranslateComponent';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            pr: { lg: 25, md: 20, sm: 4, xs: 1 },
            pl: { lg: 25, md: 20, sm: 4, xs: 1 },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/my-devices">
              <NavButtonComponent icon={<HomeIcon />} />
            </Link>
          </Box>
          <TranslateComponent />
          <ThemeButton />
          <NavButtonComponent
            icon={<AccountCircleIcon />}
            menuItems={[{ display: 'logout' }]}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        sx={{
          pl: { lg: 25, md: 20, sm: 4, xs: 1 },
          pr: { lg: 25, md: 20, sm: 4, xs: 1 },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default layout;
