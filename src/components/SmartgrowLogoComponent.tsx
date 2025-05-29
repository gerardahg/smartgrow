import Image from 'next/image';
import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SmartgrowLogoComponent = () => {
  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      <Image
        src={'/images/plant.png'}
        alt={'Smartgrow logo'}
        width={50}
        height={50}
      />
      <Typography variant="h5" fontWeight={600} sx={{ color: 'white' }}>
        SmartGrow
      </Typography>
    </Stack>
  );
};

export default SmartgrowLogoComponent;
