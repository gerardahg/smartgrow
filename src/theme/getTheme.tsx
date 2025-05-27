'use client';
import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Roboto } from 'next/font/google';

import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { RootState } from '@/store/store';
import Palette from './palette';
import styleOverrides from './styleOverride';

const roboto = Roboto({
  subsets: ['latin'],
});

interface Props {
  children: ReactNode;
}
const GetTheme = ({ children }: Props) => {
  const { mode, theme, border } = useSelector(
    (state: RootState) => state.theme
  );
  const baseTheme = createTheme({
    palette: Palette(mode, theme),
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });
  baseTheme.components = useMemo(() => styleOverrides(border), [border]);

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GetTheme;
