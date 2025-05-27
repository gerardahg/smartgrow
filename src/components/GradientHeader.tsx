'use client';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface GradientHeaderProps {
  children: ReactNode;
}

const GradientHeader = ({ children }: GradientHeaderProps) => {
  return (
    <Paper
      elevation={1}
      sx={(theme) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        p: 4,
        mb: 4,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          transform: 'translateX(30%) translateY(-30%)',
        },
      })}
    >
      {children}
    </Paper>
  );
};

export default GradientHeader;
