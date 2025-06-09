import Image from 'next/image';
import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

interface Props {
  src: string;
  alt: string;
}

//Componente que contiene una imagen, al darle click al componente expande la imagén para verla en pantalla completa
const ImageComponent = ({ src, alt }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Paper
        sx={({ palette }) => ({
          p: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 0 16px ${palette.primary.main}`,
          },
          cursor: 'pointer',
        })}
        elevation={2}
        onClick={() => setOpen(true)}
      >
        <Image src={src} height={3000} width={3000} alt={alt} />
      </Paper>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          p: 2,
          minWidth: '90dvw',
          minHeight: '90dvh',
        }}
      >
        <Box sx={{ position: 'relative', minWidth: '100%', minHeight: '100%' }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
        </Box>
      </Modal>
    </>
  );
};

export default ImageComponent;
