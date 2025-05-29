import Link from 'next/link';

import React from 'react';
import { useTranslations } from 'next-intl';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';

import IconInput from '@/components/application-ui/forms/IconInputComponent';
import CreateDevice from '@/components/application-ui/forms/CreateDeviceComponent';
import GradientHeader from '@/components/GradientHeader';
import RedirectNotAuthenticated from '@/components/application-ui/general-text/RedirectNotAuthenticated';

const AddDevice = () => {
  const t = useTranslations();
  return (
    <>
      <RedirectNotAuthenticated />
      <Box sx={{ pt: 2 }}>
        <GradientHeader>
          <Typography
            variant="h2"
            sx={{ fontSize: { md: 48, sm: 24, xs: 24 } }}
            gutterBottom
          >
            {t('addNewDevice')}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem' }}>
            {t('configure')}
          </Typography>
        </GradientHeader>
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Card elevation={1}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Smartgrow
              </Typography>
              <IconInput
                Icon={YardOutlinedIcon}
                label={t('deviceName')}
                type="text"
                dispatchType="device/setName"
              />
              <IconInput
                Icon={KeyOutlinedIcon}
                label={t('deviceReference')}
                type="text"
                dispatchType="device/setReference"
              />

              <Divider sx={{ mt: 4, mb: 4 }} />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'flex-end' }}
              >
                <Link href="/my-devices" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    fullWidth
                  >
                    {t('goBack')}
                  </Button>
                </Link>

                <CreateDevice />
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default AddDevice;
