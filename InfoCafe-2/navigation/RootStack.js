import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../InfoCafe-2/screens/SplashScreen';
import IntroScreen from '../../InfoCafe-2/screens/IntroScreen';
import LoginScreen from '../../InfoCafe-2/screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      {/*<Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="PrincipalView" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}