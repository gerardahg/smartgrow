'use client';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import AuthProvider from './auth/Provider';
import { store } from '../store/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <CssBaseline />
        {children}
      </AuthProvider>
    </ReduxProvider>
  );
}
