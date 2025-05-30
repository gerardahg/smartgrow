'use client';
import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { RootState } from '@/store/store';
import Palette from './palette';
import styleOverrides from './styleOverride';

interface Props {
  children: ReactNode;
}
const GetTheme = ({ children }: Props) => {
  const { mode, theme, border } = useSelector(
    (state: RootState) => state.theme
  );
  const baseTheme = useMemo(
    () =>
      createTheme({
        palette: Palette(mode, theme),
        typography: {
          fontFamily: `Circular, Verdana, Arial, sans-serif`,
        },
        components: styleOverrides(border),
      }),
    [mode, theme, border]
  );

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GetTheme;
