import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import AuthProvider from './providers/AuthProvider';
import PushNotificationManager from './push_notifications/PushNotificationManager';

import Routes from './routes.js';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <PushNotificationManager>
          <Routes />
        </PushNotificationManager>
      </PaperProvider>
    </AuthProvider>
  );
}
