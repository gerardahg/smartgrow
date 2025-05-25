import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import WelcomeUser from '@/components/application-ui/general-text/WelcomeUserComponent';
import Devices from '@/components/application-ui/plant-component/DevicesGrid';

const MyDevices = () => {
  const t = useTranslations();

  return (
    <Box sx={{ padding: 4 }}>
      <WelcomeUser />
      <Typography variant="h4" sx={{ marginTop: 1, marginBottom: 2 }}>
        {t('myDevices')}
      </Typography>
      <Link href="/my-devices/add-device">
        <Button variant="contained" startIcon={<AddIcon />}>
          {t('addDevice')}
        </Button>
      </Link>
      <Box sx={{ marginTop: 4 }}>
        <Devices />
      </Box>
    </Box>
  );
};

export default MyDevices;
