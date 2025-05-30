import Link from 'next/link';
import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ThemeButton from '@/components/application-ui/ThemeComponent/ThemeButtonComponent';
import TranslateComponent from '@/components/application-ui/forms/TranslateComponent';
import AppBarComponent from '@/components/application-ui/landing/AppBarComponent';
import SmartgrowLogoComponent from '@/components/SmartgrowLogoComponent';
import LogoutButtonComponent from '@/components/LogoutButtonComponent';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <AppBarComponent>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/my-devices">
                <SmartgrowLogoComponent />
              </Link>
            </Box>
            <ThemeButton />
            <LogoutButtonComponent />
            <TranslateComponent />
          </Toolbar>
        </Container>
      </AppBarComponent>
      <Toolbar sx={{ mb: 1 }} />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default layout;
