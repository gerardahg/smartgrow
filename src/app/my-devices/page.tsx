import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import WelcomeUser from '@/components/application-ui/general-text/WelcomeUserComponent';
import Devices from '@/components/application-ui/plant-component/DevicesGrid';
import GradientHeader from '@/components/GradientHeader';
import RedirectNotAuthenticated from '@/components/application-ui/general-text/RedirectNotAuthenticated';

const MyDevices = () => {
  const t = useTranslations();

  return (
    <>
      <RedirectNotAuthenticated />
      <Box sx={{ pt: 2 }}>
        <GradientHeader>
          <WelcomeUser />
          <Link href="/my-devices/add-device">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ bgcolor: 'secondary.main' }}
            >
              {t('addNewSmartgrow')}
            </Button>
          </Link>
        </GradientHeader>

        <Devices />
      </Box>
    </>
  );
};

export default MyDevices;
