import Link from 'next/link';
import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import NavButtonComponent from '@/components/NavButtonComponent';
import ThemeButton from '@/components/application-ui/ThemeComponent/ThemeButtonComponent';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/my-devices">
              <NavButtonComponent icon={<HomeIcon />} />
            </Link>
          </Box>
          <ThemeButton />
          <NavButtonComponent
            icon={<AccountCircleIcon />}
            menuItems={[{ display: 'Logout' }]}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </>
  );
};

export default layout;
