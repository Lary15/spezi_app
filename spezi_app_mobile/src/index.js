import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import AuthProvider from './providers/AuthProvider';

import Routes from './routes.js';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </AuthProvider>
  );
}
