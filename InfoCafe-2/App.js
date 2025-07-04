import React from 'react';
import StackHome from '../InfoCafe-2/navigation/InicioStack'
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from '../InfoCafe-2/store/store';
import RootNavigator from '../InfoCafe-2/navigation/RootStack';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://e7ee172dd6d009ce252b3d34ecdde13b@o4509612038291456.ingest.us.sentry.io/4509612097077248',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function App() {
  return (

    <StoreProvider>
      <NavigationContainer>
         <RootNavigator/>
      </NavigationContainer>
    </StoreProvider>
  );
});