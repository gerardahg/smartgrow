'use client';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Theme from '@/theme/getTheme';
import AuthProvider from './auth/Provider';
import { store, persistor } from '../store/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Theme>{children}</Theme>
        </AuthProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
