import Link from 'next/link';

import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconInput from '@/components/application-ui/forms/IconInputComponent';
import CreateDevice from '@/components/application-ui/forms/CreateDeviceComponent';

const AddDevice = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
        }}
      >
        <CardContent>
          <Typography
            variant="h2"
            sx={{ fontSize: { md: 48, sm: 24, xs: 24 }, marginBottom: 2 }}
          >
            Add a new Device
          </Typography>
          <IconInput
            Icon={YardOutlinedIcon}
            label="Device Name"
            type="text"
            dispatchType="device/setName"
          />
          <IconInput
            Icon={KeyOutlinedIcon}
            label="Device reference"
            type="text"
            dispatchType="device/setReference"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: 4,
            }}
          >
            <CreateDevice />
            <Link href="/my-devices">
              <Button>Go back</Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddDevice;
