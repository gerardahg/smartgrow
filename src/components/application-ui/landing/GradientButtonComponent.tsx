'use client';
import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  text: string;
  icon?: React.ReactNode;
}

const GradientButtonComponent = ({ text, icon }: Props) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={(theme) => ({
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        px: 6,
        py: 2,
        fontSize: '1.1rem',
        boxShadow: `0 0 32px ${theme.palette.primary.main}`,
      })}
      endIcon={icon}
    >
      {text}
    </Button>
  );
};

export default GradientButtonComponent;
